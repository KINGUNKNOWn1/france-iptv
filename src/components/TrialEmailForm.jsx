import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { openWhatsApp, subscribeEmail } from '../utils/tracking';

// Email capture for the free 24h trial. The email goes to MailerLite, then the
// visitor activates the trial on WhatsApp (where trials are delivered), with
// their email prefilled so the conversation can be matched to the lead.
const TrialEmailForm = ({ source, dark = false, large = false, message = "Bonjour ! Je souhaite commencer avec le 1er mois à 8 € (satisfait ou remboursé 48 h)." }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsValid(false);
      return;
    }
    setIsSubmitting(true);
    await subscribeEmail(email, source);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const activateOnWhatsApp = () =>
    openWhatsApp(`${message} Mon e-mail : ${email}`);

  const text = dark ? 'text-gray-300' : 'text-gray-600';
  const size = large ? 'py-3.5 text-base' : 'py-2.5 text-sm';

  if (submitted) {
    return (
      <div className="text-center">
        <p className={`flex items-center justify-center gap-2 font-semibold mb-3 ${dark ? 'text-white' : 'text-gray-900'}`}>
          <FaCheckCircle className="text-green-500" /> C'est noté !
        </p>
        <p className={`text-sm mb-3 ${text}`}>Dernière étape : confirmez votre commande sur WhatsApp.</p>
        <button
          type="button"
          onClick={activateOnWhatsApp}
          className={`w-full flex items-center justify-center gap-2 px-4 ${size} bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors`}
        >
          <FaWhatsapp /> Commander le 1er mois (8 €)
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor={`trial-email-${source}`} className="sr-only">Votre adresse e-mail</label>
      <div className="flex gap-2">
        <input
          id={`trial-email-${source}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setIsValid(true); }}
          placeholder="vous@email.fr"
          className={`min-w-0 flex-1 px-3 ${size} rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 ${
            dark ? 'bg-white/10 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-400'
          } ${isValid ? (dark ? 'border-white/20' : 'border-gray-300') : 'border-red-500'}`}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 ${size} ${dark ? 'bg-lime hover:bg-lime-hover text-lime-on' : 'bg-brand-gold hover:bg-[#C4FF86]'} disabled:opacity-60 text-white font-semibold rounded-lg transition-colors whitespace-nowrap`}
        >
          {isSubmitting ? '…' : "Recevoir l'offre"}
        </button>
      </div>
      {!isValid && <p className="text-red-500 text-xs mt-1">Veuillez saisir une adresse e-mail valide.</p>}
      <p className={`text-xs leading-snug mt-2 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
        Vous recevrez nos offres par e-mail. Désinscription en 1 clic.{' '}
        <Link to="/politique-de-confidentialite" className="underline">Confidentialité</Link>
      </p>
    </form>
  );
};

export default TrialEmailForm;
