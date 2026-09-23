import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 1 second delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);

    // Initialize analytics/marketing if accepted
    if (consent.analytics) {
      // TODO: Initialize Google Analytics
      console.log('Analytics enabled');
    }
    if (consent.marketing) {
      // TODO: Initialize marketing pixels
      console.log('Marketing enabled');
    }
  };

  const acceptEssential = () => {
    const consent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const savePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowSettings(false);

    // Initialize based on preferences
    if (preferences.analytics) {
      console.log('Analytics enabled');
    }
    if (preferences.marketing) {
      console.log('Marketing enabled');
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-2 md:p-4"
          >
            <div className="max-w-4xl mx-auto bg-[#090B0B] border border-white/15 rounded-xl shadow-2xl overflow-hidden">
              {!showSettings ? (
                // Slim bar: never blocks the page. Refusing is as easy as accepting (CNIL).
                <div className="p-3 md:p-4 flex flex-col md:flex-row md:items-center gap-3">
                  <p className="text-gray-300 text-sm leading-snug flex-1">
                    🍪 Nous utilisons des cookies pour mesurer l'audience et nos publicités.{' '}
                    <Link to="/politique-de-cookies" className="text-white underline" onClick={() => setShowBanner(false)}>
                      En savoir plus
                    </Link>
                  </p>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-3 py-2 text-sm text-gray-300 hover:text-white underline"
                    >
                      Personnaliser
                    </button>
                    <button
                      onClick={acceptEssential}
                      className="flex-1 md:flex-none px-4 py-2 text-sm font-semibold text-white rounded-lg bg-white/10 hover:bg-white/20 border border-white/20"
                    >
                      Refuser
                    </button>
                    <button
                      onClick={acceptAll}
                      className="flex-1 md:flex-none px-4 py-2 text-sm font-semibold text-white rounded-lg bg-white/10 hover:bg-white/20 border border-white/20"
                    >
                      Accepter
                    </button>
                  </div>
                </div>
              ) : (
                // Settings Panel
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Préférences de Cookies
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Choisissez les cookies que vous souhaitez accepter
                      </p>
                    </div>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Essential Cookies */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                            <Check className="w-5 h-5 text-green-400" />
                          </div>
                          <h4 className="font-bold text-white">Cookies Essentiels</h4>
                        </div>
                        <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                          Toujours Actifs
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm ml-10">
                        Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <Settings className="w-5 h-5 text-blue-400" />
                          </div>
                          <h4 className="font-bold text-white">Cookies Analytiques</h4>
                        </div>
                        <button
                          onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                          className={`relative w-14 h-7 rounded-full transition-colors ${
                            preferences.analytics ? 'bg-brand-gold' : 'bg-gray-600'
                          }`}
                        >
                          <div
                            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                              preferences.analytics ? 'transform translate-x-7' : ''
                            }`}
                          />
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm ml-10">
                        Nous aident à comprendre comment les visiteurs utilisent le site (Google Analytics).
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <Cookie className="w-5 h-5 text-purple-400" />
                          </div>
                          <h4 className="font-bold text-white">Cookies Marketing</h4>
                        </div>
                        <button
                          onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                          className={`relative w-14 h-7 rounded-full transition-colors ${
                            preferences.marketing ? 'bg-brand-gold' : 'bg-gray-600'
                          }`}
                        >
                          <div
                            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                              preferences.marketing ? 'transform translate-x-7' : ''
                            }`}
                          />
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm ml-10">
                        Utilisés pour la publicité ciblée (Facebook Pixel, Google Ads).
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={savePreferences}
                      className="flex-1 bg-brand-gold hover:bg-[#C4FF86] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                    >
                      Enregistrer les Préférences
                    </button>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-white/20"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
