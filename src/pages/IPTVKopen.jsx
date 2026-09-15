import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaTv, FaRocket, FaWhatsapp } from 'react-icons/fa';
import SEO from '../components/SEO';

const IPTVKopen = () => {
  const benefits = [
    {
      icon: FaTv,
      title: '30 500+ Chaînes en Direct',
      description: 'Accès à plus de 30 500 chaînes en direct dans le monde entier, y compris toutes les chaînes françaises comme TF1, France 2 et M6.'
    },
    {
      icon: FaShieldAlt,
      title: 'Service Fiable',
      description: '99,9 % de disponibilité garantie. Aucune coupure, une image toujours cristalline en HD, UHD et 4K.'
    },
    {
      icon: FaRocket,
      title: 'Actif Immédiatement',
      description: 'Commandez maintenant et recevez vos identifiants sous 5 minutes. Commencez à regarder immédiatement sur tous vos appareils.'
    },
    {
      icon: FaWhatsapp,
      title: 'Support Francophone 24/7',
      description: "Besoin d'aide ? Notre support francophone est joignable 24/7 via WhatsApp. Pas d'attente, une aide immédiate."
    }
  ];

  const features = [
    'Acheter IPTV sans tracas - paiement par CB, PayPal ou SEPA',
    'Aucune reconduction automatique ni frais caché',
    "Regardez sur un nombre illimité d'appareils à la fois",
    '150 000+ films et séries à la demande',
    'EPG (guide électronique des programmes) inclus',
    'Fonction Catch-up TV pour les programmes manqués',
    'Chaînes sportives premium (beIN Sports, Canal+ Sport)',
    'Chaînes arabes, turques et internationales'
  ];

  const steps = [
    {
      number: '1',
      title: 'Choisissez votre abonnement',
      description: 'Sélectionnez un <link-prijzen>abonnement IPTV</link-prijzen> qui vous convient : 3, 6 ou 12 mois.'
    },
    {
      number: '2',
      title: 'Payez en toute sécurité',
      description: 'Payez simplement et en toute sécurité par carte bancaire, PayPal ou virement SEPA.'
    },
    {
      number: '3',
      title: 'Recevez vos identifiants',
      description: 'Sous 5 minutes, vous recevez vos identifiants personnels via WhatsApp.'
    },
    {
      number: '4',
      title: 'Commencez à regarder',
      description: "Installez l'<link-apparaten>application IPTV sur votre appareil</link-apparaten> et connectez-vous. C'est prêt !"
    }
  ];

  return (
    <>
      <SEO
        title="Acheter IPTV en France | Abonnement IPTV Premium dès 55€/an - France IPTV"
        description="Acheter IPTV en France ? Choisissez France IPTV pour 30 500+ chaînes, qualité 4K, support francophone 24/7. Aucune reconduction automatique. Commandez directement par CB."
        keywords="acheter iptv, acheter iptv france, acheter abonnement iptv, fournisseur iptv, iptv français"
        canonicalPath="/acheter-iptv"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=65&w=1200"
              alt="Acheter IPTV en France"
              className="w-full h-full object-cover"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#141311]/95 via-[#191613]/85 to-[#33518C]/60"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Acheter IPTV en France
                <br />
                <span className="text-[#7B9FD9]">Fiable & Abordable</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl">
                Vous cherchez où <strong>acheter IPTV</strong> en France ? France IPTV est LE fournisseur IPTV fiable avec 30 500+ chaînes, qualité 4K et support francophone. Aucune reconduction automatique, paiement par CB possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/tarifs"
                  className="btn-primary text-center"
                >
                  Voir les Tarifs de l'Abonnement IPTV
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-transparent border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 text-center"
                >
                  <FaWhatsapp className="inline mr-2" />
                  Commander via WhatsApp
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose France IPTV */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                Pourquoi acheter IPTV chez France IPTV ?
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                Si vous cherchez un <Link to="/abonnement-iptv" className="text-brand-gold hover:text-[#2B4577] underline">abonnement IPTV fiable</Link>, vous êtes au bon endroit.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-brand-gray-border rounded-xl p-6 hover:border-brand-gold transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-gold to-[#2B4577] flex items-center justify-center mb-4">
                    <benefit.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-gray">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-brand-black mb-6">
                  Que recevez-vous en achetant un abonnement IPTV ?
                </h2>
                <p className="text-brand-gray text-lg mb-8">
                  Chez France IPTV, vous accédez à l'offre IPTV la plus complète de France. Découvrez <Link to="/chaines" className="text-brand-gold hover:text-[#2B4577] underline">toutes les chaînes IPTV disponibles</Link> et plus encore.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-brand-gray">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800"
                  alt="Fonctionnalités de l'abonnement IPTV"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-white to-brand-offwhite">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                Comment acheter IPTV chez France IPTV ?
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                En 4 étapes simples, commencez à regarder
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white border border-brand-gray-border rounded-xl p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-gold to-[#2B4577] flex items-center justify-center mb-4 text-white text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-brand-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-brand-gray">
                      {step.description.includes('<link-prijzen>') ? (
                        <>
                          {step.description.split('<link-prijzen>')[0]}
                          <Link to="/tarifs" className="text-brand-gold hover:text-[#2B4577] underline">
                            {step.description.split('<link-prijzen>')[1].split('</link-prijzen>')[0]}
                          </Link>
                          {step.description.split('</link-prijzen>')[1]}
                        </>
                      ) : step.description.includes('<link-apparaten>') ? (
                        <>
                          {step.description.split('<link-apparaten>')[0]}
                          <Link to="/appareils" className="text-brand-gold hover:text-[#2B4577] underline">
                            {step.description.split('<link-apparaten>')[1].split('</link-apparaten>')[0]}
                          </Link>
                          {step.description.split('</link-apparaten>')[1]}
                        </>
                      ) : step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 text-brand-gold text-3xl">→</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-brand-gold to-[#2B4577] rounded-2xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Prêt à acheter votre IPTV ?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Choisissez le <Link to="/abonnement-iptv" className="text-white underline font-semibold">meilleur abonnement IPTV pour la France</Link> et commencez à regarder sous 5 minutes. À partir de seulement 55 € par an.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/tarifs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-gold font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
                >
                  Voir Tous les Tarifs
                </Link>
                <Link
                  to="/faq"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-900 transition-all"
                >
                  Questions Fréquentes
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVKopen;
