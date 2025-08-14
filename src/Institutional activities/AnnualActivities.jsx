
import React from 'react';
import '../assets/css/AnnualActivities.css';

import বার্ষিক_ক্রীড়া_সাংস্কৃতিক_প্রতিযোগিতা from '../assets/image/বার্ষিক ক্রীড়া ও সাংস্কৃতিক প্রতিযোগিতা.jpg';
import পুরস্কার_বিতরণী_অনুষ্ঠান from '../assets/image/পুরস্কার বিতরণী অনুষ্ঠান.jpg';
import এসএসসি_পরীক্ষার্থীদের_বিদায়_সংবর্ধনা from '../assets/image/এসএসসি পরীক্ষার্থীদের বিদায় সংবর্ধনা.jpeg';
import বার্ষিক_শিক্ষা_সফর from '../assets/image/বার্ষিক শিক্ষা সফর.png';
import নবীন_বরণ_ও_ক্লাস_পার্টি from '../assets/image/নবীন বরণ ও ক্লাস পার্টি.jpg';
import শহীদ_দিবস_ও_আন্তর্জাতিক_মাতৃভাষা_দিবস from '../assets/image/শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস পালন.jpg';
import স্বাধীনতা_ও_জাতীয়_দিবস from '../assets/image/স্বাধীনতা ও জাতীয় দিবস উদযাপন.jpg';

const AnnualActivityCard = ({ title, description, date, category, image }) => {
    return (
        <div className="annual-activity-card">
            <div className="annual-activity-image-wrapper">
                <img src={image} alt={title} className="annual-activity-image" />
            </div>
            <div className="annual-activity-content">
                <h3 className="annual-activity-title">{title}</h3>
                <p className="annual-activity-description">{description}</p>
                <div className="annual-activity-meta">
                    <span className="annual-activity-date">তারিখ: {date}</span>
                    <span className="annual-activity-category">বিভাগ: {category}</span>
                </div>
            </div>
        </div>
    );
};

const AnnualActivities = () => {
    const annualActivitiesData = [
        {
            id: 1,
            title: "বার্ষিক ক্রীড়া ও সাংস্কৃতিক প্রতিযোগিতা",
            description: "প্রতি বছর বৃহৎ পরিসরে আয়োজিত হয় ক্রীড়া ও সাংস্কৃতিক প্রতিযোগিতা, যেখানে শিক্ষার্থীরা তাদের প্রতিভা প্রদর্শন করে।",
            date: "জানুয়ারি-ফেব্রুয়ারি",
            category: "ক্রীড়া ও সংস্কৃতি",
            image: বার্ষিক_ক্রীড়া_সাংস্কৃতিক_প্রতিযোগিতা
        },
        {
            id: 2,
            title: "পুরস্কার বিতরণী অনুষ্ঠান",
            description: "শিক্ষাবর্ষের শেষে কৃতি শিক্ষার্থী ও বিভিন্ন প্রতিযোগিতার বিজয়ীদের পুরস্কার প্রদান করা হয়।",
            date: "মার্চ",
            category: "অনুষ্ঠান",
            image: পুরস্কার_বিতরণী_অনুষ্ঠান
        },
        {
            id: 3,
            title: "এসএসসি পরীক্ষার্থীদের বিদায় সংবর্ধনা",
            description: "এসএসসি পরীক্ষার্থীদের জন্য এক আবেগঘন বিদায় সংবর্ধনা অনুষ্ঠানের আয়োজন করা হয়।",
            date: "ফেব্রুয়ারি",
            category: "অনুষ্ঠান",
            image: এসএসসি_পরীক্ষার্থীদের_বিদায়_সংবর্ধনা
        },
        {
            id: 4,
            title: "বার্ষিক শিক্ষা সফর",
            description: "শিক্ষার্থীদের জ্ঞান ও অভিজ্ঞতা বৃদ্ধির জন্য বিভিন্ন ঐতিহাসিক ও দর্শনীয় স্থানে শিক্ষা সফরের আয়োজন।",
            date: "নভেম্বর-ডিসেম্বর",
            category: "শিক্ষা",
            image: বার্ষিক_শিক্ষা_সফর
        },
        {
            id: 5,
            title: "নবীন বরণ ও ক্লাস পার্টি",
            description: "নতুন শিক্ষার্থীদের বরণ করে নেওয়ার জন্য এবং ক্লাসের শিক্ষার্থীদের মধ্যে সখ্যতা বাড়ানোর জন্য ক্লাস পার্টির আয়োজন।",
            date: "এপ্রিল-মে",
            category: "সামাজিক",
            image: নবীন_বরণ_ও_ক্লাস_পার্টি
        },
        {
            id: 6,
            title: "শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস পালন",
            description: "ভাষা শহীদদের প্রতি শ্রদ্ধা জানাতে এবং আন্তর্জাতিক মাতৃভাষা দিবসের গুরুত্ব তুলে ধরতে বিভিন্ন কর্মসূচী পালন করা হয়।",
            date: "২১ ফেব্রুয়ারি",
            category: "জাতীয় দিবস",
            image: শহীদ_দিবস_ও_আন্তর্জাতিক_মাতৃভাষা_দিবস
        },
        {
            id: 7,
            title: "স্বাধীনতা ও জাতীয় দিবস উদযাপন",
            description: "মহান স্বাধীনতা ও জাতীয় দিবস যথাযোগ্য মর্যাদায় উদযাপন করা হয়।",
            date: "২৬ মার্চ",
            category: "জাতীয় দিবস",
            image: স্বাধীনতা_ও_জাতীয়_দিবস
        }
    ];

    return (
        <div className="annual-activities-page-main">
            <h1 className="page-main-heading">বাৎসরিক কার্যক্রম</h1>
            <div className="annual-activities-grid">
                {annualActivitiesData.map(activity => (
                    <AnnualActivityCard
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

export default AnnualActivities;