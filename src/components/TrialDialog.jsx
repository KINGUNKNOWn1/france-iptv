import React, { useEffect, useRef, useState } from 'react';
import { Tv, Laptop, Smartphone, Box, Check, X, ArrowRight, ArrowLeft } from 'lucide-react';
import TrialEmailForm from './TrialEmailForm';
import { openWhatsApp } from '../utils/tracking';

// Free-test dialog: pick a device, leave an email (captured in MailerLite),
// then send the test request on WhatsApp, where tests are granted by hand
// (one per person). Visitors who are already convinced can order 1 month
// directly. Opened from anywhere with:
// window.dispatchEvent(new CustomEvent('open-trial'))
const DEVICES = [
  { name: 'Smart TV', detail: 'Samsung, LG et autres', Icon: Tv },
  { name: 'Ordinateur', detail: 'Windows et macOS', Icon: Laptop },
  { name: 'Mobile & tablette', detail: 'iOS et Android', Icon: Smartphone },
  { name: 'Box Android', detail: 'Android TV, Fire TV, Freebox', Icon: Box },
];

const TrialDialog = () => {
  const dialog = useRef(null);
  // Only a tap that STARTS on the backdrop closes the dialog. On iPhone the
  // tap that opened it (menu button) can finish on the fresh backdrop and
  // would otherwise close it instantly.
  const pressStartedOnBackdrop = useRef(false);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [device, setDevice] = useState(0);

  useEffect(() => {
    // Next tick: let the tap that triggered it (and the closing menu) settle first.
    const onOpen = () => { setStep(1); setTimeout(() => setOpen(true), 60); };
    window.addEventListener('open-trial', onOpen);
    return () => window.removeEventListener('open-trial', onOpen);
  }, []);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  const close = () => setOpen(false);
  const testMessage = `Bonjour ! Je souhaite un test gratuit de 24 h sur ${DEVICES[device].name}.`;
  const orderMessage = `Bonjour ! Je souhaite commander 1 mois (8 €) sur ${DEVICES[device].name}.`;

  return (
    <dialog
      ref={dialog}
      onClose={close}
      onPointerDown={(e) => { pressStartedOnBackdrop.current = e.target === dialog.current; }}
      onClick={(e) => {
        if (e.target === dialog.current && pressStartedOnBackdrop.current) close();
        pressStartedOnBackdrop.current = false;
      }}
      aria-label="Test gratuit 24 h"
      className="bg-surface text-brand-black border border-white/15 rounded-2xl w-[min(560px,calc(100%-28px))] max-h-[90dvh] p-6 md:p-10 shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <button onClick={close} className="absolute right-3 top-3 w-9 h-9 grid place-items-center text-brand-gray hover:text-white" aria-label="Fermer">
        <X size={22} />
      </button>

      {/* Content only exists while open, so its headings aren't part of every page's HTML */}
      {open && (step === 1 ? (
        <>
          <p className="text-[10px] tracking-[0.2em] font-medium text-lime mb-2">TEST GRATUIT 24 H · SANS ENGAGEMENT</p>
          <h2 className="text-3xl md:text-4xl mb-2">Sur quel écran ?</h2>
          <p className="text-sm text-brand-gray mb-6">Choisissez votre appareil : on vous envoie les bons accès et le guide d'installation.</p>
          <div className="grid grid-cols-2 gap-2.5 mb-6">
            {DEVICES.map(({ name, detail, Icon }, i) => (
              <button
                key={name}
                type="button"
                aria-pressed={device === i}
                onClick={() => setDevice(i)}
                className={`flex items-center gap-2.5 text-left rounded-lg border px-3 py-4 text-sm transition-colors ${
                  device === i ? 'border-lime text-lime bg-lime/5' : 'border-white/15 bg-surface-2 hover:border-white/30'
                }`}
              >
                <Icon size={24} className="flex-shrink-0" />
                <span className="flex-1">
                  {name}
                  <span className="block text-[11px] text-brand-gray">{detail}</span>
                </span>
                {device === i && <Check size={16} />}
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setStep(2)} className="w-full min-h-[52px] inline-flex items-center justify-center gap-3 bg-lime hover:bg-lime-hover text-lime-on font-semibold rounded-lg">
            Continuer <ArrowRight size={20} />
          </button>
        </>
      ) : (
        <>
          <button type="button" onClick={() => setStep(1)} className="flex items-center gap-2 text-xs text-brand-gray hover:text-white mb-5">
            <ArrowLeft size={16} /> Modifier l'appareil ({DEVICES[device].name})
          </button>
          <h2 className="text-3xl md:text-4xl mb-2">Testez gratuitement 24 h.</h2>
          <p className="text-sm text-brand-gray mb-5">
            Laissez votre e-mail, puis envoyez la demande sur WhatsApp : notre équipe vous envoie votre test. Un test par personne.
          </p>
          <TrialEmailForm source="trial_dialog" dark message={testMessage} />
          <div className="flex items-center gap-3 my-5 text-xs text-brand-gray">
            <span className="h-px flex-1 bg-white/10" /> déjà convaincu ? <span className="h-px flex-1 bg-white/10" />
          </div>
          <button type="button" onClick={() => openWhatsApp(orderMessage)} className="w-full min-h-[52px] inline-flex items-center justify-center gap-2 border border-white/40 hover:bg-white/5 text-white font-semibold rounded-lg">
            Commander 1 mois (8 €) sur WhatsApp <ArrowRight size={18} />
          </button>
          <p className="text-[11px] text-brand-gray text-center mt-3">Sans engagement · paiement Binance Pay ou PayPal.</p>
        </>
      ))}
    </dialog>
  );
};

export default TrialDialog;
