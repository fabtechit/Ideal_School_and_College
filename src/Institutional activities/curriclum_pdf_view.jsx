import React from "react";
import { useParams } from "react-router-dom";
import "../assets/css/PDFViewer.css";

import bangla_1 from "../assets/pdf/Linkedin_Script.pdf";

const books = {
 // First Grade (প্রথম শ্রেণী)
 "বাংলা-প্রথম": bangla_1,
 "ইংরেজি-প্রথম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "গণিত-প্রথম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "প্রাথমিক-বিজ্ঞান-প্রথম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "বাংলাদেশ-ও-বিশ্ব-পরিচয়-প্রথম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইসলাম-ও-নৈতিক-শিক্ষা-হিন্দু-ধর্ম-ও-নৈতিক-শিক্ষা-প্রথম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "শারীরিক-শিক্ষা-ও-স্বাস্থ্য-প্রথম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "চারু-ও-কারুকলা-প্রথম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",

 // Second Grade (দ্বিতীয় শ্রেণী)
 "বাংলা-দ্বিতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইংরেজি-দ্বিতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "গণিত-দ্বিতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "প্রাথমিক-বিজ্ঞান-দ্বিতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "বাংলাদেশ-ও-বিশ্ব-পরিচয়-দ্বিতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইসলাম-ও-নৈতিক-শিক্ষা-হিন্দু-ধর্ম-ও-নৈতিক-শিক্ষা-দ্বিতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "শারীরিক-শিক্ষা-ও-স্বাস্থ্য-দ্বিতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "চারু-ও-কারুকলা-দ্বিতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",

 // Third Grade (তৃতীয় শ্রেণী)
 "বাংলা-তৃতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইংরেজি-তৃতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "গণিত-তৃতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "প্রাথমিক-বিজ্ঞান-তৃতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "বাংলাদেশ-ও-বিশ্ব-পরিচয়-তৃতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইসলাম-ও-নৈতিক-শিক্ষা-হিন্দু-ধর্ম-ও-নৈতিক-শিক্ষা-তৃতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "শারীরিক-শিক্ষা-ও-স্বাস্থ্য-তৃতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "চারু-ও-কারুকলা-তৃতীয়":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",

 // Fourth Grade (চতুর্থ শ্রেণী)
 "বাংলা-চতুর্থ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইংরেজি-চতুর্থ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "গণিত-চতুর্থ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "প্রাথমিক-বিজ্ঞান-চতুর্থ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "বাংলাদেশ-ও-বিশ্ব-পরিচয়-চতুর্থ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইসলাম-ও-নৈতিক-শিক্ষা-হিন্দু-ধর্ম-ও-নৈতিক-শিক্ষা-চতুর্থ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "শারীরিক-শিক্ষা-ও-স্বাস্থ্য-চতুর্থ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "চারু-ও-কারুকলা-চতুর্থ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",

 // Fifth Grade (পঞ্চম শ্রেণী)
 "বাংলা-পঞ্চম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইংরেজি-পঞ্চম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "গণিত-পঞ্চম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "প্রাথমিক-বিজ্ঞান-পঞ্চম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "বাংলাদেশ-ও-বিশ্ব-পরিচয়-পঞ্চম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইসলাম-ও-নৈতিক-শিক্ষা-হিন্দু-ধর্ম-ও-নৈতিক-শিক্ষা-পঞ্চম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "শারীরিক-শিক্ষা-ও-স্বাস্থ্য-পঞ্চম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "চারু-ও-কারুকলা-পঞ্চম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",

 // Sixth Grade (ষষ্ঠ শ্রেণী)
 "বাংলা-ষষ্ঠ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইংরেজি-ষষ্ঠ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "গণিত-ষষ্ঠ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "বিজ্ঞান-ষষ্ঠ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "বাংলাদেশ-ও-বিশ্ব-পরিচয়-ষষ্ঠ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "তথ্য-ও-যোগাযোগ-প্রযুক্তি-ষষ্ঠ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "কৃষি-শিক্ষা-গার্হস্থ্য-বিজ্ঞান-ষষ্ঠ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "শারীরিক-শিক্ষা-ও-স্বাস্থ্য-ষষ্ঠ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইসলাম-ও-নৈতিক-শিক্ষা-হিন্দু-ধর্ম-ও-নৈতিক-শিক্ষা-ষষ্ঠ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "কর্ম-ও-জীবনমুখী-শিক্ষা-ষষ্ঠ":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",

 // Seventh Grade (সপ্তম শ্রেণী)
 "বাংলা-সপ্তম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইংরেজি-সপ্তম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "গণিত-সপ্তম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "বিজ্ঞান-সপ্তম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "বাংলাদেশ-ও-বিশ্ব-পরিচয়-সপ্তম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "তথ্য-ও-যোগাযোগ-প্রযুক্তি-সপ্তম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "কৃষি-শিক্ষা-গার্হস্থ্য-বিজ্ঞান-সপ্তম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "শারীরিক-শিক্ষা-ও-স্বাস্থ্য-সপ্তম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইসলাম-ও-নৈতিক-শিক্ষা-হিন্দু-ধর্ম-ও-নৈতিক-শিক্ষা-সপ্তম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "কর্ম-ও-জীবনমুখী-শিক্ষা-সপ্তম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",

 // Eighth Grade (অষ্টম শ্রেণী)
 "বাংলা-অষ্টম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইংরেজি-অষ্টম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "গণিত-অষ্টম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "বিজ্ঞান-অষ্টম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "বাংলাদেশ-ও-বিশ্ব-পরিচয়-অষ্টম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "তথ্য-ও-যোগাযোগ-প্রযুক্তি-অষ্টম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "কৃষি-শিক্ষা-গার্হস্থ্য-বিজ্ঞান-অষ্টম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "শারীরিক-শিক্ষা-ও-স্বাস্থ্য-অষ্টম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইসলাম-ও-নৈতিক-শিক্ষা-হিন্দু-ধর্ম-ও-নৈতিক-শিক্ষা-অষ্টম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "কর্ম-ও-জীবনমুখী-শিক্ষা-অষ্টম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",

 // Ninth and Tenth Grade (নবম ও দশম শ্রেণী)
 "বাংলা-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইংরেজি-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "গণিত-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "সাধারণ-বিজ্ঞান-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ইসলাম-ও-নৈতিক-শিক্ষা-হিন্দু-ধর্ম-ও-নৈতিক-শিক্ষা-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "বাংলাদেশ-ও-বিশ্ব-পরিচয়-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "পদার্থ-বিজ্ঞান-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "রসায়ন-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "জীব-বিজ্ঞান-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "উচ্চতর-গণিত-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ফিন্যান্স-ও-ব্যাংকিং-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "হিসাববিজ্ঞান-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "ব্যবসায়-উদ্যোগ-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "কৃষি-শিক্ষা-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
 "গার্হস্থ্য-বিজ্ঞান-নবম":
  "https://storage.googleapis.com/satt-test-bucket/d188b64e-7253-48b4-a212-00566378e9f5.pdf",
};

const PDFViewer = () => {
 const { subjectId } = useParams();
 const pdfUrl = books[subjectId];

 if (!pdfUrl) {
  return (
   <div className="pdf-viewer-main">
    <h2>PDF Not Found</h2>
   </div>
  );
 }

 // Clean up the subject name for display
 const displayName = subjectId
  .split("-")
  .slice(0, -1)
  .join(" ")
  .replace(/-/g, " ");

 return (
  <div className="pdf-viewer-main">
   <h1 className="page-main-heading">{displayName}</h1>
   <div className="pdf-container">
    <iframe
     src={pdfUrl}
     width="100%"
     height="800px"
     title="PDF Viewer"
    ></iframe>
   </div>
   <div className="download-option">
    <a href={pdfUrl} download className="download-button">
     Download PDF
    </a>
   </div>
  </div>
 );
};

export default PDFViewer;