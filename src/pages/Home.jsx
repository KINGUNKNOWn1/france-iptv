import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tv, Laptop, Smartphone, Box, Check, ArrowRight, Wrench, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import SEO from '../components/SEO';
import TrialEmailForm from '../components/TrialEmailForm';
import Blog from '../components/Blog';
import TrustBadges from '../components/TrustBadges';
import LightweightTV from '../components/LightweightTV';
import ChannelGrid from '../components/ChannelGrid';
import DeviceCompatibility from '../components/DeviceCompatibility';
import ComparisonTable from '../components/ComparisonTable';
import Interactive3DTV from '../components/Interactive3DTV';
import About from '../components/About';
import { homeFaqs } from '../data/homeFaqs';
import { openWhatsApp } from '../utils/tracking';

// Homepage in the dark "home cinema" theme. Keeps the site's conversion
// plumbing: email capture for the free trial, tracked + source-tagged
// WhatsApp buttons, and the FAQ that feeds the FAQPage structured data.

const DEVICES = [
  {
    name: 'Smart TV', detail: 'Samsung, LG et autres', Icon: Tv, guide: '/appareils/samsung-tv',
    help: "Ouvrez le magasin d'applications de votre téléviseur et installez un lecteur IPTV compatible (IPTV Smarters Pro, Smart IPTV…). La disponibilité dépend du modèle et de son année : notre équipe vous indique le bon lecteur.",
  },
  {
    name: 'Ordinateur', detail: 'Windows et macOS', Icon: Laptop, guide: '/appareils/activer-code-iptv',
    help: "Installez un lecteur compatible avec votre système (VLC, IPTV Smarters…) puis ajoutez vos accès. Nous vous envoyons le format de connexion adapté.",
  },
  {
    name: 'Mobile & tablette', detail: 'iOS et Android', Icon: Smartphone, guide: '/appareils/iphone-ipad',
    help: "Ouvrez l'App Store ou Google Play et installez le lecteur recommandé. Certains lecteurs tiers peuvent être payants : vérifiez avec notre équipe avant d'acheter.",
  },
  {
    name: 'Box Android', detail: 'Android TV, Fire TV, Freebox', Icon: Box, guide: '/appareils/android-tv',
    help: "Ouvrez le magasin d'applications de votre box (Freebox Pop, Fire Stick, Android TV…) et installez un lecteur IPTV. Nos guides couvrent chaque modèle pas à pas.",
  },
];

const FEATURES = ['30 500+ chaînes en direct HD/4K', '150 000+ films et séries', 'Sport, replay et guide TV (EPG)', '4 écrans simultanés', 'Sans reconduction automatique'];

const PLANS = [
  { label: 'POUR DÉCOUVRIR', name: '1 mois', price: '8 €', perMonth: '8 € / mois', payment: 'Paiement unique de 8 €' },
  { label: 'POUR TESTER LA DURÉE', name: '3 mois', price: '19,99 €', perMonth: 'soit 6,66 € / mois', payment: 'Paiement unique de 19,99 €' },
  { label: 'POUR LA SAISON', name: '6 mois', price: '30 €', perMonth: 'soit 5 € / mois', payment: 'Paiement unique de 30 €' },
  { label: 'POUR EN PROFITER', badge: 'Meilleur prix', name: '12 mois', price: '45 €', perMonth: 'soit 3,75 € / mois', payment: 'Paiement unique de 45 €', featured: true },
].map((plan) => ({ ...plan, message: `Bonjour ! Je souhaite l'abonnement IPTV ${plan.name} à ${plan.price}.` }));

const Eyebrow = ({ children, centered = false }) => (
  <p className={`flex items-center gap-4 text-[11px] tracking-[0.28em] font-medium text-white mb-5 ${centered ? 'justify-center' : ''}`}>
    <span className="inline-block w-10 h-px bg-lime" /> {children}
  </p>
);

const openTrial = () => window.dispatchEvent(new CustomEvent('open-trial'));

const Home = () => {
  const [device, setDevice] = useState(0);
  const current = DEVICES[device];

  return (
    <>
      <SEO canonicalPath="/" includeHomeSchema />

      {/* Hero */}
      <section className="relative min-h-[680px] md:min-h-[720px] flex items-center overflow-hidden">
        <picture>
          <source media="(max-width: 700px)" srcSet="/assets/cinema-hero-900.webp" />
          <img
            src="/assets/cinema-hero-1600.webp"
            alt="Un salon home cinéma avec un grand écran au coucher du soleil"
            className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
            fetchpriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

        <div className="relative z-10 w-full container-custom px-4 md:px-8 pt-28 pb-16">
          <div className="max-w-2xl">
            <Eyebrow>VOS CONTENUS. VOTRE MOMENT.</Eyebrow>
            <h1 className="text-[44px] leading-[1.03] sm:text-6xl lg:text-7xl text-white mb-5">
              Abonnement IPTV France.
              <span className="block text-lime">Votre soirée, votre programme.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-4 max-w-xl">
              France IPTV : films, séries, chaînes TV et sport en HD et en IPTV 4K, sur vos écrans, partout en France.
            </p>
            <p className="text-sm md:text-base mb-6">
              <strong className="text-white">1 mois à 8 € · 12 mois à 45 €</strong>
              <span className="text-gray-400"> · Sans reconduction automatique.</span>
            </p>

            <div className="bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-2xl p-4 md:p-5 max-w-xl">
              <p className="text-white font-semibold mb-3">🎁 Essai gratuit 24 h : entrez votre e&#8209;mail</p>
              <TrialEmailForm source="hero" dark large />
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-5">
              <a href="#offres" className="inline-flex items-center gap-2 py-2.5 text-white hover:text-lime font-semibold">
                Voir les offres <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/18653169315?text=Bonjour%20!%20J%27ai%20une%20question%20sur%20l%27abonnement%20France%20IPTV."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2.5 text-green-400 hover:text-green-300 font-semibold"
              >
                <FaWhatsapp size={20} /> Une question ? WhatsApp
              </a>
            </div>
          </div>
        </div>
        <span className="hidden xl:block absolute right-[3%] top-[42%] text-[9px] tracking-[0.3em] leading-loose text-white/80">
          LE GRAND ÉCRAN<br />CHEZ VOUS.
        </span>
      </section>

      {/* Device strip */}
      <section aria-label="Appareils compatibles" className="bg-[#0D0F0F] border-y border-white/5">
        <div className="container-custom px-4 md:px-8 py-6 grid grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          <p className="hidden lg:block text-white leading-snug pr-6 border-r border-white/10">
            Sur l'écran<br /><strong className="font-medium">qui vous ressemble.</strong>
          </p>
          {DEVICES.map(({ name, detail, Icon, guide }) => (
            <Link key={name} to={guide} className="flex items-center gap-3 text-white hover:text-lime transition-colors">
              <Icon size={30} strokeWidth={1.3} className="flex-shrink-0" />
              <span className="text-sm leading-tight">
                {name}
                <span className="block text-xs text-brand-gray mt-1">{detail}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section id="offres" className="py-16 md:py-20 px-4 text-center scroll-mt-24">
        <Eyebrow centered>SIMPLE, DU DÉBUT À LA FIN</Eyebrow>
        <h2 className="text-4xl md:text-5xl text-white mb-3">Choisissez votre formule.</h2>
        <p className="text-brand-gray">Le prix est clair. La durée, c'est vous qui décidez.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-10 text-left">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col p-6 rounded-xl border ${plan.featured ? 'border-lime/60 bg-lime/[0.04]' : 'border-white/10 bg-white/[0.02]'}`}
            >
              <div className="flex items-center justify-between min-h-[28px] mb-3 gap-2">
                <span className="text-[11px] tracking-[0.15em] text-brand-gray">{plan.label}</span>
                {plan.badge && <span className="text-[11px] font-semibold bg-lime text-lime-on px-2.5 py-1 rounded-full whitespace-nowrap">{plan.badge}</span>}
              </div>
              <h3 className="text-2xl text-white mb-1">{plan.name}</h3>
              <p className="text-4xl font-semibold tracking-tight text-white">{plan.price}</p>
              <p className={`text-sm mt-1 mb-5 ${plan.featured ? 'text-lime' : 'text-brand-gray'}`}>{plan.perMonth}</p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {FEATURES.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-gray-300">
                    <Check size={16} className="text-lime flex-shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => openWhatsApp(plan.message)}
                className={`w-full min-h-[50px] inline-flex items-center justify-center gap-3 rounded-lg font-semibold text-sm transition-colors ${
                  plan.featured ? 'bg-lime hover:bg-lime-hover text-lime-on' : 'border border-white/60 hover:bg-white/5 text-white'
                }`}
              >
                Choisir {plan.name} <ArrowRight size={18} />
              </button>
              <p className="text-xs text-brand-gray text-center mt-2.5">{plan.payment}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-300">
          Même contenu dans toutes les formules : seule la durée change.{' '}
          <Link to="/tarifs" className="text-lime hover:underline">Comparer les formules</Link>
        </p>
        <a href="#appareils" className="inline-flex items-center gap-3 py-3 text-sm text-gray-300 hover:text-lime mt-2">
          <Wrench size={18} /> Besoin d'aide pour l'installation ? <ArrowRight size={18} />
        </a>
      </section>

      <TrustBadges />

      {/* TV showcase (from the previous homepage) */}
      <section className="py-20 bg-gradient-to-b from-[#090B0B] via-[#111413] to-[#090B0B] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Découvrez <span className="text-lime">l'IPTV Premium</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Service IPTV 4K sur tous vos appareils</p>
          </div>
          <LightweightTV />
        </div>
      </section>

      <ChannelGrid />
      <DeviceCompatibility />

      {/* Setup guide */}
      <section id="appareils" className="bg-[#0D0F0F] border-t border-white/10 py-16 md:py-20 scroll-mt-24">
        <div className="container-custom px-4 md:px-8">
          <div className="md:flex md:items-center md:justify-between gap-10">
            <div>
              <Eyebrow>ON VOUS ACCOMPAGNE</Eyebrow>
              <h2 className="text-4xl md:text-5xl text-white">Votre écran.<br />Notre mode d'emploi.</h2>
            </div>
            <p className="text-brand-gray mt-4 md:mt-0">Pas besoin d'être expert.<br />Choisissez votre appareil et laissez-vous guider.</p>
          </div>

          <div role="tablist" aria-label="Votre appareil" className="grid grid-cols-2 md:grid-cols-4 gap-x-4 border-b border-white/10 mt-8">
            {DEVICES.map(({ name, Icon }, i) => (
              <button
                key={name}
                type="button"
                role="tab"
                id={`device-tab-${i}`}
                aria-selected={device === i}
                aria-controls="device-guide"
                onClick={() => setDevice(i)}
                className={`flex items-center justify-center gap-2.5 py-4 text-sm border-b-2 transition-colors ${
                  device === i ? 'text-lime border-lime' : 'text-brand-gray border-transparent hover:text-white'
                }`}
              >
                <Icon size={22} /> {name}
              </button>
            ))}
          </div>

          <div id="device-guide" role="tabpanel" aria-labelledby={`device-tab-${device}`} className="grid md:grid-cols-3 gap-8 md:gap-12 mt-9 mb-7">
            {[
              ['01', 'Préparez votre appareil', current.help],
              ['02', 'Demandez votre accès', "Commencez par l'essai gratuit de 24 heures. Vous recevez vos identifiants par WhatsApp en quelques minutes."],
              ['03', 'Installez-vous confortablement', 'Testez la lecture sur votre connexion. Besoin d\'un coup de main ? Notre assistance francophone vous accompagne.'],
            ].map(([n, title, text]) => (
              <div key={n}>
                <span className="text-lime text-xs">{n}</span>
                <h3 className="text-lg font-medium text-white mt-3 mb-2">{title}</h3>
                <p className="text-sm text-brand-gray">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link to={current.guide} className="inline-flex items-center gap-2 py-3 text-sm text-white hover:text-lime">
              Guide complet : IPTV sur {current.name} <ArrowRight size={18} />
            </Link>
            <button
              type="button"
              onClick={() => openWhatsApp(`Bonjour, pouvez-vous m'aider à installer France IPTV sur ${current.name} ?`)}
              className="inline-flex items-center gap-2 py-3 text-sm text-green-400 hover:text-green-300"
            >
              <FaWhatsapp size={18} /> Être accompagné sur {current.name}
            </button>
          </div>
        </div>
      </section>

      <ComparisonTable />
      <Interactive3DTV />

      {/* SEO copy */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Eyebrow>FRANCE IPTV</Eyebrow>
          <h2 className="text-3xl md:text-4xl text-white mb-5">Un abonnement IPTV simple, partout en France.</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              France IPTV est un fournisseur IPTV au service de tout le territoire, de Paris à Marseille, de Lyon à Toulouse.
              Chaînes françaises, chaînes sportives, chaînes arabes et turques, films et séries à la demande : tout est réuni dans
              un seul <Link to="/abonnement-iptv" className="text-lime hover:underline">abonnement IPTV</Link>, sur 4 écrans à la fois.
            </p>
            <p>
              Profitez d'un jour d'essai gratuit pour juger de la qualité par vous-même. Ensuite, choisissez la durée qui vous convient
              sur la page <Link to="/tarifs" className="text-lime hover:underline">tarifs</Link> : aucune reconduction automatique,
              paiement par Binance Pay ou PayPal, activation en 5 minutes. Consultez aussi la{' '}
              <Link to="/chaines" className="text-lime hover:underline">liste des chaînes</Link> et nos{' '}
              <Link to="/appareils" className="text-lime hover:underline">guides d'installation</Link>. Vous hésitez entre plusieurs services ?
              Notre guide pour trouver le <Link to="/blog/meilleur-iptv-france" className="text-lime hover:underline">meilleur IPTV</Link>{' '}
              détaille les critères à vérifier, et le <Link to="/test-debit-iptv" className="text-lime hover:underline">test de débit IPTV</Link>{' '}
              vous dit si votre connexion suffit pour la HD ou la 4K.
            </p>
          </div>
        </div>
      </section>

      <Blog />
      <About />

      {/* FAQ (same data as the FAQPage structured data in <SEO>) */}
      <section id="aide" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="container-custom md:px-4 grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16">
          <div>
            <Eyebrow>TOUT SIMPLEMENT</Eyebrow>
            <h2 className="text-4xl text-white">Les bonnes réponses.<br />Avant de commencer.</h2>
            <p className="text-sm text-brand-gray mt-6 mb-3">Un doute ? Parlons-en directement.</p>
            <button
              type="button"
              onClick={() => openWhatsApp("Bonjour, j'ai une question sur France IPTV.")}
              className="inline-flex items-center gap-2 py-3 text-sm text-white hover:text-lime"
            >
              <FaWhatsapp size={20} /> Nous écrire sur WhatsApp <ArrowRight size={16} />
            </button>
            <p className="mt-6 text-sm">
              <Link to="/faq" className="text-lime hover:underline">Toutes les questions fréquentes</Link>
            </p>
          </div>
          <div>
            {homeFaqs.map(({ q, a }) => (
              <details key={q} className="group border-b border-white/10">
                <summary className="flex items-center justify-between gap-5 py-5 cursor-pointer list-none text-white [&::-webkit-details-marker]:hidden">
                  {q}
                  <ChevronDown size={20} className="flex-shrink-0 transition-transform group-open:rotate-180 group-open:text-lime" />
                </summary>
                <p className="text-sm text-brand-gray pb-5 pr-6">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Last call */}
      <section className="container-custom px-4 md:px-8 mb-16">
        <div className="border-t border-white/10 pt-9 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <p className="font-heading text-3xl text-white" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
            Votre prochaine soirée commence ici.
          </p>
          <button
            type="button"
            onClick={openTrial}
            className="self-start md:self-auto min-h-[52px] inline-flex items-center gap-3 px-7 bg-lime hover:bg-lime-hover text-lime-on font-semibold rounded-lg"
          >
            Essayer 24 h gratuitement <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
