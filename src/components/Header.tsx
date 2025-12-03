'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Возможности', href: '#features' },
    { name: 'Категории', href: '#categories' },
    { name: 'Сообщество', href: '#community' },
    { name: 'Скачать', href: '#download' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">33</span>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Зикр
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://apps.apple.com/kz/app/33/id1609251676"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105"
            >
              Скачать
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white rounded-2xl shadow-xl p-6 mt-2 mb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 font-medium hover:text-primary-500 transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://apps.apple.com/kz/app/33/id1609251676"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold text-center transition-all"
              >
                Скачать для iOS
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
