import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Brain } from 'lucide-react';
import logo from '../assets/logo/logo.png';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#F4EEDF] border-b border-[#F4EEDF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold text-[#47624F]">NeuroRehab</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#3F5C4B] hover:text-[#F4A259] transition-colors duration-300 font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-[#3F5C4B] hover:text-[#F4A259] transition-colors">
              <Phone className="h-5 w-5" />
            </button>
            <button className="bg-[#F4A259] text-white px-8 py-3 rounded-lg hover:bg-[#F4A259]/90 transition-colors font-medium text-lg">
              Book Now
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#3F5C4B] hover:text-[#F4A259] transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3F5C4B]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-[#3F5C4B] hover:text-[#F4A259] transition-colors font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;