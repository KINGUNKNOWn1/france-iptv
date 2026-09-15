import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCrown, FaPlay, FaTv, FaUsers, FaHeadset } from 'react-icons/fa';
import SEO from '../components/SEO';
import Pricing from '../components/Pricing';

const IPTVAbonnement = () => {
  const features = [
    {
      icon: <FaTv className="text-4xl text-blue-500" />,
      title: "30 500+ Chaînes en Direct",
      description: "Toutes les chaînes françaises, internationales, sportives, films et séries"
    },
    {
      icon: <FaPlay className="text-4xl text-green-500" />,
      title: "150 000+ Titres VOD",
      description: "Films et séries à la demande en qualité HD/UHD/4K"
    },
    {
      icon: <FaUsers className="text-4xl text-purple-500" />,
      title: "Multi-appareils",
      description: "Regardez sur un nombre illimité d'appareils à la fois"
    },
    {
      icon: <FaHeadset className="text-4xl text-orange-500" />,
      title: "Support Francophone 24/7",
      description: "Toujours joignable via WhatsApp et e-mail"
    }
  ];

  const plans = [
    {
      duration: "1 Mois",
      price: "8 €",
      perMonth: "8,00 €/mois",
      popular: false
    },
    {
      duration: "3 Mois",
      price: "23 €",
      perMonth: "7,67 €/mois",
      popular: false
    },
    {
      duration: "6 Mois",
      price: "32 €",
      perMonth: "5,33 €/mois",
      popular: false
    },
    {
      duration: "12 Mois",
      price: "55 €",
      perMonth: "4,58 €/mois",
      popular: true,
      savings: "Économisez 37 €"
    }
  ];

  const benefits = [
    "Aucun frais caché ni supplément",
    "Aucune reconduction automatique - contrôle total",
    "Actif en 5 minutes après le paiement",
    "Garantie satisfait ou remboursé 14 jours",
    "Paiement sécurisé par CB, PayPal ou SEPA",
    "Disponibilité stable de 99,9 %",
    "Qualité HD, UHD et 4K",
    "Chaînes françaises, arabes, turques et internationales",
    "EPG (guide électronique des programmes) inclus",
    "Mises à jour régulières avec de nouveaux contenus"
  ];

  return (
    <>
      <SEO
        title="Abonnement IPTV France | 30 500+ Chaînes dès 8€"
        description="Découvrez notre abonnement IPTV complet : 30 500+ chaînes en direct, 150 000+ films et séries, qualité 4K, support francophone 24/7. Dès 8€ sans engagement."
        keywords="abonnement iptv, abonnement iptv france, meilleur abonnement iptv, iptv premium"
        canonicalPath="/abonnement-iptv"
      />
      <div className="min-h-screen bg-white text-brand-black pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#141311] via-[#201C18] to-[#141311] text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Acheter un Abonnement IPTV
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Le meilleur <strong>abonnement IPTV</strong> de France. 30 500+ chaînes, 150 000+ films et séries.
                À partir de 4,58 € par mois. Aucune reconduction automatique.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#pricing"
                  className="px-8 py-4 bg-brand-gold hover:bg-[#2B4577] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Voir les Abonnements
                </a>
                <a
                  href="https://wa.me/18653169315"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Commander Directement via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Que Recevez-Vous avec Notre <span className="text-brand-gold">Abonnement IPTV</span> ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg text-center border border-brand-gray-border hover:border-brand-gold transition-all"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-black">{feature.title}</h3>
                  <p className="text-brand-gray">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans Comparison */}
        <section className="py-20 bg-white" id="pricing">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-brand-black">
              Choisissez Votre <span className="text-brand-gold">Abonnement IPTV</span>
            </h2>
            <p className="text-center text-brand-gray mb-12 text-lg">
              Tous les abonnements incluent la même offre. Choisissez uniquement la durée qui vous convient.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-brand-offwhite border border-brand-gray-border rounded-xl p-8 relative ${
                    plan.popular ? 'border-2 border-blue-500 shadow-lg shadow-blue-500/20' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <FaCrown /> LE PLUS CHOISI
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 text-brand-black">{plan.duration}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-brand-gold">{plan.price}</span>
                      <p className="text-brand-gray mt-2">{plan.perMonth}</p>
                    </div>

                    {plan.savings && (
                      <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg mb-4 font-semibold">
                        {plan.savings}
                      </div>
                    )}

                    <a
                      href="https://wa.me/18653169315"
                      className={`block w-full py-3 rounded-lg font-semibold transition-all ${
                        plan.popular
                          ? 'bg-brand-gold hover:bg-[#2B4577] text-white'
                          : 'bg-brand-black text-white hover:bg-brand-black/80'
                      }`}
                    >
                      Commander Maintenant
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Pourquoi Choisir l'<span className="text-brand-gold">Abonnement France IPTV</span> ?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 bg-white border border-brand-gray-border p-4 rounded-lg"
                >
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                  <span className="text-brand-gray">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-brand-gold to-purple-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Commencez Aujourd'hui Votre Abonnement IPTV
              </h3>
              <p className="text-lg mb-6 opacity-90 text-white">
                Actif en 5 minutes. Garantie satisfait ou remboursé 14 jours. Sans risque.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/tarifs"
                  className="px-8 py-3 bg-white text-brand-gold font-semibold rounded-lg hover:bg-blue-50 transition-all"
                >
                  Voir Tous les Tarifs
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-gold transition-all"
                >
                  Des Questions ? Contactez-Nous
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Questions Fréquentes sur les <span className="text-brand-gold">Abonnements IPTV</span>
            </h2>

            <div className="space-y-6">
              <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-brand-gold">
                  Quelle est la différence entre les abonnements ?
                </h3>
                <p className="text-brand-gray">
                  Tous les abonnements incluent exactement la même offre : 30 500+ chaînes et 150 000+ titres VOD.
                  La seule différence est la durée. Les abonnements plus longs sont moins chers par mois.
                </p>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-brand-gold">
                  Mon abonnement IPTV se renouvelle-t-il automatiquement ?
                </h3>
                <p className="text-brand-gray">
                  Non ! Chez France IPTV, il n'y a <strong>aucune reconduction automatique</strong>. Vous gardez le contrôle total.
                  Nous vous envoyons un rappel avant l'expiration de votre abonnement, et vous décidez ensuite vous-même si vous souhaitez le renouveler.
                </p>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-brand-gold">
                  En combien de temps mon abonnement IPTV est-il actif ?
                </h3>
                <p className="text-brand-gray">
                  Votre <Link to="/acheter-iptv" className="text-brand-gold hover:underline">abonnement IPTV</Link> est
                  <strong> actif en 5 minutes</strong> après le paiement par CB, PayPal ou SEPA. Vous recevez immédiatement vos identifiants par e-mail.
                </p>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-brand-gold">
                  Puis-je annuler mon abonnement IPTV ?
                </h3>
                <p className="text-brand-gray">
                  Durant les 14 premiers jours, nous offrons une <strong>garantie satisfait ou remboursé</strong>. Ensuite, votre abonnement
                  arrive automatiquement à échéance à la fin de la période choisie, sans reconduction.
                </p>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-brand-gold">
                  Sur combien d'appareils puis-je regarder ?
                </h3>
                <p className="text-brand-gray">
                  Avec un seul abonnement France IPTV, vous pouvez regarder sur un <strong>nombre illimité d'appareils à la fois</strong>.
                  Parfait pour les familles ! Découvrez tous les{' '}
                  <Link to="/appareils" className="text-brand-gold hover:underline">appareils pris en charge</Link>.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-brand-gray mb-4">D'autres questions sur les abonnements IPTV ?</p>
              <Link
                to="/faq"
                className="text-brand-gold hover:text-[#2B4577] font-semibold underline"
              >
                Voir toutes les questions fréquentes →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-offwhite to-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-black">
              Prêt à Commencer avec l'IPTV ?
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Choisissez votre <Link to="/abonnement-iptv" className="text-brand-gold underline font-semibold">abonnement IPTV</Link>,
              payez par CB, PayPal ou SEPA, et commencez à regarder sous 5 minutes.
            </p>
            <a
              href="https://wa.me/18653169315?text=Je%20souhaite%20commander%20un%20abonnement%20IPTV"
              className="inline-block px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Commander Maintenant via WhatsApp
            </a>
            <p className="text-sm text-brand-gray mt-4">
              Actif en 5 minutes • Garantie satisfait ou remboursé 14 jours • Aucune reconduction automatique
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVAbonnement;
