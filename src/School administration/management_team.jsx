import React from 'react';
import '../assets/css/management_team.css';

import Member_1 from '../assets/image/Management_1.jpg';
import Member_2 from '../assets/image/Management_2.jpg';
import Member_3 from '../assets/image/Management_3.jpg';

const GoverningBodyMemberCard = ({ name, title, email, phone, joinDate, image }) => {
    return (
        <div className="governing-body-member-card">
            <div className="member-image-wrapper">
                <img src={image} alt={name} className="member-profile-image" />
            </div>
            <div className="member-info-content">
                <h3 className="member-name">{name}</h3>
                <p className="member-title">{title}</p>
                <div className="member-contact-info">
                    <ul className="member-details-list">
                        <li><strong>পদবী:</strong> {title}</li>
                        <li><strong>ইমেইল:</strong> <a href={`mailto:${email}`}>{email}</a></li>
                        <li><strong>ফোন:</strong> <a href={`tel:${phone}`}>{phone}</a></li>
                        <li><strong>যোগদানের তারিখ:</strong> {joinDate}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const GoverningBody = () => {
    const governingBodyData = [
        {
            id: 1,
            name: "জনাব মো: আব্দুল্লাহ আল মামুন",
            title: "সভাপতি",
            email: "mamun.pres@example.com",
            phone: "01711223344",
            joinDate: "01-01-2022",
            image: Member_1
        },
        {
            id: 2,
            name: "জনাব মো: রফিকুল ইসলাম",
            title: "সদস্য সচিব",
            email: "rafiq.sec@example.com",
            phone: "01755667788",
            joinDate: "10-03-2022",
            image: Member_2
        },
        {
            id: 3,
            name: "জনাব মাকসুদুর রহমান",
            title: "অভিভাবক সদস্য",
            email: "maksood.guard@example.com",
            phone: "01811223344",
            joinDate: "15-07-2022",
            image: Member_3
        }
    ];

    return (
        <div className="governing-body-page-main">
            <h1 className="page-main-heading">পরিচালনা পর্ষদ</h1>
            <div className="governing-body-profiles-grid">
                {governingBodyData.map(member => (
                    <GoverningBodyMemberCard
                        key={member.id}
                        name={member.name}
                        title={member.title}
                        email={member.email}
                        phone={member.phone}
                        joinDate={member.joinDate}
                        image={member.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default GoverningBody;