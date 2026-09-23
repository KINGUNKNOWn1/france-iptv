import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTv, FaFootballBall, FaFilm, FaGlobeEurope, FaPlay } from 'react-icons/fa';

const ChannelGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredChannel, setHoveredChannel] = useState(null);

  const categories = [
    { id: 'all', name: 'Toutes les Chaînes', icon: FaTv, count: 30500 },
    { id: 'sport', name: 'Sport', icon: FaFootballBall, count: 2500 },
    { id: 'francaises', name: 'Françaises', icon: FaGlobeEurope, count: 150 },
    { id: 'films', name: 'Films & Séries', icon: FaFilm, count: 150000 },
  ];

  const channels = [
    // Sport Channels
    { id: 1, name: 'beIN Sports 1', logo: '⚽', category: 'sport', quality: '4K', viewers: '12,5K' },
    { id: 2, name: 'Canal+ Sport', logo: '🏆', category: 'sport', quality: '4K', viewers: '8,2K' },
    { id: 3, name: 'ESPN', logo: '🏀', category: 'sport', quality: 'UHD', viewers: '15,3K' },
    { id: 4, name: 'Eurosport 1', logo: '🎾', category: 'sport', quality: 'HD', viewers: '6,8K' },
    { id: 5, name: 'Automoto', logo: '🏎️', category: 'sport', quality: '4K', viewers: '9,1K' },
    { id: 6, name: 'Golf Channel', logo: '⛳', category: 'sport', quality: 'HD', viewers: '3,2K' },

    // French Channels
    { id: 7, name: 'TF1', logo: '🇫🇷', category: 'francaises', quality: 'HD', viewers: '25,4K' },
    { id: 8, name: 'France 2', logo: '📺', category: 'francaises', quality: 'HD', viewers: '18,7K' },
    { id: 9, name: 'France 3', logo: '🎬', category: 'francaises', quality: 'HD', viewers: '14,2K' },
    { id: 10, name: 'M6', logo: '📡', category: 'francaises', quality: 'UHD', viewers: '32,1K' },
    { id: 11, name: 'Canal+', logo: '🎭', category: 'francaises', quality: 'HD', viewers: '16,5K' },
    { id: 12, name: 'W9', logo: '📻', category: 'francaises', quality: 'HD', viewers: '19,8K' },

    // Movies & Series
    { id: 13, name: 'Netflix Originals', logo: '🎥', category: 'films', quality: '4K', viewers: '45,2K' },
    { id: 14, name: 'HBO Premium', logo: '🍿', category: 'films', quality: '4K', viewers: '38,9K' },
    { id: 15, name: 'Disney+', logo: '✨', category: 'films', quality: '4K', viewers: '52,3K' },
    { id: 16, name: 'Amazon Prime', logo: '📺', category: 'films', quality: '4K', viewers: '41,7K' },
    { id: 17, name: 'Ciné+ Premier', logo: '🎬', category: 'films', quality: 'UHD', viewers: '22,4K' },
    { id: 18, name: 'Ciné+ Frisson', logo: '💥', category: 'films', quality: 'HD', viewers: '18,9K' },
  ];

  const filteredChannels = selectedCategory === 'all'
    ? channels
    : channels.filter(ch => ch.category === selectedCategory);

  const getQualityColor = (quality) => {
    switch(quality) {
      case '4K': return 'from-purple-500 to-pink-500';
      case 'UHD': return 'from-blue-500 to-cyan-500';
      case 'HD': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#090B0B] via-[#111413] to-[#090B0B]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            30 500+ Chaînes en Direct
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Regardez toutes vos chaînes favorites en qualité HD, UHD et 4K cristalline.
            Sport, films, séries, actualités et divertissement - tout dans un seul <Link to="/abonnement-iptv" className="text-brand-gold hover:text-white underline">abonnement IPTV</Link>.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-surface border border-brand-gold/40 text-white shadow-lg shadow-blue-600/50'
                  : 'bg-[#090B0B]/50 text-gray-300 hover:bg-slate-700/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <category.icon className="text-xl" />
                <div className="text-left">
                  <div className="font-bold">{category.name}</div>
                  <div className="text-xs opacity-75">
                    {category.count.toLocaleString('fr-FR')} {category.id === 'films' ? 'titres' : 'chaînes'}
                  </div>
                </div>
              </div>

              {/* Selection indicator */}
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="categoryIndicator"
                  className="absolute inset-0 border-2 border-white/30 rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Channel Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredChannels.map((channel, index) => (
              <motion.div
                key={channel.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.02,
                  layout: { duration: 0.3 }
                }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                onHoverStart={() => setHoveredChannel(channel.id)}
                onHoverEnd={() => setHoveredChannel(null)}
                className="relative group cursor-pointer"
              >
                {/* Channel Card */}
                <div className="relative bg-gradient-to-br from-[#111413] to-[#090B0B] rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 to-purple-600/0 group-hover:from-brand-gold/20 group-hover:to-purple-600/20 transition-all duration-500" />

                  {/* Channel Logo */}
                  <div className="relative text-5xl mb-3 flex items-center justify-center h-16">
                    {channel.logo}
                  </div>

                  {/* Channel Name */}
                  <h3 className="relative text-sm font-semibold text-white text-center mb-2 line-clamp-2 min-h-[2.5rem]">
                    {channel.name}
                  </h3>

                  {/* Quality Badge */}
                  <div className={`relative mx-auto w-fit px-3 py-1 rounded-full bg-gradient-to-r ${getQualityColor(channel.quality)} text-white text-xs font-bold shadow-lg`}>
                    {channel.quality}
                  </div>

                  {/* Live Viewers (on hover) */}
                  <AnimatePresence>
                    {hoveredChannel === channel.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="relative mt-3 flex items-center justify-center gap-1 text-xs text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                        <span>{channel.viewers} spectateurs</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Play Button Overlay (on hover) */}
                  <AnimatePresence>
                    {hoveredChannel === channel.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-xl"
                      >
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl">
                          <FaPlay className="text-black text-xl ml-1" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Et encore {(30500 - filteredChannels.length).toLocaleString('fr-FR')} chaînes disponibles...
            <Link to="/acheter-iptv" className="text-brand-gold hover:text-white underline ml-2">En savoir plus sur l'achat d'IPTV</Link>
          </p>
          <Link
            to="/tarifs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-surface border border-brand-gold/40 text-white font-bold rounded-xl hover:from-[#C4FF86] hover:to-[#C4FF86] transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
          >
            <FaTv />
            Voir les Tarifs de l'Abonnement IPTV
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ChannelGrid;
