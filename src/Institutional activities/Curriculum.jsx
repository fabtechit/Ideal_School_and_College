import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Curriculum.css';

// Data for all classes and their subjects
const curriculumData = {
  'প্রথম শ্রেণী': [
    'বাংলা',
    'ইংরেজি',
    'গণিত',
    'প্রাথমিক বিজ্ঞান',
    'বাংলাদেশ ও বিশ্ব পরিচয়',
    'ইসলাম ও নৈতিক শিক্ষা/হিন্দু ধর্ম ও নৈতিক শিক্ষা',
    'শারীরিক শিক্ষা ও স্বাস্থ্য',
    'চারু ও কারুকলা'
  ],
  'দ্বিতীয় শ্রেণী': [
    'বাংলা',
    'ইংরেজি',
    'গণিত',
    'প্রাথমিক বিজ্ঞান',
    'বাংলাদেশ ও বিশ্ব পরিচয়',
    'ইসলাম ও নৈতিক শিক্ষা/হিন্দু ধর্ম ও নৈতিক শিক্ষা',
    'শারীরিক শিক্ষা ও স্বাস্থ্য',
    'চারু ও কারুকলা'
  ],
  'তৃতীয় শ্রেণী': [
    'বাংলা',
    'ইংরেজি',
    'গণিত',
    'প্রাথমিক বিজ্ঞান',
    'বাংলাদেশ ও বিশ্ব পরিচয়',
    'ইসলাম ও নৈতিক শিক্ষা/হিন্দু ধর্ম ও নৈতিক শিক্ষা',
    'শারীরিক শিক্ষা ও স্বাস্থ্য',
    'চারু ও কারুকলা'
  ],
  'চতুর্থ শ্রেণী': [
    'বাংলা',
    'ইংরেজি',
    'গণিত',
    'প্রাথমিক বিজ্ঞান',
    'বাংলাদেশ ও বিশ্ব পরিচয়',
    'ইসলাম ও নৈতিক শিক্ষা/হিন্দু ধর্ম ও নৈতিক শিক্ষা',
    'শারীরিক শিক্ষা ও স্বাস্থ্য',
    'চারু ও কারুকলা'
  ],
  'পঞ্চম শ্রেণী': [
    'বাংলা',
    'ইংরেজি',
    'গণিত',
    'প্রাথমিক বিজ্ঞান',
    'বাংলাদেশ ও বিশ্ব পরিচয়',
    'ইসলাম ও নৈতিক শিক্ষা/হিন্দু ধর্ম ও নৈতিক শিক্ষা',
    'শারীরিক শিক্ষা ও স্বাস্থ্য',
    'চারু ও কারুকলা'
  ],
  'ষষ্ঠ শ্রেণী': [
    'বাংলা',
    'ইংরেজি',
    'গণিত',
    'বিজ্ঞান',
    'বাংলাদেশ ও বিশ্ব পরিচয়',
    'তথ্য ও যোগাযোগ প্রযুক্তি',
    'কৃষি শিক্ষা/গার্হস্থ্য বিজ্ঞান',
    'শারীরিক শিক্ষা ও স্বাস্থ্য',
    'ইসলাম ও নৈতিক শিক্ষা/হিন্দু ধর্ম ও নৈতিক শিক্ষা',
    'কর্ম ও জীবনমুখী শিক্ষা'
  ],
  'সপ্তম শ্রেণী': [
    'বাংলা',
    'ইংরেজি',
    'গণিত',
    'বিজ্ঞান',
    'বাংলাদেশ ও বিশ্ব পরিচয়',
    'তথ্য ও যোগাযোগ প্রযুক্তি',
    'কৃষি শিক্ষা/গার্হস্থ্য বিজ্ঞান',
    'শারীরিক শিক্ষা ও স্বাস্থ্য',
    'ইসলাম ও নৈতিক শিক্ষা/হিন্দু ধর্ম ও নৈতিক শিক্ষা',
    'কর্ম ও জীবনমুখী শিক্ষা'
  ],
  'অষ্টম শ্রেণী': [
    'বাংলা',
    'ইংরেজি',
    'গণিত',
    'বিজ্ঞান',
    'বাংলাদেশ ও বিশ্ব পরিচয়',
    'তথ্য ও যোগাযোগ প্রযুক্তি',
    'কৃষি শিক্ষা/গার্হস্থ্য বিজ্ঞান',
    'শারীরিক শিক্ষা ও স্বাস্থ্য',
    'ইসলাম ও নৈতিক শিক্ষা/হিন্দু ধর্ম ও নৈতিক শিক্ষা',
    'কর্ম ও জীবনমুখী শিক্ষা'
  ],
  'নবম ও দশম শ্রেণী': [
    'বাংলা',
    'ইংরেজি',
    'গণিত',
    'সাধারণ বিজ্ঞান',
    'ইসলাম ও নৈতিক শিক্ষা/হিন্দু ধর্ম ও নৈতিক শিক্ষা',
    'বাংলাদেশ ও বিশ্ব পরিচয়',
    'পদার্থ বিজ্ঞান',
    'রসায়ন',
    'জীব বিজ্ঞান',
    'উচ্চতর গণিত',
    'ফিন্যান্স ও ব্যাংকিং',
    'হিসাববিজ্ঞান',
    'ব্যবসায় উদ্যোগ',
    'কৃষি শিক্ষা',
    'গার্হস্থ্য বিজ্ঞান'
  ]
};

const Curriculum = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleClassClick = (className) => {
    setSelectedClass(selectedClass === className ? null : className);
  };

  const getSubjectId = (subject, className) => {
    // Extracts the first word (class name) and replaces the Bengali number with a word
    let classSuffix = className.split(' ')[0].toLowerCase();
        // Handle special cases for class names
        if (classSuffix === 'প্রথম') classSuffix = 'প্রথম';
        if (classSuffix === 'দ্বিতীয়') classSuffix = 'দ্বিতীয়';
        // Add more as needed
        
    const subjectName = subject.replace(/ /g, '-').replace(/\//g, '-').toLowerCase(); // Cleans subject name for URL
    const id = `${subjectName}-${classSuffix}`;
    return id;
  };

  return (
    <div className="curriculum-page-main">
      <h1 className="page-main-heading">আমাদের পাঠ্যক্রম</h1>
      <div className="curriculum-content-wrapper">
        <p className="curriculum-intro">
          আমাদের বিদ্যালয়ে শিক্ষার্থীদের মেধা ও প্রতিভার পরিপূর্ণ বিকাশে জাতীয় শিক্ষানীতি ও শিক্ষা বোর্ডের নির্দেশনা অনুযায়ী পাঠ্যক্রম অনুসরণ করা হয়। নিচে আমাদের বিভিন্ন শ্রেণীর পাঠ্যক্রমের একটি সংক্ষিপ্ত বিবরণ দেওয়া হলো।
        </p>

        <div className="class-list">
          {Object.keys(curriculumData).map((className, index) => (
            <div key={index} className="class-item">
              <h3
                className="class-title"
                onClick={() => handleClassClick(className)}
              >
                {className}
                <span className={`arrow ${selectedClass === className ? 'up' : 'down'}`}>▼</span>
              </h3>
              {selectedClass === className && (
                <ul className="subjects-list">
                  {curriculumData[className].map((subject, subjectIndex) => (
                    <li key={subjectIndex}>
                      <Link to={`/pdf/${getSubjectId(subject, className)}`}>
                        {subject}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;