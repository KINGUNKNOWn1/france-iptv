import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '../utils/tracking';

// Tells returning customers our WhatsApp number changed. Sits inside the fixed
// nav, so the page is pushed down by its height while it is shown.
const DISMISS_KEY = 'numberChangeDismissed';
const BAR_HEIGHT = '2.25rem';

const NumberChangeBar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_KEY)) setVisible(false);
    } catch { /* storage blocked */ }
  }, []);

  useEffect(() => {
    document.body.style.paddingTop = visible ? BAR_HEIGHT : '';
    return () => { document.body.style.paddingTop = ''; };
  }, [visible]);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try { localStorage.setItem(DISMISS_KEY, '1'); } catch { /* storage blocked */ }
  };

  return (
    <div className="bg-lime text-lime-on text-xs sm:text-sm font-medium" style={{ height: BAR_HEIGHT }}>
      <div className="container-custom px-4 md:px-8 h-full flex items-center justify-center gap-2 relative">
        <FaWhatsapp className="shrink-0" aria-hidden="true" />
        <span className="truncate">
          Nouveau numéro WhatsApp :{' '}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour !')}`}
            className="font-bold underline underline-offset-2"
          >
            +212 6 27 37 06 46
          </a>
          <span className="hidden sm:inline"> — l'ancien numéro n'est plus actif</span>
        </span>
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-2 p-1.5 opacity-70 hover:opacity-100"
          aria-label="Fermer"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default NumberChangeBar;
