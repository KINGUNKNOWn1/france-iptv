import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';

// Hash links to homepage sections need a full <a>; real pages use client-side routing.
const NavLink = ({ href, ...props }) =>
  href.includes('#') ? <a href={href} {...props} /> : <Link to={href} {...props} />;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Transparent over the homepage hero until you scroll; a dark translucent
  // bar everywhere else (all pages are dark in this theme).
  const { pathname } = useLocation();
  const solid = scrolled || pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real page URLs (not homepage #anchors) so crawlers follow the menu to
  // the hub pages; only sections without their own page keep an anchor.
  const navItems = [
    { name: 'Chaînes', href: '/chaines' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Appareils', href: '/appareils' },
    { name: 'Blog', href: '/blog' },
    { name: 'Aide', href: '/faq' },
    { name: 'À propos', href: '/a-propos' },
  ];

  const openTrial = () => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('open-trial'));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'bg-ink/85 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo textColor="white" size="sm" showTagline={false} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-lime transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={openTrial}
              className="px-6 py-2.5 bg-lime hover:bg-lime-hover text-lime-on font-semibold rounded-lg transition-colors"
            >
              Essayer 24 h
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-white"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 bg-surface border border-white/10 rounded-xl shadow-2xl">
            <div className="flex flex-col gap-4 px-2 pt-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-lime transition-colors duration-200 py-2"
                >
                  {item.name}
                </NavLink>
              ))}
              <button
                type="button"
                onClick={openTrial}
                className="px-6 py-2.5 bg-lime hover:bg-lime-hover text-lime-on font-semibold rounded-lg transition-colors text-center"
              >
                Essayer 24 h gratuitement
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
