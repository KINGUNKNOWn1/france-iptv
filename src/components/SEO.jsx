import React from 'react';
import { Helmet } from 'react-helmet-async';
import { homeFaqs } from '../data/homeFaqs';

const SITE_URL = 'https://franceiptv.stream';
const DEFAULT_TITLE = 'France IPTV : Abonnement IPTV 4K dès 8€, Test Gratuit 24h';
const DEFAULT_DESCRIPTION = 'France IPTV : abonnement IPTV 4K avec 30 500+ chaînes, films et séries dès 8€/mois. Test gratuit 24 h sur demande, sans reconduction.';
const DEFAULT_KEYWORDS = 'acheter iptv, acheter abonnement iptv, fournisseurs iptv, iptv france, meilleure application iptv, iptv français, fournisseur iptv, iptv légal, abonnement iptv, iptv 1 mois pas cher, ip tv';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

// Fields Google's merchant listing / product snippet reports expect on every
// Offer. Digital subscription: delivered by WhatsApp, free, same day; no
// returns (matches the offer terms: free 24 h test instead of refunds).
export const OFFER_POLICIES = {
  hasMerchantReturnPolicy: {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: ['FR', 'BE'],
    returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
  },
  shippingDetails: {
    '@type': 'OfferShippingDetails',
    shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'EUR' },
    shippingDestination: [
      { '@type': 'DefinedRegion', addressCountry: 'FR' },
      { '@type': 'DefinedRegion', addressCountry: 'BE' },
    ],
    deliveryTime: {
      '@type': 'ShippingDeliveryTime',
      handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
      transitTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
    },
  },
};

const offer = (name, price) => ({
  '@type': 'Offer', name, price, priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE_URL}/tarifs`, ...OFFER_POLICIES,
});

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Abonnement Premium France IPTV',
  description: '30 500+ chaînes en direct, 150 000+ titres VOD, qualité HD/UHD/4K, support francophone 24/7',
  image: DEFAULT_IMAGE,
  brand: { '@type': 'Brand', name: 'France IPTV' },
  offers: [
    offer('Abonnement IPTV 1 Mois', '8'),
    offer('Abonnement IPTV 3 Mois', '19.99'),
    offer('Abonnement IPTV 6 Mois', '30'),
    offer('Abonnement IPTV 12 Mois - Meilleure Offre', '45')
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
};

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath = '/',
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  includeHomeSchema = false,
  noindex = false,
}) => {
  // canonicalPath={null} (e.g. the 404 page) omits the canonical and og:url tags.
  const canonicalUrl = canonicalPath == null ? null : canonicalPath === '/' ? SITE_URL : `${SITE_URL}${canonicalPath}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="France IPTV" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      {canonicalUrl && <meta property="twitter:url" content={canonicalUrl} />}
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
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'} />
      <meta name="language" content="French" />
      <meta name="author" content="France IPTV" />

      {/* Geo Tags for France */}
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="France" />
    </Helmet>
  );
};

export default SEO;
