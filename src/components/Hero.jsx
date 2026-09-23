import React from 'react';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import LightweightBackground from './LightweightBackground';
import TrialEmailForm from './TrialEmailForm';

const Hero = () => {
  const badges = [
    '30 500+ chaînes en direct',
    'Qualité HD, UHD et 4K',
    'Actif en 5 minutes',
    'Aucune reconduction automatique',
    'Support francophone 24/7'
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Lightweight Background */}
      <LightweightBackground variant="hero" />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=65&w=1200"
          alt="Arrière-plan de sport en direct"
          className="w-full h-full object-cover"
          fetchpriority="high"
          decoding="async"
        />
        {/* Dark navy overlay for text readability, tinted to the brand blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090B0B]/95 via-[#0D0F0F]/85 to-[#1E3314]/60"></div>
      </div>

      {/* Content */}
      <div className="container-custom section-padding relative z-10 pt-24 md:pt-32 w-full">
        <div className="max-w-3xl mx-auto">
          {/* No entrance animations here: ad visitors must see the offer and the
              form immediately (they previously faded in over ~1.8s). */}
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-gray-200">Disponible partout en France, de Paris à Marseille</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-white">
            Le Meilleur Abonnement France IPTV
          </h1>

          {/* One price message (was "45 € par an" in the title vs "dès 8 €" in badges) */}
          <p className="text-lg sm:text-xl text-[#9DB8E6] font-semibold mb-6">
            1 mois 8 € · 12 mois 45 € (3,75 €/mois) · Sans engagement
          </p>

          {/* Free trial email capture: above the fold on mobile */}
          <div className="max-w-xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-5 mb-3">
            <p className="text-white font-semibold text-base sm:text-lg mb-3">
              🎁 Essai gratuit 24h : entrez votre e‑mail
            </p>
            <TrialEmailForm source="hero" dark large />
          </div>
          <a
            href="https://wa.me/18653169315?text=Bonjour%20!%20J%27ai%20une%20question%20sur%20l%27abonnement%20France%20IPTV."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold mb-8"
          >
            <FaWhatsapp className="text-xl" /> Une question ? Écrivez-nous sur WhatsApp
          </a>

          <div className="flex flex-wrap gap-3 mb-8">
            {badges.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg"
              >
                <FaCheckCircle className="text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-100">{badge}</span>
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
            France IPTV est un fournisseur IPTV fiable au service de tout le territoire. Profitez d'un jour d'essai gratuit pour juger de la qualité par vous-même, sans engagement ! Nous livrons un abonnement IPTV aux clients dans toute la France : de Paris à Marseille, de Lyon à Toulouse. Chaînes françaises, chaînes sportives, chaînes arabes et turques, le tout dans un seul abonnement. Aucune reconduction automatique, paiement par Binance Pay ou PayPal.
          </p>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
