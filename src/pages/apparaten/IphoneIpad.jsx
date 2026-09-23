import React, { useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Download,
  Settings,
  Play,
  Check,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Battery,
  Shield,
  Zap,
  Phone,
  ExternalLink,
  Cast
} from 'lucide-react';

import LightweightBackground from "../../components/LightweightBackground";

const IphoneIpad = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Installer l'IPTV sur iPhone et iPad",
    description: "Guide étape par étape pour installer l'IPTV sur iPhone et iPad (iOS 14 et supérieur).",
    totalTime: 'PT5M',
    tool: [
      { '@type': 'HowToTool', name: 'iPhone ou iPad sous iOS 14 ou supérieur' },
      { '@type': 'HowToTool', name: 'Connexion internet' },
      { '@type': 'HowToTool', name: 'Abonnement IPTV France IPTV' }
    ],
    step: [
      { '@type': 'HowToStep', position: 1, name: "Ouvrez l'App Store", text: "Depuis votre iPhone ou iPad, ouvrez l'App Store." },
      { '@type': 'HowToStep', position: 2, name: "Installez l'application IPTV", text: "Recherchez « IPTV Smarters Pro » ou « GSE Smart IPTV » et installez." },
      { '@type': 'HowToStep', position: 3, name: "Configurez l'accès", text: "Ouvrez l'application et entrez vos identifiants Xtream Codes ou votre lien M3U." },
      { '@type': 'HowToStep', position: 4, name: 'Activez votre abonnement', text: "Vos identifiants sont envoyés par WhatsApp après commande, en moins de 5 minutes." },
      { '@type': 'HowToStep', position: 5, name: 'Regardez sur votre TV', text: "Utilisez AirPlay pour diffuser le flux sur votre télévision si besoin." }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quelle application IPTV utiliser sur iPhone ou iPad ?",
        acceptedAnswer: { '@type': 'Answer', text: "IPTV Smarters Pro et GSE Smart IPTV sont les deux applications les plus utilisées sur iOS, toutes deux disponibles gratuitement sur l'App Store. Elles supportent les identifiants Xtream Codes et les liens M3U." }
      },
      {
        '@type': 'Question',
        name: "Puis-je regarder sur ma TV depuis mon iPhone ?",
        acceptedAnswer: { '@type': 'Answer', text: "Oui, via AirPlay si vous avez une Apple TV ou une TV compatible AirPlay 2. Vous pouvez aussi diffuser l'écran de votre iPhone directement sur certaines Smart TV récentes." }
      },
      {
        '@type': 'Question',
        name: "L'application se coupe quand elle est en arrière-plan",
        acceptedAnswer: { '@type': 'Answer', text: "C'est un comportement normal d'iOS qui limite l'activité des applications en arrière-plan pour économiser la batterie. Gardez l'application IPTV au premier plan pendant la lecture pour éviter les coupures." }
      },
      {
        '@type': 'Question',
        name: "L'IPTV consomme-t-il beaucoup de données mobiles ?",
        acceptedAnswer: { '@type': 'Answer', text: "Oui, le streaming vidéo consomme des données significatives, surtout en HD/4K (jusqu'à 3 Go/heure en 4K). Nous recommandons une connexion Wi-Fi pour un visionnage prolongé plutôt que la 4G/5G." }
      },
      {
        '@type': 'Question',
        name: "Combien de temps prend l'activation ?",
        acceptedAnswer: { '@type': 'Answer', text: "Comptez environ 5 minutes entre votre commande et la réception de vos identifiants par WhatsApp." }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://franceiptv.stream' },
      { '@type': 'ListItem', position: 2, name: 'Appareils', item: 'https://franceiptv.stream/appareils' },
      { '@type': 'ListItem', position: 3, name: 'iPhone et iPad', item: 'https://franceiptv.stream/appareils/iphone-ipad' }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: "Installer l'IPTV sur iPhone et iPad - Guide 2026",
    description: "Installez l'IPTV sur iPhone et iPad (iOS 14+) en 5 minutes via l'App Store.",
    url: 'https://franceiptv.stream/appareils/iphone-ipad'
  };

  const installationSteps = [
    { number: 1, title: "Ouvrez l'App Store", description: "Depuis votre iPhone ou iPad, ouvrez l'application App Store.", icon: Smartphone, time: '15 secondes', difficulty: 'Facile' },
    { number: 2, title: 'Recherchez une application IPTV', description: 'Tapez « IPTV Smarters Pro » ou « GSE Smart IPTV » dans la recherche.', icon: Download, time: '30 secondes', difficulty: 'Facile' },
    { number: 3, title: "Installez l'application", description: "Appuyez sur « Obtenir » puis « Ouvrir » une fois l'installation terminée.", icon: Download, time: '1 minute', difficulty: 'Facile' },
    { number: 4, title: 'Ajoutez votre playlist', description: "Entrez vos identifiants Xtream Codes ou votre lien M3U dans l'application.", icon: Settings, time: '1 minute', difficulty: 'Facile' },
    { number: 5, title: 'Activez via WhatsApp', description: "Vos identifiants sont envoyés par WhatsApp après commande.", icon: Phone, time: '1 minute', difficulty: 'Facile' },
    { number: 6, title: 'Regardez ou diffusez via AirPlay', description: "Regardez directement sur votre appareil ou diffusez sur votre TV via AirPlay.", icon: Cast, time: '30 secondes', difficulty: 'Facile' }
  ];

  const troubleshooting = [
    {
      problem: "L'application n'est pas disponible dans mon pays sur l'App Store",
      solution: "Vérifiez que votre compte Apple est bien configuré sur la boutique France. Contactez-nous via WhatsApp : nous pouvons vous recommander une alternative compatible.",
      icon: AlertCircle
    },
    {
      problem: "La lecture s'arrête quand je quitte l'application",
      solution: "iOS limite l'activité en arrière-plan pour économiser la batterie. Gardez l'application ouverte au premier plan pendant la lecture, ou utilisez AirPlay pour continuer de regarder sur une TV pendant que votre iPhone reste actif.",
      icon: Battery
    },
    {
      problem: "Image qui saccade ou mémoire tampon",
      solution: "Vérifiez votre connexion Wi-Fi ou 4G/5G (10 Mbps minimum pour la HD). Rapprochez-vous de votre box Wi-Fi ou passez en 5G si possible.",
      icon: Shield
    },
    {
      problem: "Mes identifiants ne fonctionnent pas",
      solution: "Vérifiez qu'aucun espace n'a été copié avant ou après l'URL, le nom d'utilisateur ou le mot de passe. Contactez-nous via WhatsApp si le problème persiste.",
      icon: Zap
    }
  ];

  const benefits = [
    { icon: Zap, title: 'Installation Rapide', description: 'Un IPTV fonctionnel sur iPhone/iPad en 5 minutes' },
    { icon: Cast, title: 'AirPlay Compatible', description: 'Diffusez facilement sur votre Apple TV ou TV compatible' },
    { icon: Shield, title: 'Sûr & Fiable', description: '99,9 % de disponibilité, aucune coupure' },
    { icon: Phone, title: 'Support Francophone', description: 'Aide 24/7 via WhatsApp en français' }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      <Helmet>
        <title>Installer l'IPTV sur iPhone et iPad (iOS) 2026 | France IPTV</title>
        <meta name="description" content="Installer l'IPTV sur iPhone et iPad en 5 minutes ✓ Via l'App Store ✓ Compatible AirPlay ✓ Guide étape par étape ✓ Support francophone." />
        <meta name="keywords" content="iptv iphone, iptv ipad, iptv ios, installer iptv iphone, application iptv ios" />
        <link rel="canonical" href="https://franceiptv.stream/appareils/iphone-ipad" />

        <meta property="og:title" content="Installer l'IPTV sur iPhone et iPad - Guide Complet 2026" />
        <meta property="og:description" content="Installez l'IPTV sur votre iPhone ou iPad en 5 minutes via l'App Store." />
        <meta property="og:url" content="https://franceiptv.stream/appareils/iphone-ipad" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Installer l'IPTV sur iPhone et iPad" />
        <meta name="twitter:description" content="Installation en 5 minutes ✓ iOS 14 et supérieur" />

        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#141311] via-[#201C18] to-[#191613]">
        <Suspense fallback={null}><LightweightBackground variant="hero" /></Suspense>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center text-white max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Smartphone className="w-5 h-5 text-blue-400" />
              <span className="font-medium">iOS 14 et supérieur</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Installer l'IPTV sur{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">iPhone et iPad</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Installez l'IPTV France IPTV en <span className="font-bold text-blue-400">5 minutes</span> sur votre iPhone ou iPad.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"><div className="text-2xl font-bold text-blue-400">5 min</div><div className="text-sm text-gray-300">Installation</div></div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"><div className="text-2xl font-bold text-blue-400">30 500+</div><div className="text-sm text-gray-300">Chaînes</div></div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"><div className="text-2xl font-bold text-blue-400">4K</div><div className="text-sm text-gray-300">Ultra HD</div></div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"><div className="text-2xl font-bold text-blue-400">24/7</div><div className="text-sm text-gray-300">Support FR</div></div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20installer%20l%27IPTV%20sur%20mon%20iPhone" className="bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />Aide Immédiate via WhatsApp
              </a>
              <a href="/tarifs" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">Voir les Tarifs</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white border border-brand-gray-border rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-[#2B4577] rounded-lg flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-white" /></div>
                  <h3 className="font-bold text-lg mb-2 text-brand-black">{benefit.title}</h3>
                  <p className="text-brand-gray text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">Installation en <span className="text-brand-gold">6 Étapes</span></h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">Suivez ces étapes et regardez l'IPTV sur votre iPhone ou iPad en 5 minutes</p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {installationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-brand-offwhite rounded-2xl p-8 border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-gold to-[#2B4577] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">{step.number}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3"><Icon className="w-6 h-6 text-blue-500" /><h3 className="text-2xl font-bold text-brand-black">{step.title}</h3></div>
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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
            <p className="text-brand-gray mb-6 text-lg">Prêt à commencer ? Commandez votre abonnement France IPTV et démarrez immédiatement !</p>
            <a href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20IPTV%20pour%20mon%20iPhone" className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all">
              <Phone className="w-5 h-5" />Commander via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"><span className="text-[120px] md:text-[180px] font-bold text-gray-300/40 select-none">Problème ?</span></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600">Solutions</span></h2>
              <p className="text-xl text-brand-gray max-w-2xl mx-auto">Problèmes courants sur iPhone/iPad et leurs solutions</p>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {troubleshooting.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white border border-brand-gray-border rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center"><Icon className="w-6 h-6 text-red-600" /></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-red-600">Problème : {item.problem}</h3>
                      <p className="text-brand-gray leading-relaxed"><span className="font-semibold text-green-600">Solution :</span> {item.solution}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
            <p className="text-brand-gray mb-4">Votre problème n'est pas dans la liste ?</p>
            <a href="https://wa.me/18653169315?text=Bonjour%2C%20j%27ai%20un%20probl%C3%A8me%20avec%20l%27IPTV%20sur%20mon%20iPhone" className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
              <Phone className="w-5 h-5" />Contactez-Nous via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">Questions <span className="text-brand-gold">Fréquentes</span></h2>
            <p className="text-xl text-brand-gray">Tout ce que vous devez savoir sur l'IPTV sur iPhone et iPad</p>
          </motion.div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-brand-offwhite rounded-2xl border border-brand-gray-border overflow-hidden">
                <button onClick={() => toggleFaq(index)} className="w-full p-6 text-left flex items-center justify-between hover:bg-white transition-colors">
                  <h3 className="font-bold text-lg pr-4 text-brand-black">{faq.name}</h3>
                  {openFaq === index ? <ChevronUp className="w-6 h-6 text-blue-500 flex-shrink-0" /> : <ChevronDown className="w-6 h-6 text-brand-gray flex-shrink-0" />}
                </button>
                <div hidden={openFaq !== index} className="px-6 pb-6 pt-0"><p className="text-brand-gray leading-relaxed">{faq.acceptedAnswer.text}</p></div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
            <a href="/faq" className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:underline">Voir Toutes les Questions Fréquentes<ExternalLink className="w-4 h-4" /></a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#141311] to-[#201C18] text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Autres Appareils</h2>
            <p className="text-xl text-gray-300">L'IPTV France IPTV fonctionne sur tous les appareils</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Activer votre code', url: '/appareils/activer-code-iptv' },
              { name: 'Chromecast / Google TV', url: '/appareils/chromecast-google-tv' },
              { name: 'Erreur de Lecture IPTV', url: '/appareils/erreur-lecture-iptv' }
            ].map((device, index) => (
              <motion.a key={index} href={device.url} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                <Smartphone className="w-12 h-12 mx-auto mb-3 text-blue-400" />
                <h3 className="font-bold text-lg">{device.name}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à Commencer ?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Installez l'IPTV France IPTV sur votre iPhone ou iPad en 5 minutes.</p>
            <a href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20IPTV%20pour%20iPhone" className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all">
              <Phone className="w-6 h-6" />Commander via WhatsApp
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Installation en 5 minutes</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Compatible AirPlay</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Support francophone 24/7</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Binance Pay ou PayPal</span></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IphoneIpad;
