// src/components/Results.js

import React from 'react';
import '../assets/css/Results.css';

const Results = () => {
    // Sample data for recent exam results
    const recentResults = [
        {
            id: 1,
            exam: "বার্ষিক পরীক্ষা - ২০২৩",
            class: "দশম শ্রেণী",
            date: "১৫/০২/২০২৫",
            status: "প্রকাশিত",
            link: "#" // Replace with actual link to result PDF/page
        },
        {
            id: 2,
            exam: "অর্ধ-বার্ষিক পরীক্ষা - ২০২৪",
            class: "নবম শ্রেণী",
            date: "৩০/০৬/২০২৫",
            status: "প্রকাশিত",
            link: "#" // Replace with actual link
        },
        {
            id: 3,
            exam: "প্রথম সাময়িক পরীক্ষা - ২০২৪",
            class: "অষ্টম শ্রেণী",
            date: "১০/০৫/২০২৫",
            status: "প্রকাশিত",
            link: "#" // Replace with actual link
        },
        {
            id: 4,
            exam: "পিএসসি মডেল টেস্ট - ২০২৪",
            class: "পঞ্চম শ্রেণী",
            date: "২৫/০৮/২০২৫",
            status: "প্রকাশিত হবে শীঘ্রই",
            link: null // No link if not yet published
        }
    ];

    // Sample data for other important result links
    const otherResultLinks = [
        {
            id: 1,
            title: "এসএসসি পরীক্ষার ফলাফল",
            description: "শিক্ষা বোর্ডের ওয়েবসাইট থেকে এসএসসি পরীক্ষার ফলাফল দেখুন।",
            url: "http://www.educationboardresults.gov.bd/"
        },
        {
            id: 2,
            title: "জেএসসি পরীক্ষার ফলাফল",
            description: "শিক্ষা বোর্ডের ওয়েবসাইট থেকে জেএসসি পরীক্ষার ফলাফল দেখুন।",
            url: "http://www.educationboardresults.gov.bd/"
        },
        {
            id: 3,
            title: "প্রাথমিক শিক্ষা সমাপনী পরীক্ষার ফলাফল",
            description: "প্রাথমিক শিক্ষা অধিদপ্তরের ওয়েবসাইট থেকে পিএসসি পরীক্ষার ফলাফল দেখুন।",
            url: "http://dpe.gov.bd/"
        },
        {
            id: 4,
            title: "পূর্ববর্তী বছরের ফলাফল আর্কাইভ",
            description: "আমাদের বিদ্যালয়ের পূর্ববর্তী বছরের সকল পরীক্ষার ফলাফল এখানে পাবেন।",
            url: "#" // Replace with a link to your school's result archive
        }
    ];

    return (
        <div className="results-page-main">
            <h1 className="page-main-heading">ফলাফল</h1>
            <div className="results-content-wrapper">
                <p className="results-intro-text">
                    আমাদের বিদ্যালয়ের সকল পরীক্ষার ফলাফল এবং গুরুত্বপূর্ণ বোর্ড পরীক্ষার ফলাফল লিঙ্ক এখানে পাওয়া যাবে। শিক্ষার্থীরা তাদের রোল নম্বর ব্যবহার করে ফলাফল দেখতে পারবে।
                </p>

                {/* --- Latest Results Section --- */}
                <section className="results-section">
                    <h2 className="section-sub-heading">সর্বশেষ ফলাফল</h2>
                    <div className="results-table-container">
                        <table className="results-table">
                            <thead>
                                <tr>
                                    <th>পরীক্ষার নাম</th>
                                    <th>শ্রেণী</th>
                                    <th>প্রকাশের তারিখ</th>
                                    <th>অবস্থা</th>
                                    <th>বিস্তারিত</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentResults.map(result => (
                                    <tr key={result.id}>
                                        <td>{result.exam}</td>
                                        <td>{result.class}</td>
                                        <td>{result.date}</td>
                                        <td className={`status-${result.status === "প্রকাশিত" ? "published" : "pending"}`}>
                                            {result.status}
                                        </td>
                                        <td>
                                            {result.link ? (
                                                <a href={result.link} target="_blank" rel="noopener noreferrer" className="result-link">
                                                    দেখুন
                                                </a>
                                            ) : (
                                                <span className="result-link-disabled">উপলব্ধ নয়</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* --- Other Result Links Section --- */}
                <section className="results-section">
                    <h2 className="section-sub-heading">অন্যান্য ফলাফল লিঙ্ক</h2>
                    <div className="other-links-grid">
                        {otherResultLinks.map(link => (
                            <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.id} className="external-result-card">
                                <h3 className="external-link-title">{link.title}</h3>
                                <p className="external-link-description">{link.description}</p>
                                <span className="external-link-icon">↗</span>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Results;