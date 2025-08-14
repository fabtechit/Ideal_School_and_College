import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import '../assets/css/navbar.css';
import SchoolLogo from '../assets/image/fab_logos.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
    // FIX: Close the menu if the user scrolls on a mobile device
    if (menuOpen && isMobile) {
      setMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  const handleDropdownToggle = (e, dropdownName) => {
    e.preventDefault();
    if (isMobile) {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    }
  };

  const handleMouseEnter = (dropdownName) => {
    if (!isMobile) {
      setActiveDropdown(dropdownName);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen, isMobile]);

  useEffect(() => {
    const onResize = () => {
      const mobileStatus = window.innerWidth <= 992;
      setIsMobile(mobileStatus);
      if (!mobileStatus) {
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const menuWrapperVariants = {
    open: { x: '0%', transition: { type: 'spring', stiffness: 50, damping: 20 } },
    closed: { x: '100%', transition: { type: 'spring', stiffness: 50, damping: 20 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scaleY: 0.95, transition: { duration: 0.2, ease: "easeOut" } },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const mobileDropdownVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const renderMenu = () => (
    <ul className="navbar-menu">
      <li><Link to="/" onClick={handleLinkClick}>প্রধান পাতা</Link></li>
      <li className="has-dropdown" onMouseEnter={() => handleMouseEnter('admin')} onMouseLeave={handleMouseLeave}>
        <a href="#" onClick={(e) => handleDropdownToggle(e, 'admin')} className={activeDropdown === 'admin' ? 'active' : ''} aria-expanded={activeDropdown === 'admin'}>
          স্কুল প্রশাসন <FaChevronDown className={`dropdown-icons ${activeDropdown === 'admin' ? 'open' : ''}`} />
        </a>
        <AnimatePresence>
          {activeDropdown === 'admin' && (
            <motion.ul
              className="dropdown-menu"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={isMobile ? mobileDropdownVariants : dropdownVariants}
            >
              <li><Link to="/head-teacher" onClick={handleLinkClick}>প্রধান শিক্ষক</Link></li>
              <li><Link to="/assistant-head-teacher" onClick={handleLinkClick}>সহকারী প্রধান শিক্ষক</Link></li>
              <li><Link to="/teachers" onClick={handleLinkClick}>শিক্ষকবৃন্দ</Link></li>
              <li><Link to="/officers-and-staff" onClick={handleLinkClick}>কর্মকর্তা ও কর্মচারী</Link></li>
              <li><Link to="/governing-body" onClick={handleLinkClick}>পরিচালনা পর্ষদ</Link></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
      <li className="has-dropdown" onMouseEnter={() => handleMouseEnter('activities')} onMouseLeave={handleMouseLeave}>
        <a href="#" onClick={(e) => handleDropdownToggle(e, 'activities')} className={activeDropdown === 'activities' ? 'active' : ''} aria-expanded={activeDropdown === 'activities'}>
          প্রাতিষ্ঠানিক কার্যক্রম <FaChevronDown className={`dropdown-icons ${activeDropdown === 'activities' ? 'open' : ''}`} />
        </a>
        <AnimatePresence>
          {activeDropdown === 'activities' && (
            <motion.ul
              className="dropdown-menu"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={isMobile ? mobileDropdownVariants : dropdownVariants}
            >
              <li><Link to="/class-activities" onClick={handleLinkClick}>ক্লাস কার্যক্রম</Link></li>
              <li><Link to="/annual-activities" onClick={handleLinkClick}>বার্ষিক কার্যক্রম</Link></li>
              <li><Link to="/curriculum" onClick={handleLinkClick}>পাঠ্যক্রম</Link></li>
              <li><Link to="/results" onClick={handleLinkClick}>ফলাফল</Link></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
      <li className="has-dropdown" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
        <a href="#" onClick={(e) => handleDropdownToggle(e, 'about')} className={activeDropdown === 'about' ? 'active' : ''} aria-expanded={activeDropdown === 'about'}>
          স্কুল সম্পর্কিত <FaChevronDown className={`dropdown-icons ${activeDropdown === 'about' ? 'open' : ''}`} />
        </a>
        <AnimatePresence>
          {activeDropdown === 'about' && (
            <motion.ul
              className="dropdown-menu"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={isMobile ? mobileDropdownVariants : dropdownVariants}
            >
              <li><Link to="/school-history" onClick={handleLinkClick}>স্কুলের ইতিহাস</Link></li>
              <li><Link to="/school-introduction" onClick={handleLinkClick}>স্কুলের পরিচিতি</Link></li>
              <li><Link to="/rules-and-regulations" onClick={handleLinkClick}>নিয়ম নীতি</Link></li>
              <li><Link to="/library" onClick={handleLinkClick}>পাঠাগার</Link></li>
              <li><Link to="/hostel" onClick={handleLinkClick}>ছাত্রাবাস</Link></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
      <li><Link to="/notice" onClick={handleLinkClick}>নোটিশ</Link></li>
      <li><Link to="/gallery" onClick={handleLinkClick}>গ্যালারী</Link></li>
      <li><Link to="/contact" onClick={handleLinkClick}>যোগাযোগ</Link></li>
    </ul>
  );

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container main-nav-container">
          <div className="navbar-header">
            <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
              <motion.img
                src={SchoolLogo}
                alt="School Logo"
                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
              />
            </Link>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          {isMobile ? (
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="navbar-menu-wrapper"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuWrapperVariants}
                >
                  {renderMenu()}
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <div className="navbar-menu-wrapper">
              {renderMenu()}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;