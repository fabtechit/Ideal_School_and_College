// src/components/RulesAndRegulations.js

import React from 'react';
import '../assets/css/RulesAndRegulations.css';

const RulesAndRegulations = () => {
    return (
        <div className="rules-regulations-page-main">
            <h1 className="page-main-heading">বিদ্যালয়ের নিয়ম-কানুন</h1>
            <div className="rules-content-wrapper">
                <p className="rules-intro-paragraph">
                    শিক্ষার্থীদের সার্বিক শৃঙ্খলা, নৈতিকতা ও নিরাপদ শিক্ষাজীবন নিশ্চিত করার জন্য বিদ্যালয়ের কিছু মৌলিক নিয়ম-কানুন রয়েছে। সকল শিক্ষার্থী, অভিভাবক এবং শিক্ষক-কর্মচারীদের এই নিয়মাবলী অনুসরণ করা আবশ্যক।
                </p>

                {/* --- General Rules Section --- */}
                <section className="rules-section">
                    <h2 className="section-sub-heading">সাধারণ নিয়মাবলী</h2>
                    <ul className="rules-list">
                        <li>প্রত্যেক শিক্ষার্থীকে অবশ্যই নিয়মিত ও সময়মতো বিদ্যালয়ে উপস্থিত হতে হবে।</li>
                        <li>শ্রেণিকক্ষে প্রবেশের আগে সারিবদ্ধভাবে দাঁড়াতে হবে এবং শিক্ষকের অনুমতি নিয়ে প্রবেশ করতে হবে।</li>
                        <li>বিদ্যালয়ের নির্ধারিত পোশাক (ইউনিফর্ম) পরিধান করে আসতে হবে এবং পোশাক পরিষ্কার-পরিচ্ছন্ন রাখতে হবে।</li>
                        <li>বিদ্যালয়ের সম্পত্তি, আসবাবপত্র এবং অন্যান্য জিনিসপত্র যত্ন সহকারে ব্যবহার করতে হবে।</li>
                        <li>শ্রেণিকক্ষ, খেলার মাঠ এবং পুরো বিদ্যালয় প্রাঙ্গণ পরিষ্কার-পরিচ্ছন্ন রাখতে সাহায্য করতে হবে।</li>
                    </ul>
                </section>

                {/* --- Conduct and Discipline Section --- */}
                <section className="rules-section">
                    <h2 className="section-sub-heading">আচরণ ও শৃঙ্খলা</h2>
                    <ul className="rules-list">
                        <li>শিক্ষক, কর্মচারী এবং সহপাঠীদের প্রতি সর্বদা শ্রদ্ধাশীল ও বিনয়ী আচরণ করতে হবে।</li>
                        <li>অশালীন ভাষা, মারামারি, বা ঝগড়াঝাঁটি করা কঠোরভাবে নিষিদ্ধ।</li>
                        <li>বিদ্যালয় প্রাঙ্গণে মোবাইল ফোন বা কোনো ইলেকট্রনিক ডিভাইস নিয়ে আসা যাবে না।</li>
                        <li>কোনো ধরনের রাজনৈতিক বা অসামাজিক কার্যকলাপে জড়িত হওয়া যাবে না।</li>
                        <li>ক্লাসের সময় বিনা অনুমতিতে শ্রেণিকক্ষ ত্যাগ করা যাবে না।</li>
                    </ul>
                </section>

                {/* --- Leave and Absence Section --- */}
                <section className="rules-section">
                    <h2 className="section-sub-heading">ছুটি ও অনুপস্থিতি</h2>
                    <ul className="rules-list">
                        <li>কোনো শিক্ষার্থী অসুস্থতাজনিত কারণে অনুপস্থিত থাকলে, বিদ্যালয়ে ফিরে আসার পর অভিভাবকের স্বাক্ষরসহ ছুটির আবেদনপত্র জমা দিতে হবে।</li>
                        <li>বিশেষ প্রয়োজনে ছুটির জন্য পূর্বেই লিখিত আবেদনপত্র জমা দিয়ে প্রধান শিক্ষকের অনুমতি নিতে হবে।</li>
                        <li>বিনা অনুমতিতে ১০ দিনের বেশি অনুপস্থিত থাকলে শিক্ষার্থীর নাম কেটে দেওয়া হবে।</li>
                    </ul>
                </section>

                {/* --- Exam Rules Section --- */}
                <section className="rules-section">
                    <h2 className="section-sub-heading">পরীক্ষা সম্পর্কিত</h2>
                    <ul className="rules-list">
                        <li>পরীক্ষা শুরুর কমপক্ষে ১৫ মিনিট আগে পরীক্ষার কক্ষে উপস্থিত হতে হবে।</li>
                        <li>পরীক্ষার হলে কোনো ধরনের অসদুপায় অবলম্বন করা কঠোরভাবে নিষিদ্ধ।</li>
                        <li>পরীক্ষার কক্ষে কোনো বই, খাতা বা কাগজ নিয়ে প্রবেশ করা যাবে না, যদি না অনুমতি থাকে।</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default RulesAndRegulations;