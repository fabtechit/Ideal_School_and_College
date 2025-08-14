import React from 'react';
import '../assets/css/officers_staff.css';

import Staff_1 from '../assets/image/staff_1.jpg';
import Staff_2 from '../assets/image/staff_2.jpg';
import Staff_3 from '../assets/image/staff_3.jpg';

const StaffProfileCard = ({ name, title, email, phone, joinDate, image }) => {
    return (
        <div className="staff-profile-card">
            <div className="staff-image-wrapper">
                <img src={image} alt={name} className="staff-profile-image" />
            </div>
            <div className="staff-info-content">
                <h3 className="staff-name">{name}</h3>
                <p className="staff-title">{title}</p>
                <div className="staff-contact-info">
                    <ul className="staff-details-list">
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

const OfficersAndStaff = () => {
    const officersAndStaffData = [
        {
            id: 1,
            name: "আব্দুল করিম",
            title: "অফিস সহকারী",
            email: "abdul.karim@example.com",
            phone: "01754545745",
            joinDate: "01-01-2000",
            image: Staff_1
        },
        {
            id: 2,
            name: "আব্দুল গফুর",
            title: "হিসাব রক্ষক",
            email: "abdul.gofar@example.com",
            phone: "01854545745",
            joinDate: "10-03-2005",
            image: Staff_2
        },
        {
            id: 3,
            name: "রহিম উদ্দিন",
            title: "নিরাপত্তা প্রহরী",
            email: "rahim.uddin@example.com",
            phone: "01954545745",
            joinDate: "15-07-2012",
            image: Staff_3
        }
    ];

    return (
        <div className="officers-staff-page-main">
            <h1 className="page-main-heading">কর্মকর্তা ও কর্মচারী</h1>
            <div className="staff-profiles-grid">
                {officersAndStaffData.map(staff => (
                    <StaffProfileCard
                        key={staff.id}
                        name={staff.name}
                        title={staff.title}
                        email={staff.email}
                        phone={staff.phone}
                        joinDate={staff.joinDate}
                        image={staff.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default OfficersAndStaff;