import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Acheter IPTV en France : Guide Complet + Meilleurs Fournisseurs',
      excerpt: "Guide complet pour acheter un IPTV en France. Meilleurs fournisseurs, prix, conseils d'installation et tout ce qu'il faut savoir sur les abonnements IPTV.",
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
      author: 'Équipe France IPTV',
      date: '5 mars 2026',
      readTime: '8 min',
      category: 'Guide',
      link: '/blog/acheter-iptv-france-guide-complet'
    },
    {
      id: 2,
      title: 'Meilleures Applications IPTV : Top 10 pour Android, iOS & Smart TV',
      excerpt: "Comparatif des meilleures applications IPTV : IPTV Smarters, TiviMate, GSE Smart IPTV et plus. Conseils d'installation et avis.",
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      author: 'Équipe France IPTV',
      date: '1 mars 2026',
      readTime: '6 min',
      category: 'Applications',
      link: '/blog/meilleures-applications-iptv-2024'
    },
    {
      id: 3,
      title: "Installer l'IPTV sur Samsung TV : Guide Complet",
      excerpt: "Apprenez à installer l'IPTV sur votre Samsung Smart TV en 5 minutes. Guide étape par étape pour Tizen OS et Smart Hub.",
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
      author: 'Équipe France IPTV',
      date: '25 février 2026',
      readTime: '5 min',
      category: 'Tutoriel',
      link: '/blog/installer-iptv-samsung-tv'
    },
    {
      id: 4,
      title: 'Liste des Chaînes IPTV Françaises : 80+ Chaînes FR',
      excerpt: 'Liste complète des chaînes IPTV françaises. TF1, France Télévisions, M6, chaînes régionales et sportives.',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
      author: 'Équipe France IPTV',
      date: '20 février 2026',
      readTime: '7 min',
      category: 'Chaînes',
      link: '/blog/liste-chaines-francaises-iptv'
    },
    {
      id: 5,
      title: 'IPTV Légal en France ? Informations Juridiques & Réglementation',
      excerpt: "L'IPTV est-il légal en France ? Réglementation, risques et comment utiliser l'IPTV en toute sécurité.",
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
      author: 'Équipe France IPTV',
      date: '15 février 2026',
      readTime: '6 min',
      category: 'Juridique',
      link: '/blog/iptv-legal-en-france'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-[#141311] via-[#201C18] to-[#141311]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog & Actualités IPTV
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Astuces, guides et dernières actualités IPTV en France
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-[#201C18] rounded-2xl overflow-hidden border border-slate-700 hover:border-brand-gold transition-all duration-300"
            >
            <Link to={post.link} className="block">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
loading="lazy" decoding="async"                   src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141311] to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-gold text-white text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-xs" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUser className="text-xs" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <span className="flex items-center gap-2 text-blue-400 group-hover:text-white font-semibold text-sm group-hover:gap-3 transition-all">
                    Lire la suite
                    <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </div>
            </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
