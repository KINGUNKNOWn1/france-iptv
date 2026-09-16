import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Chaînes', href: '/#features' },
    { name: 'Tarifs', href: '/#pricing' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Comparatif IPTV', href: '/#comparison' },
    { name: 'Avis clients', href: '/#reviews' },
    { name: 'À propos', href: '/#about' },
  ];

  const linkColor = scrolled ? 'text-brand-gray hover:text-brand-black' : 'text-white/90 hover:text-white';
  const iconColor = scrolled ? 'text-brand-black' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo textColor={scrolled ? 'black' : 'white'} size="sm" showTagline={false} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${linkColor} transition-colors duration-200 text-sm font-medium`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/#pricing"
              className="px-6 py-2.5 bg-brand-gold hover:bg-[#2B4577] text-white font-semibold rounded-lg transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden text-2xl ${iconColor}`}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 bg-white/95 backdrop-blur-lg rounded-b-xl shadow-md">
            <div className="flex flex-col gap-4 px-2 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-brand-gray hover:text-brand-black transition-colors duration-200 py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/#pricing"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 bg-brand-gold hover:bg-[#2B4577] text-white font-semibold rounded-lg transition-colors text-center"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
