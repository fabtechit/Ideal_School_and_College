// src/components/SchoolIntroduction.js

import React from 'react';
import '../assets/css/schoolintroduction.css';

const SchoolIntroduction = () => {
    return (
        <div className="school-intro-page-main">
            <h1 className="page-main-heading">আমাদের বিদ্যালয়ের পরিচিতি</h1>
            <div className="intro-content-wrapper">
                <p className="intro-paragraph">
                    লাহিড়ী বহুমুখী উচ্চ বিদ্যালয় একটি ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান, যা দীর্ঘ বছর ধরে এই অঞ্চলের শিক্ষার মান উন্নয়নে কাজ করে যাচ্ছে। আমরা শিক্ষার্থীদের একটি আধুনিক ও নৈতিক শিক্ষায় শিক্ষিত করে তোলার জন্য প্রতিশ্রুতিবদ্ধ।
                </p>

                {/* --- Mission Section --- */}
                <section className="intro-section">
                    <h2 className="section-sub-heading">মিশন</h2>
                    <p className="section-text">
                        শিক্ষার্থীদের সুপ্ত প্রতিভার বিকাশ ঘটিয়ে তাদের জ্ঞান, দক্ষতা ও নৈতিক মূল্যবোধে সমৃদ্ধ করে তোলা, যাতে তারা দেশের যোগ্য নাগরিক হিসেবে প্রতিষ্ঠিত হতে পারে।
                    </p>
                </section>

                {/* --- Vision Section --- */}
                <section className="intro-section">
                    <h2 className="section-sub-heading">ভিশন</h2>
                    <p className="section-text">
                        একটি আধুনিক, বিজ্ঞানমনস্ক ও মানবিক প্রজন্ম তৈরি করা, যারা একবিংশ শতাব্দীর চ্যালেঞ্জ মোকাবিলায় সক্ষম হবে এবং একটি উন্নত ও সমৃদ্ধ বাংলাদেশ গঠনে ভূমিকা রাখবে।
                    </p>
                </section>

                {/* --- Goals & Objectives Section --- */}
                <section className="intro-section">
                    <h2 className="section-sub-heading">লক্ষ্য ও উদ্দেশ্য</h2>
                    <ul className="section-list">
                        <li>শিক্ষার্থীদের মধ্যে সৃজনশীলতা ও সমালোচনামূলক চিন্তাভাবনার বিকাশ ঘটানো।</li>
                        <li>নৈতিকতা, শৃঙ্খলা ও দেশপ্রেমের মূল্যবোধ জাগ্রত করা।</li>
                        <li>আধুনিক প্রযুক্তির সাথে শিক্ষার্থীদের পরিচিত করা এবং তাদের ডিজিটাল দক্ষতা বৃদ্ধি করা।</li>
                        <li>শারীরিক ও মানসিক স্বাস্থ্যের প্রতি সচেতনতা তৈরি করা।</li>
                        <li>সহ-পাঠ্যক্রমিক কার্যক্রমের মাধ্যমে শিক্ষার্থীদের বহুমুখী প্রতিভা বিকাশে সহায়তা করা।</li>
                    </ul>
                </section>

                {/* --- Facilities Section --- */}
                <section className="intro-section">
                    <h2 className="section-sub-heading">সুবিধাসমূহ</h2>
                    <ul className="section-list">
                        <li>আধুনিক মাল্টিমিডিয়া ক্লাসরুম</li>
                        <li>সুসজ্জিত বিজ্ঞানাগার (পদার্থ, রসায়ন, জীববিজ্ঞান)</li>
                        <li>সুবিশাল কম্পিউটার ল্যাব ও ইন্টারনেট সুবিধা</li>
                        <li>সমৃদ্ধ গ্রন্থাগার</li>
                        <li>বড় খেলার মাঠ ও ইনডোর গেমসের ব্যবস্থা</li>
                        <li>স্বাস্থ্যসম্মত ক্যান্টিন</li>
                        <li>নিরাপদ পানীয় জলের ব্যবস্থা</li>
                    </ul>
                </section>

                {/* --- Special Features Section --- */}
                <section className="intro-section">
                    <h2 className="section-sub-heading">আমাদের বিশেষত্ব</h2>
                    <p className="section-text">
                        লাহিড়ী বহুমুখী উচ্চ বিদ্যালয় শুধু একাডেমিক সাফল্যের উপর জোর দেয় না, বরং শিক্ষার্থীদের সার্বিক বিকাশে বিশ্বাসী। আমাদের অভিজ্ঞ শিক্ষক মণ্ডলী, শিক্ষাবান্ধব পরিবেশ এবং আধুনিক শিক্ষাদান পদ্ধতি শিক্ষার্থীদের জন্য একটি আদর্শ প্ল্যাটফর্ম তৈরি করে। আমরা নিয়মিতভাবে বিভিন্ন সাংস্কৃতিক অনুষ্ঠান, বিতর্ক প্রতিযোগিতা, বিজ্ঞান মেলা এবং ক্রীড়া প্রতিযোগিতার আয়োজন করি, যা শিক্ষার্থীদের সুপ্ত প্রতিভা বিকাশে সহায়ক।
                    </p>
                </section>
            </div>
        </div>
    );
};

export default SchoolIntroduction;