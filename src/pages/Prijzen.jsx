import React from 'react';
import SeoGuideSection from '../components/SeoGuideSection';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import Pricing from '../components/Pricing';
import ComparisonTable from '../components/ComparisonTable';
import RelatedGuides from '../components/RelatedGuides';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const SITE_URL = 'https://franceiptv.stream';

const tarifsFaq = [
  { q: "Quelle est l'option la moins chère ?", a: "L'abonnement 12 mois est l'option la plus avantageuse : seulement 45 € pour 12 mois, payés une fois. C'est moins cher que la plupart des fournisseurs IPTV en France." },
  { q: 'Puis-je payer par Binance Pay ou PayPal ?', a: 'Oui, nous acceptons Binance Pay et PayPal. Ce sont des moyens de paiement rapides et sécurisés. Contactez-nous via WhatsApp pour commander.' },
  { q: 'Mon abonnement se renouvelle-t-il automatiquement ?', a: "Non, absolument pas. Votre abonnement s'arrête automatiquement à la fin de la durée choisie. Aucune surprise, aucune reconduction non désirée." },
  { q: "Sur combien d'appareils puis-je regarder ?", a: "Vous pouvez regarder sur 4 appareils simultanément avec tous les forfaits : Smart TV, téléphone, tablette ou ordinateur, avec la même qualité sur chaque écran." }
];

const offer = (name, price) => ({ '@type': 'Offer', name, price, priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE_URL}/tarifs` });

const tarifsSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Abonnement IPTV France IPTV',
    description: "Abonnement IPTV : 30 500+ chaînes, films et séries à la demande, HD/4K, support francophone. Sans reconduction automatique.",
    brand: { '@type': 'Brand', name: 'France IPTV' },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '8',
      highPrice: '45',
      offerCount: '4',
      offers: [
        offer('Abonnement IPTV 1 mois', '8'),
        offer('Abonnement IPTV 3 mois', '19.99'),
        offer('Abonnement IPTV 6 mois', '30'),
        offer('Abonnement IPTV 12 mois', '45')
      ]
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tarifsFaq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tarifs IPTV', item: `${SITE_URL}/tarifs` }
    ]
  }
];

const Prijzen = () => {
  const guarantees = [
    "Aucune reconduction automatique - votre abonnement s'arrête automatiquement à la fin de la durée choisie",
    'Paiement Binance Pay ou PayPal - des moyens de paiement rapides et sécurisés',
    'Actif immédiatement - recevez vos identifiants dans les 5 minutes suivant le paiement',
    '30 500+ chaînes - accès à toutes les chaînes françaises et internationales',
    '99,9 % de disponibilité garantie - un service fiable sans coupures',
    'Support francophone 24/7 - une aide via WhatsApp dès que vous en avez besoin'
  ];

  return (
    <>
      <SEO
        title="Prix IPTV 2026 : Tarifs Abonnement dès 8€/mois | France IPTV"
        description="Prix IPTV en France : 1 mois 8€, 3 mois 19,99€, 6 mois 30€, 12 mois 45€. Sans reconduction automatique. Binance Pay ou PayPal. 30 500+ chaînes."
        keywords="tarifs iptv, prix abonnement iptv, prix iptv, iptv pas cher, coût iptv"
        canonicalPath="/tarifs"
      />
      <Helmet>
        {tarifsSchemas.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      <div className="min-h-screen bg-white pt-32">
        {/* Header */}
        <section className="pb-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-brand-black mb-6">
                Prix et Tarifs de l'Abonnement IPTV en France
              </h1>
              <p className="text-xl text-brand-gray leading-relaxed">
                Des prix transparents, sans frais cachés. Choisissez la durée qui vous convient.
                Consultez notre page <Link to="/acheter-iptv" className="text-brand-gold hover:text-[#C4FF86] underline">acheter IPTV</Link> pour en savoir plus sur ce que vous recevez.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Component */}
        <Pricing />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* What You Get */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                Tarif IPTV : que recevez-vous avec chaque abonnement ?
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                Quel que soit l'<Link to="/abonnement-iptv" className="text-brand-gold hover:text-[#C4FF86] underline">abonnement IPTV</Link> que vous choisissez, vous avez toujours accès à notre offre complète
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white border border-brand-gray-border rounded-xl p-6"
                >
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xl" />
                  <span className="text-brand-gray">{guarantee}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SeoGuideSection title="Prix IPTV en France : combien coûte vraiment un abonnement ?">
          <p>
            En 2026, le <strong>prix d'un abonnement IPTV</strong> fiable se situe généralement entre 8 € et 15 € par mois en France,
            avec des tarifs dégressifs sur les durées longues. Chez France IPTV, le <strong>tarif IPTV</strong> va de 8 € pour un mois
            à 45 € pour un an : le contenu est identique dans toutes les formules.
          </p>
          <h3>Ce qui est inclus dans le prix</h3>
          <ul>
            <li>30 500+ chaînes en direct, dont les chaînes françaises, sportives et internationales</li>
            <li>150 000+ films et séries à la demande, guide TV (EPG) et replay</li>
            <li>4 écrans simultanés, en HD, Full HD et 4K selon les chaînes</li>
            <li>L'aide à l'installation et le support francophone sur WhatsApp</li>
          </ul>
          <h3>Ce qui fait varier le tarif IPTV</h3>
          <p>
            La durée d'engagement est le premier facteur : plus elle est longue, plus le prix mensuel baisse. Viennent ensuite la
            stabilité des serveurs, la qualité du support et le nombre d'écrans inclus. Méfiez-vous des prix trop bas : un service à
            quelques euros par an n'a pas les moyens d'assurer un flux stable ni un support joignable. Tout est détaillé dans notre
            guide <a href="/blog/prix-iptv-france">prix IPTV France 2026</a>.
          </p>
          <h3>Payer son abonnement IPTV</h3>
          <p>
            Le paiement se fait en une seule fois par <strong>PayPal</strong> ou <strong>Binance Pay</strong>, sans reconduction
            automatique. Le <strong>test gratuit de 24 h</strong> sur demande vous permet de vérifier la
            qualité sur votre écran. Pour comprendre l'offre dans son ensemble, voir la page{' '}
            <a href="/abonnement-iptv">abonnement IPTV</a>.
          </p>
        </SeoGuideSection>

        {/* FAQ Snippet */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-brand-black mb-4">
                Questions fréquentes sur le prix de l'IPTV
              </h2>
            </motion.div>

            <div className="space-y-6">
              <div className="bg-brand-offwhite border border-brand-gray-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  Quelle est l'option la moins chère ?
                </h3>
                <p className="text-brand-gray">
                  L'abonnement 12 mois est l'option la plus avantageuse : seulement 45 € pour 12 mois, payés une fois.
                  C'est moins cher que la plupart des <Link to="/iptv-france" className="text-brand-gold hover:text-[#C4FF86] underline">fournisseurs IPTV en France</Link>.
                </p>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  Puis-je payer par Binance Pay ou PayPal ?
                </h3>
                <p className="text-brand-gray">
                  Oui, nous acceptons Binance Pay et PayPal. Ce sont des moyens de paiement rapides et sécurisés.
                  Contactez-nous par <Link to="/contact" className="text-brand-gold hover:text-[#C4FF86] underline">contact</Link> via WhatsApp pour commander.
                </p>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  Mon abonnement se renouvelle-t-il automatiquement ?
                </h3>
                <p className="text-brand-gray">
                  Non, absolument pas. Votre abonnement s'arrête automatiquement à la fin de la durée choisie. Aucune surprise, aucune reconduction non désirée.
                </p>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  Sur combien d'appareils puis-je regarder ?
                </h3>
                <p className="text-brand-gray">
                  Vous pouvez regarder sur 4 <Link to="/appareils" className="text-brand-gold hover:text-[#C4FF86] underline">appareils</Link> simultanément avec tous les forfaits :
                  Smart TV, téléphone, tablette ou ordinateur, avec la même qualité sur chaque écran.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/faq"
                className="inline-block py-2.5 text-brand-gold hover:text-[#C4FF86] underline text-lg"
              >
                Voir toutes les questions fréquentes →
              </Link>
            </div>
          </div>
        </section>

        <RelatedGuides />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-surface to-brand-offwhite">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface border border-brand-gold/40 rounded-2xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Prêt à commencer ?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Commandez maintenant et recevez vos identifiants sous 5 minutes. Commencez à regarder plus de 30 500 chaînes dès maintenant.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-gold font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg text-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Commander via WhatsApp
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Prijzen;
