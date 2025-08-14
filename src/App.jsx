import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LLoadingAnimation from "./loader/loader";
import ScrollToTop from "./ScrollTop/ScrollToTop"; // I changed this line

import Navbar from './navbar/navbar';
import Hero from './pages/hero';
import About_head from './pages/about_head';
import Footer from './footer/footer';
import Short_desc from './pages/short_desc';

import Error from './Error_404/error';
import Principle from './School administration/principle';
import Asst_prin from './School administration/asst_head';
import Teachers from './School administration/teachers';
import Officer_Staff from './School administration/Officers_Staff';
import Managment from './School administration/management_team';
import ClassActivities from './Institutional activities/Class_activities';
import AnnualActivities from './Institutional activities/AnnualActivities';
import Curriculum from './Institutional activities/Curriculum';
// Assuming the filename is 'curriclum_pdf_view.js' which exports PDFViewer
import PDFViewer from './Institutional activities/curriclum_pdf_view';
import Results from './Institutional activities/Results';
import SchoolHistory from './school_related/SchoolHistory';
import SchoolIntroduction from './school_related/schoolintroduction';
import RulesAndRegulations from './school_related/RulesAndRegulations';
import Library from './school_related/Library';
import Hostel from './school_related/Hostel';
import Notice from './school_related/notice';
import Gallery from './school_related/gallery';
import Contact from './school_related/Contact';



import './assets/css/navbar.css';
import './assets/css/about_head.css';
import './assets/css/hero.css';
import './assets/css/short_desc.css';


const App = () => {
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  const loadWebsiteContent = async () => {
   try {   
   const randomLoadTime = Math.random() * 2000 + 1000; 
   await new Promise(resolve => setTimeout(resolve, randomLoadTime));
   console.log("Website content loaded successfully!");
   } catch (error) {
   console.error("Error loading website content:", error);
   } finally {
   setIsLoading(false);
   }
  };

  loadWebsiteContent();
 }, []);

 if (isLoading) {
  return <LLoadingAnimation />;
 }

 return (
  <Router>
   <ScrollToTop /> {/* I also changed this line to use the correct component name */}
   <Navbar />
   <Routes>
    <Route
     path="/"
     element={
      <>
       <Hero />
       <About_head />
       <Short_desc />
       
      </>
     }
    />
    <Route path="/head-teacher" element={<Principle />} />
    <Route path="/assistant-head-teacher" element={<Asst_prin />} />
    <Route path="/teachers" element={<Teachers />} />
    <Route path="/officers-and-staff" element={<Officer_Staff />} />
    <Route path="/governing-body" element={<Managment />} />
    <Route path="/class-activities" element={<ClassActivities />} />
    <Route path="/annual-activities" element={<AnnualActivities />} />
    <Route path="/curriculum" element={<Curriculum />} />
    <Route path="/pdf/:subjectId" element={<PDFViewer />} />
    <Route path="/results" element={<Results />} />
    <Route path="/school-history" element={<SchoolHistory />} />
    <Route path="/school-introduction" element={<SchoolIntroduction />} />
    <Route path="/rules-and-regulations" element={<RulesAndRegulations />} />
    <Route path="/library" element={<Library />} />
    <Route path="/hostel" element={<Hostel />} />
    <Route path="/notice" element={<Notice />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/contact" element={<Contact />} />

    <Route path="*" element={<Error />} />
   </Routes>
   <Footer />
  </Router>
 );
};

export default App;
