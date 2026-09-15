import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Acheter IPTV en France : Guide Complet 2026',
      excerpt: "Tout ce que vous devez savoir sur l'achat d'IPTV en France. De la comparaison des fournisseurs aux conseils d'installation.",
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
      author: 'Équipe France IPTV',
      date: '5 mars 2026',
      readTime: '8 min',
      category: 'Guide'
    },
    {
      id: 2,
      title: 'Top 10 des Chaînes Sportives IPTV en 2026',
      excerpt: 'Découvrez les chaînes sportives à ne surtout pas manquer avec votre abonnement IPTV.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      author: 'Équipe France IPTV',
      date: '1 mars 2026',
      readTime: '6 min',
      category: 'Sport'
    },
    {
      id: 3,
      title: "Installer l'IPTV sur Samsung Smart TV",
      excerpt: "Guide étape par étape pour installer l'IPTV sur votre Samsung Smart TV.",
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
      author: 'Équipe France IPTV',
      date: '25 février 2026',
      readTime: '5 min',
      category: 'Tutoriel'
    },
    {
      id: 4,
      title: 'Regarder les Chaînes Françaises via IPTV',
      excerpt: 'Toutes les chaînes françaises réunies. TF1, France 2, M6 et bien plus via IPTV.',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
      author: 'Équipe France IPTV',
      date: '20 février 2026',
      readTime: '7 min',
      category: 'Chaînes'
    },
    {
      id: 5,
      title: "IPTV 4K : L'Upgrade en Vaut-elle la Peine ?",
      excerpt: 'Tout sur le streaming IPTV en 4K. Avantages, inconvénients et ce dont vous avez besoin.',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
      author: 'Équipe France IPTV',
      date: '15 février 2026',
      readTime: '6 min',
      category: 'Technologie'
    },
    {
      id: 6,
      title: 'IPTV vs Câble : Lequel Choisir en 2026 ?',
      excerpt: "Comparaison entre l'IPTV et la télévision par câble traditionnelle. Coûts, chaînes et qualité.",
      image: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=800&q=80',
      author: 'Équipe France IPTV',
      date: '10 février 2026',
      readTime: '9 min',
      category: 'Comparatif'
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
                  <a
                    href="#"
                    className="flex items-center gap-2 text-blue-400 hover:text-white font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Lire la suite
                    <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#201C18] hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-700 hover:border-brand-gold"
          >
            Voir Tous les Articles
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
