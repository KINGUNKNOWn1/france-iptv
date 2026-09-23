import React, { useState, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
  Smartphone,
  Wifi,
  Shield,
  Zap,
  Star,
  Phone,
  ExternalLink,
  HelpCircle
} from 'lucide-react';

import LightweightBackground from "../../components/LightweightBackground";

const SamsungTV = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Installer l\'IPTV sur Samsung TV',
    description: "Guide étape par étape pour installer l'IPTV sur votre Samsung Smart TV. Fonctionne pour tous les modèles depuis 2016.",
    totalTime: 'PT5M',
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Samsung Smart TV (2016 ou plus récent)'
      },
      {
        '@type': 'HowToTool',
        name: 'Connexion internet'
      },
      {
        '@type': 'HowToTool',
        name: 'Abonnement IPTV France IPTV'
      }
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Ouvrir le Smart Hub',
        text: 'Appuyez sur le bouton Home de votre télécommande Samsung pour ouvrir le Smart Hub.',
        image: 'https://franceiptv.stream/images/samsung-step1.jpg'
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: "Rechercher l'application IPTV",
        text: 'Allez dans « Apps » et recherchez « IPTV » ou « Smart IPTV » dans le Samsung App Store. Téléchargez l\'application de votre choix.',
        image: 'https://franceiptv.stream/images/samsung-step2.jpg'
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: "Installer l'application",
        text: 'Cliquez sur « Installer » et attendez que l\'application soit entièrement téléchargée et installée sur votre Samsung TV.',
        image: 'https://franceiptv.stream/images/samsung-step3.jpg'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: "Ouvrir l'application IPTV",
        text: "Ouvrez l'application IPTV installée. Une adresse MAC ou un code d'activation s'affiche à l'écran.",
        image: 'https://franceiptv.stream/images/samsung-step4.jpg'
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Activez votre abonnement',
        text: 'Contactez-nous via WhatsApp avec votre adresse MAC. Nous activons votre abonnement en moins d\'une minute.',
        image: 'https://franceiptv.stream/images/samsung-step5.jpg'
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Commencez à regarder',
        text: 'Redémarrez l\'application. Votre abonnement France IPTV est maintenant actif et vous pouvez commencer à regarder immédiatement !',
        image: 'https://franceiptv.stream/images/samsung-step6.jpg'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "L'IPTV France IPTV fonctionne-t-il sur toutes les Samsung TV ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'IPTV France IPTV fonctionne sur toutes les Samsung Smart TV à partir de l'année modèle 2016. Cela inclut tous les téléviseurs Samsung sous Tizen OS. Vous avez un modèle plus ancien ? Vous pouvez tout de même regarder l'IPTV via un boîtier Android TV ou un Amazon Fire Stick."
        }
      },
      {
        '@type': 'Question',
        name: 'Quelles applications IPTV puis-je utiliser sur Samsung TV ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les applications les plus utilisées pour Samsung TV sont : Smart IPTV, IPTV Smarters Pro, GSE Smart IPTV et TiviMate. Nous recommandons Smart IPTV ou IPTV Smarters Pro pour la meilleure expérience sur Samsung. À l'achat, vous recevez des instructions d'installation détaillées pour l'application de votre choix."
        }
      },
      {
        '@type': 'Question',
        name: "Combien de temps prend l'installation de l'IPTV sur Samsung TV ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'installation prend en moyenne 5 minutes. Vous téléchargez l'application IPTV depuis le Samsung App Store, saisissez votre adresse MAC via WhatsApp, et votre abonnement est activé en moins d'une minute. Ensuite, vous pouvez commencer à regarder immédiatement."
        }
      },
      {
        '@type': 'Question',
        name: "Qu'est-ce que l'adresse MAC et où la trouver ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'adresse MAC est un code unique qui identifie votre application IPTV. Vous la trouvez directement à l'écran lorsque vous ouvrez l'application IPTV pour la première fois. C'est une série de 12 chiffres et lettres (par exemple : 00:1A:79:XX:XX:XX). Envoyez cette adresse via WhatsApp et nous activons votre abonnement."
        }
      },
      {
        '@type': 'Question',
        name: 'Puis-je regarder en 4K sur ma Samsung TV ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui ! France IPTV propose des milliers de chaînes en qualité 4K Ultra HD. Si vous avez une Samsung TV 4K et une connexion internet d'au moins 25 Mbps, vous pouvez profiter d'un contenu IPTV 4K cristallin. Tout le sport premium, les films et séries sont disponibles en 4K."
        }
      },
      {
        '@type': 'Question',
        name: "Que faire si l'application IPTV ne fonctionne pas sur ma Samsung ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Si l'application ne fonctionne pas : (1) Vérifiez votre connexion internet, (2) Redémarrez complètement votre Samsung TV, (3) Mettez à jour votre TV vers le dernier firmware, (4) Supprimez et réinstallez l'application. Toujours pas de résultat ? Contactez-nous via WhatsApp pour une aide immédiate de notre support francophone."
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
        name: 'Appareils',
        item: 'https://franceiptv.stream/appareils'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Samsung TV',
        item: 'https://franceiptv.stream/appareils/samsung-tv'
      }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: "Installer l'IPTV sur Samsung TV - Guide 2026",
    description: "Installez l'IPTV sur votre Samsung Smart TV en 5 minutes. Guide étape par étape pour tous les modèles Samsung depuis 2016.",
    url: 'https://franceiptv.stream/appareils/samsung-tv'
  };

  const compatibleModels = [
    { series: 'Samsung QLED (2016-2026)', supported: true },
    { series: 'Samsung Crystal UHD (2019-2026)', supported: true },
    { series: 'Samsung Neo QLED (2021-2026)', supported: true },
    { series: 'Samsung The Frame (2017-2026)', supported: true },
    { series: 'Samsung The Serif (2019-2026)', supported: true },
    { series: 'Samsung The Sero (2020-2026)', supported: true },
    { series: 'Samsung UHD 4K (2016-2026)', supported: true },
    { series: 'Samsung Smart TV Tizen (2016+)', supported: true },
    { series: 'Anciens modèles Samsung (<2016)', supported: false, alternative: 'Utilisez un boîtier Android TV' }
  ];

  const installationSteps = [
    {
      number: 1,
      title: 'Ouvrir le Smart Hub',
      description: "Appuyez sur le bouton Home (icône maison) de votre télécommande Samsung. Cela ouvre le Smart Hub qui donne accès à toutes les applications.",
      icon: Tv,
      time: '30 secondes',
      difficulty: 'Facile'
    },
    {
      number: 2,
      title: "Rechercher l'Application IPTV",
      description: 'Allez dans « Apps » dans le menu. Utilisez la fonction de recherche et tapez « IPTV » ou « Smart IPTV ». Plusieurs applications IPTV apparaissent.',
      icon: Download,
      time: '1 minute',
      difficulty: 'Facile'
    },
    {
      number: 3,
      title: "Installer l'Application",
      description: "Sélectionnez l'application IPTV de votre choix (Smart IPTV ou IPTV Smarters recommandées). Cliquez sur « Installer » et attendez la fin du téléchargement.",
      icon: Settings,
      time: '2 minutes',
      difficulty: 'Facile'
    },
    {
      number: 4,
      title: "Ouvrir & Noter l'Adresse MAC",
      description: "Ouvrez l'application. Un écran de bienvenue affiche votre adresse MAC unique (12 chiffres/lettres). Notez-la ou photographiez-la.",
      icon: Smartphone,
      time: '30 secondes',
      difficulty: 'Facile'
    },
    {
      number: 5,
      title: 'Activer via WhatsApp',
      description: "Envoyez-nous votre adresse MAC via WhatsApp. Nous activons votre abonnement France IPTV en moins d'une minute. Vous recevez une confirmation.",
      icon: Phone,
      time: '1 minute',
      difficulty: 'Facile'
    },
    {
      number: 6,
      title: 'Commencez à Regarder !',
      description: "Redémarrez l'application IPTV sur votre Samsung TV. Votre abonnement est maintenant actif. Profitez de 25 000+ chaînes en qualité HD et 4K !",
      icon: Play,
      time: '30 secondes',
      difficulty: 'Facile'
    }
  ];

  const troubleshooting = [
    {
      problem: "Application indisponible dans le Samsung App Store",
      solution: "Certains pays/régions ont des app stores limités. Changez la région de votre TV vers la France ou l'Allemagne via Paramètres > Général > Gestionnaire système > Localisation. Alternative : utilisez un boîtier Android TV.",
      icon: AlertCircle
    },
    {
      problem: 'Mémoire tampon ou images saccadées',
      solution: "Vérifiez votre vitesse internet (minimum 10 Mbps pour la HD, 25 Mbps pour la 4K). Connectez votre TV en Ethernet plutôt qu'en WiFi pour une connexion plus stable. Redémarrez votre routeur.",
      icon: Wifi
    },
    {
      problem: "L'adresse MAC n'est pas acceptée",
      solution: 'Vérifiez que vous avez copié la bonne adresse MAC (12 caractères). Certaines applications affichent plusieurs adresses - utilisez le « Device MAC Address ». Contactez-nous via WhatsApp si le problème persiste.',
      icon: Shield
    },
    {
      problem: 'Pas de son sur certaines chaînes',
      solution: 'Allez dans Paramètres TV > Son > Paramètres experts > Format de sortie audio numérique. Réglez sur « PCM » au lieu de « Auto » ou « Bitstream ». Cela résout la plupart des problèmes de son.',
      icon: Settings
    },
    {
      problem: "L'application plante ou se ferme automatiquement",
      solution: "Mettez à jour le firmware de votre Samsung TV : Paramètres > Assistance > Mise à jour logicielle > Mettre à jour maintenant. Supprimez complètement l'application IPTV et réinstallez-la. Videz le cache via Paramètres > Applications > Application IPTV > Stockage.",
      icon: Zap
    },
    {
      problem: "IPTV Smarters Pro ne fonctionne plus sur ma TV Samsung",
      solution: "Après une mise à jour du firmware, l'application peut cesser de s'ouvrir ou afficher un écran noir. Supprimez-la puis réinstallez-la depuis le Smart Hub, vérifiez que la date et l'heure de la TV sont en mode automatique (Paramètres > Général > Gestionnaire système > Heure), puis relancez la TV en la débranchant 30 secondes. Si l'application n'est plus proposée pour votre modèle, utilisez une autre application compatible Tizen (voir la liste plus haut) avec le même abonnement.",
      icon: Zap
    },
    {
      problem: "Smarters Pro affiche « échec de connexion » ou « identifiants incorrects »",
      solution: "Ressaisissez avec soin le nom d'utilisateur, le mot de passe et l'URL du serveur reçus par WhatsApp, sans espace au début ni à la fin (le clavier de la TV en ajoute facilement). Vérifiez que votre abonnement est actif et que vous n'utilisez pas plus de 4 écrans en même temps. Si le message persiste, envoyez-nous une capture d'écran via WhatsApp.",
      icon: Shield
    }
  ];

  const recommendedApps = [
    {
      name: 'Smart IPTV',
      rating: 4.8,
      features: ['Le plus stable', 'Prise en charge EPG', 'Favoris', 'Contrôle parental'],
      cost: 'Unique 5,49 € (à part)',
      recommended: true
    },
    {
      name: 'IPTV Smarters Pro',
      rating: 4.7,
      features: ['Gratuit', 'Multi-écrans', 'Catch-up TV', 'Prise en charge VOD'],
      cost: 'Gratuit',
      recommended: true
    },
    {
      name: 'GSE Smart IPTV',
      rating: 4.5,
      features: ['Gratuit', "Beaucoup d'options", 'Chromecast', 'EPG'],
      cost: 'Gratuit',
      recommended: false
    },
    {
      name: 'TiviMate',
      rating: 4.6,
      features: ['UI premium', 'DVR', 'Playlists multiples', 'Fonctionnalités premium'],
      cost: 'Gratuit (Premium 4€/an)',
      recommended: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Installation Rapide',
      description: "Un IPTV pleinement fonctionnel sur votre Samsung TV en 5 minutes"
    },
    {
      icon: Star,
      title: 'Prise en Charge 4K HDR',
      description: 'Profitez d\'images 4K cristallines sur votre Samsung QLED/UHD TV'
    },
    {
      icon: Shield,
      title: 'Sûr & Fiable',
      description: '99,9 % de disponibilité, serveurs européens, aucune coupure'
    },
    {
      icon: Phone,
      title: 'Support Francophone',
      description: 'Aide 24/7 via WhatsApp en français'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Installer l'IPTV sur Samsung TV - Guide 2026 | France IPTV</title>
        <meta
          name="description"
          content="Installer l'IPTV sur Samsung Smart TV en 5 minutes ✓ Guide étape par étape ✓ Tous modèles Samsung depuis 2016 ✓ Prise en charge 4K ✓ Support francophone."
        />
        <meta
          name="keywords"
          content="iptv samsung, iptv samsung tv, samsung tv iptv, installer iptv samsung, samsung smart tv iptv, application iptv samsung"
        />
        <link rel="canonical" href="https://franceiptv.stream/appareils/samsung-tv" />

        {/* Open Graph */}
        <meta property="og:title" content="Installer l'IPTV sur Samsung TV - Guide Complet 2026" />
        <meta property="og:description" content="Installez l'IPTV sur votre Samsung Smart TV en 5 minutes. Fonctionne sur tous les modèles depuis 2016. Prise en charge 4K incluse." />
        <meta property="og:url" content="https://franceiptv.stream/appareils/samsung-tv" />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Installer l'IPTV sur Samsung TV" />
        <meta name="twitter:description" content="Installation en 5 minutes ✓ Prise en charge 4K ✓ Tous modèles Samsung" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#090B0B] via-[#111413] to-[#0D0F0F]">
        {/* Animated Background */}
        <Suspense fallback={null}>
          <LightweightBackground variant="hero" />
        </Suspense>

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 opacity-10">
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
            className="text-center text-white max-w-4xl mx-auto"
          >
            {/* Device Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
            >
              <Tv className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Samsung Smart TV - Tous Modèles depuis 2016</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Installer l'IPTV sur
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
                Samsung Smart TV
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Installez l'IPTV France IPTV en seulement <span className="font-bold text-blue-400">5 minutes</span> sur votre Samsung TV.
              Guide étape par étape avec support francophone.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">5 min</div>
                <div className="text-sm text-gray-300">Temps d'installation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">25 000+</div>
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

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20installer%20l%27IPTV%20sur%20ma%20Samsung%20TV"
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

      {/* Benefits Section */}
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

      {/* Installation Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
              Installation en <span className="text-brand-gold">6 Étapes</span>
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Suivez ces étapes simples et regardez l'IPTV sur votre Samsung TV en 5 minutes
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
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-16 h-16 bg-surface border border-brand-gold/40 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-blue-500" />
                        <h3 className="text-2xl font-bold text-brand-black">{step.title}</h3>
                      </div>
                      <p className="text-brand-gray leading-relaxed mb-4">{step.description}</p>
                      <div className="flex gap-4 text-sm">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                          ⏱️ {step.time}
                        </span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                          ✓ {step.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA after steps */}
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
              href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20IPTV%20pour%20ma%20Samsung%20TV"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Commander via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Compatible Models */}
      <section className="py-20 bg-gradient-to-br from-[#090B0B] to-[#111413] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Modèles Samsung <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Compatibles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              L'IPTV France IPTV fonctionne sur presque toutes les Samsung Smart TV
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
                className={`p-6 rounded-xl border-2 ${
                  model.supported
                    ? 'bg-green-900/20 border-green-500'
                    : 'bg-orange-900/20 border-orange-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{model.series}</h3>
                    {model.alternative && (
                      <p className="text-sm text-gray-400 mt-1">{model.alternative}</p>
                    )}
                  </div>
                  {model.supported ? (
                    <Check className="w-8 h-8 text-green-400" />
                  ) : (
                    <AlertCircle className="w-8 h-8 text-orange-400" />
                  )}
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
            Vous n'êtes pas sûr que votre modèle soit compatible ? <a href="https://wa.me/18653169315" className="text-blue-400 underline">Demandez-nous via WhatsApp</a>
          </motion.p>
        </div>
      </section>

      {/* Recommended Apps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
              Applications IPTV <span className="text-brand-gold">Recommandées</span>
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Ces applications IPTV fonctionnent parfaitement avec France IPTV sur Samsung TV
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {recommendedApps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-brand-offwhite rounded-2xl p-6 border-2 ${
                  app.recommended ? 'border-blue-500 shadow-xl' : 'border-brand-gray-border'
                } relative`}
              >
                {app.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-white px-4 py-1 rounded-full text-xs font-bold">
                    RECOMMANDÉ
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2 mt-2 text-brand-black">{app.name}</h3>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(app.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-brand-gray ml-1">{app.rating}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-brand-gray">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-brand-gray-border">
                  <p className="text-sm font-semibold text-brand-black">{app.cost}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            {/* Background text "Probleem?" */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className="text-[120px] md:text-[180px] font-bold text-white/[0.04] select-none">
                Problème ?
              </span>
            </div>

            {/* Main title "Oplossen" */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600">
                  IPTV Samsung TV ne fonctionne plus : solutions
                </span>
              </h2>
              <p className="text-xl text-brand-gray max-w-2xl mx-auto">
                Smarters Pro qui ne s'ouvre plus, écran noir, échec de connexion, images saccadées : les pannes IPTV les plus courantes sur Samsung TV. Pour un diagnostic général, consultez aussi notre guide <Link to="/blog/iptv-ne-fonctionne-plus" className="underline text-brand-gold">IPTV ne fonctionne plus</Link>.
              </p>
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
                      <h3 className="text-xl font-bold mb-3 text-red-600">
                        Problème : {item.problem}
                      </h3>
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
              href="https://wa.me/18653169315?text=Bonjour%2C%20j%27ai%20un%20probl%C3%A8me%20avec%20l%27IPTV%20sur%20ma%20Samsung%20TV"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Contactez-Nous via WhatsApp
            </a>
          </motion.div>
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
              Tout ce que vous devez savoir sur l'IPTV sur Samsung TV
            </p>
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
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-brand-gray flex-shrink-0" />
                  )}
                </button>
                <div hidden={openFaq !== index} className="px-6 pb-6 pt-0">
                    <p className="text-brand-gray leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </p>
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
            <a
              href="/faq"
              className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:underline"
            >
              Voir Toutes les Questions Fréquentes
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related Devices CTA */}
      <section className="py-20 bg-gradient-to-br from-[#090B0B] to-[#111413] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Autres Appareils
            </h2>
            <p className="text-xl text-gray-300">
              L'IPTV France IPTV fonctionne sur tous les appareils
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'LG TV', url: '/appareils/lg-tv' },
              { name: 'Android TV', url: '/appareils/android-tv' },
              { name: 'Amazon Fire Stick', url: '/appareils/fire-stick' }
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Commencer ?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Installez l'IPTV France IPTV sur votre Samsung TV en 5 minutes.
              15 000+ clients satisfaits vous ont précédé !
            </p>

            <a
              href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20IPTV%20pour%20Samsung%20TV"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all"
            >
              <Phone className="w-6 h-6" />
              Commander via WhatsApp
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Installation en 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Prise en charge 4K</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Support francophone 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Sans engagement</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SamsungTV;
