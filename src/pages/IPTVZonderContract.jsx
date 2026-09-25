import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiShield, FiClock, FiDollarSign, FiHeart } from 'react-icons/fi';

import LightweightBackground from "../components/LightweightBackground";

const IPTVZonderContract = () => {
  const noContractSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'IPTV Sans Engagement - Flexible & Sans Obligation',
    description: "IPTV sans engagement dès 8€. Aucune reconduction automatique, aucun préavis. Arrêtez quand vous voulez. Paiement Binance Pay ou PayPal. Commandez sans obligation.",
    url: 'https://franceiptv.stream/iptv-sans-engagement',
    provider: {
      '@type': 'Organization',
      name: 'France IPTV'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Que signifie IPTV sans engagement ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "IPTV sans engagement signifie que vous ne contractez aucune obligation de longue durée. Chez France IPTV, vous achetez l'IPTV pour 1, 3, 6 ou 12 mois. À l'issue de cette période, l'abonnement s'arrête automatiquement - aucune reconduction, aucun préavis, aucune surprise."
        }
      },
      {
        '@type': 'Question',
        name: 'Dois-je résilier chez France IPTV ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, la résiliation n'est pas nécessaire. Votre abonnement s'arrête automatiquement à la fin de la période choisie (1, 3, 6 ou 12 mois). Vous souhaitez renouveler ? Vous pouvez le faire facilement, mais cela ne se fait jamais automatiquement."
        }
      },
      {
        '@type': 'Question',
        name: 'Puis-je arrêter en cours de route ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Vous payez une seule fois pour la période choisie. Un arrêt anticipé n'est pas possible, mais vous n'êtes pas non plus lié à une reconduction automatique. Choisissez donc la période qui vous convient : 1 mois pour tester, ou 12 mois pour le meilleur prix."
        }
      },
      {
        '@type': 'Question',
        name: "Quelle est la différence avec un contrat IPTV classique ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les fournisseurs IPTV traditionnels imposent souvent un contrat de 12-24 mois avec reconduction automatique. France IPTV fonctionne sans engagement : payez une fois, profitez de l'IPTV, et l'abonnement s'arrête automatiquement. Aucune facture surprise, aucun préavis d'un mois."
        }
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Accueil', url: 'https://franceiptv.stream' },
    { name: 'IPTV Sans Engagement', url: 'https://franceiptv.stream/iptv-sans-engagement' }
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };

  const benefits = [
    {
      icon: <FiX className="w-8 h-8" />,
      title: 'Aucune Reconduction Automatique',
      description: "Votre abonnement s'arrête automatiquement à la fin de la période choisie. Aucune surprise, aucun tracas."
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Aucun Préavis',
      description: "La résiliation n'est même pas nécessaire. Après 1, 3, 6 ou 12 mois, tout s'arrête tout seul."
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: 'Payez Seulement Ce Que Vous Utilisez',
      description: 'Paiement unique par Binance Pay ou PayPal. Aucun prélèvement mensuel, aucun frais caché.'
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Contrôle Total',
      description: "C'est vous qui décidez si et quand vous renouvelez. Nous ne forçons rien, nous livrons simplement un service de qualité."
    }
  ];

  const comparison = [
    { feature: 'Durée', streamHolland: 'Choisissez 1, 3, 6 ou 12 mois', traditional: '12-24 mois obligatoires' },
    { feature: 'Reconduction automatique', streamHolland: 'Non, jamais', traditional: 'Oui, par défaut' },
    { feature: 'Préavis', streamHolland: 'Non nécessaire', traditional: '1 mois à l\'avance' },
    { feature: 'Oublié de résilier ?', streamHolland: 'Aucun problème !', traditional: 'Encore un an de bloqué' },
    { feature: 'Paiement', streamHolland: 'Unique par Binance Pay/PayPal', traditional: 'Mensuel automatique' },
    { feature: 'Flexibilité', streamHolland: 'Maximale', traditional: 'Limitée' },
    { feature: 'Frais cachés', streamHolland: 'Aucun', traditional: 'Frais d\'activation, de gestion' },
    { feature: 'Prix', streamHolland: '8 € le mois, 45 € l’année', traditional: 'Souvent 20 à 60 €/mois' }
  ];

  const pricingOptions = [
    {
      period: '1 Mois',
      total: '8 €',
      monthly: 'Paiement unique',
      description: 'Parfait pour tester',
      popular: false
    },
    {
      period: '3 Mois',
      total: '19,99 €',
      monthly: 'Paiement unique',
      description: 'Sans engagement',
      popular: false
    },
    {
      period: '6 Mois',
      total: '30 €',
      monthly: 'Paiement unique',
      description: 'Bon rapport qualité-prix',
      popular: false
    },
    {
      period: '12 Mois',
      total: '45 €',
      monthly: 'Paiement unique',
      description: 'Meilleure offre !',
      popular: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>IPTV Sans Engagement : Aucune Obligation dès 8€ | France IPTV</title>
        <meta
          name="description"
          content="IPTV sans engagement dès 8€. Aucune reconduction automatique, arrêtez quand vous voulez. 30 500+ chaînes, paiement Binance Pay ou PayPal."
        />
        <meta
          name="keywords"
          content="iptv sans engagement, iptv sans contrat, iptv prépayé, iptv flexible, sans abonnement, iptv résiliable"
        />
        <link rel="canonical" href="https://franceiptv.stream/iptv-sans-engagement" />

        {/* Open Graph */}
        <meta property="og:title" content="IPTV Sans Engagement - Aucune Obligation | France IPTV" />
        <meta property="og:description" content="IPTV sans engagement dès 8 €. Aucune reconduction automatique, aucun préavis. Commandez sans obligation." />
        <meta property="og:url" content="https://franceiptv.stream/iptv-sans-engagement" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(noContractSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Animated Background */}
          <Suspense fallback={null}>
            <LightweightBackground variant="hero" />
          </Suspense>

          <div className="absolute inset-0 bg-gradient-to-r from-[#090B0B] via-[#0D0F0F] to-[#1E3314]"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto relative z-10"
          >
            <div className="text-center mb-12">
              <span className="inline-block bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✓ 100% Sans Obligation
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                IPTV Sans Engagement{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 mt-2">
                  Flexible & Sans Obligation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Aucune reconduction automatique. Aucun préavis. Aucun tracas.<br/>
                <span className="text-white font-semibold">Arrêtez quand vous voulez - en fait, ça s'arrête tout seul.</span>
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a
                  href="https://wa.me/18653169315?text=Je%20souhaite%20commander%20IPTV%20sans%20engagement"
                  className="bg-brand-gold hover:bg-[#C4FF86] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Commander Sans Engagement via WhatsApp
                </a>
                <Link
                  to="/tarifs"
                  className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Voir les Tarifs
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-green-300">
                  <FiCheck className="w-5 h-5" />
                  <span>Actif en 5 min</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <FiCheck className="w-5 h-5" />
                  <span>Paiement Binance Pay ou PayPal</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <FiCheck className="w-5 h-5" />
                  <span>30 500+ chaînes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Pourquoi Sans Engagement Section */}
        <section className="py-16 px-4 bg-brand-offwhite">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-black mb-12 text-center">
              Pourquoi l'IPTV Sans Engagement ?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-brand-gray-border hover:border-brand-gold transition-all duration-300"
                >
                  <div className="text-brand-gold mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-3">{benefit.title}</h3>
                  <p className="text-brand-gray">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-black mb-12 text-center">
              Comment Ça Marche ?
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Choisissez Votre Période',
                  description: 'Sélectionnez 1, 3, 6 ou 12 mois. Plus la durée est longue, plus le prix mensuel est bas. Mais même 3 mois ne vous engage à rien.'
                },
                {
                  step: '2',
                  title: 'Payez en Une Seule Fois',
                  description: 'Paiement sécurisé par Binance Pay ou PayPal. Une seule fois, et c\'est réglé. Aucun prélèvement automatique, aucun débit mensuel.'
                },
                {
                  step: '3',
                  title: 'Profitez de 30 500+ Chaînes',
                  description: 'Actif en 5 minutes. Regardez sur tous vos appareils. Qualité 4K. Support francophone 24/7.'
                },
                {
                  step: '4',
                  title: "L'Abonnement S'arrête Automatiquement",
                  description: "Après 1, 3, 6 ou 12 mois, tout s'arrête tout seul. Aucun préavis, aucune reconduction, aucune surprise. Vous voulez renouveler ? C'est toujours possible, mais cela ne se fait jamais automatiquement."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 bg-brand-offwhite p-6 rounded-xl border border-brand-gray-border"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-black mb-2">{item.title}</h3>
                    <p className="text-brand-gray">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-brand-offwhite">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-black mb-4 text-center">
              France IPTV vs Contrats IPTV Traditionnels
            </h2>
            <p className="text-brand-gray text-center mb-12 text-lg">
              Voyez la différence entre liberté et engagement
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden border border-brand-gray-border">
                <thead>
                  <tr className="bg-surface-2">
                    <th className="px-6 py-4 text-left text-white font-bold">Caractéristique</th>
                    <th className="px-6 py-4 text-center text-white font-bold">
                      <div className="flex items-center justify-center gap-2">
                        <FiShield className="w-5 h-5 text-green-400" />
                        France IPTV
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-white font-bold">IPTV Traditionnel</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-t border-brand-gray-border hover:bg-brand-offwhite transition-colors">
                      <td className="px-6 py-4 text-brand-gray font-medium">{item.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-2 text-green-600 font-semibold">
                          <FiCheck className="w-5 h-5" />
                          {item.streamHolland}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-2 text-red-500">
                          <FiX className="w-5 h-5" />
                          {item.traditional}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-black mb-4 text-center">
              Choisissez Votre Période - Sans Engagement
            </h2>
            <p className="text-brand-gray text-center mb-12 text-lg">
              Payez une fois, profitez de l'IPTV, l'abonnement s'arrête automatiquement
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-brand-offwhite p-8 rounded-xl border-2 ${
                    option.popular ? 'border-brand-gold' : 'border-brand-gray-border'
                  } hover:border-brand-gold transition-all duration-300`}
                >
                  {option.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold">
                        LE PLUS CHOISI
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-brand-black mb-2">{option.period}</h3>
                    <p className="text-brand-gray mb-4">{option.description}</p>
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-brand-gold">
                        {option.total}
                      </div>
                      <div className="text-brand-gray mt-2">
                        {option.monthly}
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/18653169315?text=Je%20souhaite%20commander%20le%20forfait%20${option.period}%20sans%20engagement`}
                      className={`block w-full py-3 rounded-full font-bold transition-all duration-300 ${
                        option.popular
                          ? 'bg-brand-gold hover:bg-[#C4FF86] text-white'
                          : 'bg-surface-2 hover:bg-surface-2/80 text-white'
                      }`}
                    >
                      Commander via WhatsApp
                    </a>

                    <div className="mt-4 text-xs text-brand-gray">
                      Aucune reconduction • S'arrête automatiquement
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-brand-gray mb-4">
                💡 <strong className="text-brand-black">Astuce :</strong> Choisissez 12 mois pour le meilleur prix (45 € payés une fois), en sachant que même après 12 mois, vous n'êtes engagé à rien.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-brand-offwhite">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-black mb-12 text-center">
              Questions Fréquentes
            </h2>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-brand-gray-border"
                >
                  <h3 className="text-xl font-bold text-brand-black mb-3">{faq.name}</h3>
                  <p className="text-brand-gray">{faq.acceptedAnswer.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-brand-black mb-6">
              Pourquoi les Clients Choisissent France IPTV
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Un service sans engagement : test gratuit 24 h, puis dès 8 €
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-brand-offwhite p-6 rounded-xl border border-brand-gray-border">
                <div className="text-4xl font-bold text-brand-gold mb-2">24 h</div>
                <div className="text-brand-gray">Test gratuit</div>
              </div>
              <div className="bg-brand-offwhite p-6 rounded-xl border border-brand-gray-border">
                <div className="text-4xl font-bold text-brand-gold mb-2">99,9 %</div>
                <div className="text-brand-gray">Disponibilité Garantie</div>
              </div>
              <div className="bg-brand-offwhite p-6 rounded-xl border border-brand-gray-border">
                <div className="text-4xl font-bold text-brand-gold mb-2">24/7</div>
                <div className="text-brand-gray">Support Francophone</div>
              </div>
            </div>

            <a
              href="https://wa.me/18653169315?text=Je%20souhaite%20commander%20IPTV%20sans%20engagement"
              className="inline-block bg-brand-gold hover:bg-[#C4FF86] text-white px-12 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Commencer Maintenant Sans Engagement
            </a>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 px-4 bg-brand-offwhite">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-black mb-8 text-center">
              Plus d'Informations
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <Link to="/acheter-iptv" className="bg-surface-2 hover:bg-surface-2/80 p-4 rounded-lg text-white text-center transition-colors">
                Acheter IPTV
              </Link>
              <Link to="/tarifs" className="bg-surface-2 hover:bg-surface-2/80 p-4 rounded-lg text-white text-center transition-colors">
                Voir les Tarifs
              </Link>
              <Link to="/appareils" className="bg-surface-2 hover:bg-surface-2/80 p-4 rounded-lg text-white text-center transition-colors">
                Appareils Compatibles
              </Link>
              <Link to="/faq" className="bg-surface-2 hover:bg-surface-2/80 p-4 rounded-lg text-white text-center transition-colors">
                Toutes les FAQ
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVZonderContract;
