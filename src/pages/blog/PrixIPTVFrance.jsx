import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCheckCircle, FaEuroSign, FaExclamationTriangle, FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import SEO from '../../components/SEO';

const PrixIPTVFrance = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const seoData = {
    title: 'Prix IPTV France 2026 : Combien Coûte un Abonnement IPTV ?',
    description: "Prix IPTV en France en 2026 : tarifs moyens, ce qui fait varier le coût, pièges à éviter et grille de prix transparente dès 8€/mois. Comparatif complet.",
    keywords: 'prix iptv, tarif iptv, combien coute iptv, iptv pas cher, cout abonnement iptv, prix abonnement iptv',
    ogType: 'article',
    canonicalPath: '/blog/prix-iptv-france'
  };

  const faqItems = [
    {
      q: "Quel est le prix moyen d'un abonnement IPTV en France ?",
      a: "En 2026, un abonnement IPTV fiable coûte entre 8€ et 15€ par mois en France, selon la durée d'engagement et le nombre de chaînes. Les offres annuelles reviennent généralement moins cher au mois : chez France IPTV par exemple, l'abonnement 12 mois coûte 45 € payés une fois, contre 8 € pour un seul mois."
    },
    {
      q: "Pourquoi certains IPTV sont-ils si peu chers (5€/an) ?",
      a: "Un prix anormalement bas (5 à 15€ par an pour des milliers de chaînes) est presque toujours le signe d'un service illégal ou d'un revendeur non autorisé qui va disparaître sans préavis. Un fournisseur légitime doit payer l'infrastructure serveur, le support client et les droits de diffusion : ces coûts se reflètent forcément dans le prix."
    },
    {
      q: "Le prix le plus bas est-il le meilleur choix ?",
      a: "Non. Le critère principal doit être la fiabilité : disponibilité du service (idéalement 99,9%), qualité du flux (HD/4K sans coupures), rapidité du support client, et moyens de paiement traçables. Un abonnement 20% plus cher mais stable coûte toujours moins cher qu'un abonnement interrompu sans remboursement."
    },
    {
      q: "Peut-on tester avant de s'engager ?",
      a: "Chez France IPTV, oui : un test gratuit de 24 h est possible sur demande. Méfiez-vous des fournisseurs qui refusent tout essai, toute garantie ou toute preuve avant paiement."
    },
    {
      q: "Quels moyens de paiement sont les plus sûrs pour l'IPTV ?",
      a: "Privilégiez des moyens de paiement traçables comme PayPal ou Binance Pay, qui offrent une preuve de transaction et parfois une protection acheteur. Méfiez-vous des fournisseurs exigeant uniquement un virement bancaire direct ou des cryptomonnaies vers un portefeuille anonyme sans aucune facture."
    }
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Prix IPTV France 2026 : Combien Coûte un Abonnement IPTV ?',
    description: seoData.description,
    author: { '@type': 'Organization', name: 'France IPTV' },
    publisher: { '@type': 'Organization', name: 'France IPTV', url: 'https://franceiptv.stream' },
    datePublished: '2026-09-19',
    dateModified: '2026-09-19',
    mainEntityOfPage: 'https://franceiptv.stream/blog/prix-iptv-france'
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
      { '@type': 'ListItem', position: 3, name: 'Prix IPTV France', item: 'https://franceiptv.stream/blog/prix-iptv-france' }
    ]
  };

  const priceFactors = [
    { title: 'Durée de l\'engagement', text: 'Plus la durée est longue, plus le prix mensuel baisse. Chez France IPTV : 8 € pour 1 mois, 45 € pour 12 mois.' },
    { title: 'Nombre de chaînes et VOD', text: 'Un catalogue large (30 000+ chaînes, 150 000+ films/séries) coûte plus cher à maintenir qu\'un bouquet limité, mais offre bien plus de choix.' },
    { title: 'Qualité du flux (HD/4K)', text: 'La diffusion en 4K/UHD nécessite plus de bande passante serveur, ce qui influence légèrement le tarif par rapport à du HD simple.' },
    { title: 'Support client', text: 'Un support francophone réactif 24/7 (WhatsApp, chat) a un coût opérationnel que les services illégaux ou low-cost n\'assument pas.' },
    { title: 'Nombre d\'écrans simultanés', text: 'Certains fournisseurs facturent en plus pour regarder sur plusieurs appareils en même temps. Vérifiez ce qui est inclus par défaut.' }
  ];

  return (
    <>
      <SEO {...seoData} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-white text-brand-black pt-20">
        <section className="py-16 bg-gradient-to-br from-[#090B0B] via-[#111413] to-[#090B0B] text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Prix IPTV France 2026 : <span className="text-brand-gold">Combien Coûte un Abonnement ?</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Tarifs réels, ce qui fait varier le prix, et les pièges à éviter avant de payer un abonnement IPTV.
              </p>
              <p className="text-sm text-gray-400">📅 Dernière mise à jour : Septembre 2026 • ⏱️ Temps de lecture : 7 minutes</p>
            </motion.div>
          </div>
        </section>

        <article className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Quick Answer */}
            <section className="mb-12">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                <div className="flex items-start gap-4">
                  <FaEuroSign className="text-4xl text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-brand-black">La Réponse Courte</h2>
                    <p className="text-lg text-brand-gray mb-4">
                      Un abonnement IPTV fiable coûte en moyenne <strong>entre 8€ et 15€ par mois</strong> en France, avec des tarifs dégressifs sur l'engagement long. Chez <Link to="/" className="text-blue-600 underline">France IPTV</Link>, les prix vont de <strong>8€/mois</strong> (sans engagement) à <strong>45 € pour 12 mois</strong>.
                    </p>
                    <p className="text-brand-gray">
                      Consultez notre <Link to="/tarifs" className="text-blue-600 underline font-semibold">grille tarifaire complète</Link> pour comparer toutes les formules.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing table */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-blue-600">Grille de Prix France IPTV</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-brand-offwhite">
                      <th className="p-4 border border-brand-gray-border font-bold">Durée</th>
                      <th className="p-4 border border-brand-gray-border font-bold">Prix Total</th>
                      <th className="p-4 border border-brand-gray-border font-bold">Économie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border border-brand-gray-border">1 mois</td>
                      <td className="p-4 border border-brand-gray-border">8 €</td>
                      <td className="p-4 border border-brand-gray-border">—</td>
                    </tr>
                    <tr className="bg-brand-offwhite">
                      <td className="p-4 border border-brand-gray-border">3 mois</td>
                      <td className="p-4 border border-brand-gray-border">19,99 €</td>
                      <td className="p-4 border border-brand-gray-border text-green-600 font-semibold">17%</td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-brand-gray-border">6 mois</td>
                      <td className="p-4 border border-brand-gray-border">30 €</td>
                      <td className="p-4 border border-brand-gray-border text-green-600 font-semibold">37%</td>
                    </tr>
                    <tr className="bg-brand-offwhite">
                      <td className="p-4 border border-brand-gray-border font-semibold">12 mois</td>
                      <td className="p-4 border border-brand-gray-border font-semibold">45 €</td>
                      <td className="p-4 border border-brand-gray-border text-green-600 font-bold">53% — Meilleure offre</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-brand-gray mt-3">Tarifs incluant 30 500+ chaînes, 150 000+ films/séries, jusqu'à 4 écrans simultanés, aucune reconduction automatique.</p>
            </section>

            {/* What affects price */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-blue-600">Ce Qui Fait Varier le Prix d'un Abonnement IPTV</h2>
              <div className="space-y-4">
                {priceFactors.map((f, i) => (
                  <div key={i} className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-2 text-brand-black">{f.title}</h3>
                    <p className="text-brand-gray">{f.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Red flags */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-blue-600">Méfiez-vous des Prix Trop Bas</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <FaExclamationTriangle className="text-3xl text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-brand-gray mb-3">
                      Un abonnement IPTV à <strong>5€ ou 10€ pour toute une année</strong>, avec « 20 000 chaînes illimitées », est un signal d'alerte quasi certain. Ces offres reposent souvent sur des flux piratés qui coupent sans préavis, sans remboursement et sans service client.
                    </p>
                    <p className="text-brand-gray">
                      Un prix réaliste couvre les coûts serveur, la bande passante et un vrai support. Consultez notre article <Link to="/blog/iptv-legal-en-france" className="text-blue-600 underline">IPTV légal en France</Link> pour reconnaître les fournisseurs fiables.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* What's included */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-blue-600">Ce Que Vous Devez Toujours Avoir Inclus</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Aucune reconduction automatique',
                  'Support francophone 24/7',
                  'Paiement traçable (PayPal, Binance Pay)',
                  'Activation immédiate (moins de 5 minutes)',
                  '4 écrans simultanés inclus',
                  '99,9% de disponibilité garantie'
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
              <h2 className="text-3xl font-heading font-bold mb-6 text-blue-600">Questions Fréquentes sur le Prix de l'IPTV</h2>
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
            <section className="bg-surface border border-lime/30 p-8 rounded-xl text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Voir la Grille de Prix Complète</h2>
              <p className="text-xl mb-6">Abonnement IPTV dès 8€/mois, sans engagement, activation en 5 minutes</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/tarifs" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all">
                  Voir les Tarifs
                </Link>
                <a href="https://wa.me/18653169315?text=Bonjour%2C%20je%20voudrais%20des%20informations%20sur%20les%20prix%20IPTV" className="px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white font-bold rounded-lg transition-all">
                  <FaWhatsapp className="inline mr-2" /> Demander un Devis
                </a>
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
              <Link to="/blog/iptv-legal-en-france" className="bg-white border border-brand-gray-border p-4 rounded-lg hover:border-brand-gold transition-colors">
                <h3 className="font-bold mb-2 text-brand-black">IPTV Légal en France</h3>
                <p className="text-sm text-brand-gray">Réglementation et fournisseurs fiables →</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrixIPTVFrance;
