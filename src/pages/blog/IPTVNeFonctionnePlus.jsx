import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaTools, FaWifi, FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import SEO from '../../components/SEO';

const IPTVNeFonctionnePlus = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const seoData = {
    title: 'IPTV Ne Fonctionne Plus : Pannes et Solutions 2026',
    description: "Votre IPTV ne fonctionne plus, coupe ou saccade ? Voici les 6 causes les plus fréquentes et comment les résoudre en quelques minutes, appareil par appareil.",
    keywords: 'iptv ne fonctionne plus, iptv bug, iptv coupe, iptv saccade, mon iptv ne marche plus, iptv erreur',
    ogType: 'article',
    canonicalPath: '/blog/iptv-ne-fonctionne-plus'
  };

  const faqItems = [
    {
      q: "Pourquoi mon IPTV coupe-t-il uniquement le soir ?",
      a: "C'est généralement un problème de bande passante : le soir, toute la famille (ou tout le quartier, si vous êtes en WiFi partagé) utilise internet en même temps. Testez votre débit à ce moment précis et privilégiez une connexion Ethernet plutôt que le WiFi pour l'appareil qui diffuse l'IPTV."
    },
    {
      q: "Mon IPTV fonctionnait hier mais plus aujourd'hui, que faire ?",
      a: "Redémarrez d'abord votre box internet et votre appareil (Smart TV, boîtier Android, etc.). Vérifiez ensuite que votre abonnement n'est pas arrivé à échéance. Si tout semble en ordre, contactez le support de votre fournisseur : un problème serveur temporaire est possible et se résout généralement en quelques minutes."
    },
    {
      q: "Certaines chaînes fonctionnent mais pas d'autres, pourquoi ?",
      a: "Cela indique un problème ponctuel sur le flux de ces chaînes spécifiques plutôt qu'un problème général de connexion. Signalez les chaînes concernées à votre support IPTV : c'est l'information la plus utile pour un diagnostic rapide."
    },
    {
      q: "Mon fournisseur d'accès internet (Orange, SFR, Free) bloque-t-il l'IPTV ?",
      a: "Certains FAI appliquent parfois des restrictions sur certains ports ou protocoles utilisés par des applications IPTV, en particulier lorsqu'ils proposent leur propre offre TV. Consultez nos guides dédiés pour Orange et SFR : les solutions les plus courantes (changer de DNS, utiliser une application différente, passer par Ethernet) y sont détaillées."
    },
    {
      q: "Dois-je changer d'application IPTV si les problèmes persistent ?",
      a: "Si vous avez suivi toutes les étapes (connexion, redémarrage, cache) et que le problème persiste sur une application précise, testez une application alternative (IPTV Smarters Pro, TiviMate, GSE Smart IPTV) avec les mêmes identifiants. Le souci vient parfois de l'application, pas du flux."
    }
  ];

  const causes = [
    {
      title: 'Connexion internet insuffisante ou instable',
      icon: FaWifi,
      text: "La cause la plus fréquente. Il faut au minimum 10 Mbps pour de la HD stable et 25 Mbps pour de la 4K. Faites un test de débit (fast.com ou speedtest.net) au moment où le problème survient. Privilégiez une connexion Ethernet à la Freebox/box plutôt que le WiFi, surtout en soirée."
    },
    {
      title: "Cache ou données de l'application corrompues",
      icon: FaTools,
      text: "Après plusieurs semaines d'utilisation, le cache de l'application IPTV peut se corrompre. Videz le cache dans les paramètres de l'application (ou désinstallez/réinstallez-la). Vos identifiants restent valables, seule la configuration locale est réinitialisée."
    },
    {
      title: "Routeur ou box internet à redémarrer",
      icon: FaWifi,
      text: "Un simple redémarrage de votre box internet (éteinte 30 secondes puis rallumée) résout une part importante des coupures. Redémarrez également l'appareil qui diffuse l'IPTV (Smart TV, boîtier Android, Fire Stick)."
    },
    {
      title: "Restriction ou blocage du fournisseur d'accès (FAI)",
      icon: FaWifi,
      text: "Certaines box (Orange, SFR notamment) limitent parfois certains flux. Voir nos guides dédiés : IPTV sur box Orange et IPTV bloqué par SFR."
    },
    {
      title: "Abonnement expiré ou identifiants incorrects",
      icon: FaTools,
      text: "Vérifiez la date de fin de votre abonnement. Une adresse MAC ou un lien M3U mal recopié (espace, caractère manquant) empêche aussi la connexion : redemandez vos identifiants à votre fournisseur en cas de doute."
    },
    {
      title: "Problème temporaire côté serveur du fournisseur",
      icon: FaTools,
      text: "Comme tout service en ligne, un serveur IPTV peut connaître une interruption ponctuelle (maintenance, pic de charge). Un fournisseur sérieux avec un support 24/7 vous informe et corrige rapidement ; un service qui reste injoignable plusieurs jours n'est pas fiable."
    }
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'IPTV Ne Fonctionne Plus : Guide Complet des Pannes et Solutions',
    description: seoData.description,
    author: { '@type': 'Organization', name: 'France IPTV' },
    publisher: { '@type': 'Organization', name: 'France IPTV', url: 'https://franceiptv.stream' },
    datePublished: '2026-09-19',
    dateModified: '2026-09-19',
    mainEntityOfPage: 'https://franceiptv.stream/blog/iptv-ne-fonctionne-plus'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://franceiptv.stream' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://franceiptv.stream/blog' },
      { '@type': 'ListItem', position: 3, name: 'IPTV Ne Fonctionne Plus', item: 'https://franceiptv.stream/blog/iptv-ne-fonctionne-plus' }
    ]
  };

  return (
    <>
      <SEO {...seoData} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-white text-brand-black pt-20">
        <section className="py-16 bg-gradient-to-br from-[#141311] via-[#201C18] to-[#141311] text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                IPTV Ne Fonctionne Plus ? <span className="text-red-400">Toutes les Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                6 causes fréquentes de coupures ou de pannes IPTV, et comment les résoudre en quelques minutes.
              </p>
              <p className="text-sm text-gray-400">📅 Dernière mise à jour : Septembre 2026 • ⏱️ Temps de lecture : 6 minutes</p>
            </motion.div>
          </div>
        </section>

        <article className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Quick Answer */}
            <section className="mb-12">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                <div className="flex items-start gap-4">
                  <FaTools className="text-4xl text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-brand-black">La Réponse Courte</h2>
                    <p className="text-lg text-brand-gray mb-4">
                      Dans la grande majorité des cas, un IPTV qui ne fonctionne plus se résout par un <strong>redémarrage de la box internet et de l'application</strong>, ou en vérifiant le <strong>débit de connexion</strong>. Si le problème persiste après ces vérifications, il s'agit généralement d'un blocage FAI ou d'un souci côté serveur du fournisseur.
                    </p>
                    <p className="text-brand-gray">
                      Un problème sur un appareil précis ? Consultez nos guides dédiés : <Link to="/appareils/freebox" className="text-blue-600 underline">Freebox</Link>, <Link to="/appareils/orange" className="text-blue-600 underline">Box Orange</Link>, <Link to="/appareils/sfr" className="text-blue-600 underline">SFR</Link>, <Link to="/appareils/samsung-tv" className="text-blue-600 underline">Samsung TV</Link> ou <Link to="/appareils/erreur-lecture-iptv" className="text-blue-600 underline">erreur de lecture</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Causes */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-blue-600">Les 6 Causes les Plus Fréquentes</h2>
              <div className="space-y-4">
                {causes.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div key={i} className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                          <Icon />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-brand-black">{i + 1}. {c.title}</h3>
                          <p className="text-brand-gray">{c.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Quick checklist */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-blue-600">Checklist Rapide (2 Minutes)</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Redémarrer la box internet',
                  'Redémarrer l\'appareil (TV, boîtier, mobile)',
                  'Tester le débit internet',
                  'Passer en Ethernet plutôt que WiFi',
                  'Vider le cache de l\'application',
                  'Vérifier la date de fin d\'abonnement'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-brand-gray-border rounded-lg p-4">
                    <FaCheckCircle className="text-green-600 flex-shrink-0" />
                    <span className="text-brand-gray">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-blue-600">Questions Fréquentes</h2>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <div key={i} className="bg-brand-offwhite rounded-2xl border border-brand-gray-border overflow-hidden">
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white transition-colors"
                    >
                      <h3 className="font-bold text-lg pr-4 text-brand-black">{item.q}</h3>
                      {openFaq === i ? <FaChevronUp className="text-blue-500 flex-shrink-0" /> : <FaChevronDown className="text-brand-gray flex-shrink-0" />}
                    </button>
                    <div hidden={openFaq !== i} className="px-6 pb-6">
                        <p className="text-brand-gray leading-relaxed">{item.a}</p>
                      </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-blue-600 to-brand-gold p-8 rounded-xl text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Toujours un Problème ?</h2>
              <p className="text-xl mb-6">Notre support francophone diagnostique votre panne en quelques minutes via WhatsApp</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://wa.me/18653169315?text=Bonjour%2C%20mon%20IPTV%20ne%20fonctionne%20plus" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all">
                  <FaWhatsapp className="inline mr-2" /> Contacter le Support
                </a>
                <Link to="/appareils" className="px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white font-bold rounded-lg transition-all">
                  Voir Tous les Guides Appareils
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* Related */}
        <section className="py-12 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-brand-black">📖 Articles Similaires</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/blog/meilleur-iptv-france" className="bg-white border border-brand-gray-border p-4 rounded-lg hover:border-brand-gold transition-colors">
                <h3 className="font-bold mb-2 text-brand-black">Meilleur IPTV France 2026</h3>
                <p className="text-sm text-brand-gray">Comment choisir un fournisseur fiable →</p>
              </Link>
              <Link to="/blog/prix-iptv-france" className="bg-white border border-brand-gray-border p-4 rounded-lg hover:border-brand-gold transition-colors">
                <h3 className="font-bold mb-2 text-brand-black">Prix IPTV France 2026</h3>
                <p className="text-sm text-brand-gray">Combien coûte un abonnement IPTV →</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVNeFonctionnePlus;
