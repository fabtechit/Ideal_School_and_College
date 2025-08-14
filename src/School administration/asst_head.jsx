import React from 'react';
import '../assets/css/asst_head.css';
import Asst_head from '../assets/image/asst_head_t.jpg'

const AsstHeadTeacher = () => {
  return (
    <div className="asst-head-teacher-container">
      <div className="asst-head-teacher-profile">
        <div className="asst-head-teacher-image">
          {/* Replace this with an actual image of the assistant head teacher */}
          <img src={Asst_head} alt="Assistant Head Teacher" />
        </div>
        <div className="asst-head-teacher-info">
          <h2>সহকারী প্রধান শিক্ষক</h2>
          <h3>নাম: মোঃ আবুল কালাম আজাদ</h3>
          <p><strong>পদবী:</strong> সহকারী প্রধান শিক্ষক</p>
          <p><strong>ইমেইল:</strong> <a href="mailto:abul.kalam@example.com" style={{color: 'blue'}}>abul.kalam@example.com</a></p>
          <p><strong>ফোন:</strong> <a href="tel:01712345678" style={{color: 'blue'}}>01712345678</a></p>
          <p><strong>যোগদানের তারিখ:</strong> 05-08-2001</p>
        </div>
      </div>

      <div className="asst-head-teacher-speech">
        <h2>সহকারী প্রধান শিক্ষকের বক্তব্য</h2>
        <p>
          শিক্ষাই উন্নতির সোপান—এই মন্ত্রে বিশ্বাসী হয়ে লাহিড়ী বহুমুখী উচ্চ বিদ্যালয়ের সকল শিক্ষক, শিক্ষার্থী এবং অভিভাবককে জানাই আন্তরিক শুভেচ্ছা। একটি আদর্শ শিক্ষা প্রতিষ্ঠান কেবল বই-পুস্তক বা সিলেবাসের মধ্যে সীমাবদ্ধ থাকে না, বরং শিক্ষার্থীদের সুপ্ত প্রতিভা বিকাশে সহায়তা করে এবং তাদের ভবিষ্যৎ জীবনের জন্য প্রস্তুত করে তোলে। আমরা এখানে সেই লক্ষ্যেই কাজ করে যাচ্ছি।
        </p>
        <p>
          লাহিড়ী বহুমুখী উচ্চ বিদ্যালয়-এর একটি অনন্য দিক হলো এর যুগোপযোগী শিক্ষা ব্যবস্থা। আমরা শুধু পাঠদান নয়, বরং শিক্ষার্থীদের নৈতিকতা, শৃঙ্খলাবোধ এবং মানবিক মূল্যবোধের প্রতি শ্রদ্ধাশীল হতে উদ্বুদ্ধ করি। আমাদের সুশৃঙ্খল পরিবেশ, আধুনিক ল্যাব এবং অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে শিক্ষার্থীরা তাদের জ্ঞানকে নতুন মাত্রায় প্রসারিত করার সুযোগ পাচ্ছে। আমি বিশ্বাস করি, সম্মিলিত প্রচেষ্টায় আমরা আমাদের শিক্ষার্থীদের একবিংশ শতাব্দীর চ্যালেঞ্জ মোকাবেলায় যোগ্য করে তুলতে পারব এবং একটি সুন্দর সমাজ গঠনে ভূমিকা রাখব।
        </p>
      </div>
    </div>
  );
};

export default AsstHeadTeacher;