// Single source of truth for blog posts: used by the homepage Blog section,
// the /blog index page, and each post's Article/Breadcrumb JSON-LD.
export const SITE_URL = 'https://franceiptv.stream';

export const blogPosts = [
  {
    title: 'Acheter IPTV en France : Guide Complet + Meilleurs Fournisseurs',
    shortTitle: 'Acheter IPTV en France',
    excerpt: "Guide complet pour acheter un IPTV en France. Meilleurs fournisseurs, prix, conseils d'installation et tout ce qu'il faut savoir sur les abonnements IPTV.",
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
    datePublished: '2026-03-05',
    dateModified: '2026-09-23',
    readTime: '8 min',
    category: 'Guide',
    link: '/blog/acheter-iptv-france-guide-complet'
  },
  {
    title: 'Meilleures Applications IPTV 2026 : Top 10 pour Android, iOS & Smart TV',
    shortTitle: 'Meilleures Applications IPTV',
    excerpt: "Comparatif des meilleures applications IPTV : IPTV Smarters, TiviMate, GSE Smart IPTV et plus. Conseils d'installation et avis.",
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    datePublished: '2026-03-01',
    dateModified: '2026-09-23',
    readTime: '6 min',
    category: 'Applications',
    link: '/blog/meilleures-applications-iptv'
  },
  {
    title: 'Liste des Chaînes IPTV Françaises : 80+ Chaînes FR',
    shortTitle: 'Liste des Chaînes IPTV Françaises',
    excerpt: 'Liste complète des chaînes IPTV françaises. TF1, France Télévisions, M6, chaînes régionales et sportives.',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
    datePublished: '2026-02-20',
    dateModified: '2026-09-23',
    readTime: '7 min',
    category: 'Chaînes',
    link: '/blog/liste-chaines-francaises-iptv'
  },
  {
    title: 'IPTV Légal en France ? Informations Juridiques & Réglementation',
    shortTitle: 'IPTV Légal en France ?',
    excerpt: "L'IPTV est-il légal en France ? Réglementation, risques et comment utiliser l'IPTV en toute sécurité.",
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
    datePublished: '2026-02-15',
    dateModified: '2026-09-23',
    readTime: '6 min',
    category: 'Juridique',
    link: '/blog/iptv-legal-en-france'
  },
  {
    title: 'Prix IPTV France 2026 : Combien Coûte un Abonnement ?',
    shortTitle: 'Prix IPTV France',
    excerpt: "Tarifs réels d'un abonnement IPTV en France, ce qui fait varier le prix, et les pièges à éviter avant de payer.",
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80',
    datePublished: '2026-09-19',
    dateModified: '2026-09-19',
    readTime: '7 min',
    category: 'Tarifs',
    link: '/blog/prix-iptv-france'
  },
  {
    title: 'Meilleur IPTV France 2026 : Comment Choisir un Fournisseur',
    shortTitle: 'Meilleur IPTV France',
    excerpt: '7 critères concrets pour reconnaître un fournisseur IPTV fiable et éviter les pièges des services illégaux.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    datePublished: '2026-09-19',
    dateModified: '2026-09-19',
    readTime: '8 min',
    category: 'Comparatif',
    link: '/blog/meilleur-iptv-france'
  },
  {
    title: 'IPTV Ne Fonctionne Plus : Guide Complet des Pannes',
    shortTitle: 'IPTV Ne Fonctionne Plus',
    excerpt: '6 causes fréquentes de coupures ou de pannes IPTV, et comment les résoudre en quelques minutes.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    datePublished: '2026-09-19',
    dateModified: '2026-09-19',
    readTime: '6 min',
    category: 'Dépannage',
    link: '/blog/iptv-ne-fonctionne-plus'
  }
];

export const formatPostDate = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

// Article + BreadcrumbList JSON-LD for the post at `link`.
export const blogPostSchemas = (link) => {
  const post = blogPosts.find((p) => p.link === link);
  const url = `${SITE_URL}${post.link}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      author: { '@type': 'Organization', name: 'France IPTV', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'France IPTV', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.svg` } },
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      inLanguage: 'fr-FR',
      mainEntityOfPage: url
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: post.shortTitle, item: url }
      ]
    }
  ];
};
