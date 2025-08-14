// src/components/Library.js

import React from 'react';
import '../assets/css/Library.css';

const Library = () => {
    return (
        <div className="library-page-main">
            <h1 className="page-main-heading">আমাদের পাঠাগার</h1>
            <div className="library-content-wrapper">
                <p className="library-intro-paragraph">
                    আমাদের বিদ্যালয়ের পাঠাগারটি শিক্ষার্থীদের জ্ঞান ও বুদ্ধির বিকাশে একটি গুরুত্বপূর্ণ ভূমিকা পালন করে। এটি শুধু বই পড়ার জায়গা নয়, বরং নতুন কিছু শেখা, গবেষণা করা এবং নিজেদের সৃজনশীলতাকে বিকশিত করার একটি কেন্দ্র।
                </p>

                {/* --- Library Overview Section --- */}
                <section className="library-section">
                    <h2 className="section-sub-heading">পাঠাগার পরিচিতি</h2>
                    <p className="section-text">
                        আমাদের পাঠাগারটি একটি শান্ত ও মনোরম পরিবেশে অবস্থিত, যেখানে শিক্ষার্থীরা মনোযোগ সহকারে পড়াশোনা করতে পারে। এখানে বিভিন্ন ধরনের বই এবং সাময়িকীর বিশাল সংগ্রহ রয়েছে, যা শিক্ষার্থীদের একাডেমিক এবং ব্যক্তিগত আগ্রহ পূরণে সহায়ক।
                    </p>
                </section>

                {/* --- Book Collection Section --- */}
                <section className="library-section">
                    <h2 className="section-sub-heading">বইয়ের সংগ্রহ</h2>
                    <ul className="section-list">
                        <li><strong>একাডেমিক বই:</strong> বিভিন্ন শ্রেণীর পাঠ্যবই এবং সহায়ক বই।</li>
                        <li><strong>জ্ঞানমূলক বই:</strong> বিজ্ঞান, ইতিহাস, ভূগোল, সাহিত্য এবং সাধারণ জ্ঞানের উপর বই।</li>
                        <li><strong>গল্প ও উপন্যাস:</strong> দেশি ও বিদেশি লেখকের শিশুতোষ গল্প এবং বিখ্যাত উপন্যাস।</li>
                        <li><strong>রেফারেন্স বই:</strong> অভিধান, বিশ্বকোষ এবং অন্যান্য রেফারেন্স সামগ্রী।</li>
                        <li><strong>সাময়িকী ও ম্যাগাজিন:</strong> নিয়মিতভাবে প্রকাশিত বিভিন্ন সাময়িকী এবং ম্যাগাজিন।</li>
                    </ul>
                </section>

                {/* --- Rules Section --- */}
                <section className="library-section">
                    <h2 className="section-sub-heading">নিয়মাবলী</h2>
                    <ul className="section-list">
                        <li>পাঠাগারে সর্বদা নীরবতা বজায় রাখতে হবে।</li>
                        <li>বই নেওয়ার জন্য অবশ্যই পাঠাগার কার্ড ব্যবহার করতে হবে।</li>
                        <li>একসাথে সর্বোচ্চ দুটি বই নেওয়া যাবে এবং নির্দিষ্ট সময়ের মধ্যে তা ফেরত দিতে হবে।</li>
                        <li>বইয়ের কোনো ক্ষতি করা বা বইয়ে কোনো কিছু লেখা কঠোরভাবে নিষিদ্ধ।</li>
                        <li>পাঠাগারের সকল সম্পদ যত্ন সহকারে ব্যবহার করতে হবে।</li>
                    </ul>
                </section>

                {/* --- Timetable Section --- */}
                <section className="library-section">
                    <h2 className="section-sub-heading">সময়সূচী</h2>
                    <div className="timetable">
                        <p><strong>খোলা থাকার সময়:</strong> প্রতিদিন সকাল ৯:০০ থেকে বিকাল ৪:০০ পর্যন্ত</p>
                        <p><strong>বন্ধ:</strong> শুক্রবার এবং অন্যান্য সরকারি ছুটির দিন</p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Library;