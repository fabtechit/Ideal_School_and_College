import React, { useState, useEffect } from "react";
import "../assets/css/footer.css";
import SchoolLogo from "../assets/image/fab_logos.png";

import Chatbot from '../chatbot/chatbot';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <footer className="main-footer">
      <div className="container footer-container">
        {/* Left Column: Logo & Current Time */}
        <div className="footer-column footer-left">
          <a href="/">
            <img src={SchoolLogo} alt="School Logo" className="footer-logo" />
          </a>
          <div className="current-time">
            <p>বর্তমান সময়:</p>
            <p className="time-display">{formatTime(currentTime)}</p>
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="footer-column footer-middle">
          <h3>গুরুত্বপূর্ণ লিঙ্ক</h3>
          <ul>
            <li>
              <a href="https://shed.gov.bd" target="_blank" rel="noopener noreferrer">
                শিক্ষা মন্ত্রণালয়
              </a>
            </li>
            <li>
              <a href="https://dshe.portal.gov.bd/site/moedu_office_order/26386295-ec46-4333-a3e1-4f0f7d497cd7" target="_blank" rel="noopener noreferrer">
                মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর
              </a>
            </li>
            <li>
              <a href="https://www.narayanganj.gov.bd/bn/site/view/officer_list" target="_blank" rel="noopener noreferrer">
                জেলা প্রশাসন, নারায়ণগঞ্জ
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer">
                অনলাইন ভর্তি প্রক্রিয়া
              </a>
            </li>
            <li>
              <a href="https://fabtechit.com/">
                প্রাতিষ্ঠানিক ওয়েবসাইট
              </a>
            </li>
            <li>
              <a href="https://apps.terbb.gov.bd/teacher-app-login" target="_blank" rel="noopener noreferrer">
                শিক্ষক ও কর্মচারী পোর্টাল
              </a>
            </li>
          </ul>
        </div>

        {/* New Column: School Timings Table */}
        <div className="footer-column footer-timings">
          <h3>স্কুলের সময়সূচী</h3>
          <table className="school-timings-table">
            <thead>
              <tr>
                <th>দিন</th>
                <th>শুরুর সময়</th>
                <th>শেষ সময়</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>শনিবার - বুধবার</td>
                <td>৯:০০ AM</td>
                <td>৪:০০ PM</td>
              </tr>
              <tr>
                <td>বৃহস্পতিবার</td>
                <td>৯:০০ AM</td>
                <td>২:০০ PM</td>
              </tr>
              <tr>
                <td>শুক্রবার</td>
                <td colSpan="2">বন্ধ</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Column: Contact Info & Socials */}
        <div className="footer-column footer-right">
          <h3>যোগাযোগ</h3>
          <p className="contact-info-text">বিদ্যালয় সম্পর্কিত তথ্যের জন্য:</p>
          <div className="contact-details">
            <p>ইমেইল: <a href="mailto:support@fabtechit.com">support@fabtechit.com</a></p>
            <p>ফোন: <a href="tel:+8801313186576">+880 1313-186576</a></p>
            <p>ঠিকানা: ঢাকা, বাংলাদেশ</p>
          </div>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61566546872050"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/fabtech-it/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/fabtechit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p className="copyright-text" style={{ textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} &nbsp; ঢাকা আইডিয়াল স্কুল অ্যান্ড কলেজ &nbsp; সকল স্বত্ব সংরক্ষিত। ডিজাইন ও ডেভেলপমেন্ট: <a href="https://fabtechit.com/" target="_blank" rel="noopener noreferrer">FabTech.IT Official</a>
          </p>
          <div className="scroll-to-top">
            {/* <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
              <i className="fas fa-chevron-up"></i>
            </button> */}
          <Chatbot />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;