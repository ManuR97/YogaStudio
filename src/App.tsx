import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-50 to-purple-50">
      <Header />
      <Home />
      <About />
      <Courses />
      <Booking />
      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default App;