import React from 'react';
import '../assets/css/Class_activities.css';

import বার্ষিক_বিজ্ঞান_মেলা from '../assets/image/বার্ষিক বিজ্ঞান মেলা.jpg'; 
import বার্ষিক_ক্রীড়া_প্রতিযোগিতা from '../assets/image/বার্ষিক ক্রীড়া প্রতিযোগিতা.jpg';
import সাংস্কৃতিক_অনুষ্ঠান from '../assets/image/সাংস্কৃতিক অনুষ্ঠান.jpg'; 
import বিতর্ক_প্রতিযোগিতা from '../assets/image/বিতর্ক প্রতিযোগিতা.jpg';
import কম্পিউটার_ল্যাব_সেশন from '../assets/image/কম্পিউটার ল্যাব সেশন.jpg';
import পরিষ্কার_পরিচ্ছন্নতা_অভিযান from '../assets/image/পরিষ্কার-পরিচ্ছন্নতা অভিযান.jpg';
import বৃক্ষরোপণ_কর্মসূচি from '../assets/image/বৃক্ষরোপণ কর্মসূচি.jpeg';

const ActivityCard = ({ title, description, date, category, image }) => {
    return (
        <div className="activity-card">
            <div className="activity-image-wrapper">
                <img src={image} alt={title} className="activity-image" />
            </div>
            <div className="activity-content">
                <h3 className="activity-title">{title}</h3>
                <p className="activity-description">{description}</p>
                <div className="activity-meta">
                    <span className="activity-date">তারিখ: {date}</span>
                    <span className="activity-category">বিভাগ: {category}</span>
                </div>
            </div>
        </div>
    );
};

const ClassActivities = () => {
    const activitiesData = [
        {
            id: 1,
            title: "বার্ষিক বিজ্ঞান মেলা",
            description: "শিক্ষার্থীদের উদ্ভাবনী প্রকল্প প্রদর্শনী ও প্রতিযোগিতার আয়োজন।",
            date: "১৫ মার্চ, ২০২৪",
            category: "একাডেমিক",
            image: বার্ষিক_বিজ্ঞান_মেলা
        },
        {
            id: 2,
            title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
            description: "বিভিন্ন ধরনের খেলাধুলা ও দৌড় প্রতিযোগিতার মাধ্যমে শিক্ষার্থীদের শারীরিক বিকাশে সহায়তা।",
            date: "১০ ফেব্রুয়ারি, ২০২৪",
            category: "সহ-পাঠ্যক্রমিক",
            image: বার্ষিক_ক্রীড়া_প্রতিযোগিতা
        },
        {
            id: 3,
            title: "সাংস্কৃতিক অনুষ্ঠান",
            description: "গান, নাচ, আবৃত্তি ও নাটকের মাধ্যমে শিক্ষার্থীদের সুপ্ত প্রতিভা বিকাশ।",
            date: "২১ ফেব্রুয়ারি, ২০২৪",
            category: "সাংস্কৃতিক",
            image: সাংস্কৃতিক_অনুষ্ঠান
        },
        {
            id: 4,
            title: "বিতর্ক প্রতিযোগিতা",
            description: "শিক্ষার্থীদের মধ্যে যুক্তি ও বিশ্লেষণমূলক চিন্তাভাবনার বিকাশ ঘটানো।",
            date: "০৫ এপ্রিল, ২০২৪",
            category: "একাডেমিক",
            image: বিতর্ক_প্রতিযোগিতা
        },
        {
            id: 5,
            title: "কম্পিউটার ল্যাব সেশন",
            description: "আধুনিক কম্পিউটার ল্যাবে শিক্ষার্থীদের ব্যবহারিক কম্পিউটার শিক্ষা প্রদান।",
            date: "প্রতি সপ্তাহে",
            category: "প্রযুক্তিগত",
            image: কম্পিউটার_ল্যাব_সেশন
        },
        {
            id: 6,
            title: "পরিষ্কার-পরিচ্ছন্নতা অভিযান",
            description: "বিদ্যালয় প্রাঙ্গণ ও শ্রেণীকক্ষ পরিষ্কার রাখার জন্য শিক্ষার্থীদের অংশগ্রহণ।",
            date: "৩০ জানুয়ারি, ২০২৪",
            category: "সামাজিক",
            image: পরিষ্কার_পরিচ্ছন্নতা_অভিযান
        },
        {
            id: 7,
            title: "বৃক্ষরোপণ কর্মসূচি",
            description: "পরিবেশ সুরক্ষায় শিক্ষার্থীদের অংশগ্রহণে বৃক্ষরোপণ অভিযান।",
            date: "০৫ জুন, ২০২৪",
            category: "পরিবেশ",
            image: বৃক্ষরোপণ_কর্মসূচি
        }
    ];

    return (
        <div className="class-activities-page-main">
            <h1 className="page-main-heading">ক্লাস কার্যক্রম</h1>
            <div className="activities-grid">
                {activitiesData.map(activity => (
                    <ActivityCard
                        key={activity.id}
                        title={activity.title}
                        description={activity.description}
                        date={activity.date}
                        category={activity.category}
                        image={activity.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default ClassActivities;