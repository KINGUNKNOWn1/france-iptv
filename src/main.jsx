import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { initWebVitals } from './utils/webVitals';
import { trackWhatsAppContact } from './utils/tracking';
import './utils/exportLeads'; // Make lead export functions available in console

// After a new deploy, old chunk URLs disappear; reload instead of showing a blank page
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  window.location.reload();
});

// Pages are prerendered (see scripts/prerender.mjs) with their head tags already
// in the HTML. Remove them before React mounts so Helmet doesn't leave duplicates.
document.head
  .querySelectorAll(
    'title, link[rel="canonical"], meta[name="description"], meta[name="robots"], meta[name="language"], meta[name="author"], meta[name^="geo."], meta[property^="og:"], meta[property^="twitter:"]'
  )
  .forEach((el) => el.remove());

// Sales happen on WhatsApp, so a click on any wa.me link is our conversion.
// One delegated listener covers every WhatsApp button on the site and tells
// Meta (and GA4, once configured) which visits turned into a contact.
document.addEventListener('click', (event) => {
  if (event.target.closest('a[href*="wa.me/"]')) trackWhatsAppContact();
});

// Initialize Web Vitals monitoring
initWebVitals();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
