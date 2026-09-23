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
  ExternalLink
} from 'lucide-react';

import LightweightBackground from "../../components/LightweightBackground";

const BboxBouygues = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Installer l'IPTV sur Bbox Bouygues Telecom",
    description: "Guide pour installer l'IPTV sur Bbox Miami, Must ou Ultym, la box internet de Bouygues Telecom.",
    totalTime: 'PT5M',
    tool: [
      { '@type': 'HowToTool', name: 'Bbox (Miami, Must ou Ultym)' },
      { '@type': 'HowToTool', name: 'Connexion internet' },
      { '@type': 'HowToTool', name: 'Abonnement IPTV France IPTV' }
    ],
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Identifiez votre modèle de Bbox', text: "La Bbox Ultym tourne sous Android TV avec accès au Play Store. Les Bbox Miami et Must nécessitent un boîtier externe (Fire Stick ou Android TV box)." },
      { '@type': 'HowToStep', position: 2, name: "Installez l'application IPTV", text: "Sur Bbox Ultym : Play Store, recherchez « IPTV Smarters Pro » ou « TiviMate ». Sur Miami/Must : installez l'application sur un boîtier externe connecté à la Bbox." },
      { '@type': 'HowToStep', position: 3, name: "Configurez l'accès", text: "Entrez vos identifiants Xtream Codes ou votre lien M3U dans l'application." },
      { '@type': 'HowToStep', position: 4, name: 'Activez votre abonnement', text: "Vos identifiants sont envoyés par WhatsApp après commande, en moins de 5 minutes." },
      { '@type': 'HowToStep', position: 5, name: 'Commencez à regarder', text: "Vos chaînes et contenus VOD se chargent automatiquement." }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "L'IPTV fonctionne-t-il directement sur toutes les Bbox ?",
        acceptedAnswer: { '@type': 'Answer', text: "La Bbox Ultym tourne sous Android TV et permet d'installer une application IPTV directement via le Play Store, comme sur une Freebox Pop. Les Bbox Miami et Must n'ont pas cette possibilité : il faut passer par un boîtier externe (Amazon Fire Stick ou boîtier Android TV) connecté en HDMI à votre TV." }
      },
      {
        '@type': 'Question',
        name: "Bouygues bloque-t-il l'IPTV ?",
        acceptedAnswer: { '@type': 'Answer', text: "Non, il n'y a pas de blocage volontaire de l'IPTV chez Bouygues Telecom. Les interruptions occasionnelles viennent généralement d'une bande passante insuffisante ou de paramètres de qualité de service (QoS) sur la box qui priorisent certains usages. Un redémarrage de la box ou une connexion Ethernet résout la plupart des cas." }
      },
      {
        '@type': 'Question',
        name: "Quelle vitesse internet faut-il pour l'IPTV sur Bbox ?",
        acceptedAnswer: { '@type': 'Answer', text: "Un minimum de 10 Mbps est recommandé pour la HD et 25 Mbps pour la 4K. La fibre Bouygues Telecom dépasse largement ce seuil dans la plupart des cas." }
      },
      {
        '@type': 'Question',
        name: "Mon IPTV se coupe sur ma Bbox, que faire ?",
        acceptedAnswer: { '@type': 'Answer', text: "Redémarrez votre Bbox et l'application IPTV. Passez en connexion Ethernet plutôt que Wi-Fi si possible. Vérifiez les paramètres de gestion de bande passante de la Bbox dans son interface d'administration. Si le problème persiste, contactez notre support via WhatsApp." }
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
      { '@type': 'ListItem', position: 3, name: 'Bbox Bouygues', item: 'https://franceiptv.stream/appareils/bbox-bouygues' }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: "Installer l'IPTV sur Bbox Bouygues Telecom - Guide 2026",
    description: "Installez l'IPTV sur Bbox Miami, Must ou Ultym en 5 minutes.",
    url: 'https://franceiptv.stream/appareils/bbox-bouygues'
  };

  const compatibleModels = [
    { series: 'Bbox Ultym (Android TV)', supported: true, note: 'Application directe via Play Store' },
    { series: 'Bbox Must', supported: true, note: 'Via boîtier externe (Fire Stick, Android TV)' },
    { series: 'Bbox Miami', supported: true, note: 'Via boîtier externe (Fire Stick, Android TV)' },
    { series: 'Anciennes Bbox (Sensation, Fun...)', supported: false, alternative: 'Utilisez un boîtier Android TV ou Amazon Fire Stick' }
  ];

  const installationSteps = [
    { number: 1, title: 'Identifiez votre modèle', description: 'Bbox Ultym : sous Android TV, avec Play Store. Bbox Miami/Must : nécessite un boîtier externe.', icon: Tv, time: '30 secondes', difficulty: 'Facile' },
    { number: 2, title: "Installez l'application (Ultym)", description: 'Ouvrez le Play Store depuis votre Bbox Ultym, recherchez « IPTV Smarters Pro » ou « TiviMate ».', icon: Download, time: '2 minutes', difficulty: 'Facile' },
    { number: 3, title: 'Ou connectez un boîtier externe (Miami/Must)', description: "Branchez un Amazon Fire Stick ou un boîtier Android TV sur un port HDMI de votre TV, puis installez l'application dessus.", icon: Settings, time: '3 minutes', difficulty: 'Facile' },
    { number: 4, title: 'Activez via WhatsApp', description: "Envoyez-nous vos identifiants Xtream Codes ou demandez votre lien M3U via WhatsApp.", icon: Phone, time: '1 minute', difficulty: 'Facile' },
    { number: 5, title: 'Commencez à regarder', description: "Profitez de 30 500+ chaînes en HD et 4K.", icon: Play, time: '30 secondes', difficulty: 'Facile' }
  ];

  const troubleshooting = [
    {
      problem: "Pas d'application IPTV disponible sur ma Bbox Miami/Must",
      solution: "Normal : ces modèles n'ont pas de Play Store. Connectez un Amazon Fire Stick ou un boîtier Android TV sur un port HDMI de votre TV pour installer une application IPTV.",
      icon: AlertCircle
    },
    {
      problem: "Image qui saccade ou mémoire tampon",
      solution: "Vérifiez votre débit internet (10 Mbps minimum HD, 25 Mbps 4K). Privilégiez l'Ethernet au Wi-Fi. Vérifiez les paramètres de gestion de bande passante dans l'interface d'administration de votre Bbox.",
      icon: Wifi
    },
    {
      problem: "L'IPTV se coupe ponctuellement",
      solution: "Ce n'est généralement pas un blocage volontaire mais une question de bande passante partagée. Redémarrez votre Bbox et testez une connexion filaire plutôt que Wi-Fi.",
      icon: Zap
    },
    {
      problem: "Mes identifiants ne fonctionnent pas",
      solution: "Vérifiez qu'aucun espace n'a été copié avant ou après l'URL, le nom d'utilisateur ou le mot de passe. Contactez-nous via WhatsApp si le problème persiste.",
      icon: Shield
    }
  ];

  const benefits = [
    { icon: Zap, title: 'Installation Rapide', description: 'Un IPTV fonctionnel sur votre Bbox en 5 minutes' },
    { icon: Tv, title: 'Tous les Modèles', description: 'Ultym, Must et Miami : une solution pour chaque Bbox' },
    { icon: Shield, title: 'Sûr & Fiable', description: '99,9 % de disponibilité, aucune coupure' },
    { icon: Phone, title: 'Support Francophone', description: 'Aide 24/7 via WhatsApp en français' }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      <Helmet>
        <title>Installer l'IPTV sur Bbox Bouygues Telecom 2026 | France IPTV</title>
        <meta name="description" content="Installer l'IPTV sur Bbox Miami, Must ou Ultym en 5 minutes ✓ Guide étape par étape ✓ Dépannage inclus ✓ Support francophone." />
        <meta name="keywords" content="iptv bbox, iptv bouygues, iptv bbox ultym, installer iptv bbox, iptv bbox bloque" />
        <link rel="canonical" href="https://franceiptv.stream/appareils/bbox-bouygues" />

        <meta property="og:title" content="Installer l'IPTV sur Bbox Bouygues Telecom - Guide Complet 2026" />
        <meta property="og:description" content="Installez l'IPTV sur votre Bbox en 5 minutes. Miami, Must et Ultym." />
        <meta property="og:url" content="https://franceiptv.stream/appareils/bbox-bouygues" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Installer l'IPTV sur Bbox Bouygues" />
        <meta name="twitter:description" content="Installation en 5 minutes ✓ Miami, Must, Ultym" />

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
              <Tv className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Miami · Must · Ultym</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Installer l'IPTV sur
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">Bbox Bouygues</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Installez l'IPTV France IPTV en <span className="font-bold text-blue-400">5 minutes</span>, quel que soit votre modèle de Bbox.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"><div className="text-2xl font-bold text-blue-400">5 min</div><div className="text-sm text-gray-300">Installation</div></div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"><div className="text-2xl font-bold text-blue-400">30 500+</div><div className="text-sm text-gray-300">Chaînes</div></div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"><div className="text-2xl font-bold text-blue-400">4K</div><div className="text-sm text-gray-300">Ultra HD</div></div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"><div className="text-2xl font-bold text-blue-400">24/7</div><div className="text-sm text-gray-300">Support FR</div></div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20installer%20l%27IPTV%20sur%20ma%20Bbox" className="bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">Installation en <span className="text-brand-gold">5 Étapes</span></h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">Suivez ces étapes et regardez l'IPTV sur votre Bbox en 5 minutes</p>
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
            <a href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20IPTV%20pour%20ma%20Bbox" className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all">
              <Phone className="w-5 h-5" />Commander via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#141311] to-[#201C18] text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Modèles Bbox <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Compatibles</span></h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">L'IPTV France IPTV fonctionne avec toutes les Bbox récentes</p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {compatibleModels.map((model, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className={`p-6 rounded-xl border-2 ${model.supported ? 'bg-green-900/20 border-green-500' : 'bg-orange-900/20 border-orange-500'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{model.series}</h3>
                    {model.note && <p className="text-sm text-gray-400 mt-1">{model.note}</p>}
                    {model.alternative && <p className="text-sm text-gray-400 mt-1">{model.alternative}</p>}
                  </div>
                  {model.supported ? <Check className="w-8 h-8 text-green-400" /> : <AlertCircle className="w-8 h-8 text-orange-400" />}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-gray-400 mt-8">
            Vous n'êtes pas sûr de votre modèle ? <a href="https://wa.me/18653169315" className="text-blue-400 underline">Demandez-nous via WhatsApp</a>
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"><span className="text-[120px] md:text-[180px] font-bold text-gray-300/40 select-none">Problème ?</span></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600">Solutions</span></h2>
              <p className="text-xl text-brand-gray max-w-2xl mx-auto">Problèmes courants sur Bbox et leurs solutions</p>
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
            <a href="https://wa.me/18653169315?text=Bonjour%2C%20j%27ai%20un%20probl%C3%A8me%20avec%20l%27IPTV%20sur%20ma%20Bbox" className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
              <Phone className="w-5 h-5" />Contactez-Nous via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">Questions <span className="text-brand-gold">Fréquentes</span></h2>
            <p className="text-xl text-brand-gray">Tout ce que vous devez savoir sur l'IPTV sur Bbox</p>
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
              { name: 'Box Orange', url: '/appareils/orange' },
              { name: 'Box SFR', url: '/appareils/sfr' },
              { name: 'Erreur de Lecture IPTV', url: '/appareils/erreur-lecture-iptv' }
            ].map((device, index) => (
              <motion.a key={index} href={device.url} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                <Tv className="w-12 h-12 mx-auto mb-3 text-blue-400" />
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
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Installez l'IPTV France IPTV sur votre Bbox en 5 minutes.</p>
            <a href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20IPTV%20pour%20ma%20Bbox" className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all">
              <Phone className="w-6 h-6" />Commander via WhatsApp
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Installation en 5 minutes</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Tous les modèles Bbox</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Support francophone 24/7</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Binance Pay ou PayPal</span></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BboxBouygues;
