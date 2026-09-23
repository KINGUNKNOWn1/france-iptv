import React, { useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Tv,
  Download,
  Settings,
  Play,
  Check,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Wifi,
  Shield,
  Zap,
  Phone,
  ExternalLink,
  Cast
} from 'lucide-react';

import LightweightBackground from "../../components/LightweightBackground";

const Chromecast = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Installer l'IPTV sur Chromecast et Google TV",
    description: "Guide étape par étape pour regarder l'IPTV sur un Chromecast avec Google TV ou en cast depuis votre téléphone sur un Chromecast classique.",
    totalTime: 'PT5M',
    tool: [
      { '@type': 'HowToTool', name: 'Chromecast avec Google TV ou Chromecast classique' },
      { '@type': 'HowToTool', name: 'Connexion internet' },
      { '@type': 'HowToTool', name: 'Abonnement IPTV France IPTV' }
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Identifiez votre modèle de Chromecast',
        text: "Le Chromecast avec Google TV a une télécommande et une interface propre : il fonctionne comme un boîtier Android TV. Le Chromecast classique (sans télécommande) fonctionne uniquement en réception de « cast » depuis une autre application."
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: "Installez l'application (Google TV)",
        text: "Sur Chromecast avec Google TV : ouvrez le Play Store et installez « IPTV Smarters Pro » ou « TiviMate » directement."
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Ou utilisez le cast (Chromecast classique)',
        text: "Sur Chromecast classique : installez une application IPTV compatible Chromecast sur votre téléphone (ex. IPTV Smarters Pro), puis appuyez sur l'icône de cast pour envoyer le flux sur votre téléviseur."
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Activez votre abonnement',
        text: "Envoyez-nous votre adresse MAC (Google TV) via WhatsApp pour activation en moins d'une minute."
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Commencez à regarder',
        text: "Votre abonnement France IPTV est actif : profitez de 30 500+ chaînes en HD et 4K sur votre Chromecast."
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quelle est la différence entre Chromecast et Chromecast avec Google TV pour l'IPTV ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le Chromecast avec Google TV a sa propre interface et télécommande : vous installez une application IPTV directement depuis le Play Store, comme sur un Android TV classique. Le Chromecast classique (sans télécommande, plus ancien) ne fait que recevoir un flux « casté » depuis une application sur votre téléphone ou ordinateur : il faut alors une application IPTV compatible cast installée sur votre appareil mobile."
        }
      },
      {
        '@type': 'Question',
        name: "Quelles applications IPTV permettent le cast vers Chromecast ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "IPTV Smarters Pro et GSE Smart IPTV disposent d'un bouton de cast intégré sur mobile. Sur Chromecast avec Google TV, toute application IPTV du Play Store (IPTV Smarters Pro, TiviMate) fonctionne directement, sans passer par le cast."
        }
      },
      {
        '@type': 'Question',
        name: "L'IPTV rame ou se coupe sur mon Chromecast, que faire ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Vérifiez que votre Chromecast et votre téléphone (si vous castez) sont connectés au même réseau WiFi. Rapprochez le Chromecast de votre routeur ou utilisez un adaptateur Ethernet pour Chromecast avec Google TV. Vérifiez votre débit (10 Mbps minimum pour la HD, 25 Mbps pour la 4K)."
        }
      },
      {
        '@type': 'Question',
        name: "Le Chromecast avec Google TV supporte-t-il la 4K ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, le Chromecast avec Google TV (modèle 4K) prend en charge la 4K HDR nativement. Avec une connexion internet d'au moins 25 Mbps, vous profitez d'un contenu IPTV 4K cristallin sur votre téléviseur compatible."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://franceiptv.stream' },
      { '@type': 'ListItem', position: 2, name: 'Appareils', item: 'https://franceiptv.stream/appareils' },
      { '@type': 'ListItem', position: 3, name: 'Chromecast / Google TV', item: 'https://franceiptv.stream/appareils/chromecast-google-tv' }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: "Installer l'IPTV sur Chromecast et Google TV - Guide 2026",
    description: "Installez l'IPTV sur votre Chromecast avec Google TV, ou castez depuis votre téléphone sur un Chromecast classique.",
    url: 'https://franceiptv.stream/appareils/chromecast-google-tv'
  };

  const compatibleModels = [
    { series: 'Chromecast avec Google TV (4K)', supported: true, note: 'Application IPTV directe via Play Store' },
    { series: 'Chromecast avec Google TV (HD)', supported: true, note: 'Application IPTV directe via Play Store' },
    { series: 'Chromecast 3e génération (classique)', supported: true, note: 'Via cast depuis une application mobile' },
    { series: 'Chromecast 1ère/2e génération', supported: true, note: 'Via cast depuis une application mobile' },
    { series: 'Téléviseur avec Android TV / Google TV intégré', supported: true, note: 'Application IPTV directe' }
  ];

  const installationSteps = [
    {
      number: 1,
      title: 'Identifiez votre modèle',
      description: 'Chromecast avec Google TV (avec télécommande) : installation directe. Chromecast classique (sans télécommande) : fonctionne uniquement par cast depuis mobile.',
      icon: Tv,
      time: '30 secondes',
      difficulty: 'Facile'
    },
    {
      number: 2,
      title: "Installez l'application (Google TV)",
      description: 'Ouvrez le Play Store depuis votre Chromecast avec Google TV, recherchez « IPTV Smarters Pro » ou « TiviMate », puis installez.',
      icon: Download,
      time: '2 minutes',
      difficulty: 'Facile'
    },
    {
      number: 3,
      title: 'Ou castez depuis votre téléphone',
      description: "Sur Chromecast classique : installez une application IPTV compatible cast sur votre téléphone, ouvrez un flux, puis appuyez sur l'icône de cast pour l'envoyer sur votre TV.",
      icon: Cast,
      time: '2 minutes',
      difficulty: 'Facile'
    },
    {
      number: 4,
      title: 'Activez via WhatsApp',
      description: "Envoyez-nous votre adresse MAC (Google TV) ou vos informations de connexion via WhatsApp. Activation en moins d'une minute.",
      icon: Phone,
      time: '1 minute',
      difficulty: 'Facile'
    },
    {
      number: 5,
      title: 'Commencez à regarder',
      description: "Votre abonnement France IPTV est actif : 30 500+ chaînes en HD et 4K sur votre Chromecast.",
      icon: Play,
      time: '30 secondes',
      difficulty: 'Facile'
    }
  ];

  const troubleshooting = [
    {
      problem: "Le bouton de cast n'apparaît pas dans l'application IPTV",
      solution: "Vérifiez que votre téléphone et votre Chromecast sont connectés au même réseau WiFi. Redémarrez l'application IPTV et le Chromecast. Certaines applications nécessitent d'activer le cast dans leurs paramètres.",
      icon: AlertCircle
    },
    {
      problem: 'Image qui saccade ou mémoire tampon',
      solution: "Rapprochez le Chromecast de votre routeur WiFi, ou utilisez un adaptateur Ethernet (disponible pour Chromecast avec Google TV). Vérifiez votre débit internet (10 Mbps minimum pour la HD).",
      icon: Wifi,
    },
    {
      problem: "Le cast se déconnecte en cours de lecture",
      solution: "Évitez de mettre votre téléphone en veille pendant le cast pour certaines applications. Passez à une application IPTV directement installée sur le Chromecast avec Google TV pour éviter toute dépendance au téléphone.",
      icon: Zap
    },
    {
      problem: "L'application plante sur Chromecast avec Google TV",
      solution: "Mettez à jour Android TV : Paramètres > Système > À propos > Mise à jour système. Videz le cache de l'application IPTV dans Paramètres > Applications > Application IPTV > Stockage.",
      icon: Shield
    }
  ];

  const benefits = [
    { icon: Zap, title: 'Installation Rapide', description: 'IPTV fonctionnel sur Chromecast en 5 minutes' },
    { icon: Cast, title: 'Deux Méthodes', description: 'Application directe (Google TV) ou cast depuis mobile' },
    { icon: Shield, title: 'Sûr & Fiable', description: '99,9 % de disponibilité, aucune coupure côté serveur' },
    { icon: Phone, title: 'Support Francophone', description: 'Aide 24/7 via WhatsApp en français' }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      <Helmet>
        <title>Installer l'IPTV sur Chromecast et Google TV 2026 | France IPTV</title>
        <meta
          name="description"
          content="Installer l'IPTV sur Chromecast avec Google TV ou caster depuis votre téléphone en 5 minutes ✓ Guide étape par étape ✓ Support francophone."
        />
        <meta
          name="keywords"
          content="iptv google tv, iptv chromecast, installer iptv chromecast, iptv cast, chromecast google tv iptv"
        />
        <link rel="canonical" href="https://franceiptv.stream/appareils/chromecast-google-tv" />

        <meta property="og:title" content="Installer l'IPTV sur Chromecast et Google TV - Guide 2026" />
        <meta property="og:description" content="Installez l'IPTV sur Chromecast avec Google TV, ou castez depuis votre téléphone." />
        <meta property="og:url" content="https://franceiptv.stream/appareils/chromecast-google-tv" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Installer l'IPTV sur Chromecast et Google TV" />
        <meta name="twitter:description" content="Installation en 5 minutes ✓ Deux méthodes possibles" />

        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#090B0B] via-[#111413] to-[#0D0F0F]">
        <Suspense fallback={null}>
          <LightweightBackground variant="hero" />
        </Suspense>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
            >
              <Cast className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Chromecast · Google TV</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Installer l'IPTV sur
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
                Chromecast
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Application directe ou cast depuis votre téléphone : regardez l'IPTV en <span className="font-bold text-blue-400">5 minutes</span>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">5 min</div>
                <div className="text-sm text-gray-300">Installation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">30 500+</div>
                <div className="text-sm text-gray-300">Chaînes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">4K</div>
                <div className="text-sm text-gray-300">Ultra HD</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-300">Support FR</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20installer%20l%27IPTV%20sur%20mon%20Chromecast"
                className="bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Aide Immédiate via WhatsApp
              </a>
              <a
                href="/tarifs"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Voir les Tarifs
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-brand-gray-border rounded-xl p-6 shadow-md"
                >
                  <div className="w-12 h-12 bg-surface border border-brand-gold/40 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-brand-black">{benefit.title}</h3>
                  <p className="text-brand-gray text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
              Installation en <span className="text-brand-gold">5 Étapes</span>
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Suivez ces étapes et regardez l'IPTV sur votre Chromecast en 5 minutes
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {installationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-offwhite rounded-2xl p-8 border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-surface border border-brand-gold/40 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-blue-500" />
                        <h3 className="text-2xl font-bold text-brand-black">{step.title}</h3>
                      </div>
                      <p className="text-brand-gray leading-relaxed mb-4">{step.description}</p>
                      <div className="flex gap-4 text-sm">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">⏱️ {step.time}</span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">✓ {step.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-brand-gray mb-6 text-lg">
              Prêt à commencer ? Commandez votre abonnement France IPTV et démarrez immédiatement !
            </p>
            <a
              href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20IPTV%20pour%20Chromecast"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Commander via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Compatible models */}
      <section className="py-20 bg-gradient-to-br from-[#090B0B] to-[#111413] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Modèles <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Compatibles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              L'IPTV France IPTV fonctionne sur tous les Chromecast
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {compatibleModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-xl border-2 bg-green-900/20 border-green-500"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{model.series}</h3>
                    {model.note && <p className="text-sm text-gray-400 mt-1">{model.note}</p>}
                  </div>
                  <Check className="w-8 h-8 text-green-400" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mt-8"
          >
            Pas sûr de votre modèle ? <a href="https://wa.me/18653169315" className="text-blue-400 underline">Demandez-nous via WhatsApp</a>
          </motion.p>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-20 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className="text-[120px] md:text-[180px] font-bold text-white/[0.04] select-none">Problème ?</span>
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600">Solutions</span>
              </h2>
              <p className="text-xl text-brand-gray max-w-2xl mx-auto">Problèmes courants sur Chromecast et leurs solutions</p>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {troubleshooting.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-brand-gray-border rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-red-600">Problème : {item.problem}</h3>
                      <p className="text-brand-gray leading-relaxed">
                        <span className="font-semibold text-green-600">Solution :</span> {item.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-brand-gray mb-4">Votre problème n'est pas dans la liste ?</p>
            <a
              href="https://wa.me/18653169315?text=Bonjour%2C%20j%27ai%20un%20probl%C3%A8me%20avec%20l%27IPTV%20sur%20mon%20Chromecast"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Contactez-Nous via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
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
            <p className="text-xl text-brand-gray">Tout ce que vous devez savoir sur l'IPTV sur Chromecast</p>
          </motion.div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-brand-offwhite rounded-2xl border border-brand-gray-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white transition-colors"
                >
                  <h3 className="font-bold text-lg pr-4 text-brand-black">{faq.name}</h3>
                  {openFaq === index ? <ChevronUp className="w-6 h-6 text-blue-500 flex-shrink-0" /> : <ChevronDown className="w-6 h-6 text-brand-gray flex-shrink-0" />}
                </button>
                <div hidden={openFaq !== index} className="px-6 pb-6 pt-0">
                    <p className="text-brand-gray leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="/faq" className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:underline">
              Voir Toutes les Questions Fréquentes
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related devices */}
      <section className="py-20 bg-gradient-to-br from-[#090B0B] to-[#111413] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Autres Appareils</h2>
            <p className="text-xl text-gray-300">L'IPTV France IPTV fonctionne sur tous les appareils</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Samsung TV', url: '/appareils/samsung-tv' },
              { name: 'Freebox', url: '/appareils/freebox' },
              { name: 'Erreur de Lecture IPTV', url: '/appareils/erreur-lecture-iptv' }
            ].map((device, index) => (
              <motion.a
                key={index}
                href={device.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <Tv className="w-12 h-12 mx-auto mb-3 text-blue-400" />
                <h3 className="font-bold text-lg">{device.name}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-surface border border-lime/30 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à Commencer ?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Installez l'IPTV France IPTV sur votre Chromecast en 5 minutes.
            </p>
            <a
              href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20IPTV%20pour%20Chromecast"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all"
            >
              <Phone className="w-6 h-6" />
              Commander via WhatsApp
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Installation en 5 minutes</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Google TV ou cast mobile</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Support francophone 24/7</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Sans engagement</span></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Chromecast;
