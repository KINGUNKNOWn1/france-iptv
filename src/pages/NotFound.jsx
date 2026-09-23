import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, Tv } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
    <SEO
      title="Page introuvable (404) | France IPTV"
      description="Cette page n'existe pas ou a été déplacée. Retrouvez nos abonnements IPTV, tarifs et guides d'installation."
      canonicalPath={null}
      noindex
    />
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 blur-3xl opacity-20">
              <div className="text-[200px] md:text-[300px] font-bold text-brand-gold">
                404
              </div>
            </div>
            {/* Main text */}
            <div className="relative text-[200px] md:text-[300px] font-bold leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-blue-500 to-purple-500">
                404
              </span>
            </div>
          </div>
        </motion.div>

        {/* Error message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Page Introuvable
          </h1>
          <p className="text-xl text-brand-gray mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </motion.div>

        {/* TV Icon Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="mb-12 flex justify-center"
        >
          <div className="w-32 h-32 bg-brand-offwhite rounded-full flex items-center justify-center border-2 border-brand-gray-border">
            <Tv className="w-16 h-16 text-brand-gold" />
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-[#2B4577] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Retour à l'Accueil
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-black/5 hover:bg-brand-black/10 text-brand-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-brand-gray-border"
          >
            <Search className="w-5 h-5" />
            Nous Contacter
          </Link>
        </motion.div>

        {/* Helpful links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-brand-gray-border"
        >
          <p className="text-brand-gray mb-4">Ou essayez l'une de ces pages :</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/tarifs"
              className="text-brand-gray hover:text-brand-gold transition-colors"
            >
              Tarifs
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/acheter-iptv"
              className="text-brand-gray hover:text-brand-gold transition-colors"
            >
              Acheter IPTV
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/appareils"
              className="text-brand-gray hover:text-brand-gold transition-colors"
            >
              Appareils
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/faq"
              className="text-brand-gray hover:text-brand-gold transition-colors"
            >
              FAQ
            </Link>
          </div>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 bg-brand-offwhite border border-brand-gray-border rounded-2xl p-6"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <ArrowLeft className="w-5 h-5 text-brand-gold" />
            </div>
            <div className="text-left">
              <h3 className="text-brand-black font-bold mb-1">Le saviez-vous ?</h3>
              <p className="text-brand-gray text-sm">
                France IPTV propose 30 500+ chaînes, 150 000+ films et séries, et fonctionne sur tous les appareils. Découvrez nos{' '}
                <Link to="/tarifs" className="text-brand-gold hover:underline">
                  tarifs
                </Link>{' '}
                et démarrez dès aujourd'hui !
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default NotFound;
