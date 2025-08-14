import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaTimes, FaComment, FaTrashAlt, FaRobot } from "react-icons/fa";
import "../assets/css/chatbot.css";

// 🧠 Bangla School Knowledge Base
const chatbotKnowledgeBase = `
হ্যালো! আমি **ঢাকা আইডিয়াল স্কুল অ্যান্ড কলেজ**-এর অফিসিয়াল চ্যাটবট। আমি আপনাকে স্কুল সম্পর্কিত যেকোনো তথ্য দিয়ে সাহায্য করতে প্রস্তুত।

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
          text: "হ্যালো! আমি ঢাকা আইডিয়াল স্কুল অ্যান্ড কলেজ-এর অফিসিয়াল চ্যাটবট। আপনি কী জানতে চান?",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      const botMessage = {
        sender: "bot",
        text: "API কী পাওয়া যায়নি। অনুগ্রহ করে .env ফাইলে সেট করুন।",
      };
      setIsTyping(false);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      return;
    }

    try {
      const combinedPrompt = `${systemInstruction}\n\n${chatbotKnowledgeBase}\n\nব্যবহারকারীর প্রশ্ন: "${userMessage.text}"`;

      const payload = {
        contents: [{ role: "user", parts: [{ text: combinedPrompt }] }],
      };

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
        result.candidates[0].content?.parts?.length > 0
      ) {
        const text = result.candidates[0].content.parts[0].text;
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text },
        ]);
      } else {
        const errorMessage =
          result.error?.message || "একটি অজানা ত্রুটি ঘটেছে।";
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: `দুঃখিত! আমি উত্তর দিতে পারছি না। বিস্তারিত: ${errorMessage}`,
          },
        ]);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "নেটওয়ার্ক সমস্যা হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatbotMessages");
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
        duration: 0.3
      }
    },
  };

  const typingVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
        duration: 0.2,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="chatbot-header">
              <div className="chatbot-title-wrapper">
                <FaRobot className="chatbot-icon" />
                <h3 className="chatbot-title">ঢাকা আইডিয়াল স্কুল</h3>
              </div>
              <div className="chatbot-header-buttons">
                <motion.button
                  onClick={clearChat}
                  className="trash-button"
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTrashAlt />
                </motion.button>
                <motion.button
                  onClick={toggleChat}
                  className="close-button"
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>
              </div>
            </div>

            <div className="chatbot-messages-wrapper">
              <motion.div
                className="messages-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence>
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      className={`message ${msg.sender}`}
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      layout
                    >
                      <div className="message-bubble">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      className="message bot typing-indicator"
                      variants={typingVariants}
                      initial="initial"
                      animate="animate"
                    >
                      <div className="message-bubble">
                        <div className="typing-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </motion.div>
            </div>

            <form onSubmit={handleSendMessage} className="chatbot-input-form">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="আপনার প্রশ্ন লিখুন..."
              />
              <motion.button
                type="submit"
                disabled={isTyping}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="chatbot-toggle-button-wrapper"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <motion.button
              onClick={toggleChat}
              className="chatbot-toggle-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaComment />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;