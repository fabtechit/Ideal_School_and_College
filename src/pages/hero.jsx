import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import your images
import image1 from '../assets/image/image1.jpg';
import image2 from '../assets/image/image2.jpg';
import image3 from '../assets/image/image3.jpg';
import image4 from '../assets/image/image4.jpg';

const images = [image1, image2, image3, image4];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeDropdown, setActiveDropdown] = useState('notice');
    const [direction, setDirection] = useState(1);

    const slideVariants = {
        hidden: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.9
        }),
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1]
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1]
            }
        })
    };

    // Animation for dropdown items
    const dropdownItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "backOut"
            }
        })
    };

    // Auto slide images
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNextImage = () => {
        setDirection(1);
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrevImage = () => {
        setDirection(-1);
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleToggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const noticeLinks = [
        { text: 'এসএসসি পরীক্ষা ২০২৫ এর ব্যবহারিক পরীক্ষার গ্রুপ ও আসন বিন্যাস', url: '#' },
        { text: 'বিজ্ঞান মেলা প্রস্তুতিমূলক নোটিশ', url: '#' },
        { text: 'ওয়েবসাইট আপডেটের কাজ চলতেছে', url: '#' },
        { text: 'নতুন একাডেমিক ক্যালেন্ডার প্রকাশ', url: '#' },
    ];

    const classRoutineLinks = [
        { text: 'ষষ্ঠ শ্রেণির ক্লাস রুটিন', url: '#' },
        { text: 'সপ্তম শ্রেণির ক্লাস রুটিন', url: '#' },
        { text: 'অষ্টম শ্রেণির ক্লাস রুটিন', url: '#' },
        { text: 'নবম-দশম শ্রেণির ক্লাস রুটিন', url: '#' },
    ];

    const examRoutineLinks = [
        { text: 'বার্ষিক পরীক্ষা ২০২৪', url: '#' },
        { text: 'অর্ধবার্ষিক পরীক্ষা ২০২৪', url: '#' },
        { text: 'এসএসসি পরীক্ষা ২০২৫', url: '#' },
    ];

    const examResultLinks = [
        { text: 'বার্ষিক পরীক্ষার ফলাফল ২০২৪', url: '#' },
        { text: 'অর্ধবার্ষিক পরীক্ষার ফলাফল ২০২৪', url: '#' },
        { text: 'এসএসসি পরীক্ষার ফলাফল ২০২৪', url: '#' },
    ];

    const marqueeText = "👍 বিজ্ঞান মেলা প্রস্তুতি মূলক 👍 এসএসসি পরীক্ষা ২০২৫ এর ব্যবহারিক পরীক্ষার গ্রুপ ও আসন বিন্যাস 👍 বিজ্ঞান মেলা প্রস্তুতি মূলক 👍 এসএসসি পরীক্ষা ২০২৫ এর ব্যবহারিক পরীক্ষার গ্রুপ ও আসন বিন্যাস";

    return (
        <div className="hero-container">
            
            <motion.div 
                className="top-nav"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring', delay: 0.2 }}
            >
                <span className="logo">নোটিশ: </span>
                <div className="marquee-container">
                    <motion.div 
                        className="marquee-content"
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{ 
                            duration: 15, 
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                    >
                        {marqueeText}
                    </motion.div>
                </div>
            </motion.div>

            <div className="main-content">
                {/* Image Slider */}
                <motion.div 
                    className="hero-image-slider"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <AnimatePresence custom={direction} initial={false}>
                        <motion.img
                            key={currentImageIndex}
                            src={images[currentImageIndex]}
                            alt="Slider"
                            className="hero-image"
                            custom={direction}
                            variants={slideVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        />
                    </AnimatePresence>

                    <div className="slider-controls">
                        <motion.button 
                            onClick={handlePrevImage}
                            className="slider-arrow left-arrow"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaChevronLeft />
                        </motion.button>
                        <motion.button 
                            onClick={handleNextImage}
                            className="slider-arrow right-arrow"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaChevronRight />
                        </motion.button>
                    </div>

                    <div className="slider-indicators">
                        {images.map((_, index) => (
                            <motion.button
                                key={index}
                                className={`indicator ${currentImageIndex === index ? 'active' : ''}`}
                                onClick={() => {
                                    setDirection(index > currentImageIndex ? 1 : -1);
                                    setCurrentImageIndex(index);
                                }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Right Sidebar */}
                <motion.div 
                    className="right-sidebar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {/* Notice Board */}
                    <motion.div 
                        className={`notice-board dropdown-container ${activeDropdown === 'notice' ? 'open' : ''}`}
                        whileHover={{ y: -5 }}
                    >
                        <motion.button 
                            className="dropdown-toggle" 
                            onClick={() => handleToggleDropdown('notice')}
                            whileTap={{ scale: 0.98 }}
                        >
                            <h3>নোটিশ বোর্ড</h3>
                            <motion.span 
                                className={`dropdown-icon ${activeDropdown === 'notice' ? 'open' : ''}`}
                                animate={{ rotate: activeDropdown === 'notice' ? 180 : 0 }}
                            >
                                <FaChevronDown />
                            </motion.span>
                        </motion.button>
                        
                        <AnimatePresence>
                            {activeDropdown === 'notice' && (
                                <motion.div
                                    className="dropdown-content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ul>
                                        {noticeLinks.map((link, index) => (
                                            <motion.li
                                                key={index}
                                                className="dropdown-link-item"
                                                custom={index}
                                                variants={dropdownItemVariants}
                                                initial="hidden"
                                                animate="visible"
                                            >
                                                <a href={link.url}>
                                                    <span className="link-bullet">•</span> {link.text}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <motion.div 
                                        className="notice-footer"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <a href="#" className="see-all-btn">
                                            সকল নোটিশ দেখুন <span aria-hidden="true">→</span>
                                        </a>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Sidebar Buttons */}
                    <div className="sidebar-buttons">
                        {/* Class Routine */}
                        <motion.div 
                            className={`dropdown-container ${activeDropdown === 'classRoutine' ? 'open' : ''}`}
                            whileHover={{ y: -3 }}
                        >
                            <motion.button 
                                className={`sidebar-btn dropdown-toggle ${activeDropdown === 'classRoutine' ? 'active' : ''}`} 
                                onClick={() => handleToggleDropdown('classRoutine')}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>ক্লাস রুটিন</span>
                                <motion.span 
                                    className={`dropdown-icon ${activeDropdown === 'classRoutine' ? 'open' : ''}`}
                                    animate={{ rotate: activeDropdown === 'classRoutine' ? 180 : 0 }}
                                >
                                    <FaChevronDown />
                                </motion.span>
                            </motion.button>
                            
                            <AnimatePresence>
                                {activeDropdown === 'classRoutine' && (
                                    <motion.div
                                        className="dropdown-content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ul>
                                            {classRoutineLinks.map((link, index) => (
                                                <motion.li
                                                    key={index}
                                                    custom={index}
                                                    variants={dropdownItemVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                >
                                                    <a href={link.url}>
                                                        <span className="link-bullet">›</span> {link.text}
                                                    </a>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Exam Routine */}
                        <motion.div 
                            className={`dropdown-container ${activeDropdown === 'examRoutine' ? 'open' : ''}`}
                            whileHover={{ y: -3 }}
                        >
                            <motion.button 
                                className={`sidebar-btn dropdown-toggle ${activeDropdown === 'examRoutine' ? 'active' : ''}`} 
                                onClick={() => handleToggleDropdown('examRoutine')}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>পরীক্ষার রুটিন</span>
                                <motion.span 
                                    className={`dropdown-icon ${activeDropdown === 'examRoutine' ? 'open' : ''}`}
                                    animate={{ rotate: activeDropdown === 'examRoutine' ? 180 : 0 }}
                                >
                                    <FaChevronDown />
                                </motion.span>
                            </motion.button>
                            
                            <AnimatePresence>
                                {activeDropdown === 'examRoutine' && (
                                    <motion.div
                                        className="dropdown-content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ul>
                                            {examRoutineLinks.map((link, index) => (
                                                <motion.li
                                                    key={index}
                                                    custom={index}
                                                    variants={dropdownItemVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                >
                                                    <a href={link.url}>
                                                        <span className="link-bullet">›</span> {link.text}
                                                    </a>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Exam Result */}
                        <motion.div 
                            className={`dropdown-container ${activeDropdown === 'examResult' ? 'open' : ''}`}
                            whileHover={{ y: -3 }}
                        >
                            <motion.button 
                                className={`sidebar-btn dropdown-toggle ${activeDropdown === 'examResult' ? 'active' : ''}`} 
                                onClick={() => handleToggleDropdown('examResult')}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>পরীক্ষার ফলাফল</span>
                                <motion.span 
                                    className={`dropdown-icon ${activeDropdown === 'examResult' ? 'open' : ''}`}
                                    animate={{ rotate: activeDropdown === 'examResult' ? 180 : 0 }}
                                >
                                    <FaChevronDown />
                                </motion.span>
                            </motion.button>
                            
                            <AnimatePresence>
                                {activeDropdown === 'examResult' && (
                                    <motion.div
                                        className="dropdown-content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ul>
                                            {examResultLinks.map((link, index) => (
                                                <motion.li
                                                    key={index}
                                                    custom={index}
                                                    variants={dropdownItemVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                >
                                                    <a href={link.url}>
                                                        <span className="link-bullet">›</span> {link.text}
                                                    </a>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;