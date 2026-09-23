import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import Blog from '../components/Blog';
import { blogPosts, SITE_URL } from '../data/blogPosts';

const blogSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog IPTV France',
    url: `${SITE_URL}/blog`,
    inLanguage: 'fr-FR',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: blogPosts.map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}${post.link}`,
        name: post.title
      }))
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` }
    ]
  }
];

const BlogIndex = () => (
  <>
    <SEO
      title="Blog IPTV France : Guides, Prix, Applications et Dépannage"
      description="Tous nos guides IPTV : prix d'un abonnement en France, meilleures applications, installation sur Smart TV et box, liste des chaînes et solutions aux pannes."
      keywords="blog iptv, guide iptv, iptv france, application iptv, installer iptv, iptv ne fonctionne plus"
      canonicalPath="/blog"
    />
    <Helmet>
      {blogSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>

    <div className="min-h-screen bg-white pt-20">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-brand-black">
            Blog IPTV France : Guides et Conseils
          </h1>
          <p className="text-lg text-brand-gray leading-relaxed">
            Tout ce qu'il faut savoir avant et après avoir choisi un{' '}
            <Link to="/abonnement-iptv" className="text-brand-gold underline">abonnement IPTV</Link> :
            les <Link to="/tarifs" className="text-brand-gold underline">prix en France</Link>, les meilleures
            applications, l'installation sur chaque{' '}
            <Link to="/appareils" className="text-brand-gold underline">appareil compatible</Link> et les
            solutions quand l'IPTV ne fonctionne plus.
          </p>
        </div>
      </section>

      <Blog showAllLink={false} />
    </div>
  </>
);

export default BlogIndex;
