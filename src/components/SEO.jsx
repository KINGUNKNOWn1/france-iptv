import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'France IPTV - Meilleur Fournisseur IPTV en France',
    url: 'https://franceiptv.stream',
    logo: 'https://franceiptv.stream/logo.png',
    description: 'France IPTV est le meilleur fournisseur IPTV en France. Acheter IPTV à partir de 8€. Abonnement IPTV légal avec 30 500+ chaînes et 150 000+ films et séries. IPTV français avec support 24/7.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['French', 'Arabic', 'Turkish', 'English']
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2847',
      bestRating: '5',
      worstRating: '1'
    }
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Abonnement Premium France IPTV',
    description: '30 500+ chaînes en direct, 150 000+ titres VOD, qualité HD/UHD/4K, support francophone 24/7',
    brand: {
      '@type': 'Brand',
      name: 'France IPTV'
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Abonnement IPTV 3 Mois',
        price: '23',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://franceiptv.stream/#pricing',
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      },
      {
        '@type': 'Offer',
        name: 'Abonnement IPTV 6 Mois',
        price: '32',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://franceiptv.stream/#pricing',
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      },
      {
        '@type': 'Offer',
        name: 'Abonnement IPTV 12 Mois - Meilleure Offre',
        price: '48',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: 'https://franceiptv.stream/#pricing',
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2847'
    }
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'IPTV Streaming Service',
    provider: {
      '@type': 'Organization',
      name: 'France IPTV'
    },
    areaServed: {
      '@type': 'Country',
      name: 'France'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Forfaits IPTV',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Abonnement IPTV 3 Mois'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Abonnement IPTV 6 Mois'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Abonnement IPTV 12 Mois'
          }
        }
      ]
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Où peut-on acheter un abonnement IPTV en France ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Vous pouvez acheter un abonnement IPTV en France chez France IPTV, le meilleur fournisseur IPTV. Nous proposons des abonnements IPTV à partir de 8€ avec plus de 30 500 chaînes. Vous pouvez commander directement en ligne et être actif en 5 minutes."
        }
      },
      {
        '@type': 'Question',
        name: 'France IPTV est-il légal ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "France IPTV est un fournisseur IPTV légal. Nous fournissons un service fiable avec un contenu officiel et un support client complet. Acheter un IPTV légal, c'est choisir un fournisseur de confiance comme France IPTV."
        }
      },
      {
        '@type': 'Question',
        name: 'Quelle est la meilleure application IPTV pour la France ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La meilleure application IPTV pour les utilisateurs français est IPTV Smarters Pro et SS IPTV. Ces applications fonctionnent parfaitement avec votre abonnement France IPTV sur tous les appareils : Smart TV, Android, iOS, et plus."
        }
      },
      {
        '@type': 'Question',
        name: 'Combien de chaînes propose France IPTV ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'France IPTV propose plus de 30 500 chaînes en direct dans différentes langues, dont des chaînes françaises, arabes, turques et internationales. Nous proposons également plus de 150 000 films et séries à la demande.'
        }
      },
      {
        '@type': 'Question',
        name: 'En combien de temps mon abonnement IPTV est-il actif ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Votre abonnement France IPTV est actif en 5 minutes après le paiement par carte bancaire, PayPal ou virement SEPA. Vous recevez immédiatement vos identifiants par e-mail et pouvez commencer à regarder tout de suite.'
        }
      },
      {
        '@type': 'Question',
        name: "Quel est le prix d'un abonnement IPTV chez France IPTV ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'abonnement IPTV chez France IPTV démarre à 8€ pour 1 mois, 23€ pour 3 mois, 32€ pour 6 mois, ou 48€ pour 12 mois. Aucun frais caché, aucune reconduction automatique."
        }
      },
      {
        '@type': 'Question',
        name: "L'abonnement se renouvelle-t-il automatiquement ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, chez France IPTV il n'y a aucune reconduction automatique. Vous gardez le contrôle total de votre abonnement. Cela fait de nous l'un des meilleurs fournisseurs IPTV en France."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://franceiptv.stream'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tarifs',
        item: 'https://franceiptv.stream/#pricing'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Comparatif',
        item: 'https://franceiptv.stream/#comparison'
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>France IPTV - Service de Streaming Premium | 30 500+ Chaînes dès 8€</title>
      <meta
        name="description"
        content="France IPTV - Service de streaming premium avec 30 500+ chaînes. Abonnement IPTV fiable dès 8€. Service francophone, légal et sécurisé. Actif en 5 min."
      />
      <meta
        name="keywords"
        content="acheter iptv, acheter abonnement iptv, fournisseurs iptv, iptv france, meilleure application iptv, iptv français, fournisseur iptv, iptv légal, abonnement iptv, iptv 1 mois pas cher, ip tv"
      />
      <link rel="canonical" href="https://franceiptv.stream" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://franceiptv.stream" />
      <meta property="og:title" content="France IPTV - Service de Streaming Premium | 30 500+ Chaînes" />
      <meta
        property="og:description"
        content="France IPTV - Service de streaming premium avec 30 500+ chaînes, légal et fiable. Abonnement dès 8€. Actif en 5 min. Support 24/7."
      />
      <meta property="og:image" content="https://franceiptv.stream/og-image.jpg" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://franceiptv.stream" />
      <meta property="twitter:title" content="France IPTV - Service de Streaming Premium" />
      <meta
        property="twitter:description"
        content="France IPTV - Service de streaming premium. Dès 8€. 30 500+ chaînes, légal et fiable."
      />
      <meta property="twitter:image" content="https://franceiptv.stream/twitter-image.jpg" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

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
