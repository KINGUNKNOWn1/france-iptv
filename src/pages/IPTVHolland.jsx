import React from 'react';
import { Helmet } from 'react-helmet-async';
import SeoGuideSection from '../components/SeoGuideSection';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTv, FaFootballBall, FaFilm, FaFlag } from 'react-icons/fa';
import SEO from '../components/SEO';

// /iptv-belgique, laid out like /iptv-france (IPTVNederland.jsx).

const iptvBelgiqueFaqs = [
  { q: "Pourquoi choisir France IPTV pour l'IPTV en Belgique ?", a: "France IPTV dessert aussi la Belgique francophone. Nous proposons les chaînes belges, le paiement par Binance Pay ou PayPal, un support francophone et un test gratuit de 24 h sur demande." },
  { q: 'Quelles chaînes belges ai-je avec IPTV Belgique ?', a: "Vous recevez les chaînes belges populaires comme La Une, Tipik, La Trois, RTL-TVI, Club RTL, Plug RTL et LN24, ainsi que TV5 Monde. Les chaînes françaises et internationales sont également disponibles. Au total, plus de 30 500 chaînes incluant tout le contenu francophone." },
  { q: 'IPTV Belgique fonctionne-t-il partout en Belgique ?', a: "Oui, le service fonctionne partout en Belgique dès que vous avez une connexion internet, que vous soyez à Bruxelles, Liège, Charleroi, Namur ou dans une petite commune. Le test gratuit de 24 h vous permet de vérifier la lecture sur votre connexion avant de payer." },
  { q: 'Comment payer depuis la Belgique ?', a: "Le paiement se fait en euros, en une seule fois, par Binance Pay ou PayPal, sans reconduction automatique. Bancontact n'est pas accepté pour le moment. Les prix sont les mêmes qu'en France : 1 mois 8 €, 3 mois 19,99 €, 6 mois 30 €, 12 mois 45 €." },
  { q: "L'IPTV est-il légal en Belgique ?", a: "L'utilisation de la technologie IPTV elle-même est parfaitement légale en Belgique. La légalité d'une offre dépend des droits de diffusion des contenus proposés ; nos conditions sont détaillées dans nos conditions générales de vente." },
];

const IPTVHolland = () => {
  const channelCategories = [
    { category: 'Chaînes Belges', count: '10+', icon: <FaFlag />, examples: 'La Une, Tipik, La Trois, RTL-TVI, Club RTL, Plug RTL, LN24' },
    { category: 'Chaînes Françaises', count: '80+', icon: <FaTv />, examples: 'TF1, France 2, France 3, M6, Canal+, W9, TMC, C8' },
    { category: 'Chaînes Sportives', count: '250+', icon: <FaFootballBall />, examples: 'beIN Sports, Canal+ Sport, ESPN, Eurosport' },
    { category: 'Films & Séries', count: '150+', icon: <FaFilm />, examples: 'Cinéma, séries, documentaires, films famille' },
  ];

  const features = [
    'Chaînes belges et françaises en qualité HD',
    'Guide EPG complet en français',
    'Films et séries en français à la demande',
    'Chaînes sportives (football, Formule 1, tennis)',
    '4 écrans simultanés',
    'Support client francophone 24/7',
    'Compatible Smart TV, Fire Stick, box Android, téléphone',
    'Paiement par Binance Pay ou PayPal',
    'Sans reconduction automatique',
    'Test gratuit 24 h pour vérifier votre connexion',
  ];

  const popularChannels = [
    'La Une', 'Tipik', 'La Trois', 'RTL-TVI', 'Club RTL', 'Plug RTL',
    'LN24', 'TV5 Monde', 'TF1', 'France 2', 'France 3', 'M6',
    'Canal+', 'W9', 'TMC', 'beIN Sports 1', 'Canal+ Sport', 'RMC Sport 1',
    'Eurosport 1', 'Eurosport 2', 'Discovery Channel', 'National Geographic', 'Comedy Central', 'Ciné+ Premier',
  ];

  const plans = [
    { name: '1 mois', price: '8 €' },
    { name: '3 mois', price: '19,99 €' },
    { name: '6 mois', price: '30 €' },
    { name: '12 mois', price: '45 €', featured: true },
  ];

  return (
    <>
      <SEO
        title="IPTV Belgique : Fournisseur IPTV Francophone | France IPTV"
        description="IPTV Belgique : chaînes belges (La Une, RTL-TVI, Club RTL) ✓ Support francophone ✓ Test gratuit 24 h ✓ Dès 8 € sans engagement, Binance Pay ou PayPal."
        keywords="iptv belgique, iptv belge, iptv bruxelles, iptv liege, iptv wallonie, iptv francophone"
        canonicalPath="/iptv-belgique"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: iptvBelgiqueFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://franceiptv.stream' }, { '@type': 'ListItem', position: 2, name: 'IPTV Belgique', item: 'https://franceiptv.stream/iptv-belgique' }] })}</script>
      </Helmet>
      <div className="min-h-screen bg-white text-brand-black pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#1E3314] via-[#090B0B] to-[#090B0B] text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-6xl mb-6">🇧🇪</div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                  IPTV Belgique
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Le <strong>fournisseur IPTV francophone</strong> pour la Belgique. Chaînes belges et françaises, sport,
                films et séries, de Bruxelles à Liège.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#channels"
                  className="px-8 py-4 bg-brand-gold hover:bg-[#C4FF86] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Voir les Chaînes Belges
                </a>
                <a
                  href="#tarifs"
                  className="px-8 py-4 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Voir les Tarifs
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Channel Categories */}
        <section className="py-20 bg-brand-offwhite" id="channels">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Chaînes <span className="text-brand-gold">IPTV Belgique</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {channelCategories.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-brand-gray-border p-6 rounded-lg hover:border-brand-gold transition-all"
                >
                  <div className="text-4xl text-brand-gold mb-4">{channel.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-brand-black">{channel.category}</h3>
                  <div className="text-3xl font-bold text-brand-gold mb-3">{channel.count}</div>
                  <p className="text-sm text-brand-gray">{channel.examples}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Channels */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-brand-black">
              Chaînes <span className="text-brand-gold">Populaires en Belgique</span>
            </h2>
            <p className="text-center text-brand-gray mb-12 text-lg">
              Les chaînes belges et françaises en qualité HD
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {popularChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="bg-brand-offwhite border border-brand-gray-border p-4 rounded-lg text-center hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all cursor-pointer"
                >
                  <span className="text-sm font-semibold">{channel}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center bg-surface border border-lime/30 p-6 rounded-xl">
              <p className="text-xl font-semibold mb-2 text-brand-black">
                + plus de 30 000 chaînes internationales
              </p>
              <p className="text-brand-gray">
                Y compris des chaînes suisses, arabes, turques, anglaises, allemandes, espagnoles et bien plus.{' '}
                <Link to="/chaines" className="text-brand-gold underline">Voir la liste des chaînes</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Pourquoi Choisir France IPTV <span className="text-brand-gold">en Belgique</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 bg-white border border-brand-gray-border p-4 rounded-lg"
                >
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                  <span className="text-brand-gray">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sport Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              <span className="text-brand-gold">Sport</span> en HD
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">⚽ Football</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li>• Ligue des Champions</li>
                  <li>• Ligue 1</li>
                  <li>• Premier League</li>
                  <li>• Liga, Serie A, Bundesliga</li>
                  <li>• Compétitions internationales</li>
                </ul>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">🏎️ Formule 1</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li>• Toutes les courses de F1 en direct</li>
                  <li>• Qualifications et essais libres</li>
                  <li>• Le Grand Prix de Belgique à Spa</li>
                  <li>• Formule 2 & Formule 3</li>
                  <li>• Courses de MotoGP</li>
                </ul>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">🚴 Autres Sports</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li>• Cyclisme (Tour de France, classiques)</li>
                  <li>• Tennis (Grand Chelem)</li>
                  <li>• Hockey sur gazon & sur glace</li>
                  <li>• Golf, Fléchettes, Boxe</li>
                  <li>• Jeux Olympiques</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Benefits */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Pensé pour la <span className="text-brand-gold">Belgique Francophone</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-surface border border-brand-gold/40 p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Paiement Sécurisé</h3>
                <p className="text-white/90">
                  Payez en euros par Binance Pay ou PayPal, en une seule fois
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#090B0B] to-[#111413] p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">🇧🇪</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Support Francophone</h3>
                <p className="text-white/90">
                  Service client francophone 24/7 via WhatsApp et e-mail
                </p>
              </div>

              <div className="bg-surface border border-lime/30 p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Test Gratuit 24 h</h3>
                <p className="text-white/90">
                  Vérifiez la lecture sur votre connexion Proximus, VOO, Orange ou Telenet avant de payer
                </p>
              </div>
            </div>
          </div>
        </section>

        <SeoGuideSection title="IPTV Belgique : tout savoir avant de commencer">
          <p>
            L'<strong>IPTV en Belgique</strong>, c'est la télévision reçue par internet plutôt que par le décodeur de votre
            opérateur. Vous installez une application sur l'écran de votre choix, vous y ajoutez les accès de votre abonnement,
            et vous retrouvez les chaînes belges et françaises en direct, le guide des programmes et un catalogue de films et
            séries à la demande, en Wallonie comme à Bruxelles.
          </p>
          <h3>Quelle connexion internet en Belgique ?</h3>
          <p>
            La <strong>fibre</strong> ou une bonne connexion <strong>VDSL / câble</strong> (Proximus, VOO, Orange Belgium,
            Telenet, Scarlet) convient très bien. Les repères : environ 7 Mbit/s par écran en HD, 15 Mbit/s en Full HD et
            25 Mbit/s en 4K. Vérifiez la vôtre avec notre <a href="/test-debit-iptv">test de débit IPTV</a>.
          </p>
          <h3>Sur quel appareil regarder ?</h3>
          <p>
            Votre box internet fournit la connexion ; la lecture se fait sur un appareil compatible : une Smart TV
            (<a href="/appareils/samsung-tv">Samsung</a>, <a href="/appareils/lg-tv">LG</a>), un{' '}
            <a href="/appareils/fire-stick">Fire TV Stick</a>, une <a href="/appareils/android-tv">box Android TV</a>, un
            téléphone ou un ordinateur. Tous nos guides sont sur la page <a href="/appareils">appareils</a>.
          </p>
          <h3>Prix d'un IPTV en Belgique</h3>
          <p>
            Les prix sont les mêmes qu'en France : 8 € pour 1 mois, 19,99 € pour 3 mois, 30 € pour 6 mois et 45 € pour 12 mois,
            payés en une fois par Binance Pay ou PayPal. Détails sur la page <a href="/tarifs">tarifs</a>.
          </p>
          <h3>Questions fréquentes</h3>
          {iptvBelgiqueFaqs.map(({ q, a }) => (
            <div key={q}>
              <p><strong>{q}</strong></p>
              <p>{a}</p>
            </div>
          ))}
        </SeoGuideSection>

        {/* Pricing CTA */}
        <section id="tarifs" className="py-20 bg-gradient-to-br from-surface to-brand-offwhite scroll-mt-24">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-black">
              Démarrez avec France IPTV <span className="text-brand-gold">en Belgique</span>
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Chaînes belges et françaises + 30 500+ chaînes internationales. Sans reconduction automatique. Actif en 5 minutes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {plans.map((plan) => (
                <a
                  key={plan.name}
                  href={`https://wa.me/18653169315?text=${encodeURIComponent(`Bonjour ! Je suis en Belgique et je souhaite l'abonnement IPTV ${plan.name} à ${plan.price}.`)}`}
                  className={`p-5 rounded-xl border transition-all hover:border-brand-gold ${plan.featured ? 'border-brand-gold bg-lime/[0.06]' : 'border-brand-gray-border bg-white'}`}
                >
                  <div className="text-brand-gray text-sm mb-1">{plan.name}</div>
                  <div className="text-3xl font-bold text-brand-black">{plan.price}</div>
                  {plan.featured && <div className="text-xs text-brand-gold mt-1 font-semibold">Meilleur prix</div>}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/abonnement-iptv"
                className="px-10 py-4 bg-brand-gold hover:bg-[#C4FF86] text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Voir les Abonnements
              </Link>
              <a
                href="https://wa.me/18653169315?text=Bonjour%20!%20Je%20suis%20en%20Belgique%20et%20je%20souhaite%20un%20test%20gratuit%20de%2024%20h."
                className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Test gratuit via WhatsApp
              </a>
            </div>
            <p className="text-sm text-brand-gray mt-6">
              🇧🇪 Belgique francophone • ✅ Chaînes belges et françaises • ⚡ Actif en 5 min
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVHolland;
