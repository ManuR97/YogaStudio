import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

const App = () => {
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