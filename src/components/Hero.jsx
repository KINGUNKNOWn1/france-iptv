import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import LightweightBackground from './LightweightBackground';
import TrialEmailForm from './TrialEmailForm';

const Hero = () => {
  const badges = [
    '1 jour d\'essai gratuit',
    '1 mois dès 8 €',
    '30 500+ chaînes en direct',
    'Qualité HD, UHD et 4K',
    'Aucune reconduction automatique',
    'Actif en 5 minutes',
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#141311]/95 via-[#191613]/85 to-[#33518C]/60"></div>
      </div>

      {/* Content */}
      <div className="container-custom section-padding relative z-10 pt-32 w-full">
        <div className="max-w-3xl mx-auto">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm text-gray-200">Disponible partout en France, de Paris à Marseille</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Le Meilleur Abonnement</span>
            <br />
            <span className="text-white">France IPTV</span>
            <br />
            <span className="text-[#7B9FD9]">à partir de 45 € par an</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-200 leading-relaxed mb-8 max-w-2xl"
          >
            France IPTV est un fournisseur IPTV fiable au service de tout le territoire. Profitez d'un jour d'essai gratuit pour juger de la qualité par vous-même, sans engagement ! Nous livrons un abonnement IPTV aux clients dans toute la France : de Paris à Marseille, de Lyon à Toulouse. Chaînes françaises, chaînes sportives, chaînes arabes et turques, le tout dans un seul abonnement. Aucune reconduction automatique, paiement par Binance Pay ou PayPal.
          </motion.p>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
              >
                <FaCheckCircle className="text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-100">{badge}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Free trial email capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="max-w-xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5"
          >
            <p className="text-white font-semibold text-lg mb-3">
              🎁 Essai gratuit 24h : entrez votre e‑mail
            </p>
            <TrialEmailForm source="hero" dark large />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
