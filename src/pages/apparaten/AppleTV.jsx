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
  Smartphone,
  Wifi,
  Shield,
  Zap,
  Phone,
  ExternalLink,
  RefreshCw
} from 'lucide-react';

import LightweightBackground from "../../components/LightweightBackground";

const AppleTV = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Installer l'IPTV sur Apple TV",
    description: "Guide étape par étape pour installer et configurer l'IPTV sur Apple TV 4K et Apple TV HD (tvOS) avec une application de l'App Store.",
    totalTime: 'PT5M',
    tool: [
      { '@type': 'HowToTool', name: 'Apple TV 4K ou Apple TV HD (tvOS)' },
      { '@type': 'HowToTool', name: 'Connexion internet' },
      { '@type': 'HowToTool', name: 'Abonnement IPTV France IPTV' }
    ],
    step: [
      { '@type': 'HowToStep', position: 1, name: "Ouvrez l'App Store", text: "Sur l'écran d'accueil de l'Apple TV, ouvrez l'App Store." },
      { '@type': 'HowToStep', position: 2, name: 'Recherchez une application IPTV', text: "Recherchez « IPTV Smarters » ou un autre lecteur IPTV compatible tvOS (iPlayTV, GSE Smart IPTV…)." },
      { '@type': 'HowToStep', position: 3, name: "Installez l'application", text: "Installez l'application puis ouvrez-la." },
      { '@type': 'HowToStep', position: 4, name: 'Ajoutez vos accès', text: "Choisissez la connexion Xtream Codes (ou M3U) et saisissez les identifiants reçus sur WhatsApp." },
      { '@type': 'HowToStep', position: 5, name: 'Commencez à regarder', text: "Les chaînes, les films et les séries se chargent : votre IPTV est prêt sur Apple TV." }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "L'IPTV est-il compatible avec l'Apple TV ?",
        acceptedAnswer: { '@type': 'Answer', text: "Oui. L'Apple TV 4K et l'Apple TV HD sous tvOS lisent l'IPTV grâce à une application de l'App Store. Il n'y a rien à brancher en plus : il suffit d'installer un lecteur IPTV et d'y ajouter les accès de votre abonnement." }
      },
      {
        '@type': 'Question',
        name: "Quelle application IPTV installer sur Apple TV ?",
        acceptedAnswer: { '@type': 'Answer', text: "IPTV Smarters est la plus utilisée et accepte les connexions Xtream Codes et M3U. iPlayTV et GSE Smart IPTV sont d'autres lecteurs compatibles tvOS. La disponibilité et le prix des applications peuvent changer : demandez-nous sur WhatsApp avant d'acheter une application payante." }
      },
      {
        '@type': 'Question',
        name: "Peut-on installer TiviMate sur Apple TV ?",
        acceptedAnswer: { '@type': 'Answer', text: "Non. TiviMate n'existe que sur Android (Fire Stick, box Android TV, Google TV). Sur Apple TV, utilisez IPTV Smarters, iPlayTV ou GSE Smart IPTV. Si vous tenez à TiviMate, un Fire TV Stick branché sur votre téléviseur est la solution la plus simple." }
      },
      {
        '@type': 'Question',
        name: "L'IPTV ne fonctionne plus sur mon Apple TV : que faire ?",
        acceptedAnswer: { '@type': 'Answer', text: "Vérifiez d'abord que votre abonnement est toujours actif. Fermez complètement l'application (double appui sur le bouton TV, puis glissez l'application vers le haut), mettez à jour tvOS et l'application, puis relancez. Si une seule chaîne ne marche pas, c'est souvent la source de cette chaîne ; si rien ne marche, contactez-nous sur WhatsApp avec une capture de l'erreur." }
      },
      {
        '@type': 'Question',
        name: "L'IPTV en 4K sur Apple TV 4K, c'est possible ?",
        acceptedAnswer: { '@type': 'Answer', text: "Oui, sur les chaînes et les contenus disponibles en 4K, à condition d'avoir une connexion d'environ 25 Mbit/s et un téléviseur 4K. Pour la HD, environ 7 Mbit/s suffisent. Préférez un câble Ethernet au Wi-Fi pour une image plus stable." }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://franceiptv.stream' },
      { '@type': 'ListItem', position: 2, name: 'Appareils', item: 'https://franceiptv.stream/appareils' },
      { '@type': 'ListItem', position: 3, name: 'Apple TV', item: 'https://franceiptv.stream/appareils/apple-tv' }
    ]
  };

  const compatibleModels = [
    { series: 'Apple TV 4K (toutes générations)', supported: true },
    { series: 'Apple TV HD (4e génération)', supported: true },
    { series: 'Apple TV 3e génération et plus anciennes', supported: false, alternative: "Pas d'App Store : utilisez un Fire TV Stick ou un boîtier Android TV" }
  ];

  const installationSteps = [
    { number: 1, title: "Ouvrez l'App Store", description: "Sur l'écran d'accueil de votre Apple TV, ouvrez l'App Store (icône bleue).", icon: Tv, time: '30 secondes' },
    { number: 2, title: 'Recherchez une application IPTV', description: "Tapez « IPTV Smarters » dans la recherche. iPlayTV et GSE Smart IPTV fonctionnent aussi.", icon: Download, time: '1 minute' },
    { number: 3, title: "Installez l'application", description: "Sélectionnez « Obtenir », puis ouvrez l'application une fois installée.", icon: Settings, time: '1 minute' },
    { number: 4, title: 'Choisissez Xtream Codes', description: "Dans l'application, choisissez « Xtream Codes API » (ou « M3U » si c'est ce que vous avez reçu).", icon: Smartphone, time: '30 secondes' },
    { number: 5, title: 'Saisissez vos accès', description: "Entrez le nom d'utilisateur, le mot de passe et l'adresse du serveur reçus sur WhatsApp, sans espace en trop.", icon: Phone, time: '1 minute' },
    { number: 6, title: 'Commencez à regarder', description: "Les chaînes, les films et les séries se chargent en quelques secondes.", icon: Play, time: '30 secondes' }
  ];

  const troubleshooting = [
    {
      problem: "L'IPTV ne fonctionne plus sur l'Apple TV",
      solution: "Vérifiez que votre abonnement est actif. Fermez complètement l'application (double appui sur le bouton TV, puis glissez-la vers le haut), mettez à jour tvOS (Réglages > Système > Mises à jour logicielles) et l'application, puis relancez.",
      icon: RefreshCw
    },
    {
      problem: "« Authorization failed » ou identifiants refusés",
      solution: "Ressaisissez vos accès : une majuscule ou un espace en trop suffit à bloquer la connexion. Vérifiez aussi l'adresse du serveur (avec http:// et le port). Toujours bloqué ? Envoyez-nous une capture sur WhatsApp.",
      icon: Shield
    },
    {
      problem: "Image qui saccade ou qui coupe",
      solution: "Comptez environ 7 Mbit/s par écran en HD et 25 Mbit/s en 4K. Branchez l'Apple TV en Ethernet si possible, et redémarrez votre box. Dans les réglages du lecteur, essayez un autre format de flux (HLS au lieu de TS).",
      icon: Wifi
    },
    {
      problem: "Le son fonctionne mais l'écran reste noir",
      solution: "Changez de lecteur vidéo dans les réglages de l'application si l'option existe, ou essayez une autre application IPTV. Vérifiez aussi que la chaîne fonctionne sur un autre appareil.",
      icon: AlertCircle
    }
  ];

  const benefits = [
    { icon: Zap, title: 'Installation Rapide', description: "Un IPTV fonctionnel sur votre Apple TV en 5 minutes" },
    { icon: Tv, title: 'Apple TV 4K & HD', description: 'Compatible avec les modèles sous tvOS' },
    { icon: Check, title: 'Test Gratuit 24 h', description: 'Vérifiez sur votre Apple TV avant de payer' },
    { icon: Phone, title: 'Support Francophone', description: "Aide à l'installation via WhatsApp en français" }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      <Helmet>
        <title>IPTV sur Apple TV : Installer et Configurer (Apple TV 4K) 2026 | France IPTV</title>
        <meta name="description" content="Installer l'IPTV sur Apple TV 4K et HD en 5 minutes ✓ Quelle application choisir (IPTV Smarters, iPlayTV) ✓ Solutions si l'IPTV ne fonctionne plus ✓ Test gratuit 24 h." />
        <meta name="keywords" content="iptv sur apple tv, installer iptv apple tv, application iptv apple tv, iptv smarters apple tv, iptv apple tv 4k, iptv ne fonctionne plus apple tv" />
        <link rel="canonical" href="https://franceiptv.stream/appareils/apple-tv" />

        <meta property="og:title" content="IPTV sur Apple TV : Guide d'Installation 2026" />
        <meta property="og:description" content="Installez l'IPTV sur votre Apple TV 4K en 5 minutes. Applications, réglages et solutions aux problèmes." />
        <meta property="og:url" content="https://franceiptv.stream/appareils/apple-tv" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV sur Apple TV : Guide d'Installation" />
        <meta name="twitter:description" content="Installation en 5 minutes ✓ Apple TV 4K et HD" />

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
              <Tv className="w-5 h-5 text-lime" />
              <span className="font-medium">Apple TV 4K · Apple TV HD · tvOS</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              IPTV sur <span className="text-lime">Apple TV</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Installez et configurez l'IPTV sur votre Apple TV en <span className="font-bold text-lime">5 minutes</span>, avec une application de l'App Store.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/212627370646?text=Bonjour%2C%20je%20souhaite%20un%20test%20gratuit%20sur%20mon%20Apple%20TV" className="bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />Test gratuit 24 h sur Apple TV
              </a>
              <a href="/tarifs" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all">Voir les Tarifs</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white border border-brand-gray-border rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-surface border border-brand-gold/40 rounded-lg flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-white" /></div>
                  <h3 className="font-bold text-lg mb-2 text-brand-black">{benefit.title}</h3>
                  <p className="text-brand-gray text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">Installer l'IPTV sur Apple TV en <span className="text-brand-gold">6 étapes</span></h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">Configurer l'IPTV sur Apple TV ne demande aucune connaissance technique</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {installationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-brand-offwhite rounded-2xl p-8 border-l-4 border-brand-gold shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-surface border border-brand-gold/40 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">{step.number}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3"><Icon className="w-6 h-6 text-brand-gold" /><h3 className="text-2xl font-bold text-brand-black">{step.title}</h3></div>
                      <p className="text-brand-gray leading-relaxed mb-4">{step.description}</p>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium text-sm">⏱️ {step.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-offwhite">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-black">Quelle application IPTV sur Apple TV ?</h2>
          <div className="space-y-4 text-lg leading-relaxed text-brand-gray">
            <p>
              <strong className="text-brand-black">IPTV Smarters</strong> est l'application IPTV la plus utilisée sur Apple TV : elle accepte les
              connexions Xtream Codes et M3U, affiche le guide des programmes (EPG) et classe les films et séries.
              <strong className="text-brand-black"> iPlayTV</strong> et <strong className="text-brand-black">GSE Smart IPTV</strong> sont
              d'autres lecteurs compatibles tvOS. La disponibilité et le prix des applications peuvent changer : avant d'acheter une application
              payante, demandez-nous laquelle fonctionne le mieux avec votre abonnement.
            </p>
            <p>
              <strong className="text-brand-black">TiviMate n'existe pas sur Apple TV</strong> : c'est une application Android. Si vous y tenez, un{' '}
              <a href="/appareils/fire-stick" className="text-brand-gold underline">Fire TV Stick</a> ou une{' '}
              <a href="/appareils/android-tv" className="text-brand-gold underline">box Android TV</a> branchés en HDMI sont la solution.
              Pour comprendre les différents types d'accès, lisez notre guide{' '}
              <a href="/blog/m3u-xtream-codes-mac" className="text-brand-gold underline">M3U, Xtream Codes ou adresse MAC</a>.
            </p>
            <p>
              Vous regardez aussi sur iPhone ou iPad ? La même application fonctionne sur les trois appareils : voir notre guide{' '}
              <a href="/appareils/iphone-ipad" className="text-brand-gold underline">IPTV sur iPhone et iPad</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#090B0B] to-[#111413] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Apple TV <span className="text-lime">compatibles</span></h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Tous les modèles avec App Store lisent l'IPTV</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
            {compatibleModels.map((model, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${model.supported ? 'bg-green-900/20 border-green-500' : 'bg-orange-900/20 border-orange-500'}`}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-lg">{model.series}</h3>
                    {model.alternative && <p className="text-sm text-gray-400 mt-1">{model.alternative}</p>}
                  </div>
                  {model.supported ? <Check className="w-8 h-8 text-green-400 flex-shrink-0" /> : <AlertCircle className="w-8 h-8 text-orange-400 flex-shrink-0" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">Problème IPTV sur Apple TV : <span className="text-brand-gold">solutions</span></h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">Les pannes les plus fréquentes et comment les régler</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {troubleshooting.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white border border-brand-gray-border rounded-2xl p-8 shadow-lg">
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
            Un code d'erreur précis ? Consultez notre liste des{' '}
            <a href="/blog/codes-erreur-iptv" className="text-brand-gold underline">codes d'erreur IPTV</a> et le guide{' '}
            <a href="/blog/iptv-ne-fonctionne-plus" className="text-brand-gold underline">IPTV ne fonctionne plus</a>.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">Questions <span className="text-brand-gold">fréquentes</span></h2>
            <p className="text-xl text-brand-gray">Tout savoir sur l'IPTV sur Apple TV</p>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-brand-offwhite rounded-2xl border border-brand-gray-border overflow-hidden">
                <button onClick={() => toggleFaq(index)} className="w-full p-6 text-left flex items-center justify-between hover:bg-white transition-colors">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Testez sur votre Apple TV</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Test gratuit de 24 h, puis dès 8 € le mois, sans engagement.</p>
          <a href="https://wa.me/212627370646?text=Bonjour%2C%20je%20souhaite%20un%20test%20gratuit%20sur%20mon%20Apple%20TV" className="inline-flex items-center gap-2 bg-lime text-lime-on px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all">
            <Phone className="w-6 h-6" />Demander mon test gratuit
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Installation en 5 minutes</span></div>
            <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Apple TV 4K et HD</span></div>
            <div className="flex items-center gap-2"><Check className="w-5 h-5" /><span>Binance Pay ou PayPal</span></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppleTV;
