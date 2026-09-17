import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://franceiptv.stream';
const DEFAULT_TITLE = 'France IPTV - Service de Streaming Premium | 30 500+ Chaînes dès 8€';
const DEFAULT_DESCRIPTION = 'France IPTV - Service de streaming premium avec 30 500+ chaînes. Abonnement IPTV fiable dès 8€. Service francophone, légal et sécurisé. Actif en 5 min.';
const DEFAULT_KEYWORDS = 'acheter iptv, acheter abonnement iptv, fournisseurs iptv, iptv france, meilleure application iptv, iptv français, fournisseur iptv, iptv légal, abonnement iptv, iptv 1 mois pas cher, ip tv';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`;

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Abonnement Premium France IPTV',
  description: '30 500+ chaînes en direct, 150 000+ titres VOD, qualité HD/UHD/4K, support francophone 24/7',
  brand: { '@type': 'Brand', name: 'France IPTV' },
  offers: [
    { '@type': 'Offer', name: 'Abonnement IPTV 1 Mois', price: '8', priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE_URL}/tarifs` },
    { '@type': 'Offer', name: 'Abonnement IPTV 3 Mois', price: '19.99', priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE_URL}/tarifs` },
    { '@type': 'Offer', name: 'Abonnement IPTV 6 Mois', price: '30', priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE_URL}/tarifs` },
    { '@type': 'Offer', name: 'Abonnement IPTV 12 Mois - Meilleure Offre', price: '45', priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE_URL}/tarifs` }
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '2847' }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Comment démarrer avec France IPTV ?', acceptedAnswer: { '@type': 'Answer', text: "C'est très simple ! Contactez-nous via WhatsApp, choisissez votre forfait, payez en toute sécurité par Binance Pay ou PayPal, et recevez vos identifiants sous 5 minutes. Vous pouvez alors commencer à regarder immédiatement sur tous vos appareils." } },
    { '@type': 'Question', name: "Sur combien d'appareils puis-je regarder en même temps ?", acceptedAnswer: { '@type': 'Answer', text: 'Avec tous nos forfaits, vous pouvez regarder sur 4 appareils maximum simultanément. Parfait pour toute la famille ! Chaque écran reçoit la même qualité élevée.' } },
    { '@type': 'Question', name: 'Quelles chaînes sont disponibles ?', acceptedAnswer: { '@type': 'Answer', text: "Nous proposons plus de 30 500 chaînes en direct, dont des chaînes françaises, turques, arabes, anglaises et bien d'autres chaînes internationales. Vous avez également accès à plus de 150 000 films et séries à la demande." } },
    { '@type': 'Question', name: 'Comment fonctionne le rattrapage ?', acceptedAnswer: { '@type': 'Answer', text: "Avec notre fonction de rattrapage sur 14 jours (Catch-Up TV), vous pouvez revoir les programmes manqués jusqu'à 14 jours en arrière. Les programmes manqués sont directement disponibles dans le guide EPG." } },
    { '@type': 'Question', name: 'Quels moyens de paiement acceptez-vous ?', acceptedAnswer: { '@type': 'Answer', text: 'Nous acceptons Binance Pay et PayPal pour des paiements sûrs et simples. Après paiement, vous recevez immédiatement vos identifiants via WhatsApp.' } },
    { '@type': 'Question', name: "Proposez-vous un essai gratuit ?", acceptedAnswer: { '@type': 'Answer', text: "Oui ! Nous offrons 1 jour d'essai gratuit pour que vous puissiez juger de la qualité de notre service avant de vous engager. Contactez-nous via WhatsApp pour en profiter." } },
    { '@type': 'Question', name: 'Que se passe-t-il à la fin de mon abonnement ?', acceptedAnswer: { '@type': 'Answer', text: "Nous ne pratiquons PAS la reconduction automatique. Votre abonnement s'arrête automatiquement à la fin de la période choisie. Vous recevez un rappel lorsque votre abonnement arrive à échéance, pour le renouveler si vous le souhaitez." } },
    { '@type': 'Question', name: 'Ai-je un support francophone ?', acceptedAnswer: { '@type': 'Answer', text: 'Absolument ! Nous proposons un support francophone 24/7 via WhatsApp et e-mail. Notre équipe est toujours disponible pour vous.' } }
  ]
};

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath = '/',
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  includeHomeSchema = false,
}) => {
  const canonicalUrl = canonicalPath === '/' ? SITE_URL : `${SITE_URL}${canonicalPath}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data — Organization ships statically in index.html on
          every route. Product/FAQPage only apply to the homepage, where
          the matching visible content (Pricing + FAQ sections) exists. */}
      {includeHomeSchema && (
        <>
          <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </>
      )}

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="France IPTV" />

      {/* Geo Tags for France */}
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="France" />
    </Helmet>
  );
};

export default SEO;
