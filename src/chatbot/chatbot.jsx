import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaperPlane,
  FaTrashAlt,
  FaRobot
} from "react-icons/fa";
import "../assets/css/chatbot.css";

// The chatbot's full knowledge base as a single, comprehensive context.
// The AI will use this text to answer all questions.
const chatbotKnowledgeBase = `
হ্যালো! আমি **ঢাকা আইডিয়াল স্কুল অ্যান্ড কলেজ**-এর অফিসিয়াল চ্যাটবট। আমি আপনাকে স্কুল সম্পর্কিত যেকোনো তথ্য দিয়ে সাহায্য করতে প্রস্তুত।

---
**🏫 আমাদের সম্পর্কে:**

* **লক্ষ্য:** আমরা শিক্ষার্থীদের জ্ঞান, মূল্যবোধ ও দক্ষতা বিকাশের মাধ্যমে একজন পূর্ণাঙ্গ মানুষ হিসেবে গড়ে তোলার লক্ষ্য নিয়ে কাজ করি।

* **সুবিধাসমূহ:** আধুনিক শ্রেণিকক্ষ, সমৃদ্ধ গ্রন্থাগার, অত্যাধুনিক কম্পিউটার ল্যাব, বিজ্ঞান ল্যাব, খেলার মাঠ এবং মাল্টিপারপাস অডিটোরিয়াম।

* **শিক্ষা কার্যক্রম:** প্লে-গ্রুপ থেকে দ্বাদশ শ্রেণি পর্যন্ত পাঠদান করা হয়। আমাদের পাঠ্যক্রম জাতীয় শিক্ষাক্রম অনুসরণ করে এবং বিজ্ঞান, মানবিক ও ব্যবসা শিক্ষা শাখায় পাঠদান করা হয়।

* **সহ-পাঠ কার্যক্রম:** বিতর্ক ক্লাব, বিজ্ঞান ক্লাব, আর্ট ও কালচারাল ক্লাব রয়েছে। প্রতি বছর ক্রীড়া প্রতিযোগিতা ও সাংস্কৃতিক অনুষ্ঠানের আয়োজন করা হয়।

* **ভর্তি:** ভর্তি সম্পর্কিত তথ্যের জন্য অনুগ্রহ করে আমাদের প্রশাসনিক অফিসে যোগাযোগ করুন অথবা আমাদের ওয়েবসাইট দেখুন।

* **ঠিকানা:** ১১১/২ কাওলা জামে মসজিদ রোড, আশকোনা (হজ ক্যাম্প সংলগ্ন), দক্ষিণখান, ঢাকা-১২৩০।

* **যোগাযোগ:** 📧 ইমেইল: support@fabtechit.com, fabtechit8@gmail.com
📞 ফোন: +8801892-382840, +8801313-186576
`;

// 🧠 Bangla System Instruction
const systemInstruction = `
আপনি ঢাকা আইডিয়াল স্কুল অ্যান্ড কলেজ-এর অফিসিয়াল চ্যাটবট।

আপনার কাজ শুধুমাত্র উপরোক্ত তথ্যের ভিত্তিতে ব্যবহারকারীর প্রশ্নের উত্তর দেওয়া।
আপনি কখনই বলবেন না আপনি AI বা মেশিন।

যদি কোনো প্রশ্ন আপনার তথ্যের বাইরে হয়, অনুগ্রহ করে নম্রভাবে জানান যে আপনি সে বিষয়ে সাহায্য করতে পারবেন না এবং অফিসিয়াল টিমের সাথে যোগাযোগ করতে বলেন।

আপনার প্রতিটি উত্তর সংক্ষিপ্ত, বন্ধুত্বপূর্ণ, প্রফেশনাল এবং বাংলায় হওয়া আবশ্যক।
`;

const Chatbot = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatbotMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatbotMessages", JSON.stringify(messages));
    } else {
      localStorage.removeItem("chatbotMessages");
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "হ্যালো! আমি ঢাকা আইডিয়াল স্কুল অ্যান্ড কলেজের চ্যাটবট। আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsTyping(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    if (!apiKey) {
      console.error(
        "API Key not found. Please set VITE_GEMINI_API_KEY in your .env file."
      );
      const botMessage = {
        sender: "bot",
        text: "Error: The API key is missing. Please set it up in your .env file to continue.",
      };
      setIsTyping(false);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      return;
    }

    try {
      const chatHistory = [];
      const combinedPrompt = `${systemInstruction}\n\n${chatbotKnowledgeBase}\n\nUser's question: "${userMessage.text}"`;
      chatHistory.push({ role: "user", parts: [{ text: combinedPrompt }] });

      const payload = { contents: chatHistory };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (
        response.ok &&
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        const text = result.candidates[0].content.parts[0].text;
        const botMessage = { sender: "bot", text: text };
        setIsTyping(false);
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        console.error("API Error or Unexpected Response:", result);
        const errorMessage = result.error
          ? `API Error: ${result.error.message}`
          : "An unknown error occurred.";
        const botMessage = {
          sender: "bot",
          text: `I'm sorry, an error occurred with the API. Please try again. Details: ${errorMessage}`,
        };
        setIsTyping(false);
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      console.error("Fetch failed:", error);
      const botMessage = {
        sender: "bot",
        text: "I'm sorry, I couldn't connect to the API. Please check your network connection and try again.",
      };
      setIsTyping(false);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatbotMessages");
  };

  const chatVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { opacity: 0, scale: 0.5, y: 100, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    tap: { scale: 0.95 },
    hover: { scale: 1.05 },
  };

  const messageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const messageItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="chatbot-container">
      <motion.div
        className="chatbot-tooltip-wrapper"
        animate={{ y: isOpen ? 100 : 0 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.span
              className="chatbot-tooltip"
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: 1,
                x: 0,
                rotateY: [0, 15, 0, -15, 0], // 3D rotation effect
                scale: [1, 1.05, 1], // Subtle pulsing
              }}
              exit={{ opacity: 0, x: 20 }}
              transition={{
                delay: 0.5,
                duration: 2,
                repeat: Infinity, // Makes the animation loop forever
                ease: "easeInOut",
              }}
            >
              Hi!✋
            </motion.span>
          )}
        </AnimatePresence>
        <motion.button
          onClick={toggleChat}
          className="chatbot-toggle-buttons"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ scale: 0.5, rotate: isOpen ? -90 : 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: isOpen ? 90 : -90 }}
              transition={{ duration: 0.2 }}
              className="chatbot-icon"
            >
              {isOpen ? "✕" : "💬"}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="chatbot-header">
              <h3><FaRobot /> AI Assistant</h3>
              <div className="chatbot-header-buttons">
                <motion.button
                  onClick={clearChat}
                  className="clear-button"
                  title="চ্যাট মুছুন"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span role="img" aria-label="clear chat">
                    <p style={{ fontSize: "20px", color: "rgba(255, 255, 255, 1)" }}><FaTrashAlt /></p>
                  </span>
                </motion.button>
                <motion.button
                  onClick={toggleChat}
                  className="close-button"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &times;
                </motion.button>
              </div>
            </div>
            <motion.div
              className="chatbot-messages"
              variants={messageContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    className={`message ${msg.sender}`}
                    variants={messageItemVariants}
                  >
                    <div className="message-bubble">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isTyping && (
                <div className="message bot typing-indicator">
                  <div className="message-bubble">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </motion.div>
            <form onSubmit={handleSendMessage} className="chatbot-input-form">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="আপনার বার্তা টাইপ করুন..."
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: "linear-gradient(to right, #6b77f8, #30bbfb, #6b77f8)", color: "rgb(0, 0, 0)" }}
              >
                <p style={{ fontSize: "15px !important" }}><FaPaperPlane /></p>
              </motion.button>
            </form>
            <motion.button
              onClick={toggleChat}
              className="chatbot-bottom-close-button"
              variants={buttonVariants}
              whileTap="tap"
            >
              <span className="bottom-close-icon">✕</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;