import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  MapPin,
  Globe,
  Tv,
  Check,
  Star,
  Users,
  Shield,
  Zap,
  Award,
  TrendingUp,
  Heart,
  Phone
} from 'lucide-react';

import LightweightBackground from "../components/LightweightBackground";

const IPTVHolland = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Pourquoi choisir France IPTV pour l\'IPTV en Belgique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "France IPTV dessert aussi la Belgique francophone. Nous proposons les chaînes belges, le paiement par Bancontact, un support francophone et des serveurs optimisés pour la Belgique. Avec 15 000+ clients satisfaits dans l'espace francophone, nous sommes un choix fiable pour l'IPTV en Belgique."
        }
      },
      {
        '@type': 'Question',
        name: 'Quelles chaînes belges ai-je avec IPTV Belgique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vous recevez toutes les chaînes belges populaires comme La Une, La Deux, La Trois, RTL-TVI, Club RTL, Plug RTL, AB3, AB4, et bien plus encore. Les chaînes françaises et internationales sont également disponibles. Au total, plus de 25 000 chaînes incluant tout le contenu francophone.'
        }
      },
      {
        '@type': 'Question',
        name: 'IPTV Belgique fonctionne-t-il partout en Belgique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, notre service IPTV fonctionne partout en Belgique dès que vous avez une connexion internet. Que vous soyez à Bruxelles, Liège, Charleroi, Namur ou dans une petite commune - France IPTV fonctionne parfaitement. Nous avons des serveurs en Europe pour une vitesse optimale en Belgique."
        }
      },
      {
        '@type': 'Question',
        name: 'Puis-je payer par Bancontact ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, France IPTV accepte Bancontact, le moyen de paiement le plus utilisé en Belgique. Nous acceptons également la carte bancaire et d'autres moyens de paiement européens. Le paiement est sécurisé et réglé en moins d'une minute."
        }
      },
      {
        '@type': 'Question',
        name: "L'IPTV est-il légal en Belgique ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'utilisation de la technologie IPTV elle-même est parfaitement légale en Belgique. France IPTV propose un service IPTV légal avec du contenu officiel et des licences payées. Nous opérons conformément à la réglementation européenne."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://franceiptv.stream'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'IPTV Belgique',
        item: 'https://franceiptv.stream/iptv-belgique'
      }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'IPTV Belgique - Fournisseur IPTV Francophone | France IPTV',
    description: "IPTV Belgique : 15 000+ clients francophones ✓ Chaînes belges ✓ Paiement Bancontact ✓ Serveurs en Europe ✓ Support francophone. Dès 4€/mois.",
    url: 'https://franceiptv.stream/iptv-belgique'
  };

  const benefits = [
    {
      icon: MapPin,
      title: 'Au Service de la Belgique',
      description: 'Fournisseur francophone, service francophone, garanties francophones'
    },
    {
      icon: Globe,
      title: 'Serveurs en Europe',
      description: 'Connexion ultra-rapide dans toute la Belgique, aucune coupure'
    },
    {
      icon: Tv,
      title: '25 000+ Chaînes',
      description: 'Toutes les chaînes belges, françaises et internationales'
    },
    {
      icon: Shield,
      title: 'Paiement Bancontact',
      description: 'Payez en toute sécurité avec le moyen de paiement le plus utilisé en Belgique'
    },
    {
      icon: Users,
      title: '15 000+ Clients Francophones',
      description: 'Un service de référence avec la plus haute satisfaction client'
    },
    {
      icon: Zap,
      title: '99,9 % de Disponibilité',
      description: 'Un service fiable qui fonctionne toujours quand vous en avez besoin'
    }
  ];

  const belgianCities = [
    'Bruxelles', 'Liège', 'Charleroi', 'Namur', 'Mons',
    'Tournai', 'La Louvière', 'Verviers', 'Mouscron', 'Wavre',
    'Arlon', 'Ottignies', 'Nivelles', 'Huy', 'Dinant'
  ];

  const belgianChannels = [
    { name: 'La Une', category: 'Chaîne publique' },
    { name: 'La Deux', category: 'Chaîne publique' },
    { name: 'La Trois', category: 'Chaîne publique' },
    { name: 'RTL-TVI', category: 'Commerciale' },
    { name: 'Club RTL', category: 'Commerciale' },
    { name: 'Plug RTL', category: 'Commerciale' },
    { name: 'AB3', category: 'Commerciale' },
    { name: 'AB4', category: 'Commerciale' },
    { name: 'La Trois', category: 'Culture' },
    { name: 'BX1', category: 'Régionale' },
    { name: 'Fox', category: 'Commerciale' },
    { name: 'Comedy Central', category: 'Divertissement' },
    { name: 'beIN Sports', category: 'Sport' },
    { name: 'ESPN', category: 'Sport' },
    { name: 'Discovery Channel', category: 'Documentaire' },
    { name: 'National Geographic', category: 'Documentaire' }
  ];

  const pricingOptions = [
    {
      duration: '1 Mois',
      price: '23 €',
      features: [
        'Toutes les 25 000+ chaînes',
        'Chaînes belges en HD/4K',
        'Paiement Bancontact',
        'Sans engagement',
        '99,9 % de disponibilité garantie',
        'Support francophone 24/7'
      ],
      popular: false
    },
    {
      duration: '3 Mois',
      price: '45 €',
      pricePerMonth: '15 €/mois',
      savings: 'Économisez 24 €',
      features: [
        'Toutes les 25 000+ chaînes',
        'Chaînes belges en HD/4K',
        'Paiement Bancontact',
        'Sans engagement',
        '99,9 % de disponibilité garantie',
        'Support francophone 24/7',
        'Support prioritaire'
      ],
      popular: true
    },
    {
      duration: '12 Mois',
      price: '120 €',
      pricePerMonth: '10 €/mois',
      savings: 'Économisez 156 €',
      features: [
        'Toutes les 25 000+ chaînes',
        'Chaînes belges en HD/4K',
        'Paiement Bancontact',
        'Sans engagement',
        '99,9 % de disponibilité garantie',
        'Support francophone 24/7',
        'Support VIP',
        'Appareil supplémentaire offert'
      ],
      popular: false
    }
  ];

  const whyChooseHolland = [
    {
      icon: Award,
      title: 'Référence chez les Francophones',
      description: "Avec 15 000+ clients satisfaits, nous sommes l'un des plus grands fournisseurs IPTV pour le public francophone. Notre expérience garantit le meilleur service."
    },
    {
      icon: TrendingUp,
      title: 'Optimal pour les Opérateurs Belges',
      description: "Nos serveurs sont optimisés pour Proximus, Telenet, VOO et tous les autres fournisseurs internet belges. Cela signifie un streaming plus rapide et moins de coupures."
    },
    {
      icon: Heart,
      title: 'Contenu Francophone en Priorité',
      description: "Nous comprenons ce que veulent les téléspectateurs francophones : football, Formule 1, films et séries francophones, chaînes régionales - tout est disponible en qualité optimale."
    },
    {
      icon: Shield,
      title: 'Conforme à la Réglementation',
      description: "Nous respectons l'ensemble de la réglementation européenne applicable. Vous achetez auprès d'un fournisseur fiable et légal."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>IPTV Belgique - Fournisseur IPTV Francophone dès 4€/mois | France IPTV</title>
        <meta
          name="description"
          content="IPTV Belgique : 15 000+ clients francophones ✓ Chaînes belges (La Une, RTL-TVI, Club RTL) ✓ Paiement Bancontact ✓ Serveurs en Europe ✓ Support francophone. Dès 4€/mois."
        />
        <meta
          name="keywords"
          content="iptv belgique, iptv belge, iptv bruxelles, iptv liege, iptv wallonie, iptv francophone, iptv bancontact"
        />
        <link rel="canonical" href="https://franceiptv.stream/iptv-belgique" />

        {/* Open Graph */}
        <meta property="og:title" content="IPTV Belgique - Fournisseur IPTV Francophone | France IPTV" />
        <meta property="og:description" content="15 000+ clients francophones ✓ Toutes les chaînes belges ✓ Paiement Bancontact ✓ 99,9 % de disponibilité. Dès 4€/mois." />
        <meta property="og:url" content="https://franceiptv.stream/iptv-belgique" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV Belgique - Fournisseur IPTV Francophone" />
        <meta name="twitter:description" content="15 000+ clients ✓ Chaînes belges ✓ Paiement Bancontact ✓ 99,9 % de disponibilité" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#141311] via-[#141311] to-[#141311]">
        {/* Animated Background */}
        <Suspense fallback={null}>
          <LightweightBackground variant="hero" />
        </Suspense>

        <div className="absolute inset-0 bg-black/30" />

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
            >
              <MapPin className="w-5 h-5 text-[#7B9FD9]" />
              <span className="font-medium">Au service de la Belgique francophone</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              IPTV Belgique
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7B9FD9] to-purple-400 mt-2">
                Fournisseur Francophone
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              15 000+ clients satisfaits dans l'espace francophone. Toutes les chaînes belges, paiement Bancontact,
              serveurs en Europe et service client francophone 24/7. Dès 10€/mois.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <Users className="w-8 h-8 text-[#7B9FD9] mx-auto mb-2" />
                <div className="text-3xl font-bold">15 000+</div>
                <div className="text-sm text-gray-300">Clients francophones</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <Tv className="w-8 h-8 text-[#7B9FD9] mx-auto mb-2" />
                <div className="text-3xl font-bold">25 000+</div>
                <div className="text-sm text-gray-300">Chaînes</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <Zap className="w-8 h-8 text-[#7B9FD9] mx-auto mb-2" />
                <div className="text-3xl font-bold">99,9 %</div>
                <div className="text-sm text-gray-300">Disponibilité</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <Star className="w-8 h-8 text-[#7B9FD9] mx-auto mb-2" />
                <div className="text-3xl font-bold">4,9/5</div>
                <div className="text-sm text-gray-300">Note client</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20IPTV%20Belgique"
                className="group bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Commander via WhatsApp
              </a>
              <a
                href="/tarifs"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Voir les Tarifs
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
              Pourquoi <span className="text-brand-gold">France IPTV</span> ?
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Le fournisseur IPTV francophone choisi par 15 000+ clients
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-[#2B4577] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-black">{benefit.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
              L'IPTV pensé pour la <span className="text-brand-gold">Belgique</span>
            </h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              En tant que fournisseur francophone, nous comprenons le mieux ce marché.
              Notre service est entièrement pensé pour les téléspectateurs francophones.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChooseHolland.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-brand-gray-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-[#2B4577] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-brand-black">{item.title}</h3>
                      <p className="text-brand-gray leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Belgian Channels Section */}
      <section className="py-20 bg-gradient-to-br from-[#141311] to-[#201C18] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Toutes les <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B9FD9] to-purple-400">Chaînes Belges</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              La Une, RTL-TVI, Club RTL et plus - toutes les chaînes que vous connaissez et appréciez
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
            {belgianChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex items-center justify-between"
              >
                <div>
                  <div className="font-semibold">{channel.name}</div>
                  <div className="text-sm text-gray-400">{channel.category}</div>
                </div>
                <Check className="w-5 h-5 text-green-400" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-300 mb-6">
              + 25 000 chaînes supplémentaires de Belgique, France, Europe et du monde entier
            </p>
            <a
              href="/chaines"
              className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Voir la Liste Complète des Chaînes
            </a>
          </motion.div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
              Disponible dans <span className="text-brand-gold">toute la Belgique</span>
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Des grandes villes aux petites communes - France IPTV fonctionne partout où vous avez internet
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {belgianCities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-r from-brand-gold to-[#2B4577] text-white px-6 py-3 rounded-full font-medium shadow-lg"
              >
                {city}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-brand-gray mt-8 text-lg"
          >
            Et bien d'autres villes et communes dans toute la Belgique
          </motion.p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
              Des Prix <span className="text-brand-gold">Justes et Transparents</span>
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Aucun frais caché, payez en toute sécurité par Bancontact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white border border-brand-gray-border rounded-2xl p-8 shadow-lg ${
                  option.popular ? 'ring-4 ring-brand-gold scale-105' : ''
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-white px-6 py-2 rounded-full font-semibold text-sm">
                    Le Plus Choisi
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-brand-black">{option.duration}</h3>
                  <div className="text-5xl font-bold text-brand-gold mb-2">
                    {option.price}
                  </div>
                  {option.pricePerMonth && (
                    <div className="text-brand-gray">{option.pricePerMonth}</div>
                  )}
                  {option.savings && (
                    <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mt-2">
                      {option.savings}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-brand-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20le%20forfait%20${option.duration}`}
                  className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    option.popular
                      ? 'bg-brand-gold text-white hover:shadow-xl'
                      : 'bg-brand-black text-white hover:bg-brand-black/80'
                  }`}
                >
                  Commander via WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
              Questions <span className="text-brand-gold">Fréquentes</span>
            </h2>
            <p className="text-xl text-brand-gray">
              Tout ce que vous devez savoir sur l'IPTV en Belgique
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-offwhite rounded-2xl p-8 border border-brand-gray-border"
              >
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3 text-brand-black">
                  <span className="text-brand-gold flex-shrink-0">Q :</span>
                  {faq.name}
                </h3>
                <p className="text-brand-gray leading-relaxed pl-8">
                  {faq.acceptedAnswer.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-brand-gray mb-6">Vous avez d'autres questions ?</p>
            <a
              href="/faq"
              className="inline-block bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Voir Toutes les Questions Fréquentes
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-gold via-purple-600 to-[#141311] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Rejoignez 15 000+ clients francophones
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Démarrez dès aujourd'hui avec le meilleur service IPTV francophone.
              Commandez en 1 minute via WhatsApp avec paiement Bancontact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20IPTV%20Belgique"
                className="group bg-white text-brand-gold px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Commander via WhatsApp
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="/tarifs"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Voir les Tarifs
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Paiement Bancontact</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Actif immédiatement</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Support francophone 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-12 bg-[#141311] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#7B9FD9]">15 000+</div>
              <div className="text-sm text-gray-400">Clients satisfaits</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-700" />
            <div>
              <div className="text-3xl font-bold text-[#7B9FD9]">99,9 %</div>
              <div className="text-sm text-gray-400">Disponibilité garantie</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-700" />
            <div>
              <div className="text-3xl font-bold text-[#7B9FD9]">24/7</div>
              <div className="text-sm text-gray-400">Support francophone</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-700" />
            <div>
              <div className="text-3xl font-bold text-[#7B9FD9]">4,9/5</div>
              <div className="text-sm text-gray-400">Note client</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IPTVHolland;
