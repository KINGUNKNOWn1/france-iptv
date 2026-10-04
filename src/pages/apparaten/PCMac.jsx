import React, { useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Laptop,
  Monitor,
  Play,
  Check,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Wifi,
  Shield,
  Phone,
  ExternalLink,
  Link2,
  RefreshCw
} from 'lucide-react';

import LightweightBackground from "../../components/LightweightBackground";

const PCMac = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Regarder l'IPTV sur PC ou Mac avec VLC",
    description: "Guide pour lire une liste IPTV (lien M3U) sur un ordinateur Windows ou Mac avec VLC Media Player, gratuit.",
    totalTime: 'PT3M',
    tool: [
      { '@type': 'HowToTool', name: 'Ordinateur Windows ou Mac' },
      { '@type': 'HowToTool', name: 'VLC Media Player (gratuit)' },
      { '@type': 'HowToTool', name: 'Lien M3U de votre abonnement France IPTV' }
    ],
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Installez VLC', text: "Téléchargez VLC Media Player sur le site officiel videolan.org et installez-le." },
      { '@type': 'HowToStep', position: 2, name: 'Ouvrez un flux réseau', text: "Dans VLC, ouvrez le menu Média > Ouvrir un flux réseau (Windows) ou Fichier > Ouvrir le réseau (Mac)." },
      { '@type': 'HowToStep', position: 3, name: 'Collez votre lien M3U', text: "Collez le lien M3U reçu sur WhatsApp, puis cliquez sur Lire." },
      { '@type': 'HowToStep', position: 4, name: 'Choisissez une chaîne', text: "Ouvrez la liste de lecture (Ctrl+L sous Windows, Cmd+Maj+P sur Mac) pour voir toutes les chaînes." }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Comment regarder l'IPTV sur PC ?",
        acceptedAnswer: { '@type': 'Answer', text: "Le plus simple est VLC Media Player, gratuit sur Windows et Mac : Média > Ouvrir un flux réseau, puis collez votre lien M3U. Pour un confort proche de la télé (guide des programmes, films et séries classés), utilisez plutôt une application IPTV pour ordinateur comme IPTV Smarters ou Kodi avec l'extension PVR IPTV Simple Client." }
      },
      {
        '@type': 'Question',
        name: "VLC suffit-il pour l'IPTV ?",
        acceptedAnswer: { '@type': 'Answer', text: "VLC lit très bien les chaînes en direct à partir d'un lien M3U, mais il n'affiche pas de guide des programmes et la navigation dans une longue liste est peu pratique. Il est idéal pour tester rapidement ; pour un usage quotidien, une application IPTV dédiée est plus agréable." }
      },
      {
        '@type': 'Question',
        name: "Peut-on utiliser IPTV Smarters sur Windows ou Mac ?",
        acceptedAnswer: { '@type': 'Answer', text: "Des versions pour ordinateur d'IPTV Smarters existent, mais leur disponibilité change selon les versions de Windows et de macOS. Téléchargez toujours depuis le site officiel de l'éditeur ou le magasin d'applications de votre système, jamais depuis un site tiers. Kodi, gratuit et disponible partout, est une alternative fiable." }
      },
      {
        '@type': 'Question',
        name: "Ça marche sur Windows 11 et sur Mac M1/M2/M3 ?",
        acceptedAnswer: { '@type': 'Answer', text: "Oui. VLC et Kodi fonctionnent sur Windows 10, Windows 11 et sur les Mac Intel comme Apple Silicon (M1, M2, M3 et suivants)." }
      },
      {
        '@type': 'Question',
        name: "Puis-je regarder sur mon PC et ma TV en même temps ?",
        acceptedAnswer: { '@type': 'Answer', text: "Cela dépend du nombre d'écrans inclus dans votre formule. Si vous regardez sur plus d'appareils à la fois que prévu, les connexions en trop sont refusées. Demandez-nous sur WhatsApp combien d'écrans simultanés votre abonnement permet." }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://franceiptv.stream' },
      { '@type': 'ListItem', position: 2, name: 'Appareils', item: 'https://franceiptv.stream/appareils' },
      { '@type': 'ListItem', position: 3, name: 'PC et Mac', item: 'https://franceiptv.stream/appareils/pc-mac' }
    ]
  };

  const vlcSteps = [
    { number: 1, title: 'Installez VLC', description: "Téléchargez VLC Media Player sur le site officiel videolan.org (gratuit, Windows et Mac), puis installez-le.", icon: Monitor },
    { number: 2, title: 'Ouvrez un flux réseau', description: "Windows : menu Média > Ouvrir un flux réseau (Ctrl+N). Mac : Fichier > Ouvrir le réseau (Cmd+N).", icon: Link2 },
    { number: 3, title: 'Collez votre lien M3U', description: "Collez le lien M3U reçu sur WhatsApp, entier et sans espace, puis cliquez sur Lire.", icon: Play },
    { number: 4, title: 'Choisissez votre chaîne', description: "Ouvrez la liste de lecture (Ctrl+L sous Windows, Cmd+Maj+P sur Mac) et double-cliquez sur une chaîne.", icon: Check }
  ];

  const apps = [
    { name: 'VLC Media Player', systems: 'Windows · Mac', best: 'Tester rapidement, lecture des chaînes en direct', note: "Gratuit. Pas de guide des programmes." },
    { name: 'Kodi + PVR IPTV Simple Client', systems: 'Windows · Mac', best: 'Une vraie interface TV avec guide des programmes', note: "Gratuit. Réglage un peu plus long au départ." },
    { name: 'IPTV Smarters (version ordinateur)', systems: 'Selon version du système', best: 'La même interface que sur TV et téléphone', note: "Téléchargez uniquement depuis la source officielle." }
  ];

  const troubleshooting = [
    {
      problem: "VLC affiche « Impossible d'ouvrir votre média »",
      solution: "Le lien M3U est incomplet ou mal copié. Recopiez-le en entier depuis WhatsApp, sans espace ni retour à la ligne. Vérifiez aussi que votre abonnement ou votre test est toujours actif.",
      icon: AlertCircle
    },
    {
      problem: "La liste de chaînes est très longue à charger",
      solution: "C'est normal avec VLC pour une grande liste. Patientez quelques secondes, ou passez à Kodi ou à une application IPTV qui gère mieux les grandes listes.",
      icon: RefreshCw
    },
    {
      problem: "L'image saccade ou coupe",
      solution: "Comptez environ 7 Mbit/s par écran en HD et 25 Mbit/s en 4K. Préférez un câble Ethernet au Wi-Fi, fermez les téléchargements en cours et vérifiez votre débit avec notre test de débit IPTV.",
      icon: Wifi
    },
    {
      problem: "L'antivirus bloque l'application",
      solution: "N'installez que des applications téléchargées depuis leur site officiel ou le magasin d'applications de Windows ou d'Apple. Ne désactivez jamais votre antivirus pour installer un logiciel d'origine inconnue.",
      icon: Shield
    }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      <Helmet>
        <title>IPTV sur PC et Mac : VLC, Windows 11, Kodi (Guide 2026) | France IPTV</title>
        <meta name="description" content="Regarder l'IPTV sur PC ou Mac ✓ Installer une liste M3U dans VLC en 3 minutes ✓ Windows 11, Mac M1/M2 ✓ Kodi et IPTV Smarters ✓ Solutions aux erreurs." />
        <meta name="keywords" content="iptv sur pc, iptv sur vlc, installer iptv vlc, iptv mac, iptv windows 11, iptv smarters pc, iptv kodi" />
        <link rel="canonical" href="https://franceiptv.stream/appareils/pc-mac" />

        <meta property="og:title" content="IPTV sur PC et Mac : Guide VLC et Kodi 2026" />
        <meta property="og:description" content="Regardez l'IPTV sur votre ordinateur Windows ou Mac en 3 minutes avec VLC." />
        <meta property="og:url" content="https://franceiptv.stream/appareils/pc-mac" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV sur PC et Mac : Guide VLC et Kodi" />
        <meta name="twitter:description" content="Windows 11, Mac, VLC, Kodi : l'IPTV sur ordinateur en 3 minutes" />

        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#090B0B] via-[#111413] to-[#0D0F0F]">
        <Suspense fallback={null}><LightweightBackground variant="hero" /></Suspense>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Laptop className="w-5 h-5 text-lime" />
              <span className="font-medium">Windows · Mac · VLC · Kodi</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              IPTV sur <span className="text-lime">PC et Mac</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Regardez vos chaînes sur ordinateur en <span className="font-bold text-lime">3 minutes</span> avec VLC, gratuit, ou avec une application IPTV.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/212627370646?text=Bonjour%2C%20je%20souhaite%20un%20test%20gratuit%20sur%20mon%20ordinateur" className="bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />Test gratuit 24 h sur PC
              </a>
              <a href="/tarifs" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">Voir les Tarifs</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">Installer l'IPTV sur <span className="text-brand-gold">VLC</span> en 4 étapes</h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">La méthode la plus rapide, sur Windows comme sur Mac</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {vlcSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-brand-offwhite rounded-2xl p-8 border-l-4 border-brand-gold shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-surface border border-brand-gold/40 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">{step.number}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3"><Icon className="w-6 h-6 text-brand-gold" /><h3 className="text-2xl font-bold text-brand-black">{step.title}</h3></div>
                      <p className="text-brand-gray leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-brand-gray mt-10 max-w-3xl mx-auto">
            Vous avez reçu des identifiants Xtream Codes plutôt qu'un lien M3U ? Demandez-nous le lien M3U sur WhatsApp, ou lisez notre guide{' '}
            <a href="/blog/m3u-xtream-codes-mac" className="text-brand-gold underline">M3U, Xtream Codes ou adresse MAC</a>.
          </p>
        </div>
      </section>

      <section className="py-20 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">Quelle application IPTV <span className="text-brand-gold">pour ordinateur</span> ?</h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">VLC pour tester, une application dédiée pour regarder tous les jours</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {apps.map((app) => (
              <div key={app.name} className="bg-white border border-brand-gray-border rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-black mb-1">{app.name}</h3>
                <p className="text-sm text-brand-gold mb-4">{app.systems}</p>
                <p className="text-brand-gray mb-3"><strong className="text-brand-black">Idéal pour :</strong> {app.best}</p>
                <p className="text-sm text-brand-gray">{app.note}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 space-y-4 text-lg leading-relaxed text-brand-gray">
            <h3 className="text-2xl font-bold text-brand-black">Kodi : une vraie interface TV sur ordinateur</h3>
            <p>
              Installez Kodi depuis son site officiel (kodi.tv), puis allez dans Extensions &gt; Installer depuis un dépôt &gt; Clients PVR et
              activez <strong className="text-brand-black">PVR IPTV Simple Client</strong>. Dans ses réglages, collez votre lien M3U (et le lien EPG
              si nous vous l'avons fourni), redémarrez Kodi : vos chaînes apparaissent dans le menu TV, avec le guide des programmes.
            </p>
            <p>
              Vous préférez regarder sur la télévision ? Voir nos guides pour{' '}
              <a href="/appareils/samsung-tv" className="text-brand-gold underline">Samsung</a>,{' '}
              <a href="/appareils/lg-tv" className="text-brand-gold underline">LG</a> ou le{' '}
              <a href="/appareils/fire-stick" className="text-brand-gold underline">Fire TV Stick</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">Problème IPTV sur ordinateur : <span className="text-brand-gold">solutions</span></h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {troubleshooting.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center"><Icon className="w-6 h-6 text-red-600" /></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-red-600">{item.problem}</h3>
                      <p className="text-brand-gray leading-relaxed"><span className="font-semibold text-green-600">Solution :</span> {item.solution}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-brand-gray mt-10">
            Vérifiez votre connexion avec notre <a href="/test-debit-iptv" className="text-brand-gold underline">test de débit IPTV</a>, ou consultez les{' '}
            <a href="/blog/codes-erreur-iptv" className="text-brand-gold underline">codes d'erreur IPTV</a>.
          </p>
        </div>
      </section>

      <section className="py-20 bg-brand-offwhite">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">Questions <span className="text-brand-gold">fréquentes</span></h2>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-brand-gray-border overflow-hidden">
                <button onClick={() => toggleFaq(index)} className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-offwhite transition-colors">
                  <h3 className="font-bold text-lg pr-4 text-brand-black">{faq.name}</h3>
                  {openFaq === index ? <ChevronUp className="w-6 h-6 text-brand-gold flex-shrink-0" /> : <ChevronDown className="w-6 h-6 text-brand-gray flex-shrink-0" />}
                </button>
                <div hidden={openFaq !== index} className="px-6 pb-6 pt-0"><p className="text-brand-gray leading-relaxed">{faq.acceptedAnswer.text}</p></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/faq" className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:underline">Voir toutes les questions fréquentes<ExternalLink className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface border border-lime/30 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Testez sur votre ordinateur</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Test gratuit de 24 h, puis dès 8 € le mois, sans engagement.</p>
          <a href="https://wa.me/212627370646?text=Bonjour%2C%20je%20souhaite%20un%20test%20gratuit%20sur%20mon%20ordinateur" className="inline-flex items-center gap-2 bg-lime text-lime-on px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all">
            <Phone className="w-6 h-6" />Demander mon test gratuit
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Windows et Mac</span></div>
            <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>VLC et Kodi gratuits</span></div>
            <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Binance Pay ou PayPal</span></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PCMac;
