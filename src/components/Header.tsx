import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center space-x-2">
            <Sparkles className="text-purple-500 w-8 h-8" />
            <span className="text-xl font-light text-gray-700">Divinesoul Yoga</span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-purple-600 transition">Home</a>
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition">Über Mich</a>
            <a href="#courses" className="text-gray-600 hover:text-purple-600 transition">Kurse</a>
            <a href="#booking" className="text-gray-600 hover:text-purple-600 transition">Buchen</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition">Kontakt</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-600 hover:text-purple-600 transition" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition" onClick={() => setIsMenuOpen(false)}>Über Mich</a>
              <a href="#courses" className="text-gray-600 hover:text-purple-600 transition" onClick={() => setIsMenuOpen(false)}>Kurse</a>
              <a href="#booking" className="text-gray-600 hover:text-purple-600 transition" onClick={() => setIsMenuOpen(false)}>Buchen</a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;