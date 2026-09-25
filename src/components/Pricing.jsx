import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCheckCircle, FaStar, FaCreditCard, FaHeadset, FaTrophy } from 'react-icons/fa';
import EmailCollectionModal from './EmailCollectionModal';
import { openWhatsApp } from '../utils/tracking';

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const handleOrderClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleEmailSubmit = (email) => {
    if (selectedPlan) {
      // Redirect to WhatsApp with email included in message
      openWhatsApp(`${selectedPlan.whatsapp}\n\nE-mail: ${email}`);
    }
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const plans = [
    {
      name: 'IPTV Premium',
      duration: '1 mois',
      price: '8',
      period: '/ mois',
      popular: false,
      features: [
        'Sans engagement',
        'HD - UHD - 4K',
        'Plus de 30 500 chaînes en direct',
        'Plus de 150 000 films et séries',
        'Compatible avec tous les appareils',
        'Accès à toutes les chaînes sportives',
        'Guide TV avec prise en charge EPG',
        'Rattrapage via Replay et Catchup',
        'Disponibilité garantie de 99,9 %',
        'Mises à jour automatiques du logiciel',
        'Service client 24/7',
      ],
      whatsapp: "Je souhaite commander l'abonnement IPTV Premium 1 mois",
    },
    {
      name: 'IPTV Premium',
      duration: '3 mois',
      price: '19,99',
      period: '/ 3 mois',
      popular: false,
      features: [
        'Sans engagement',
        'HD - UHD - 4K',
        'Plus de 30 500 chaînes en direct',
        'Plus de 150 000 films et séries',
        'Compatible avec tous les appareils',
        'Accès à toutes les chaînes sportives',
        'Guide TV avec prise en charge EPG',
        'Rattrapage via Replay et Catchup',
        'Disponibilité garantie de 99,9 %',
        'Mises à jour automatiques du logiciel',
        'Service client 24/7',
      ],
      whatsapp: "Je souhaite commander l'abonnement IPTV Premium 3 mois",
    },
    {
      name: 'IPTV Premium',
      duration: '6 mois',
      price: '30',
      period: '/ 6 mois',
      popular: false,
      savings: 'Économisez 10 €',
      features: [
        'HD - UHD - 4K',
        'Plus de 30 500 chaînes en direct',
        'Plus de 150 000 films et séries',
        'Compatible avec tous les appareils',
        'Accès à toutes les chaînes sportives',
        'Guide TV avec prise en charge EPG',
        'Rattrapage via Replay et Catchup',
        'Disponibilité garantie de 99,9 %',
        'Mises à jour automatiques du logiciel',
        'Service client 24/7',
      ],
      whatsapp: "Je souhaite commander l'abonnement IPTV Premium 6 mois",
    },
    {
      name: 'IPTV Premium',
      duration: '12 mois',
      price: '45',
      period: '/ 12 mois',
      popular: true,
      savings: 'Économisez 35 € - Meilleure Offre !',
      features: [
        'HD - UHD - 4K',
        'Plus de 30 500 chaînes en direct',
        'Plus de 150 000 films et séries',
        'Compatible avec tous les appareils',
        'Accès à toutes les chaînes sportives',
        'Guide TV avec prise en charge EPG',
        'Rattrapage via Replay et Catchup',
        'Disponibilité garantie de 99,9 %',
        'Mises à jour automatiques du logiciel',
        'Service client prioritaire 24/7',
      ],
      whatsapp: "Je souhaite commander l'abonnement IPTV Premium 12 mois",
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-brand-offwhite relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #121110 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold text-lg mb-4 font-semibold"
          >
            À partir de 8 € - sans reconduction automatique
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-black">
            Choisissez votre{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Abonnement
            </span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto mb-12">
            Prix transparents, aucun frais caché, aucune reconduction automatique
          </p>

          {/* Benefit Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            {[
              {
                icon: FaCreditCard,
                text: 'Paiement Unique',
                gradient: 'from-brand-gold to-[#C4FF86]',
                iconBg: 'bg-brand-offwhite',
                iconColor: 'text-brand-gold'
              },
              {
                icon: FaHeadset,
                text: 'Support 24/7',
                gradient: 'from-brand-gold to-[#C4FF86]',
                iconBg: 'bg-brand-offwhite',
                iconColor: 'text-brand-gold'
              },
              {
                icon: FaTrophy,
                text: 'Excellent Rapport Qualité/Prix',
                gradient: 'from-brand-gold to-[#C4FF86]',
                iconBg: 'bg-brand-offwhite',
                iconColor: 'text-brand-gold'
              },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${badge.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

                <div className="relative flex flex-col items-center gap-3 p-6 bg-white shadow-md rounded-2xl border border-brand-gray-border group-hover:border-brand-gold/40 transition-all min-w-[180px]">
                  <div className={`w-14 h-14 rounded-full ${badge.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <badge.icon className={`text-2xl ${badge.iconColor}`} />
                  </div>
                  <p className="text-sm font-bold text-brand-black group-hover:text-brand-gold transition-all text-center">
                    {badge.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Free Trial Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 bg-green-50 border-2 border-green-200 rounded-2xl mb-4"
          >
            <p className="text-brand-black font-semibold">
              🎁 Pas encore convaincu ? <span className="text-green-700 font-bold">Demandez un test gratuit de 24 h</span>.
            </p>
            <a
              href="https://wa.me/18653169315?text=Bonjour%20!%20Je%20souhaite%20un%20test%20gratuit%20de%2024%20h."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors whitespace-nowrap"
            >
              Contactez-nous
            </a>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-surface border border-brand-gold/40 border-2 border-brand-gold lg:scale-110 lg:-mt-8 z-10'
                  : 'bg-white border border-brand-gray-border'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 right-6">
                  <div className="bg-white px-4 py-2 rounded-b-lg flex items-center gap-2 shadow-lg">
                    <FaStar className="text-brand-gold" />
                  </div>
                </div>
              )}

              {/* Savings Badge */}
              {plan.savings && (
                <div className="absolute -top-3 -right-3">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                    plan.popular ? 'bg-brand-red text-white' : 'bg-green-500 text-white'
                  }`}>
                    {plan.savings}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <p className={`text-lg font-bold mb-3 ${plan.popular ? 'text-white' : 'text-brand-gold'}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className={`text-5xl md:text-6xl font-bold ${
                    plan.popular ? 'text-white' : 'text-brand-black'
                  }`}>
                    {plan.price} €
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-brand-offwhite' : 'text-brand-gray'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-white' : 'bg-brand-gold'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${plan.popular ? 'bg-brand-gold' : 'bg-white'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-brand-black'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleOrderClick(plan)}
                className={`block w-full text-center px-6 py-4 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? 'bg-white hover:bg-brand-offwhite text-brand-gold shadow-lg'
                    : 'border-2 border-brand-gold text-brand-gold hover:bg-brand-offwhite'
                }`}
              >
                Commander maintenant
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect p-6 rounded-2xl text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <span className="text-brand-gray">Sans Reconduction Automatique</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <span className="text-brand-gray">Activation en 5 Minutes</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <span className="text-brand-gray">Binance Pay & PayPal</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <span className="text-brand-gray">1 Mois Sans Engagement dès 8 €</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Email Collection Modal */}
      <EmailCollectionModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPlan(null);
        }}
        onSubmit={handleEmailSubmit}
        planName={selectedPlan ? `${selectedPlan.name} - ${selectedPlan.duration}` : ''}
      />
    </section>
  );
};

export default Pricing;
