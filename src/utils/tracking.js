// Conversion tracking shared by every WhatsApp button and email form.
// Meta Pixel and GA4 are loaded from index.html; both calls are no-ops if a
// script is blocked (ad blockers, prerender).

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '18653169315';

// Remember for the whole visit whether it started from an ad click, so the
// WhatsApp message can say where the customer came from.
export const rememberAdSource = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const utm = (params.get('utm_source') || '').toLowerCase();
    let source = null;
    if (params.has('fbclid') || ['facebook', 'fb', 'instagram', 'ig', 'meta'].includes(utm)) source = 'FB';
    else if (params.has('gclid') || params.has('gbraid') || params.has('wbraid') || utm === 'google') source = 'GG';
    else if (params.has('ttclid') || utm === 'tiktok') source = 'TT';
    if (source) sessionStorage.setItem('adSource', source);
  } catch { /* storage blocked */ }
};

// Tag appended to WhatsApp messages, e.g. "[FB-tarifs]" or "[freebox]":
// ad source (if any) + the page the visitor clicked from.
export const sourceTag = () => {
  let ad = null;
  try { ad = sessionStorage.getItem('adSource'); } catch { /* storage blocked */ }
  const page = window.location.pathname.split('/').filter(Boolean).pop() || 'accueil';
  return `[${ad ? `${ad}-` : ''}${page}]`;
};

// Adds the source tag to a wa.me URL's prefilled text (once).
export const withSourceTag = (url) => {
  try {
    const u = new URL(url);
    const text = u.searchParams.get('text') || '';
    if (/\[[A-Za-z0-9-]+\]$/.test(text.trim())) return url;
    u.searchParams.set('text', `${text.trim() || 'Bonjour !'} ${sourceTag()}`);
    return u.toString();
  } catch {
    return url;
  }
};

// A WhatsApp click is our main conversion (sales happen in the chat).
export const trackWhatsAppContact = () => {
  const page = window.location.pathname;
  window.fbq?.('track', 'Contact', { content_name: page });
  window.gtag?.('event', 'generate_lead', { method: 'whatsapp', page_path: page });
};

// For buttons that open WhatsApp from code instead of an <a href> link
// (plain wa.me links are tracked by the global click listener in main.jsx).
// Must be called synchronously from the tap handler: popup blockers and the
// Facebook/Instagram in-app browsers drop window.open() after an await.
// On phones we navigate instead of opening a window, which in-app browsers
// hand straight to the WhatsApp app; the short delay lets tracking beacons leave.
export const openWhatsApp = (text) => {
  trackWhatsAppContact();
  const url = withSourceTag(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`);
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    setTimeout(() => { window.location.href = url; }, 150);
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

// An email captured by one of the site's forms.
export const trackEmailLead = (source) => {
  window.fbq?.('track', 'Lead', { content_name: source });
  window.gtag?.('event', 'sign_up', { method: source });
};

// Remember that this visitor already left an email, so no other popup asks again.
const LEAD_KEY = 'leadCaptured';
export const markLeadCaptured = () => {
  try { localStorage.setItem(LEAD_KEY, '1'); } catch { /* storage blocked */ }
};
export const hasCapturedLead = () => {
  try { return localStorage.getItem(LEAD_KEY) === '1'; } catch { return false; }
};

// Save an email to MailerLite via /api/subscribe. Never throws: a failed save
// must not block the visitor from reaching WhatsApp. `keepalive` lets the
// request finish even if the page navigates to WhatsApp right after.
export const subscribeEmail = async (email, source) => {
  trackEmailLead(source);
  markLeadCaptured();
  try {
    await fetch('/api/subscribe', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source })
    });
  } catch (error) {
    console.error('Error saving lead:', error);
  }
};
