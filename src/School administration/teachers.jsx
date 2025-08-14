import React from 'react';
import '../assets/css/teschers.css';

import Teacher_1 from '../assets/image/teacher_1.jpg';
import Teacher_2 from '../assets/image/teacher_2.jpg';
import Teacher_3 from '../assets/image/teacher_3.jpg';
import Teacher_4 from '../assets/image/teacher_4.jpg';
import Teacher_5 from '../assets/image/teacher_5.jpg';

const TeacherProfileCard = ({ name, title, email, phone, joinDate, image }) => {
    return (
        <div className="profile-card">
            <div className="profile-image-wrapper">
                <img src={image} alt={name} className="profile-image" />
            </div>
            <div className="profile-info-content">
                <h3 className="profile-name">{name}</h3>
                <p className="profile-title">{title}</p>
                <div className="profile-contact-info">
                    <ul className="details-list">
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

const Teachers = () => {
    const teachersData = [
        {
            id: 1,
            name: "সামিউল ইসলাম",
            title: "সহকারী শিক্ষক",
            email: "montezur@gmail.com",
            phone: "01719857850",
            joinDate: "12-04-1992",
            image: Teacher_1
        },
        {
            id: 2,
            name: "মোঃ রাসেল আহমেদ",
            title: "সহকারী শিক্ষক",
            email: "rasel@gmail.com",
            phone: "01712521545",
            joinDate: "05-08-2005",
            image: Teacher_2
        },
        {
            id: 3,
            name: "মো. মোবারক আলী",
            title: "সহকারী শিক্ষক",
            email: "mobarak@gmail.com",
            phone: "01712345678",
            joinDate: "15-02-2010",
            image: Teacher_3
        },
        {
            id: 4,
            name: "মোঃ সাইফুল ইসলাম",
            title: "সহকারী শিক্ষক",
            email: "saiful@gmail.com",
            phone: "01798765432",
            joinDate: "20-01-2015",
            image: Teacher_4
        },
        {
            id: 5,
            name: "মোঃ রফিকুল ইসলাম",
            title: "সহকারী শিক্ষক",
            email: "rafik@gmail.com",
            phone: "01765432109",
            joinDate: "25-12-2018",
            image: Teacher_5
        }
    ];

    return (
        <div className="teachers-page-main">
            <h1 className="page-main-heading">আমাদের শিক্ষকবৃন্দ</h1>
            <div className="teachers-profiles-grid">
                {teachersData.map(teacher => (
                    <TeacherProfileCard
                        key={teacher.id}
                        name={teacher.name}
                        title={teacher.title}
                        email={teacher.email}
                        phone={teacher.phone}
                        joinDate={teacher.joinDate}
                        image={teacher.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Teachers;