import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="text-pink-400 w-8 h-8" />
            <span className="text-2xl font-light text-gray-800">Dein Yoga Studio</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-400 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-400 transition">Über Mich</Link>
            <Link to="/courses" className="text-gray-700 hover:text-pink-400 transition">Kurse</Link>
            <Link to="/booking" className="text-gray-700 hover:text-pink-400 transition">Buchen</Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-400 transition">Kontakt</Link>
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
              <Link to="/" className="text-gray-700 hover:text-pink-400 transition">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-pink-400 transition">Über Mich</Link>
              <Link to="/courses" className="text-gray-700 hover:text-pink-400 transition">Kurse</Link>
              <Link to="/booking" className="text-gray-700 hover:text-pink-400 transition">Buchen</Link>
              <Link to="/contact" className="text-gray-700 hover:text-pink-400 transition">Kontakt</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;