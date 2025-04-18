



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Import toast styles
import { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Faq from "./components/FAQ/Faq.jsx";
import Registration from "./components/Registration/Registration.jsx";
import Guidline from "./components/Guidlines/Guidline.jsx";
import Timeline from "./components/Timeline/Timeline.jsx";
import FooterContact from "./components/FooterContacts/FooterContact.jsx";
import Whyparticipate from "./components/Why participate/Whyparticipate.jsx";
import Layout from "./components/Layout/Layout.jsx";
import ScrollToHashElement from "./utils/ScrollToHashElement .js"
import ProblemStatement from "./components/Problemstatement/Problemstatement.jsx";
import Terms from "./components/Terms/Terms.jsx";
import ScrollToTop from "./utils/ScrollToTop.js";
import PuffLoader from "react-spinners/PuffLoader";


const App = () => {
  const [loading, setLoading] = useState(true); // Initially loader will show
  const location = useLocation();

  // Handle loader when route changes
  useEffect(() => {
    // Always start the loader when route changes
    setLoading(true);

    // Force loader to stay for 2 seconds before component renders
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Forcefully show the loader for 2 seconds

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <ScrollToHashElement />

      {/* Toast Container for Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Puff Loader */}
      {/* {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <PuffLoader color="#25d8de" size={80} />
        </div>
      )} */}

{loading && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundColor: "#0f223f",  // ✅ Changed background color to solid #0f223f
          }}
        >
          <PuffLoader color="#25d8de" size={80} />
        </div>
      )}



      {/* Render Components Only When Loading is False */}
      {!loading && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/guidline" element={<Guidline />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/problemstatement" element={<ProblemStatement />} />
            <Route path="/terms" element={<Terms />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
