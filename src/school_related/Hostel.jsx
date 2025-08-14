// src/components/Hostel.js

import React from 'react';
import '../assets/css/Hostel.css';

const Hostel = () => {
    return (
        <div className="hostel-page-main">
            <h1 className="page-main-heading">আমাদের ছাত্রাবাস</h1>
            <div className="hostel-content-wrapper">
                <p className="hostel-intro-paragraph">
                    লাহিড়ী বহুমুখী উচ্চ বিদ্যালয়ের ছাত্রাবাসটি শিক্ষার্থীদের জন্য একটি নিরাপদ, সুরক্ষিত এবং শিক্ষাবান্ধব পরিবেশ নিশ্চিত করে। এটি শুধু থাকার জায়গা নয়, বরং শিক্ষার্থীদের শারীরিক, মানসিক ও একাডেমিক বিকাশের একটি আদর্শ কেন্দ্র।
                </p>

                {/* --- Hostel Overview Section --- */}
                <section className="hostel-section">
                    <h2 className="section-sub-heading">ছাত্রাবাস পরিচিতি</h2>
                    <p className="section-text">
                        আমাদের ছাত্রাবাসটি বিদ্যালয় প্রাঙ্গণের পাশেই অবস্থিত। এখানে শিক্ষার্থীদের জন্য সুশৃঙ্খল পরিবেশ বজায় রাখা হয়। অভিজ্ঞ শিক্ষক ও তত্ত্বাবধায়কগণ সার্বক্ষণিক শিক্ষার্থীদের দেখভাল করেন, যা তাদের পড়াশোনার পাশাপাশি শৃঙ্খলা ও নৈতিকতা বিকাশে সহায়তা করে।
                    </p>
                </section>

                {/* --- Facilities Section --- */}
                <section className="hostel-section">
                    <h2 className="section-sub-heading">সুবিধাসমূহ</h2>
                    <ul className="section-list">
                        <li><strong>থাকার ব্যবস্থা:</strong> প্রত্যেক শিক্ষার্থীর জন্য পৃথক বিছানা, টেবিল ও আলমারি সহ সুশোভিত কক্ষ।</li>
                        <li><strong>খাবার:</strong> স্বাস্থ্যসম্মত ও পুষ্টিকর খাবার (সকালের নাস্তা, দুপুরের ও রাতের খাবার)।</li>
                        <li><strong>নিরাপত্তা:</strong> সার্বক্ষণিক নিরাপত্তার জন্য সিসিটিভি ক্যামেরা ও নিরাপত্তা কর্মী।</li>
                        <li><strong>পড়াশোনার পরিবেশ:</strong> পড়াশোনার জন্য নিরিবিলি কক্ষ এবং নিয়মিত তদারকি।</li>
                        <li><strong>বিনোদন:</strong> ইনডোর গেমসের ব্যবস্থা এবং একটি সুসজ্জিত খেলার মাঠ।</li>
                        <li><strong>চিকিৎসা সেবা:</strong> প্রাথমিক চিকিৎসার সুব্যবস্থা।</li>
                    </ul>
                </section>

                {/* --- Rules Section --- */}
                <section className="hostel-section">
                    <h2 className="section-sub-heading">নিয়মাবলী</h2>
                    <ul className="section-list">
                        <li>ছাত্রাবাসের নির্দিষ্ট সময়সূচী (ঘুম থেকে ওঠা, পড়াশোনা, খাওয়া) মেনে চলতে হবে।</li>
                        <li>পরিষ্কার-পরিচ্ছন্নতা ও স্বাস্থ্যবিধি মেনে চলা বাধ্যতামূলক।</li>
                        <li>সন্ধ্যা ৬টার পর বিনা অনুমতিতে ছাত্রাবাস ত্যাগ করা যাবে না।</li>
                        <li>ছাত্রাবাসে মোবাইল ফোন বা অন্য কোনো ইলেকট্রনিক ডিভাইস ব্যবহার নিষিদ্ধ।</li>
                        <li>ছাত্রাবাসের সম্পত্তি ও আসবাবপত্রের যত্ন নিতে হবে।</li>
                    </ul>
                </section>

                {/* --- Application Process Section --- */}
                <section className="hostel-section">
                    <h2 className="section-sub-heading">আবেদন প্রক্রিয়া</h2>
                    <p className="section-text">
                        ছাত্রাবাসে আসন পেতে আগ্রহী শিক্ষার্থীদের প্রতি বছরের শুরুতে বিদ্যালয় কর্তৃপক্ষের কাছে লিখিত আবেদন করতে হবে। আসন সংখ্যা সীমিত হওয়ায় মেধা ও প্রয়োজন অনুযায়ী আসন বরাদ্দ করা হয়। বিস্তারিত তথ্যের জন্য বিদ্যালয় কার্যালয়ে যোগাযোগ করুন।
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Hostel;