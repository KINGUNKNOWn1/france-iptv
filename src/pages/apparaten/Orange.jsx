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
  Router
} from 'lucide-react';

import LightweightBackground from "../../components/LightweightBackground";

const Orange = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Installer l'IPTV sur Box Orange (Livebox)",
    description: "Guide étape par étape pour installer l'IPTV sur votre Livebox Orange, avec solutions aux problèmes de blocage les plus courants.",
    totalTime: 'PT5M',
    tool: [
      { '@type': 'HowToTool', name: 'Livebox Orange ou boîtier Android TV' },
      { '@type': 'HowToTool', name: 'Connexion internet Orange' },
      { '@type': 'HowToTool', name: 'Abonnement IPTV France IPTV' }
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Vérifiez votre modèle de Livebox',
        text: "Les Livebox les plus récentes n'ont pas de Play Store intégré. Pour l'IPTV, il vous faut un appareil compatible connecté à la Livebox : Android TV Box, Amazon Fire Stick, Chromecast avec Google TV, ou Smart TV."
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: "Installez l'application IPTV",
        text: "Sur votre boîtier Android TV ou Fire Stick, ouvrez le Play Store (ou Amazon Appstore) et installez « IPTV Smarters Pro » ou « TiviMate »."
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: "Notez l'adresse MAC",
        text: "Ouvrez l'application. Elle affiche une adresse MAC unique à l'écran."
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Activez votre abonnement',
        text: "Envoyez-nous votre adresse MAC via WhatsApp. Nous activons votre abonnement en moins d'une minute."
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Commencez à regarder',
        text: "Rechargez l'application. Votre abonnement France IPTV est actif : profitez de 30 500+ chaînes en HD et 4K sur votre box Orange."
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Peut-on installer une application IPTV directement sur la Livebox ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, la Livebox Orange n'a pas de Play Store et ne permet pas d'installer d'applications tierces. Il faut connecter un appareil compatible à votre Livebox : boîtier Android TV, Amazon Fire Stick, Chromecast avec Google TV, ou directement sur une Smart TV. L'installation prend environ 5 minutes une fois l'appareil en place."
        }
      },
      {
        '@type': 'Question',
        name: 'Orange bloque-t-il vraiment l\'IPTV ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Orange ne bloque pas l'IPTV de façon générale. Ce qui ressemble à un « blocage » est presque toujours un problème de bande passante, de DNS ou de congestion réseau aux heures de pointe. La Livebox applique parfois une priorité de trafic (QoS) qui favorise son propre décodeur TV au détriment du reste du réseau, ce qui peut donner l'impression que l'IPTV est bloqué alors qu'il s'agit d'un partage de bande passante."
        }
      },
      {
        '@type': 'Question',
        name: "Mon IPTV ne fonctionne plus sur Orange, que faire ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "1) Redémarrez votre Livebox et votre boîtier IPTV. 2) Testez votre débit internet (10 Mbps minimum pour la HD). 3) Passez en connexion Ethernet plutôt qu'en WiFi. 4) Changez le DNS de votre appareil pour 1.1.1.1 (Cloudflare) ou 8.8.8.8 (Google) dans les paramètres réseau. 5) Si le problème persiste, contactez notre support via WhatsApp : nous diagnostiquons en quelques minutes."
        }
      },
      {
        '@type': 'Question',
        name: "L'IPTV bloqué par Orange concerne-t-il tous les forfaits ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. La qualité de connexion dépend de votre forfait (fibre, ADSL) et de la configuration de votre Livebox. En fibre, les ralentissements sont rares. En ADSL, une bande passante limitée peut causer des coupures si plusieurs appareils utilisent internet en même temps. Vérifiez vos paramètres de QoS dans l'interface de gestion de la Livebox si vous suspectez une priorisation du trafic."
        }
      },
      {
        '@type': 'Question',
        name: "Quel boîtier utiliser avec ma Livebox pour l'IPTV ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un boîtier Android TV générique, un Amazon Fire Stick 4K ou un Chromecast avec Google TV fonctionnent parfaitement branchés sur une prise HDMI de votre téléviseur, connectés au WiFi ou en Ethernet à votre Livebox. Ces boîtiers coûtent entre 30 € et 70 € et donnent accès au Play Store pour installer l'application IPTV de votre choix."
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
      { '@type': 'ListItem', position: 3, name: 'Box Orange', item: 'https://franceiptv.stream/appareils/orange' }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: "Installer l'IPTV sur Box Orange - Guide + Dépannage 2026",
    description: "Installez l'IPTV sur votre Livebox Orange en 5 minutes et résolvez les problèmes de blocage courants.",
    url: 'https://franceiptv.stream/appareils/orange'
  };

  const compatibleDevices = [
    { series: 'Boîtier Android TV (générique)', supported: true, note: 'Play Store intégré' },
    { series: 'Amazon Fire Stick 4K', supported: true, note: 'Amazon Appstore' },
    { series: 'Chromecast avec Google TV', supported: true, note: 'Play Store intégré' },
    { series: 'Smart TV connectée à la Livebox', supported: true, note: 'Application IPTV directe' },
    { series: 'Livebox seule (sans boîtier externe)', supported: false, alternative: 'Ajoutez un boîtier Android TV ou Fire Stick' }
  ];

  const installationSteps = [
    {
      number: 1,
      title: 'Choisissez votre boîtier',
      description: "La Livebox n'ayant pas de Play Store, connectez un boîtier Android TV, un Fire Stick ou un Chromecast avec Google TV à une prise HDMI de votre TV, relié en WiFi ou Ethernet à votre Livebox.",
      icon: Router,
      time: '2 minutes',
      difficulty: 'Facile'
    },
    {
      number: 2,
      title: "Installez l'application IPTV",
      description: 'Depuis le Play Store (ou Amazon Appstore) de votre boîtier, recherchez « IPTV Smarters Pro » ou « TiviMate » et installez.',
      icon: Download,
      time: '2 minutes',
      difficulty: 'Facile'
    },
    {
      number: 3,
      title: "Notez l'adresse MAC",
      description: "Ouvrez l'application : une adresse MAC unique (12 chiffres/lettres) s'affiche à l'écran.",
      icon: Settings,
      time: '30 secondes',
      difficulty: 'Facile'
    },
    {
      number: 4,
      title: 'Activez via WhatsApp',
      description: "Envoyez-nous votre adresse MAC via WhatsApp. Activation en moins d'une minute.",
      icon: Phone,
      time: '1 minute',
      difficulty: 'Facile'
    },
    {
      number: 5,
      title: 'Commencez à regarder',
      description: "Rechargez l'application. Votre abonnement France IPTV est actif : 30 500+ chaînes en HD et 4K sur votre installation Orange.",
      icon: Play,
      time: '30 secondes',
      difficulty: 'Facile'
    }
  ];

  const troubleshooting = [
    {
      problem: "« Orange bloque mon IPTV » - coupures fréquentes",
      solution: "Il s'agit presque toujours d'un partage de bande passante, pas d'un blocage volontaire. Vérifiez les paramètres de QoS (qualité de service) dans l'interface de gestion de votre Livebox (192.168.1.1) : certains réglages priorisent le décodeur TV Orange au détriment du reste du réseau.",
      icon: AlertCircle
    },
    {
      problem: 'Image qui saccade ou mémoire tampon',
      solution: "Testez votre débit (10 Mbps minimum pour la HD, 25 Mbps pour la 4K). Passez en Ethernet plutôt qu'en WiFi pour votre boîtier IPTV. Redémarrez la Livebox si le problème persiste.",
      icon: Wifi
    },
    {
      problem: "L'IPTV fonctionnait puis a cessé de fonctionner sur Orange",
      solution: "Changez le DNS de votre boîtier pour 1.1.1.1 (Cloudflare) ou 8.8.8.8 (Google) dans les paramètres réseau avancés. Certaines configurations DNS par défaut de la Livebox peuvent ralentir la résolution des flux IPTV.",
      icon: Zap
    },
    {
      problem: "Le boîtier Android TV ne se connecte pas à la Livebox",
      solution: "Vérifiez le mot de passe WiFi de votre Livebox (étiquette au dos du boîtier). Essayez une connexion Ethernet directe si le WiFi reste instable. Contactez-nous via WhatsApp si le souci persiste.",
      icon: Shield
    }
  ];

  const benefits = [
    { icon: Zap, title: 'Installation Rapide', description: 'Un IPTV fonctionnel avec votre Livebox en 5 minutes' },
    { icon: Router, title: 'Compatible Tous Boîtiers', description: 'Android TV, Fire Stick, Chromecast : au choix' },
    { icon: Shield, title: 'Sûr & Fiable', description: '99,9 % de disponibilité, aucune coupure côté serveur' },
    { icon: Phone, title: 'Support Francophone', description: 'Aide 24/7 via WhatsApp en français' }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      <Helmet>
        <title>Installer l'IPTV sur Box Orange | Guide + Dépannage 2026 | France IPTV</title>
        <meta
          name="description"
          content="Installer l'IPTV sur Livebox Orange en 5 minutes ✓ Solutions si Orange bloque votre IPTV ✓ Guide étape par étape ✓ Support francophone."
        />
        <meta
          name="keywords"
          content="ip tv orange, iptv sur box orange, orange bloque iptv, iptv bloqué par orange, iptv ne fonctionne plus orange"
        />
        <link rel="canonical" href="https://franceiptv.stream/appareils/orange" />

        <meta property="og:title" content="Installer l'IPTV sur Box Orange - Guide + Dépannage 2026" />
        <meta property="og:description" content="Installez l'IPTV avec votre Livebox Orange en 5 minutes et résolvez les blocages courants." />
        <meta property="og:url" content="https://franceiptv.stream/appareils/orange" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Installer l'IPTV sur Box Orange" />
        <meta name="twitter:description" content="Installation en 5 minutes ✓ Solutions aux blocages Orange" />

        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#141311] via-[#201C18] to-[#191613]">
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
              <Router className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Livebox · Installation + Dépannage</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Installer l'IPTV sur
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
                Box Orange
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Installez l'IPTV en <span className="font-bold text-blue-400">5 minutes</span> avec votre Livebox, et résolvez les blocages courants.
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
                href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20installer%20l%27IPTV%20sur%20ma%20box%20Orange"
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
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-[#2B4577] rounded-lg flex items-center justify-center mb-4">
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
              Suivez ces étapes et regardez l'IPTV avec votre box Orange en 5 minutes
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
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-gold to-[#2B4577] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
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
              href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20IPTV%20pour%20ma%20box%20Orange"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Commander via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Compatible devices */}
      <section className="py-20 bg-gradient-to-br from-[#141311] to-[#201C18] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Boîtiers <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Compatibles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              La Livebox seule ne suffit pas : ajoutez l'un de ces boîtiers
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {compatibleDevices.map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-6 rounded-xl border-2 ${device.supported ? 'bg-green-900/20 border-green-500' : 'bg-orange-900/20 border-orange-500'}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{device.series}</h3>
                    {device.note && <p className="text-sm text-gray-400 mt-1">{device.note}</p>}
                    {device.alternative && <p className="text-sm text-gray-400 mt-1">{device.alternative}</p>}
                  </div>
                  {device.supported ? <Check className="w-8 h-8 text-green-400" /> : <AlertCircle className="w-8 h-8 text-orange-400" />}
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
            Pas sûr de votre configuration ? <a href="https://wa.me/18653169315" className="text-blue-400 underline">Demandez-nous via WhatsApp</a>
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
              <span className="text-[120px] md:text-[180px] font-bold text-gray-300/40 select-none">Problème ?</span>
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600">Solutions</span>
              </h2>
              <p className="text-xl text-brand-gray max-w-2xl mx-auto">« Orange bloque mon IPTV » et autres problèmes courants</p>
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
              href="https://wa.me/18653169315?text=Bonjour%2C%20j%27ai%20un%20probl%C3%A8me%20avec%20l%27IPTV%20sur%20ma%20box%20Orange"
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
            <p className="text-xl text-brand-gray">Tout ce que vous devez savoir sur l'IPTV avec Orange</p>
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
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-brand-gray leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                )}
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
      <section className="py-20 bg-gradient-to-br from-[#141311] to-[#201C18] text-white">
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
              { name: 'Freebox', url: '/appareils/freebox' },
              { name: 'IPTV Bloqué par SFR', url: '/appareils/sfr' },
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
      <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à Commencer ?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Installez l'IPTV France IPTV avec votre box Orange en 5 minutes.
            </p>
            <a
              href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20IPTV%20pour%20ma%20box%20Orange"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all"
            >
              <Phone className="w-6 h-6" />
              Commander via WhatsApp
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Installation en 5 minutes</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Solutions aux blocages Orange</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Support francophone 24/7</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Sans engagement</span></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Orange;
