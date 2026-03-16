import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="text-purple-400 w-6 h-6" />
              <span className="text-xl font-light">Dein Yoga Studio</span>
            </div>
            <p className="text-gray-300">
              Deine Oase für Körper, Geist und Seele in Dornbirn.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-purple-400 transition">Home</a>
              <a href="#about" className="block text-gray-300 hover:text-purple-400 transition">Über Mich</a>
              <a href="#courses" className="block text-gray-300 hover:text-purple-400 transition">Kurse</a>
              <a href="#booking" className="block text-gray-300 hover:text-purple-400 transition">Buchen</a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Öffnungszeiten</h4>
            <div className="text-gray-300 space-y-1">
              <p>Mo - Fr: 09:00 - 20:00</p>
              <p>Sa: 09:00 - 14:00</p>
              <p>So: Geschlossen</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dein Yoga Studio. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;