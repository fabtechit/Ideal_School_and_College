// src/components/Notice.js

import React from 'react';
import '../assets/css/notice.css';

const noticesData = [
    {
        id: 1,
        title: "অর্ধ-বার্ষিক পরীক্ষার সময়সূচী",
        date: "১৫ জুলাই, ২০২৪",
        summary: "আগামী ১লা আগস্ট থেকে অর্ধ-বার্ষিক পরীক্ষা শুরু হতে যাচ্ছে। বিস্তারিত সময়সূচী ডাউনলোড করুন।",
        link: "#" // Replace with link to a PDF or details page
    },
    {
        id: 2,
        title: "শিক্ষার্থীদের জন্য নতুন ইউনিফর্ম নির্দেশনা",
        date: "১০ জুলাই, ২০২৪",
        summary: "আগামী শিক্ষাবর্ষ থেকে সকল শিক্ষার্থীর জন্য নতুন ইউনিফর্ম পরিধান বাধ্যতামূলক। বিস্তারিত জানতে ক্লিক করুন।",
        link: "#"
    },
    {
        id: 3,
        title: "বার্ষিক ক্রীড়া প্রতিযোগিতার ফলাফল",
        date: "৩০ জুন, ২০২৪",
        summary: "গত মাসে অনুষ্ঠিত বার্ষিক ক্রীড়া প্রতিযোগিতার চূড়ান্ত ফলাফল প্রকাশিত হয়েছে। বিজয়ীদের অভিনন্দন।",
        link: "#"
    },
    {
        id: 4,
        title: "ছাত্রাবাসে ভর্তির আবেদন সংক্রান্ত নোটিশ",
        date: "২৫ জুন, ২০২৪",
        summary: "নতুন শিক্ষাবর্ষের জন্য ছাত্রাবাসে ভর্তির আবেদন প্রক্রিয়া শুরু হয়েছে। আগ্রহীরা দ্রুত আবেদন করুন।",
        link: "#"
    }
];

const NoticeCard = ({ title, date, summary, link }) => {
    return (
        <div className="notice-card">
            <div className="notice-header">
                <h3 className="notice-title">{title}</h3>
                <span className="notice-date">প্রকাশের তারিখ: {date}</span>
            </div>
            <p className="notice-summary">{summary}</p>
            <a href={link} className="notice-link" target="_blank" rel="noopener noreferrer">
                বিস্তারিত দেখুন
            </a>
        </div>
    );
};

const Notice = () => {
    return (
        <div className="notice-page-main">
            <h1 className="page-main-heading">নোটিশ বোর্ড</h1>
            <div className="notice-list-container">
                {noticesData.map(notice => (
                    <NoticeCard
                        key={notice.id}
                        title={notice.title}
                        date={notice.date}
                        summary={notice.summary}
                        link={notice.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Notice;