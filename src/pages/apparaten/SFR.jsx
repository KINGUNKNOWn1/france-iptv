import React, { useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Tv,
  Search,
  Settings,
  Check,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Wifi,
  Shield,
  Zap,
  Phone,
  ExternalLink,
  Gauge
} from 'lucide-react';

import LightweightBackground from "../../components/LightweightBackground";

const SFR = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'SFR bloque-t-il vraiment l\'IPTV ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "SFR ne bloque pas l'IPTV de manière générale. Ce qui ressemble à un blocage est presque toujours un problème de bande passante partagée ou de priorisation du trafic (QoS) par la box SFR, qui réserve parfois une partie de la connexion pour son propre service « TV by SFR » au détriment des autres flux vidéo."
        }
      },
      {
        '@type': 'Question',
        name: "Mon IPTV coupe sur ma ligne SFR, comment le résoudre ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "1) Redémarrez votre box SFR et votre boîtier IPTV. 2) Passez en Ethernet plutôt qu'en WiFi. 3) Vérifiez dans l'interface de gestion de la box (192.168.1.1) si une bande passante est réservée pour « TV by SFR » et réduisez-la si possible. 4) Changez le DNS de votre appareil pour 1.1.1.1 ou 8.8.8.8. 5) Contactez notre support via WhatsApp si le problème persiste."
        }
      },
      {
        '@type': 'Question',
        name: "Quelle vitesse internet faut-il chez SFR pour l'IPTV ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "10 Mbps minimum pour la HD, 25 Mbps pour la 4K. La fibre SFR dépasse largement ce seuil ; en ADSL, vérifiez que votre débit réel (test de débit) atteint bien ces seuils, surtout si plusieurs appareils utilisent internet simultanément."
        }
      },
      {
        '@type': 'Question',
        name: "Faut-il un boîtier spécial pour l'IPTV avec une box SFR ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, comme la plupart des box opérateur, la box SFR ne permet pas d'installer d'applications tierces. Connectez un boîtier Android TV, un Amazon Fire Stick ou un Chromecast avec Google TV à votre téléviseur, relié en WiFi ou Ethernet à votre box SFR."
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
      { '@type': 'ListItem', position: 3, name: 'IPTV et SFR', item: 'https://franceiptv.stream/appareils/sfr' }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: "IPTV Bloqué par SFR : Solutions et Explications",
    description: "Pourquoi l'IPTV semble bloqué sur une ligne SFR et comment résoudre le problème en quelques minutes.",
    url: 'https://franceiptv.stream/appareils/sfr'
  };

  const causes = [
    {
      title: 'Bande passante réservée à « TV by SFR »',
      description: "La box SFR peut réserver une partie de votre connexion pour son propre service TV, réduisant la bande passante disponible pour l'IPTV.",
      icon: Gauge,
      severity: 'Cause fréquente'
    },
    {
      title: 'Connexion WiFi instable',
      description: "Le WiFi de la box SFR perd en portée et en stabilité selon la distance et les obstacles. Un câble Ethernet élimine ce problème.",
      icon: Wifi,
      severity: 'Cause fréquente'
    },
    {
      title: 'DNS par défaut lent',
      description: "Le DNS fourni par défaut par la box SFR n'est pas toujours le plus rapide pour résoudre les flux de streaming.",
      icon: Settings,
      severity: 'Cause occasionnelle'
    },
    {
      title: 'Congestion réseau aux heures de pointe',
      description: "En soirée, la charge globale du réseau SFR (comme chez tout opérateur) peut ralentir temporairement le streaming.",
      icon: AlertCircle,
      severity: 'Cause occasionnelle'
    }
  ];

  const solutions = [
    {
      number: 1,
      title: 'Redémarrez votre installation',
      description: 'Éteignez la box SFR et votre boîtier IPTV pendant 30 secondes, puis rallumez. Cela résout une grande partie des blocages temporaires.',
      icon: Zap,
      time: '1 minute'
    },
    {
      number: 2,
      title: 'Passez en Ethernet',
      description: "Connectez votre boîtier IPTV à la box SFR par câble Ethernet plutôt qu'en WiFi pour une connexion plus stable et plus rapide.",
      icon: Wifi,
      time: '2 minutes'
    },
    {
      number: 3,
      title: 'Vérifiez la bande passante réservée',
      description: "Dans l'interface de gestion de votre box SFR (192.168.1.1), vérifiez si une bande passante est allouée à « TV by SFR » et réduisez-la si vous n'utilisez pas ce service.",
      icon: Gauge,
      time: '3 minutes'
    },
    {
      number: 4,
      title: 'Changez de DNS',
      description: "Dans les paramètres réseau de votre boîtier IPTV, remplacez le DNS automatique par 1.1.1.1 (Cloudflare) ou 8.8.8.8 (Google).",
      icon: Settings,
      time: '2 minutes'
    },
    {
      number: 5,
      title: 'Contactez le support si besoin',
      description: "Toujours un problème après ces étapes ? Notre support francophone diagnostique votre configuration via WhatsApp en quelques minutes.",
      icon: Phone,
      time: '5 minutes'
    }
  ];

  const benefits = [
    { icon: Search, title: 'Diagnostic Rapide', description: 'Identifiez la cause réelle de vos coupures en quelques minutes' },
    { icon: Shield, title: 'Solutions Concrètes', description: 'Des réglages simples, sans jargon technique inutile' },
    { icon: Zap, title: 'Service Stable', description: '99,9 % de disponibilité côté serveur France IPTV' },
    { icon: Phone, title: 'Support Francophone', description: 'Aide 24/7 via WhatsApp en français' }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      <Helmet>
        <title>IPTV Bloqué par SFR : Solutions et Explications | France IPTV</title>
        <meta
          name="description"
          content="Votre IPTV coupe sur SFR ? Comprenez pourquoi et résolvez le problème en quelques minutes avec ces solutions concrètes. Support francophone 24/7."
        />
        <meta
          name="keywords"
          content="sfr bloque iptv, iptv coupe sfr, iptv sfr ne fonctionne pas, iptv box sfr"
        />
        <link rel="canonical" href="https://franceiptv.stream/appareils/sfr" />

        <meta property="og:title" content="IPTV Bloqué par SFR : Solutions et Explications" />
        <meta property="og:description" content="Comprenez pourquoi votre IPTV coupe sur SFR et résolvez-le en quelques minutes." />
        <meta property="og:url" content="https://franceiptv.stream/appareils/sfr" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV Bloqué par SFR : Solutions" />
        <meta name="twitter:description" content="Diagnostic et solutions en quelques minutes" />

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
              <AlertCircle className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Diagnostic & Solutions</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              IPTV Bloqué par
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
                SFR ?
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Ce n'est presque jamais un vrai blocage. Voici pourquoi votre IPTV coupe sur SFR, et comment le résoudre en <span className="font-bold text-blue-400">5 minutes</span>.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/18653169315?text=Bonjour%2C%20mon%20IPTV%20coupe%20sur%20ma%20ligne%20SFR"
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

      {/* Causes */}
      <section className="py-20 bg-gradient-to-br from-[#141311] to-[#201C18] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi ça <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">coupe</span> ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Les causes réelles derrière un « blocage » IPTV sur SFR
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {causes.map((cause, index) => {
              const Icon = cause.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-xl border-2 bg-white/5 border-white/20"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                    <div>
                      <span className="text-xs uppercase tracking-wide text-blue-300 font-semibold">{cause.severity}</span>
                      <h3 className="font-bold text-lg mt-1">{cause.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{cause.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
              5 Solutions <span className="text-brand-gold">à Essayer</span>
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Dans l'ordre, du plus rapide au plus poussé
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {solutions.map((step, index) => {
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
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">⏱️ {step.time}</span>
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
              Toujours un problème ? Notre support francophone est là pour vous aider.
            </p>
            <a
              href="https://wa.me/18653169315?text=Bonjour%2C%20j%27ai%20essay%C3%A9%20les%20solutions%20mais%20mon%20IPTV%20coupe%20toujours%20sur%20SFR"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Contactez-Nous via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-offwhite">
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
            <p className="text-xl text-brand-gray">Tout ce que vous devez savoir sur l'IPTV et SFR</p>
          </motion.div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-brand-gray-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-offwhite transition-colors"
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
            <h2 className="text-4xl font-bold mb-4">Autres Appareils & Guides</h2>
            <p className="text-xl text-gray-300">L'IPTV France IPTV fonctionne sur tous les appareils</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'IPTV sur Box Orange', url: '/appareils/orange' },
              { name: 'IPTV sur Chromecast', url: '/appareils/chromecast-google-tv' },
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Un IPTV Fiable, Sans Coupures</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Rejoignez France IPTV pour un service stable, quel que soit votre opérateur.
            </p>
            <a
              href="https://wa.me/18653169315?text=Bonjour%2C%20je%20souhaite%20commander%20un%20abonnement%20IPTV"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all"
            >
              <Phone className="w-6 h-6" />
              Commander via WhatsApp
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>99,9 % de disponibilité</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Activation en 5 minutes</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Support francophone 24/7</span></div>
              <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Sans engagement</span></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SFR;
