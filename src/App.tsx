import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Admin from "./pages/Admin";

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check if URL contains /admin, /legal, or /privacy
    const path = window.location.pathname;
    if (path === '/admin') {
      setCurrentPage('admin');
    } else if (path === '/legal' || path === '/impressum') {
      setCurrentPage('legal');
    } else if (path === '/privacy' || path === '/datenschutz') {
      setCurrentPage('privacy');
    } else {
      setCurrentPage('home');
    }

    // Listen for hash changes for anchor navigation
    const handleHashChange = () => {
      setCurrentPage('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Admin Page
  if (currentPage === 'admin') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Admin />
      </div>
    );
  }

  // Legal Page
  if (currentPage === 'legal') {
    return (
      <div className="min-h-screen">
        <Header />
        <Legal />
        <Footer />
      </div>
    );
  }

  // Privacy Page
  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen">
        <Header />
        <Privacy />
        <Footer />
      </div>
    );
  }

  // Main Website
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="courses">
          <Courses />
        </div>
        <div id="booking">
          <Booking />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default App;