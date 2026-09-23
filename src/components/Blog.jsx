import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa';
import { blogPosts as posts, formatPostDate } from '../data/blogPosts';

const Blog = ({ showAllLink = true }) => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-[#090B0B] via-[#111413] to-[#090B0B]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div className="text-center mb-12">
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
              key={post.link}
              whileHover={{ y: -6 }}
              className="group bg-[#111413] rounded-2xl overflow-hidden border border-slate-700 hover:border-brand-gold transition-all duration-300"
            >
            <Link to={post.link} className="block">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
loading="lazy" decoding="async"                   src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090B0B] to-transparent" />

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
                    <span>Équipe France IPTV</span>
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
                  <span className="text-sm text-gray-400">{formatPostDate(post.datePublished)}</span>
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

        {showAllLink && (
          <div className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-white font-semibold">
              Voir tous les articles du blog IPTV
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
