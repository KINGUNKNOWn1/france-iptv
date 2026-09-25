import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaTv, FaRocket, FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import SeoGuideSection from '../components/SeoGuideSection';

const SITE_URL = 'https://franceiptv.stream';

const acheterFaqs = [
  { q: 'Combien coûte un abonnement IPTV ?', a: "Chez France IPTV : 8 € pour 1 mois, 19,99 € pour 3 mois, 30 € pour 6 mois et 45 € pour 12 mois, soit 3,75 € par mois. Le contenu est identique dans toutes les formules, seule la durée change." },
  { q: "Peut-on essayer avant de s'engager ?", a: "Oui : le 1er mois coûte 8 € et il est satisfait ou remboursé pendant 48 h. Si le service ne vous convient pas, vous êtes remboursé intégralement." },
  { q: "Sur combien d'écrans peut-on regarder ?", a: "Toutes les formules incluent 4 écrans simultanés : Smart TV, box, téléphone, tablette ou ordinateur, avec la même qualité sur chaque écran." },
  { q: 'Comment payer un abonnement IPTV ?', a: "Le paiement se fait en une seule fois par PayPal ou Binance Pay, deux moyens de paiement traçables. Vos identifiants arrivent sur WhatsApp en quelques minutes." },
  { q: "Que se passe-t-il à la fin de l'abonnement ?", a: "Rien d'automatique : il n'y a aucune reconduction. L'abonnement s'arrête à la date prévue et vous recevez un rappel pour renouveler si vous le souhaitez." },
];

const acheterSchemas = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: acheterFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Acheter IPTV', item: `${SITE_URL}/acheter-iptv` },
  ] },
];

const IPTVKopen = () => {
  const benefits = [
    {
      icon: FaTv,
      title: '30 500+ Chaînes en Direct',
      description: 'Accès à plus de 30 500 chaînes en direct dans le monde entier, y compris toutes les chaînes françaises comme TF1, France 2 et M6.'
    },
    {
      icon: FaShieldAlt,
      title: 'Service Fiable',
      description: '99,9 % de disponibilité garantie. Aucune coupure, une image toujours cristalline en HD, UHD et 4K.'
    },
    {
      icon: FaRocket,
      title: 'Actif Immédiatement',
      description: 'Commandez maintenant et recevez vos identifiants sous 5 minutes. Commencez à regarder immédiatement sur tous vos appareils.'
    },
    {
      icon: FaWhatsapp,
      title: 'Support Francophone 24/7',
      description: "Besoin d'aide ? Notre support francophone est joignable 24/7 via WhatsApp. Pas d'attente, une aide immédiate."
    }
  ];

  const features = [
    'Acheter IPTV sans tracas - paiement par Binance Pay ou PayPal',
    'Aucune reconduction automatique ni frais caché',
    "Regardez sur 4 appareils simultanément",
    '150 000+ films et séries à la demande',
    'EPG (guide électronique des programmes) inclus',
    'Fonction Catch-up TV pour les programmes manqués',
    'Chaînes sportives premium (beIN Sports, Canal+ Sport)',
    'Chaînes arabes, turques et internationales'
  ];

  const steps = [
    {
      number: '1',
      title: 'Choisissez votre abonnement',
      description: 'Sélectionnez un <link-prijzen>abonnement IPTV</link-prijzen> qui vous convient : 1, 3, 6 ou 12 mois.'
    },
    {
      number: '2',
      title: 'Payez en toute sécurité',
      description: 'Payez simplement et en toute sécurité par Binance Pay ou PayPal.'
    },
    {
      number: '3',
      title: 'Recevez vos identifiants',
      description: 'Sous 5 minutes, vous recevez vos identifiants personnels via WhatsApp.'
    },
    {
      number: '4',
      title: 'Commencez à regarder',
      description: "Installez l'<link-apparaten>application IPTV sur votre appareil</link-apparaten> et connectez-vous. C'est prêt !"
    }
  ];

  return (
    <>
      <SEO
        title="Acheter IPTV en France : Abonnement Premium dès 8€ | France IPTV"
        description="Acheter IPTV en France ? 30 500+ chaînes, qualité 4K, support francophone 24/7, sans reconduction automatique. Paiement Binance Pay ou PayPal."
        keywords="acheter iptv, acheter iptv france, acheter abonnement iptv, fournisseur iptv, iptv français"
        canonicalPath="/acheter-iptv"
      />
      <Helmet>
        {acheterSchemas.map((schema, i) => <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>)}
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=65&w=1200"
              alt="Acheter IPTV en France"
              className="w-full h-full object-cover"
              fetchpriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090B0B]/95 via-[#0D0F0F]/85 to-[#1E3314]/60"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Acheter IPTV en France
                <br />
                <span className="text-brand-gold">Fiable & Abordable</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl">
                Vous cherchez où <strong>acheter IPTV</strong> en France ? France IPTV est LE fournisseur IPTV fiable avec 30 500+ chaînes, qualité 4K et support francophone. Aucune reconduction automatique, paiement par Binance Pay ou PayPal possible. Pour comparer, lisez notre guide du <Link to="/blog/meilleur-iptv-france" className="text-brand-gold underline">meilleur IPTV</Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/tarifs"
                  className="btn-primary text-center"
                >
                  Voir les Tarifs de l'Abonnement IPTV
                </Link>
                <a
                  href="https://wa.me/18653169315?text=Bonjour%20!%20Je%20souhaite%20acheter%20un%20abonnement%20IPTV."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-transparent border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 text-center"
                >
                  <FaWhatsapp className="inline mr-2" />
                  Commander via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose France IPTV */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                Pourquoi acheter IPTV chez France IPTV ?
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                Si vous cherchez un <Link to="/abonnement-iptv" className="text-brand-gold hover:text-[#C4FF86] underline">abonnement IPTV fiable</Link>, vous êtes au bon endroit.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-brand-gray-border rounded-xl p-6 hover:border-brand-gold transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-surface border border-brand-gold/40 flex items-center justify-center mb-4">
                    <benefit.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-gray">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-brand-black mb-6">
                  Que recevez-vous en achetant un abonnement IPTV ?
                </h2>
                <p className="text-brand-gray text-lg mb-8">
                  Chez France IPTV, vous accédez à l'offre IPTV la plus complète de France. Découvrez <Link to="/chaines" className="text-brand-gold hover:text-[#C4FF86] underline">toutes les chaînes IPTV disponibles</Link> et plus encore.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-brand-gray">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800"
                  alt="Fonctionnalités de l'abonnement IPTV"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-surface to-brand-offwhite">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                Comment acheter IPTV chez France IPTV ?
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                En 4 étapes simples, commencez à regarder
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white border border-brand-gray-border rounded-xl p-6">
                    <div className="w-16 h-16 rounded-full bg-surface border border-brand-gold/40 flex items-center justify-center mb-4 text-white text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-brand-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-brand-gray">
                      {step.description.includes('<link-prijzen>') ? (
                        <>
                          {step.description.split('<link-prijzen>')[0]}
                          <Link to="/tarifs" className="text-brand-gold hover:text-[#C4FF86] underline">
                            {step.description.split('<link-prijzen>')[1].split('</link-prijzen>')[0]}
                          </Link>
                          {step.description.split('</link-prijzen>')[1]}
                        </>
                      ) : step.description.includes('<link-apparaten>') ? (
                        <>
                          {step.description.split('<link-apparaten>')[0]}
                          <Link to="/appareils" className="text-brand-gold hover:text-[#C4FF86] underline">
                            {step.description.split('<link-apparaten>')[1].split('</link-apparaten>')[0]}
                          </Link>
                          {step.description.split('</link-apparaten>')[1]}
                        </>
                      ) : step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 text-brand-gold text-3xl">→</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SeoGuideSection title="Acheter IPTV : ce qu'il faut vérifier avant de payer">
          <p>
            Acheter un <strong>abonnement IPTV</strong> se fait en quelques minutes, mais quelques vérifications évitent les mauvaises
            surprises. L'IPTV diffuse la télévision par internet : vous regardez les chaînes en direct, les films et les séries depuis
            une application installée sur votre Smart TV, votre box, votre téléphone ou votre ordinateur.
          </p>
          <h3>Ce qu'il vous faut</h3>
          <ul>
            <li><strong>Une connexion internet</strong> : environ 7 Mbit/s pour la HD, 15 Mbit/s pour la Full HD et 25 Mbit/s pour la 4K, par écran. Vérifiez la vôtre avec le <a href="/test-debit-iptv">test de débit IPTV gratuit</a>.</li>
            <li><strong>Un appareil compatible</strong> : Smart TV, Fire TV Stick, box Android TV, Freebox, iPhone, ordinateur. Voir les <a href="/appareils">guides d'installation</a>.</li>
            <li><strong>Une application IPTV</strong>, généralement gratuite : <a href="/blog/iptv-smarters-pro">IPTV Smarters Pro</a>, <a href="/blog/tivimate">TiviMate</a>…</li>
          </ul>
          <h3>Les 6 points à vérifier chez un fournisseur</h3>
          <ol>
            <li><strong>Un essai ou une garantie</strong> avant de s'engager, pour juger la qualité sur votre propre connexion.</li>
            <li><strong>Des prix clairs</strong>, affichés sur le site, sans frais cachés.</li>
            <li><strong>Aucune reconduction automatique</strong> : l'abonnement doit s'arrêter à la fin de la durée choisie.</li>
            <li><strong>Un support joignable</strong> en français, avant comme après l'achat.</li>
            <li><strong>Un paiement traçable</strong> (PayPal, par exemple) plutôt qu'un transfert anonyme.</li>
            <li><strong>La compatibilité</strong> avec votre appareil, confirmée avant l'achat.</li>
          </ol>

          <h3>Où acheter un abonnement IPTV en France ?</h3>
          <p>
            Achetez directement auprès du fournisseur, sur son site, plutôt qu'auprès de revendeurs anonymes sur les réseaux sociaux
            ou les marketplaces. Vous savez ainsi à qui vous payez, qui contacter en cas de problème et quelles conditions
            s'appliquent (voir nos <a href="/cgv">conditions générales de vente</a>). Méfiez-vous des offres à quelques euros par an :
            elles disparaissent souvent sans préavis. Tous les critères sont détaillés dans notre guide du{' '}
            <a href="/blog/meilleur-iptv-france">meilleur IPTV</a>.
          </p>

          <h3>Acheter IPTV : prix et durées</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-base border border-brand-gray-border">
              <thead>
                <tr><th className="p-3 border border-brand-gray-border text-brand-black">Durée</th><th className="p-3 border border-brand-gray-border text-brand-black">Prix</th><th className="p-3 border border-brand-gray-border text-brand-black">Par mois</th></tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-brand-gray-border">1 mois</td><td className="p-3 border border-brand-gray-border">8 €</td><td className="p-3 border border-brand-gray-border">8 €</td></tr>
                <tr><td className="p-3 border border-brand-gray-border">3 mois</td><td className="p-3 border border-brand-gray-border">19,99 €</td><td className="p-3 border border-brand-gray-border">6,66 €</td></tr>
                <tr><td className="p-3 border border-brand-gray-border">6 mois</td><td className="p-3 border border-brand-gray-border">30 €</td><td className="p-3 border border-brand-gray-border">5 €</td></tr>
                <tr><td className="p-3 border border-brand-gray-border">12 mois</td><td className="p-3 border border-brand-gray-border">45 €</td><td className="p-3 border border-brand-gray-border">3,75 €</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Toutes les formules donnent accès au même contenu et à 4 écrans simultanés. Le détail est sur la page{' '}
            <a href="/tarifs">tarifs</a>, et le fonctionnement complet sur la page <a href="/abonnement-iptv">abonnement IPTV</a>.
          </p>

          <h3>Acheter IPTV pour quel appareil ?</h3>
          <p>
            Le même abonnement fonctionne sur tous vos écrans, jusqu'à 4 en même temps. Suivez le guide qui correspond au vôtre :
          </p>
          <ul>
            <li><strong>Smart TV</strong> : <a href="/appareils/samsung-tv">Samsung</a>, <a href="/appareils/lg-tv">LG</a>, <a href="/appareils/android-tv">Android TV / Google TV</a>.</li>
            <li><strong>Box et sticks</strong> : <a href="/appareils/fire-stick">Fire TV Stick</a>, <a href="/appareils/freebox">Freebox</a>, <a href="/blog/formuler-mag-iptv">Formuler et MAG</a>.</li>
            <li><strong>Mobile</strong> : <a href="/appareils/iphone-ipad">iPhone et iPad</a>, téléphones et tablettes Android.</li>
            <li><strong>Box opérateur</strong> : <a href="/appareils/orange">Orange</a>, <a href="/appareils/sfr">SFR</a>, <a href="/appareils/bbox-bouygues">Bbox</a>.</li>
          </ul>
          <p>
            Pas sûr de votre matériel ? Avant votre commande, le support vous indique la meilleure application pour votre appareil.
          </p>

          <h3>Questions fréquentes</h3>
          {acheterFaqs.map(({ q, a }) => (
            <div key={q}>
              <p><strong>{q}</strong></p>
              <p>{a}</p>
            </div>
          ))}
        </SeoGuideSection>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            {/* Static on purpose: as a whileInView fade it was prerendered with
                opacity 0 and could stay invisible (blank block above the footer). */}
            <div className="bg-surface border border-brand-gold/40 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Prêt à acheter votre IPTV ?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Choisissez le <Link to="/abonnement-iptv" className="text-white underline font-semibold">meilleur abonnement IPTV pour la France</Link> et commencez à regarder sous 5 minutes. 1 mois 8 € · 12 mois 45 € (3,75 €/mois).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/tarifs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-gold font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
                >
                  Voir Tous les Tarifs
                </Link>
                <Link
                  to="/faq"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-900 transition-all"
                >
                  Questions Fréquentes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVKopen;
