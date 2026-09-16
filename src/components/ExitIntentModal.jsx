import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGift, FaWhatsapp, FaEnvelope, FaCopy, FaCheckCircle } from 'react-icons/fa';

const DISCOUNT_CODE = 'BIENVENUE10';

const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState('offer'); // 'offer' | 'success'
  const [copied, setCopied] = useState(false);

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'exit_intent_10_percent' })
      });
    } catch (error) {
      console.error('Error saving lead:', error);
    }

    setIsSubmitting(false);
    setStep('success');
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(DISCOUNT_CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Bonjour, je souhaite profiter de la réduction de 10% (code ${DISCOUNT_CODE}) sur mon premier abonnement IPTV. Mon e-mail : ${email}`
    );
    window.open(`https://wa.me/18653169315?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-brand-black/90 to-brand-black rounded-3xl max-w-2xl w-full overflow-hidden border-2 border-brand-gold/50 shadow-2xl shadow-blue-600/20"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-700/50 hover:bg-slate-600 text-white flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <FaTimes />
              </button>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-gold via-purple-600 to-pink-600" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-gold rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600 rounded-full opacity-20 blur-3xl" />

              {/* Content */}
              <div className="relative p-8 md:p-12">
                {step === 'offer' ? (
                  <>
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg"
                    >
                      <FaGift className="text-white text-3xl" />
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                      Attendez ! 🎉
                    </h2>

                    <p className="text-xl text-gray-300 text-center mb-6">
                      Avant de partir, voici une <span className="text-yellow-500 font-bold">offre exclusive</span> pour vous !
                    </p>

                    {/* Offer Box */}
                    <div className="bg-gradient-to-r from-brand-gold/20 to-purple-600/20 border-2 border-brand-gold/50 rounded-2xl p-6 mb-6">
                      <div className="text-center mb-4">
                        <p className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                          10% DE RÉDUCTION
                        </p>
                        <p className="text-gray-300 text-lg">
                          Sur votre premier abonnement !
                        </p>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3">
                        {[
                          '30 500+ chaînes en direct HD/4K',
                          '150 000+ films et séries',
                          'Actif en moins de 5 minutes',
                          'Sans engagement',
                          "Paiement par Binance Pay ou PayPal"
                        ].map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-center gap-2 text-gray-200"
                          >
                            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <span className="text-sm">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Email Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 mb-4">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setIsValid(true);
                          }}
                          placeholder="vous@email.fr"
                          className={`w-full px-4 py-4 pr-12 rounded-xl bg-white/10 border-2 text-white placeholder-gray-400 focus:outline-none transition-all ${
                            isValid ? 'border-white/20 focus:border-brand-gold' : 'border-red-500 focus:border-red-500'
                          }`}
                          required
                        />
                        <FaEnvelope className={`absolute right-4 top-1/2 -translate-y-1/2 ${isValid ? 'text-gray-400' : 'text-red-500'}`} />
                      </div>
                      {!isValid && (
                        <p className="text-red-400 text-sm">Veuillez saisir une adresse e-mail valide</p>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-green-600/50 text-lg disabled:opacity-50"
                      >
                        {isSubmitting ? 'Envoi...' : 'Recevoir mon code -10%'}
                      </button>
                    </form>

                    <button
                      onClick={handleClose}
                      className="w-full text-center text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Non merci, je préfère payer plein tarif
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-4">
                      🔒 Aucun spam. Vous pouvez vous désinscrire à tout moment.
                    </p>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg"
                    >
                      <FaCheckCircle className="text-white text-3xl" />
                    </motion.div>

                    <h2 className="text-3xl font-bold text-white text-center mb-3">
                      Votre code est prêt !
                    </h2>
                    <p className="text-gray-300 text-center mb-6">
                      Utilisez ce code lors de votre commande sur WhatsApp pour obtenir 10% de réduction.
                    </p>

                    <button
                      onClick={handleCopyCode}
                      className="w-full flex items-center justify-between gap-3 bg-white/10 border-2 border-dashed border-brand-gold/60 rounded-xl px-6 py-4 mb-6 hover:bg-white/20 transition-colors"
                    >
                      <span className="text-2xl font-bold tracking-widest text-yellow-400">{DISCOUNT_CODE}</span>
                      <span className="flex items-center gap-2 text-sm text-gray-300">
                        {copied ? <><FaCheckCircle className="text-green-400" /> Copié</> : <><FaCopy /> Copier</>}
                      </span>
                    </button>

                    <button
                      onClick={handleWhatsApp}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-green-600/50 text-lg"
                    >
                      <FaWhatsapp className="text-xl" />
                      Commander sur WhatsApp
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;
