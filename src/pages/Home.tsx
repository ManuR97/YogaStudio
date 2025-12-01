import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
              Finde deine <span className="text-pink-400">innere Balance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Entdecke die transformative Kraft des Yoga in unserem Studio. 
              Für Anfänger und Fortgeschrittene.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking" className="bg-pink-400 text-white px-8 py-3 rounded-full hover:bg-pink-500 transition">
                Jetzt buchen
              </Link>
              <Link to="/courses" className="border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-full hover:bg-pink-50 transition">
                Kurse entdecken
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl h-96 flex items-center justify-center">
              {/* Hier dein Bild einfügen: */}
              {/* <img src="/dein-bild.jpg" alt="Yoga" className="rounded-3xl h-96 w-full object-cover" /> */}
              <p className="text-gray-500 text-center px-8">Hier kannst du dein Hauptbild einfügen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;