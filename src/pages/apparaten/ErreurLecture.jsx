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
  Gauge,
  ShieldOff,
  Server,
  RefreshCw
} from 'lucide-react';

import LightweightBackground from "../../components/LightweightBackground";

const ErreurLecture = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Que faire si mon IPTV affiche une erreur de lecture ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Vérifiez d'abord votre connexion internet (test de débit, 10 Mbps minimum). Redémarrez votre application IPTV et votre appareil. Videz le cache de l'application. Si vous utilisez un VPN, désactivez-le temporairement. Si le problème persiste sur toutes les chaînes, contactez notre support via WhatsApp."
        }
      },
      {
        '@type': 'Question',
        name: "Pourquoi mon IPTV ne fonctionne plus du tout ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les causes les plus fréquentes sont : une connexion internet insuffisante, un cache d'application corrompu, un VPN qui interfère avec le flux, ou un abonnement arrivé à expiration. Vérifiez d'abord la date de fin de votre abonnement, puis passez par les étapes de diagnostic ci-dessus."
        }
      },
      {
        '@type': 'Question',
        name: "L'erreur vient-elle de mon appareil ou du serveur IPTV ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Si une seule chaîne ne fonctionne pas mais que les autres marchent, le problème vient généralement du flux de cette chaîne spécifique (temporaire côté serveur). Si aucune chaîne ne fonctionne, le problème est presque toujours côté appareil ou connexion : redémarrage, cache, ou réseau."
        }
      },
      {
        '@type': 'Question',
        name: "Un VPN peut-il causer des erreurs de lecture IPTV ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, un VPN peut ralentir votre connexion ou router votre trafic vers un serveur distant qui ajoute de la latence, causant des erreurs de mémoire tampon ou des flux qui ne se chargent pas. Essayez de désactiver temporairement votre VPN pour identifier si c'est la cause."
        }
      },
      {
        '@type': 'Question',
        name: "Combien de temps pour résoudre une erreur de lecture IPTV ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La majorité des erreurs de lecture se résolvent en moins de 5 minutes avec un simple redémarrage de l'application et de l'appareil. Si le problème est lié à votre réseau ou à un appareil spécifique, notre support francophone vous guide via WhatsApp en quelques minutes."
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
      { '@type': 'ListItem', position: 3, name: 'Erreur de Lecture IPTV', item: 'https://franceiptv.stream/appareils/erreur-lecture-iptv' }
    ]
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: "Erreur de Lecture IPTV : Solutions et Diagnostic",
    description: "Votre IPTV ne fonctionne plus ou affiche une erreur de lecture ? Diagnostic complet et solutions pour identifier et résoudre le problème.",
    url: 'https://franceiptv.stream/appareils/erreur-lecture-iptv'
  };

  const causes = [
    {
      title: 'Connexion internet insuffisante',
      description: "Moins de 10 Mbps rend la HD instable ; moins de 25 Mbps affecte la 4K. Un test de débit identifie ce problème en 30 secondes.",
      icon: Gauge,
      severity: 'Cause la plus fréquente'
    },
    {
      title: 'Cache application corrompu',
      description: "Après une utilisation prolongée, le cache de l'application IPTV peut se corrompre et provoquer des erreurs de lecture aléatoires.",
      icon: RefreshCw,
      severity: 'Cause fréquente'
    },
    {
      title: 'VPN actif',
      description: "Un VPN ajoute de la latence et peut router votre trafic vers un serveur éloigné, causant des coupures ou erreurs de chargement.",
      icon: ShieldOff,
      severity: 'Cause fréquente'
    },
    {
      title: 'Problème temporaire côté serveur',
      description: "Une chaîne spécifique peut rencontrer un problème de flux temporaire pendant que les autres fonctionnent normalement.",
      icon: Server,
      severity: 'Cause occasionnelle'
    },
    {
      title: 'Abonnement expiré',
      description: "Vérifiez la date de fin de votre abonnement : une erreur de lecture générale peut simplement signifier qu'il est arrivé à échéance.",
      icon: AlertCircle,
      severity: 'À vérifier en premier'
    },
    {
      title: 'Application ou appareil obsolète',
      description: "Une application IPTV non mise à jour ou un appareil avec un ancien firmware peut avoir des difficultés à lire certains flux.",
      icon: Settings,
      severity: 'Cause occasionnelle'
    }
  ];

  const diagnosticSteps = [
    {
      number: 1,
      title: 'Vérifiez votre abonnement',
      description: "Assurez-vous que votre abonnement France IPTV est toujours actif. Une erreur générale sur toutes les chaînes peut simplement indiquer une expiration.",
      icon: AlertCircle,
      time: '30 secondes'
    },
    {
      number: 2,
      title: 'Testez votre connexion',
      description: 'Faites un test de débit (10 Mbps minimum pour la HD, 25 Mbps pour la 4K). Passez en Ethernet si possible.',
      icon: Gauge,
      time: '1 minute'
    },
    {
      number: 3,
      title: 'Redémarrez application et appareil',
      description: "Fermez complètement l'application IPTV, redémarrez votre appareil (TV, boîtier, téléphone), puis relancez l'application.",
      icon: RefreshCw,
      time: '2 minutes'
    },
    {
      number: 4,
      title: 'Désactivez tout VPN',
      description: "Si vous utilisez un VPN, désactivez-le temporairement pour vérifier s'il est à l'origine du problème.",
      icon: ShieldOff,
      time: '30 secondes'
    },
    {
      number: 5,
      title: 'Contactez le support',
      description: "Toujours une erreur ? Notre support francophone diagnostique votre configuration précise via WhatsApp en quelques minutes.",
      icon: Phone,
      time: '5 minutes'
    }
  ];

  const benefits = [
    { icon: Search, title: 'Diagnostic Structuré', description: 'Identifiez la cause réelle en suivant ces 5 étapes dans l\'ordre' },
    { icon: Shield, title: 'Solutions Concrètes', description: 'Des vérifications simples, sans jargon technique inutile' },
    { icon: Zap, title: 'Service Stable', description: '99,9 % de disponibilité côté serveur France IPTV' },
    { icon: Phone, title: 'Support Francophone', description: 'Aide 24/7 via WhatsApp en français' }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      <Helmet>
        <title>Erreur de Lecture IPTV : Solutions et Diagnostic | France IPTV</title>
        <meta
          name="description"
          content="Votre IPTV ne fonctionne plus ou affiche une erreur de lecture ? Diagnostic en 5 étapes et solutions concrètes. Support francophone 24/7."
        />
        <meta
          name="keywords"
          content="erreur de lecture iptv, playback error iptv, mon iptv ne fonctionne plus, iptv ne marche plus"
        />
        <link rel="canonical" href="https://franceiptv.stream/appareils/erreur-lecture-iptv" />

        <meta property="og:title" content="Erreur de Lecture IPTV : Solutions et Diagnostic" />
        <meta property="og:description" content="Diagnostic en 5 étapes pour résoudre toute erreur de lecture IPTV." />
        <meta property="og:url" content="https://franceiptv.stream/appareils/erreur-lecture-iptv" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Erreur de Lecture IPTV : Solutions" />
        <meta name="twitter:description" content="Diagnostic en 5 étapes, solutions concrètes" />

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
              <span className="font-medium">Diagnostic Complet</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Erreur de Lecture
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
                IPTV ?
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Identifiez la cause et résolvez le problème en <span className="font-bold text-blue-400">5 minutes</span>, quel que soit votre appareil.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/18653169315?text=Bonjour%2C%20mon%20IPTV%20affiche%20une%20erreur%20de%20lecture"
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

      {/* Causes courantes */}
      <section className="py-20 bg-gradient-to-br from-[#141311] to-[#201C18] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Causes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Courantes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Les 6 causes les plus fréquentes d'une erreur de lecture IPTV
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
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

      {/* Diagnostic steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
              Diagnostic en <span className="text-brand-gold">5 Étapes</span>
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Suivez cet ordre pour identifier et résoudre le problème rapidement
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {diagnosticSteps.map((step, index) => {
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
              Toujours bloqué après ces 5 étapes ? Notre support francophone prend le relais.
            </p>
            <a
              href="https://wa.me/18653169315?text=Bonjour%2C%20j%27ai%20suivi%20les%205%20%C3%A9tapes%20mais%20mon%20IPTV%20affiche%20toujours%20une%20erreur"
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
            <p className="text-xl text-brand-gray">Tout ce que vous devez savoir sur les erreurs de lecture IPTV</p>
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

      {/* Related devices - hub links to ALL device pages */}
      <section className="py-20 bg-gradient-to-br from-[#141311] to-[#201C18] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Guides par Appareil</h2>
            <p className="text-xl text-gray-300">Un problème spécifique à votre appareil ou opérateur ?</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Freebox', url: '/appareils/freebox' },
              { name: 'Box Orange', url: '/appareils/orange' },
              { name: 'IPTV & SFR', url: '/appareils/sfr' },
              { name: 'Chromecast', url: '/appareils/chromecast-google-tv' },
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
                <Tv className="w-10 h-10 mx-auto mb-3 text-blue-400" />
                <h3 className="font-bold">{device.name}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Un IPTV Fiable, Sans Erreurs</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Rejoignez France IPTV pour un service stable et un support toujours disponible.
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

export default ErreurLecture;
