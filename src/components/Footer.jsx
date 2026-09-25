import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPlay } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Abonnements', href: '/tarifs' },
    { name: 'Acheter IPTV', href: '/acheter-iptv' },
    { name: 'Chaînes', href: '/chaines' },
    { name: 'Appareils', href: '/appareils' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const guideLinks = [
    { name: 'Abonnement IPTV', href: '/abonnement-iptv' },
    { name: 'IPTV France', href: '/iptv-france' },
    { name: 'IPTV sans engagement', href: '/iptv-sans-engagement' },
    { name: 'IPTV Belgique', href: '/iptv-belgique' },
    { name: 'IPTV sur Freebox', href: '/appareils/freebox' },
    { name: 'IPTV ne fonctionne plus', href: '/blog/iptv-ne-fonctionne-plus' },
    { name: 'Test de débit IPTV', href: '/test-debit-iptv' },
    { name: 'Blog IPTV', href: '/blog' },
  ];

  const legalLinks = [
    { name: 'Politique de Confidentialité', href: '/politique-de-confidentialite' },
    { name: 'Conditions Générales de Vente', href: '/cgv' },
    { name: 'Droit de Rétractation', href: '/droit-de-retractation' },
    { name: 'Politique de Cookies', href: '/politique-de-cookies' },
  ];

  return (
    <footer className="bg-brand-offwhite border-t border-brand-gray-border">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaPlay className="text-primary-500 text-2xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                France IPTV
              </span>
            </div>
            <p className="text-brand-gray leading-relaxed">
              Le service de streaming le plus fiable de France. 30 500+ chaînes, 150 000+ films et séries, et un support francophone 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-black">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-brand-gray hover:text-primary-600 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-black">Guides IPTV</h3>
            <ul className="space-y-3">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-brand-gray hover:text-primary-600 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-black">Juridique</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-brand-gray hover:text-primary-600 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-black">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-gray">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span>
                  France
                </span>
              </li>
              <li className="flex items-center gap-3 text-brand-gray">
                <FaWhatsapp className="text-primary-500 flex-shrink-0" />
                <a href="https://wa.me/18653169315" className="hover:text-primary-600 transition-colors">
                  +1 (865) 316-9315
                </a>
              </li>
              <li className="flex items-center gap-3 text-brand-gray">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@franceiptv.stream" className="hover:text-primary-600 transition-colors">
                  info@franceiptv.stream
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-gray-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-brand-gray text-sm text-center md:text-left">
              © {currentYear} France IPTV. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <div className="glass-effect px-4 py-2 rounded-full text-sm">
                <span className="text-brand-gray">Paiement sécurisé par</span>
                <span className="ml-2 font-semibold text-primary-600">Binance Pay & PayPal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-brand-gray">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
            <span>Disponibilité 99,9 %</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
            <span>Support 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
            <span>Sans Reconduction Automatique</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
            <span>Service Francophone</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
