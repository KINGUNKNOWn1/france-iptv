import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import TrialEmailForm from './TrialEmailForm';
import { hasCapturedLead, openWhatsApp } from '../utils/tracking';

const StickyWhatsAppCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleWhatsAppClick = () => {
    openWhatsApp("Bonjour ! Je suis intéressé(e) par un abonnement France IPTV. Puis-je avoir plus d'informations ?");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0, y: 100 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40"
    >
      {/* Expanded Message Card */}
      <AnimatePresence>
        {isExpanded && !isMobile && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20, y: 10 }}
            className="absolute bottom-full right-0 mb-4 w-80"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200 relative">
              {/* Close button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-xs"
              >
                <FaTimes />
              </button>

              {/* Content */}
              <div className="pr-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                    <FaWhatsapp className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Support France IPTV</p>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-xs text-gray-600">En ligne maintenant</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-3">
                  👋 Bonjour ! Des questions sur notre service IPTV ? 🎁 Test gratuit 24 h sur demande, puis 1 mois à 8 €, sans engagement. Écrivez-nous directement sur WhatsApp !
                </p>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  Démarrer le Chat
                </button>

                <p className="text-xs text-gray-500 text-center mt-2">
                  Réponse sous 2 minutes
                </p>

                {!hasCapturedLead() && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                      🎁 Ou recevez l'offre par e-mail :
                    </p>
                    <TrialEmailForm source="whatsapp_bubble" />
                  </div>
                )}
              </div>

              {/* Tail */}
              <div className="absolute bottom-0 right-8 transform translate-y-full">
                <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={isMobile ? handleWhatsAppClick : () => setIsExpanded(!isExpanded)}
        onHoverStart={() => !isMobile && setIsExpanded(true)}
        className="relative group"
      >
        {/* Pulse Animation */}
        <div className="hidden md:block absolute inset-0 rounded-full bg-green-600 animate-ping opacity-75" />

        {/* Button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-600 to-green-700 shadow-2xl flex items-center justify-center hover:shadow-green-600/50 transition-shadow">
          <FaWhatsapp className="text-white text-[26px] md:text-3xl" />

          {/* Unread Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-red-600 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>
      </motion.button>

      {/* Mobile Tooltip */}
      {isMobile && isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap"
        >
          Discutez avec nous !
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default StickyWhatsAppCTA;
