// src/components/Contact.js

import React from 'react';
import '../assets/css/contact.css';

const Contact = () => {
    return (
        <div className="contact-page-main">
            <h1 className="page-main-heading">যোগাযোগ</h1>
            <div className="contact-content-wrapper">
                <p className="contact-intro-paragraph">
                    আমাদের বিদ্যালয় সম্পর্কে যেকোনো তথ্য জানতে বা আমাদের সাথে যোগাযোগ করতে, অনুগ্রহ করে নিচের তথ্য ব্যবহার করুন অথবা ফর্মটি পূরণ করে আমাদের কাছে বার্তা পাঠান।
                </p>

                <div className="contact-grid">
                    {/* --- Contact Information Section --- */}
                    <div className="contact-info">
                        <div className="info-item">
                            <h3 className="info-heading">ঠিকানা</h3>
                            <p>RCWC+PV7, Kawlar Main Rd, Dhaka 1230</p>
                        </div>
                        <div className="info-item">
                            <h3 className="info-heading">ফোন</h3>
                            <a href="tel:+8801873523849">+৮৮০ ১৮৭৩৫২৩৮৪৯</a>
                            <a href="tel:+88011313186576">+৮৮০ ১১৩১৩১৮৬৫৭৬</a>
                        </div>
                        <div className="info-item">
                            <h3 className="info-heading">ইমেইল</h3>
                            <a href="mailto:support@fabtechit.com">support@fabtechit.com</a>
                            <a href="mailto:fabtechit8@gmail.com">fabtechit8@gmail.com</a>
                        </div>
                    </div>

                    {/* --- Contact Form Section --- */}
                    <div className="contact-form-container">
                        <h3 className="form-heading">আমাদের কাছে বার্তা পাঠান</h3>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">আপনার নাম</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">আপনার ইমেইল</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">বিষয়</label>
                                <input type="text" id="subject" name="subject" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">আপনার বার্তা</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="submit-button">পাঠান</button>
                        </form>
                    </div>
                </div>

                {/* --- Map Section --- */}
                <div className="map-container">
                    <h2 className="section-sub-heading">আমাদের অবস্থান</h2>
                    <div className="google-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.20567040432!2d90.4195415745812!3d23.846829385069018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700094f80c7%3A0x387310a2dcde21ec!2sFabTech.IT!5e0!3m2!1sen!2sbd!4v1754505208564!5m2!1sen!2sbd"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="School Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;