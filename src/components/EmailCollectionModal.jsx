import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaTimes, FaWhatsapp } from 'react-icons/fa';

const EmailCollectionModal = ({ isOpen, onClose, onSubmit, planName }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }

    setIsSubmitting(true);

    const newLead = {
      email,
      plan: planName,
      source: 'checkout_pricing_page'
    };

    // Send to Brevo (email marketing list) - failure here must never block checkout
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead)
      });
    } catch (error) {
      console.error('Error saving lead:', error);
    }

    setIsSubmitting(false);
    onSubmit(email);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
              aria-label="Fermer"
            >
              <FaTimes className="text-gray-600 text-lg" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-brand-gold to-[#2B4577] p-8 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <FaEnvelope className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Dernière Étape !</h3>
                  <p className="text-white/90 text-sm">Renseignez votre email pour continuer</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-blue-50 text-brand-gold rounded-full text-sm font-semibold mb-4">
                  {planName}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Renseignez votre adresse e-mail pour finaliser votre commande via WhatsApp.
                  Nous vous envoyons vos codes d'accès dès le paiement effectué.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Adresse e-mail *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setIsValid(true);
                      }}
                      placeholder="vous@email.fr"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none ${
                        isValid
                          ? 'border-gray-200 focus:border-brand-gold'
                          : 'border-red-500 focus:border-red-500'
                      }`}
                      required
                    />
                    <FaEnvelope className={`absolute right-4 top-1/2 -translate-y-1/2 ${
                      isValid ? 'text-gray-400' : 'text-red-500'
                    }`} />
                  </div>
                  {!isValid && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      Veuillez saisir une adresse e-mail valide
                    </p>
                  )}
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500">
                  Votre adresse e-mail sert uniquement à l'envoi de vos accès IPTV.
                  Voir notre <a href="/politique-de-confidentialite" className="text-brand-gold hover:underline">politique de confidentialité</a>.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-gold to-[#2B4577] hover:from-[#2B4577] hover:to-brand-gold text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Traitement...</span>
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="text-2xl" />
                      <span>Continuer vers WhatsApp</span>
                    </>
                  )}
                </button>
              </form>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-4 justify-center text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>100% Sécurisé</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Sans Spam</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Actif Immédiatement</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EmailCollectionModal;
