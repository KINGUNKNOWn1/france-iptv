import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGift, FaTimes } from 'react-icons/fa';
import TrialEmailForm from './TrialEmailForm';
import { hasCapturedLead } from '../utils/tracking';

// Slide-in free-trial offer. Deliberately NOT a full-screen popup on page
// load: Google demotes mobile pages that cover content right after landing
// ("intrusive interstitials"). It appears after 15s or 40% scroll, as a small
// card, at most once every 7 days, and never for visitors who already left an email.
const DISMISS_KEY = 'trialPopupDismissedAt';
const SNOOZE_MS = 7 * 24 * 60 * 60 * 1000;
const DELAY_MS = 15000;
const SCROLL_RATIO = 0.4;

const recentlyDismissed = () => {
  try {
    return Date.now() - Number(localStorage.getItem(DISMISS_KEY) || 0) < SNOOZE_MS;
  } catch {
    return false;
  }
};

// Wait until the cookie banner has been answered so the two don't stack.
const cookieBannerAnswered = () => {
  try { return Boolean(localStorage.getItem('cookieConsent')); } catch { return true; }
};

const TrialPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (hasCapturedLead() || recentlyDismissed()) return undefined;

    let triggered = false;
    let retry;
    const show = () => {
      if (triggered) return;
      if (!cookieBannerAnswered()) {
        retry = setTimeout(show, 5000);
        return;
      }
      triggered = true;
      setIsOpen(true);
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= SCROLL_RATIO) show();
    };

    const timer = setTimeout(show, DELAY_MS);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      clearTimeout(retry);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const dismiss = () => {
    try { localStorage.setItem(DISMISS_KEY, String(Date.now())); } catch { /* storage blocked */ }
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          role="dialog"
          aria-label="Essai gratuit 24h"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed z-50 bottom-3 left-3 right-3 md:right-auto md:bottom-6 md:left-6 md:w-96"
        >
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-5">
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-xs"
              aria-label="Fermer"
            >
              <FaTimes />
            </button>
            <div className="flex items-center gap-3 mb-2 pr-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <FaGift className="text-white" />
              </div>
              <p className="font-bold text-gray-900 leading-tight">Testez gratuitement pendant 24h</p>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Toutes les chaînes et la VOD, sans carte bancaire ni engagement. Entrez votre e-mail pour recevoir votre essai.
            </p>
            <TrialEmailForm source="trial_popup" />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default TrialPopup;
