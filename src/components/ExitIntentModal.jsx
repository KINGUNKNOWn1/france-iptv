import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGift, FaWhatsapp, FaEnvelope, FaCopy, FaCheckCircle } from 'react-icons/fa';
import { hasCapturedLead, openWhatsApp, subscribeEmail } from '../utils/tracking';

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
      if (e.clientY <= 0 && !hasShown && !hasCapturedLead()) {
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

    await subscribeEmail(email, 'exit_intent_10_percent');

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
    openWhatsApp(
      `Bonjour, je souhaite profiter de la réduction de 10% (code ${DISCOUNT_CODE}) sur mon premier abonnement IPTV. Mon e-mail : ${email}`
    );
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
              className="relative bg-surface rounded-2xl max-w-sm w-full max-h-[90dvh] overflow-y-auto border border-lime/40 shadow-2xl"
            >
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 z-10 w-10 h-10 rounded-full text-brand-gray hover:text-white flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <FaTimes />
              </button>

              <div className="p-6">
                {step === 'offer' ? (
                  <>
                    <div className="flex items-center gap-3 mb-4 pr-8">
                      <div className="w-10 h-10 rounded-full bg-lime/15 flex items-center justify-center flex-shrink-0">
                        <FaGift className="text-lime" />
                      </div>
                      <p className="text-white font-semibold leading-tight">Attendez ! Une offre avant de partir</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-ink/40 p-4 mb-4 text-center">
                      <p className="text-4xl font-bold text-lime leading-none mb-1">-10 %</p>
                      <p className="text-sm text-gray-300 mb-3">sur votre premier abonnement</p>
                      <p className="text-xs text-brand-gray">
                        30 500+ chaînes HD/4K · 150 000+ films et séries · Sans engagement
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-2.5">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setIsValid(true);
                          }}
                          placeholder="vous@email.fr"
                          aria-label="Votre adresse e-mail"
                          className={`w-full px-4 py-3 pr-11 rounded-lg bg-white/10 border text-white placeholder-gray-400 focus:outline-none transition-colors ${
                            isValid ? 'border-white/20 focus:border-lime' : 'border-red-500'
                          }`}
                          required
                        />
                        <FaEnvelope className={`absolute right-4 top-1/2 -translate-y-1/2 ${isValid ? 'text-gray-400' : 'text-red-500'}`} />
                      </div>
                      {!isValid && <p className="text-red-400 text-xs">Veuillez saisir une adresse e-mail valide</p>}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 bg-lime hover:bg-lime-hover text-lime-on font-semibold rounded-lg transition-colors disabled:opacity-60"
                      >
                        {isSubmitting ? 'Envoi…' : 'Recevoir mon code -10 %'}
                      </button>
                    </form>

                    <button
                      onClick={handleClose}
                      className="w-full text-center text-brand-gray hover:text-white transition-colors text-sm py-2.5 mt-1"
                    >
                      Non merci
                    </button>
                    <p className="text-center text-xs text-brand-gray">🔒 Aucun spam. Désinscription en 1 clic.</p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-3 pr-8">
                      <FaCheckCircle className="text-lime text-2xl flex-shrink-0" />
                      <p className="text-white font-semibold">Votre code est prêt !</p>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">
                      Donnez ce code lors de votre commande sur WhatsApp pour obtenir 10 % de réduction.
                    </p>
                    <button
                      onClick={handleCopyCode}
                      className="w-full flex items-center justify-between gap-3 bg-white/10 border border-dashed border-lime/60 rounded-lg px-4 py-3 mb-3 hover:bg-white/15 transition-colors"
                    >
                      <span className="text-xl font-bold tracking-widest text-lime">{DISCOUNT_CODE}</span>
                      <span className="flex items-center gap-2 text-sm text-gray-300">
                        {copied ? <><FaCheckCircle className="text-lime" /> Copié</> : <><FaCopy /> Copier</>}
                      </span>
                    </button>
                    <button
                      onClick={handleWhatsApp}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      <FaWhatsapp className="text-lg" />
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
