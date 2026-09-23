import React, { useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Key,
  Link2,
  Smartphone,
  Play,
  Check,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Shield,
  Zap,
  Phone,
  ExternalLink,
  Tv,
  Mail
} from 'lucide-react';

import LightweightBackground from "../../components/LightweightBackground";

const ActivationCode = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeMethod, setActiveMethod] = useState('xtream');

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Comment activer votre abonnement IPTV",
    description: "Guide pour activer votre abonnement IPTV, quelle que soit l'application utilisée : Xtream Codes, lien M3U ou adresse MAC.",
    totalTime: 'PT5M',
    tool: [
      { '@type': 'HowToTool', name: 'Une application IPTV (IPTV Smarters Pro, TiviMate, Smart IPTV, GSE...)' },
      { '@type': 'HowToTool', name: 'Vos identifiants France IPTV (reçus par WhatsApp ou e-mail)' }
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Identifiez votre méthode de connexion',
        text: "Selon l'application choisie, vous utiliserez soit des identifiants Xtream Codes (URL, nom d'utilisateur, mot de passe), soit un lien M3U, soit une adresse MAC."
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Ouvrez votre application IPTV',
        text: "Lancez l'application installée sur votre appareil et sélectionnez « Ajouter une playlist » ou « Se connecter »."
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Entrez vos identifiants',
        text: "Saisissez les informations reçues par France IPTV correspondant à votre méthode de connexion (Xtream Codes, M3U ou MAC)."
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Validez et regardez',
        text: "Confirmez la connexion. Vos chaînes et contenus VOD se chargent automatiquement."
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quelle est la différence entre Xtream Codes, M3U et adresse MAC ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Xtream Codes utilise une URL de serveur, un nom d'utilisateur et un mot de passe : c'est la méthode la plus flexible, compatible avec la majorité des applications (IPTV Smarters Pro, TiviMate, GSE Smart IPTV). Le lien M3U est un fichier de playlist unique à coller dans l'application ou dans VLC. L'adresse MAC est un identifiant matériel utilisé par des applications comme Smart IPTV, qui associent votre abonnement à cet identifiant unique plutôt qu'à un identifiant/mot de passe."
        }
      },
      {
        '@type': 'Question',
        name: "Où trouver mes identifiants de connexion France IPTV ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Après votre commande, nous vous envoyons vos identifiants (Xtream Codes ou lien M3U) directement par WhatsApp, généralement en moins de 5 minutes. Pour une activation par adresse MAC, c'est vous qui nous transmettez l'adresse affichée dans votre application, puis nous activons votre abonnement dessus."
        }
      },
      {
        '@type': 'Question',
        name: "Mes identifiants ne fonctionnent pas, que faire ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Vérifiez d'abord qu'il n'y a pas d'espace avant ou après l'URL, le nom d'utilisateur ou le mot de passe lors de la saisie. Assurez-vous que votre appareil est connecté à internet. Si le problème persiste, contactez-nous via WhatsApp avec une capture d'écran de l'erreur : nous résolvons la plupart des cas en quelques minutes."
        }
      },
      {
        '@type': 'Question',
        name: "Puis-je changer d'application sans perdre mon abonnement ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. Vos identifiants Xtream Codes ou votre lien M3U restent valables quelle que soit l'application utilisée. Vous pouvez les ressaisir dans une nouvelle application à tout moment sans nous recontacter, sauf pour une activation par adresse MAC qui doit être ré-autorisée par notre support."
        }
      },
      {
        '@type': 'Question',
        name: "Combien de temps prend l'activation ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'activation est immédiate dans la grande majorité des cas : moins de 5 minutes entre votre paiement et la réception de vos identifiants prêts à l'emploi."
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
      { '@type': 'ListItem', position: 3, name: 'Activer votre abonnement', item: 'https://franceiptv.stream/appareils/activer-code-iptv' }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: "Comment Activer votre Abonnement IPTV - Guide 2026",
    description: "Guide complet pour activer votre abonnement IPTV : Xtream Codes, lien M3U ou adresse MAC, quelle que soit votre application.",
    url: 'https://franceiptv.stream/appareils/activer-code-iptv'
  };

  const methods = {
    xtream: {
      label: 'Xtream Codes',
      icon: Key,
      apps: 'IPTV Smarters Pro, TiviMate, GSE Smart IPTV',
      steps: [
        "Ouvrez votre application et choisissez « Se connecter avec Xtream Codes API » (ou équivalent).",
        "Entrez l'URL du serveur fournie par France IPTV (commence par http:// ou https://).",
        "Entrez votre nom d'utilisateur et votre mot de passe, envoyés par WhatsApp après votre commande.",
        "Validez : vos chaînes et contenus VOD apparaissent automatiquement."
      ]
    },
    m3u: {
      label: 'Lien M3U',
      icon: Link2,
      apps: 'VLC, TiviMate, GSE Smart IPTV, la plupart des applications IPTV',
      steps: [
        "Ouvrez votre application et choisissez « Ajouter une playlist » ou « Ouvrir un flux réseau » (VLC).",
        "Collez le lien M3U complet fourni par France IPTV (commence par http:// ou https:// et se termine par .m3u ou .m3u8).",
        "Donnez un nom à votre playlist si demandé, puis validez.",
        "Patientez quelques secondes pendant le chargement des chaînes."
      ]
    },
    mac: {
      label: 'Adresse MAC',
      icon: Smartphone,
      apps: 'Smart IPTV, applications préinstallées sur certaines Smart TV',
      steps: [
        "Ouvrez l'application (Smart IPTV par exemple) : une adresse MAC à 12 caractères s'affiche à l'écran.",
        "Envoyez-nous cette adresse MAC via WhatsApp avec votre numéro de commande.",
        "Nous activons votre abonnement sur cette adresse MAC en moins d'une minute.",
        "Redémarrez l'application : vos chaînes sont disponibles immédiatement."
      ]
    }
  };

  const benefits = [
    { icon: Zap, title: 'Activation Rapide', description: 'Identifiants ou activation en moins de 5 minutes après commande' },
    { icon: Key, title: '3 Méthodes Compatibles', description: 'Xtream Codes, M3U ou adresse MAC selon votre application' },
    { icon: Shield, title: 'Support si Besoin', description: 'Notre équipe vous accompagne à chaque étape' },
    { icon: Phone, title: 'Support Francophone', description: 'Aide 24/7 via WhatsApp en français' }
  ];

  const troubleshooting = [
    {
      problem: "L'URL, le nom d'utilisateur ou le mot de passe est refusé",
      solution: "Vérifiez qu'aucun espace n'a été copié avant ou après le texte. Recopiez les identifiants directement depuis le message WhatsApp plutôt que de les retaper manuellement.",
      icon: AlertCircle
    },
    {
      problem: "Le lien M3U affiche une erreur ou une page blanche",
      solution: "Assurez-vous que le lien est copié en entier, y compris l'extension .m3u ou .m3u8. Vérifiez votre connexion internet. Si l'erreur persiste, demandez-nous un lien de test via WhatsApp.",
      icon: Link2
    },
    {
      problem: "Mon adresse MAC ne se connecte pas après activation",
      solution: "Patientez 1 à 2 minutes après confirmation de notre équipe, puis redémarrez l'application. Vérifiez que l'adresse MAC transmise correspond exactement à celle affichée dans l'application (12 caractères).",
      icon: Smartphone
    },
    {
      problem: "Je ne trouve plus mon e-mail ou message avec mes identifiants",
      solution: "Contactez-nous directement via WhatsApp avec votre nom ou numéro de commande : nous retrouvons et renvoyons vos identifiants immédiatement.",
      icon: Mail
    }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);
  const ActiveIcon = methods[activeMethod].icon;

  return (
    <>
      <Helmet>
        <title>Activer votre Abonnement IPTV (Xtream, M3U, MAC) | France IPTV</title>
        <meta
          name="description"
          content="Comment activer votre abonnement IPTV ✓ Xtream Codes ✓ Lien M3U ✓ Adresse MAC ✓ Guide complet quelle que soit votre application ✓ Support francophone."
        />
        <meta
          name="keywords"
          content="activer iptv, code activation iptv, xtream codes iptv, lien m3u iptv, comment activer abonnement iptv"
        />
        <link rel="canonical" href="https://franceiptv.stream/appareils/activer-code-iptv" />

        <meta property="og:title" content="Comment Activer votre Abonnement IPTV - Guide Complet" />
        <meta property="og:description" content="Activez votre abonnement IPTV en 5 minutes : Xtream Codes, lien M3U ou adresse MAC." />
        <meta property="og:url" content="https://franceiptv.stream/appareils/activer-code-iptv" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comment Activer votre Abonnement IPTV" />
        <meta name="twitter:description" content="Xtream Codes, M3U ou adresse MAC : le guide complet" />

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
              <Key className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Xtream Codes · M3U · Adresse MAC</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Comment Activer{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
                votre Abonnement IPTV
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Quelle que soit votre application, activez votre abonnement France IPTV en <span className="font-bold text-blue-400">5 minutes</span>.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/18653169315?text=Bonjour%2C%20j%27ai%20besoin%20d%27aide%20pour%20activer%20mon%20abonnement%20IPTV"
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

      {/* Method tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
              Choisissez Votre <span className="text-brand-gold">Méthode</span>
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              La méthode dépend de l'application IPTV que vous utilisez
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {Object.entries(methods).map(([key, method]) => {
                const Icon = method.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveMethod(key)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                      activeMethod === key
                        ? 'bg-brand-gold text-white shadow-lg'
                        : 'bg-brand-offwhite text-brand-black border border-brand-gray-border hover:border-brand-gold'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {method.label}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeMethod}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-offwhite rounded-2xl p-8 border border-brand-gray-border"
            >
              <div className="flex items-center gap-3 mb-2">
                <ActiveIcon className="w-8 h-8 text-brand-gold" />
                <h3 className="text-2xl font-bold text-brand-black">{methods[activeMethod].label}</h3>
              </div>
              <p className="text-brand-gray mb-6">Compatible avec : {methods[activeMethod].apps}</p>

              <div className="space-y-4">
                {methods[activeMethod].steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-brand-gold to-[#2B4577] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-brand-gray leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-brand-gray mb-6 text-lg">
              Pas encore d'abonnement ? Commandez maintenant et recevez vos identifiants immédiatement.
            </p>
            <a
              href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20un%20abonnement%20IPTV"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Commander via WhatsApp
            </a>
          </motion.div>
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
              <p className="text-xl text-brand-gray max-w-2xl mx-auto">Problèmes courants lors de l'activation</p>
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
              href="https://wa.me/18653169315?text=Bonjour%2C%20j%27ai%20un%20probl%C3%A8me%20d%27activation%20IPTV"
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
            <p className="text-xl text-brand-gray">Tout ce que vous devez savoir sur l'activation IPTV</p>
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
      <section className="py-20 bg-gradient-to-br from-[#141311] to-[#201C18] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Guides par Appareil</h2>
            <p className="text-xl text-gray-300">Des instructions détaillées pour chaque box et appareil</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Freebox', url: '/appareils/freebox' },
              { name: 'Box Orange', url: '/appareils/orange' },
              { name: 'Samsung TV', url: '/appareils/samsung-tv' }
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
              Commandez votre abonnement France IPTV et recevez vos identifiants en 5 minutes.
            </p>
            <a
              href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20un%20abonnement%20IPTV"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all"
            >
              <Phone className="w-6 h-6" />
              Commander via WhatsApp
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Activation en 5 minutes</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Xtream Codes, M3U ou MAC</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Support francophone 24/7</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Sans engagement</span></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ActivationCode;
