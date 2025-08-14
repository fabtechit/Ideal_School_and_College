import React, { useState } from "react";
import "../assets/css/short_desc.css";

const ShortDesc = () => {
  const toBengali = (num) => String(num).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);

  const monthNames = ["জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
  const dayNames = ["সোম", "মঙ্গল", "বুধ", "বৃহ:", "শুক্র", "শনি", "রবি"];

  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  const getCalendarWeeks = () => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weeks = [];
    let currentWeek = Array(startOffset).fill(null);

    for (let i = 1; i <= daysInMonth; i++) {
      currentWeek.push(i);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      weeks.push(currentWeek);
    }
    return weeks;
  };

  const calendarWeeks = getCalendarWeeks();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const attendanceData = {
    totalStudents: 2067,
    todayPresent: 1000,
    yesterdayPresent: 100,
  };
  const todayAbsent = attendanceData.totalStudents - attendanceData.todayPresent;
  const todayPresentPercentage = (attendanceData.todayPresent / attendanceData.totalStudents) * 100;
  const todayAbsentPercentage = 100 - todayPresentPercentage;

  return (
    <div className="short-desc-container">
      <div className="short-desc-content">
        <section className="short-desc-section history-section animate-fade-in">
          <h3 className="section-title">বিদ্যালয়ের সংক্ষিপ্ত ইতিহাস:</h3>
          <p className="section-text">
            ঠাকুরগাঁও সরকারি বালক উচ্চ বিদ্যালয় বাংলাদেশের শ্রেষ্ঠ বিদ্যালয়গুলোর
            মধ্যে অন্যতম । বিদ্যালয়টি ঠাকুরগাঁও শহরের প্রাণকেন্দ্রে মনোরম
            পরিবেশে অবস্থিত । বিদ্যালয়টি শুরুতে ১৮৭৫ খ্রিস্টাব্দে সেনুয়া-টাঙ্গন
            নদীর মিলন স্থলের সন্নিকটে অবস্থিত জমিদার বাড়ির পাশে এম.ই (মিডিল
            ইংলিশ) স্কুল রূপে অতিবাহনের পর ১৯০৪ খ্রিস্টাব্দে ১মার্চ উক্ত স্থানেই
            শিক্ষালয়টি এইচ.ই. (হায়ার ইংলিশ) স্কুলে পরিণত হয় । জনাব আলী মোহাম্মদ
            সরকার উচ্চ ইংরেজি বিদ্যালয় রূপে প্রতিষ্ঠার সময় থেকে বহু বছর পর্যন্ত
            এর সহকারী সেক্রেটারী পদে সমাসীন ছিলেন । ১৯০৪ সালে স্কুলটিকে
            এইচ.ই.স্কুলে (উচ্চ ইংরেজি বিদ্যালয়ে) রূপান্তরের ক্ষেত্রে রাজশাহী
            বিভাগের তদানীন্তন ইন্সপেক্টর অব স্কুলস Mr. Hall ward বিশেষভাবে উৎসাহ
            দিয়েছিলেন । <br /> <br /> টাঙ্গন নদীর তীরে প্রথম প্রতিষ্ঠিত মাইনর স্কুলটিতে ১টি
            খড়ের আটচালা ঘর ছিল । উচ্চ ইংরেজি বিদ্যালয়ে রূপান্তরের পর স্কুল
            সংলগ্ন জমিদার কাচারির একটি বড় দালান স্কুলের কাজে অনেকদিন ব্যবহৃত হয়
            । উক্ত স্থানে স্থান সংকুলান না হওয়ায় স্কুলটি স্থানান্তরের প্রয়োজন
            দেখা দেয়। স্কুল স্থানান্তরের নিমিত্তে বর্ধমানের কুসুমগ্রাম জমিদারির
            তৎকালীন জমিদার বিবি তৈয়বা খাতুন দশবিঘা সাড়ে পনের কাঠা জমি দান করেন ।
            উক্ত জমির উপর ১৯০৬-১৯০৮ সালের মধ্যে স্কুলের সুদৃশ্য ও সর্ববৃহৎ ভবন
            (বর্তমান প্রশাসনিক ভবন) নির্মিত হয় এবং ১৯০৮ সালের ডিসেম্বর মাসে
            স্কুলটি বর্তমান স্থানে স্থানান্তরিত হয়। পরবর্তীতে ঐ জমিদারীর সুযোগ্য
            উত্তরাধিকারী সৈয়দ বদরুদ্দোজা আরও পঁচিশ বিঘা জমি দান করেন। এরপর
            স্কুলের নতুন হোস্টেল নির্মাণ ও সম্প্রসারণের জন্য আরও এক একর জমি
            ১৯৬০-১৯৬৩সালের মধ্যে হুকুম দখল সূত্রে আয়ত্ব করা হয়। <br /> <br /> ১৯০৪ সালের ১
            মার্চ স্কুলটি (এইচ.ই.স্কুল ) উচ্চ ইংরেজি বিদ্যালয় রূপে প্রতিষ্ঠিত
            হলে এর পরিচালনা পরিষদের প্রথম প্রেসিডেন্ট (সভাপতি) হয়েছিলেন দিনাজপুর
            জেলার তদানীন্তন জেলা ম্যাজিস্ট্রেট জনাব F.J.Jeffries. তিনি স্কুলটি
            উচ্চ বিদ্যালয় রূপে প্রতিষ্ঠার পূর্বে এম.ই স্কুলেরও প্রেসিডেন্ট ছিলেন
            । ১৯০৮ সালের ৩১ আগস্ট পর্যন্ত দিনাজপুরের জেলা ম্যাজিস্ট্রেটগণই
            পদাধিকার বলে এই স্কুলের প্রেসিডেন্ট এবং ১৯০৪ সাল থেকে ১৯১০ সাল
            পর্যন্ত ঠাকুরগাঁওয়ের এস.ডি.ও গণ পদাধিকার বলে সেক্রেটারি ছিলেন । ১৯১০
            সাল থেকে ১৯১৮ সালের ৩১আগষ্ট পর্যন্ত ঠাকুরগাঁওয়ের এস.ডি.ও গণ পদাধিকার
            বলে এ স্কুলের ভাইস প্রেসিডেন্ট মনোনীত হতেন । ১৯১৮ সালের ১ সেপ্টেম্বর
            থেকে ঠাকুরগাঁওয়ের এস.ডি.ও গণ পদাধিকার বলে এ স্কুলের প্রেসিডেন্ট
            মনোনীত হতেন । মাঝে ১৯০৪ সালে এই নিয়মের ব্যতিক্রম ঘটিয়ে জনৈক মহকুমা
            ইন্সপেক্টর অব স্কুল জনাব আব্দুল জব্বার এই স্কুলের সভাপতি হয়েছিলেন ।
            তাঁর পরবর্তীকালে এস.ডি.ও গণ পুনরায় এর সভাপতি মনোনীত হতেন। <br /> <br /> স্কুলটির
            মঞ্জুরির জন্য ১৯০৪ সালে কলিকাতা বিশ্ববিদ্যালয়ে আবেদন করা হলেও ১৯১০
            সালের শেষ দিকে উক্ত বিশ্ববিদ্যালয়ের মঞ্জুরি লাভ করেন । তখন থেকে ১৯৩৫
            খ্রিস্টাব্দের ১৮ এপ্রিল পর্যন্ত ঠাকুরগাঁওয়ের মুন্সেফগণ পদাধিকার বলে
            এ স্কুলের সেক্রেটারি মনোনীত হতেন। প্রদেশিকীকরণের পর বিদ্যালয়ের
            প্রধান শিক্ষকগণ পদাধিকার বলে সেক্রেটারি মনোনীত হতেন । ১৯৮৪ সালের ১
            ফ্রেব্রুয়ারী ঠাকুরগাঁও মহকুমা জেলায় রূপান্তরিত হলে পদাধিকার বলে জেলা
            প্রশাসকগণ সভাপতি এবং স্কুলের প্রধান শিক্ষকগণ সেক্রেটারি মনোনীত হয়ে
            আসছেন ।
          </p>
        </section>

        <section className="short-desc-section calendar-attendance-section animate-slide-in-right">
          <div className="card attendance-container animate-bounce-in-1">
            <div className="card-header dark-bg">
              <h2 className="card-title white-text">Attendance</h2>
            </div>
            <div className="attendance-body">
              <div className="chart-panel">
                <h3 className="chart-title">Student Attendance Today</h3>
                <div className="pie-chart-wrapper">
                  <div
                    className="pie-chart"
                    style={{
                      background: `conic-gradient(${'var(--present-color)'} ${todayPresentPercentage}%, ${'var(--absent-color)'} ${todayPresentPercentage}% 100%)`
                    }}
                  >
                    <div className="pie-overlay">
                      <span className="present-percentage">{toBengali(todayPresentPercentage.toFixed(1))}%</span>
                      <span className="absent-percentage">{toBengali(todayAbsentPercentage.toFixed(1))}%</span>
                    </div>
                  </div>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color legend-present"></span>
                    উপস্থিত
                  </div>
                  <div className="legend-item">
                    <span className="legend-color legend-absent"></span>
                    অনুপস্থিত
                  </div>
                </div>
              </div>

              <div className="stats-panel-wrapper">
                <div className="stats-panel">
                  <div className="stat-row">
                    <div className="stat-label">সর্বমোট শিক্ষার্থী</div>
                    <div className="stat-value">{toBengali(attendanceData.totalStudents)}</div>
                  </div>
                  <div className="stat-row">
                    <div className="stat-label">আজকের উপস্থিতি</div>
                    <div className="stat-value">{toBengali(attendanceData.todayPresent)}</div>
                  </div>
                  <div className="stat-row">
                    <div className="stat-label">আজকের অনুপস্থিতি</div>
                    <div className="stat-value">{toBengali(todayAbsent)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card calendar-container animate-bounce-in-2">
            <div className="card-header dark-bg">
              <h2 className="card-title white-text">দিনপঞ্জি</h2>
              <div className="calendar-navigation">
                <button onClick={handlePrevMonth} className="nav-btn">
                  <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                </button>
                <h3 className="current-month-year white-text">{monthNames[month]} {toBengali(year)}</h3>
                <button onClick={handleNextMonth} className="nav-btn">
                  <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
                </button>
              </div>
            </div>
            
            <div className="calendar-table-wrapper">
              <table>
                <thead>
                  <tr>
                    {dayNames.map((day, index) => (
                      <th key={index}>{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {calendarWeeks.map((week, weekIndex) => (
                    <tr key={weekIndex}>
                      {week.map((day, dayIndex) => (
                        <td
                          key={dayIndex}
                          className={`${day !== null && (dayIndex === 4) ? 'friday-cell' : ''} ${day === today.getDate() && month === today.getMonth() && year === today.getFullYear() ? 'highlight-cell' : ''}`}
                        >
                          {day !== null ? toBengali(day) : ''}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="short-desc-section naming-section animate-fade-in-delay">
          <h3 className="section-title">বিদ্যালয়ের নামকরণ:</h3>
          <p className="section-text">
            ১৮৭৫ সালে প্রতিষ্ঠিত ঠাকুরগাঁওয়ের এম.ই. স্কুলটি ১৯০৪ সালে এইচ.ই.
            স্কুলে উন্নীত হলে স্কুলটির নাম হয় ঠাকুরগাঁও এইচ. ই. স্কুল। এরপর ১৯০৬
            সাল থেকে রাজশাহী বিভাগের তদানীন্তন কমিশনার Mr. Marindine-এর
            নামানুসারে স্কুলটির নামকরণ হয় 'Marindine H.E.School' পরবর্তীকালে এই
            নাম পরিত্যক্ত হয় এবং স্কুলটি 'ঠাকুরগাঁও হাই স্কুল' নামে পরিচিত হয় ।
            ১৯৬৭ সালের ১ আগষ্ট স্কুলটি প্রাদেশিকীকৃত (সরকারি) হলে ইহা 'ঠাকুরগাঁও
            গভঃ হাই স্কুল' অর্থাৎ ঠাকুরগাঁও সরকারি উচ্চ বিদ্যালয় নামে অভিহিত হয়
            । বর্তমানে ইহা 'ঠাকুরগাঁও সরকারী বালক উচ্চ বিদ্যালয়' নামে পরিচিত ।
            ১৯৮৪ সালের ১ ফেব্রুয়ারি ঠাকুরগাঁও মহকুমা জেলায় রূপান্তরিত হলে
            স্থানীয়ভাবে স্কুলটি 'ঠাকুরগাঁও জেলা স্কুল' নামে পরিচিতি পায় । তবে এই
            শেষোক্ত নাম সরকারি গেজেটে অন্তর্ভুক্ত হয়নি।
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShortDesc;