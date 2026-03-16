import React from 'react';
import yogaImage from '../assets/Titelbild.jpeg';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-700 mb-6">
              Finde deine <span className="text-purple-600">innere Balance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Entdecke die transformative Kraft des Yoga in unserem Studio. Für Anfänger und Fortgeschrittene.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition inline-block shadow-md">
                Jetzt buchen
              </a>
              <a href="#courses" className="border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition inline-block">
                Kurse entdecken
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-violet-100 rounded-3xl h-96 flex items-center justify-center shadow-lg overflow-hidden">
              <img src={yogaImage} alt="Yoga Balance" className="rounded-3xl h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;