import React, { useState } from "react";
import Dept_head from "../assets/image/head_t.jpg";

const AboutHead = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredLink(index);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div className="about-head-container">
      <div className="about-section">
        <div className="about-header">
          <p>প্রধান শিক্ষকের বাণী</p>
        </div>

        <div className="about-content">
          <div className="about-image-card">
            <img src={Dept_head} alt="Department Head" className="head-image" />
            <p className="head-name">
              মোঃ জিল্লুর রহমান <br />
              <span className="head-title">প্রধান শিক্ষক</span>
            </p>
          </div>
          <div className="head-speech">
            <p className="speech-text">
              আসসালামু আলাইকুম, শিক্ষাই জাতির মেরুদণ্ড—এই বিশ্বাসকে ধারণ করে
              আমরা লাহিড়ী বহুমুখী উচ্চ বিদ্যালয়ে শিক্ষার্থীদের আলোকিত মানুষ
              হিসেবে গড়ে তোলার নিরলস প্রচেষ্টা চালিয়ে যাচ্ছি। শিক্ষা প্রতিটি
              মানুষের মৌলিক অধিকার, আর এই অধিকার বাস্তবায়নের মধ্য দিয়েই একটি
              জাতি উন্নয়নের শিখরে পৌঁছাতে পারে। বাংলাদেশও সেই লক্ষ্যে এগিয়ে
              চলেছে। আমরা বিশ্বাস করি, যুগোপযোগী ও গুণগত শিক্ষাই একজন
              শিক্ষার্থীকে সৃজনশীল, সচেতন, দায়িত্বশীল এবং দক্ষ নাগরিক হিসেবে গড়ে
              তুলতে পারে। মানব শিশুকে পরিপূর্ণ মানুষে পরিণত করতে হলে প্রয়োজন
              উপযুক্ত শিক্ষাদান পদ্ধতি, দক্ষ ও নিবেদিতপ্রাণ শিক্ষক এবং একটি
              শিক্ষাবান্ধব পরিবেশ।
            </p>
            <p className="speech-text">
              লাহিড়ী বহুমুখী উচ্চ বিদ্যালয়-এ আমরা এই উপাদানগুলোর সুন্দর সমন্বয়
              নিশ্চিত করতে পেরেছি। এখানে রয়েছে সাধারণ শিক্ষার পাশাপাশি কারিগরি ও
              কম্পিউটার শিক্ষার আধুনিক সুবিধা, যা শিক্ষার্থীদের বাস্তব জীবন ও
              কর্মজীবনের উপযোগী করে গড়ে তুলছে। আমাদের কম্পিউটার শিক্ষা ও
              প্রশিক্ষণ কার্যক্রম বিশেষভাবে শক্তিশালী, যা “ডিজিটাল বাংলাদেশ”
              বিনির্মাণে গুরুত্বপূর্ণ ভূমিকা রাখবে বলে আমরা আশাবাদী। সাংস্কৃতিক
              কার্যক্রম, খেলাধুলা, সহ-পাঠ্যক্রমিক চর্চা এবং মূল্যবোধভিত্তিক
              শিক্ষা শিক্ষার্থীদের বহুমুখী বিকাশে সহায়ক ভূমিকা রাখছে।
            </p>
          </div>
        </div>
      </div>

      <div className="important-links-container">
        <div className="links-header">
          <p>গুরুত্বপূর্ণ লিঙ্ক</p>
        </div>
        <ul className="links-list">
          {[
            "জাতীয় শিক্ষা বোর্ড",
            "শিক্ষা মন্ত্রনালয়",
            "শিক্ষক বাতায়ন",
            "মাল্টিমিডিয়া ক্লাসরুম ম্যানেজমেন্ট সিস্টেম",
            "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড",
            "ই-বুক",
            "মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর",
            "দিনাজপুর শিক্ষা বোর্ড",
            "দিনাজপুর শিক্ষা বোর্ড অফিসিয়াল ওয়েবসাইট",
            "জেলা প্রশাসকের কার্যালয়, দিনাজপুর",
            "বিদ্যালয়ের অফিসিয়াল ফেসবুক পেজ",
          ].map((linkText, index) => (
            <li
              key={index}
              className={`link-item ${hoveredLink === index ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#" className="link-text">
                <span className="arrow">→</span> {linkText}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutHead;