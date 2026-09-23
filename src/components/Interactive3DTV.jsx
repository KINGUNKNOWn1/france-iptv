import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaClosedCaptioning } from 'react-icons/fa';

const Interactive3DTV = () => {
  const [currentChannel, setCurrentChannel] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const channels = [
    {
      id: 1,
      name: 'beIN Sports',
      category: 'Sport',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=80',
      quality: '4K',
      live: true
    },
    {
      id: 2,
      name: 'Ligue 1 Live',
      category: 'Football',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80',
      quality: '4K',
      live: true
    },
    {
      id: 3,
      name: 'Running Channel',
      category: 'Athlétisme',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80',
      quality: 'UHD',
      live: true
    },
    {
      id: 4,
      name: 'Formule 1',
      category: 'Course automobile',
      image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=1200&q=80',
      quality: '4K',
      live: true
    },
    {
      id: 5,
      name: 'Champions League',
      category: 'Football',
      image: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=1200&q=80',
      quality: '4K',
      live: true
    },
    {
      id: 6,
      name: 'Tennis Grand Chelem',
      category: 'Tennis',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&q=80',
      quality: 'UHD',
      live: true
    },
    {
      id: 7,
      name: 'NBA Basketball',
      category: 'Basketball',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80',
      quality: '4K',
      live: true
    },
    {
      id: 8,
      name: 'TF1',
      category: 'Françaises',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&q=80',
      quality: 'HD',
      live: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentChannel((prev) => (prev + 1) % channels.length);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovering, channels.length]);

  const currentChannelData = channels[currentChannel];

  return (
    <section className="py-20 bg-gradient-to-b from-[#090B0B] via-[#111413] to-[#090B0B] overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Regardez{' '}
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Tout Votre Sport Favori
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Football, F1, Tennis, Basketball et plus - le tout en direct en qualité 4K
          </p>
        </motion.div>

        {/* Large Channel Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-8"
        >
          <div className="relative bg-[#111413]/50 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-slate-700 group hover:border-blue-500 transition-all">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentChannel}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative h-[600px] overflow-hidden"
              >
                {/* Channel Image - Full Height */}
                <img
loading="lazy" decoding="async"                   src={currentChannelData.image}
                  alt={currentChannelData.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090B0B] via-[#090B0B]/80 to-[#090B0B]/30" />

                {/* Live Badge */}
                {currentChannelData.live && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full shadow-lg z-10"
                  >
                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-bold text-white">LIVE</span>
                  </motion.div>
                )}

                {/* Quality Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-surface border border-brand-gold/40 backdrop-blur-sm rounded-xl shadow-lg z-10">
                  <span className="text-sm font-bold text-white">
                    {currentChannelData.quality}
                  </span>
                </div>

                {/* Channel Info - Positioned at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <p className="text-sm text-brand-gold mb-2 uppercase tracking-wide">{currentChannelData.category}</p>
                  <h3 className="text-4xl font-bold text-white mb-6">{currentChannelData.name}</h3>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-3 px-8 py-4 bg-surface border border-brand-gold/40 text-white rounded-xl hover:from-[#C4FF86] hover:to-[#C4FF86] transition-all shadow-lg shadow-blue-600/30 text-lg font-semibold">
                      <FaPlay className="text-lg" />
                      <span>Regarder Maintenant</span>
                    </button>
                    <button className="p-4 bg-slate-700/50 backdrop-blur-sm text-white rounded-xl hover:bg-slate-600/50 transition-colors border border-slate-600">
                      <FaClosedCaptioning className="text-xl" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Channel Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
          {channels.map((channel, index) => (
            <motion.button
              key={channel.id}
              onClick={() => setCurrentChannel(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                currentChannel === index
                  ? 'border-blue-500 shadow-lg shadow-blue-500/50'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
loading="lazy" decoding="async"                   src={channel.image}
                  alt={channel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-bold line-clamp-1">
                  {channel.name}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Feature Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '30 500+', label: 'Chaînes en Direct', gradient: 'from-brand-gold to-[#C4FF86]' },
            { number: '150 000+', label: 'Films & Séries', gradient: 'from-orange-600 to-red-600' },
            { number: '99,9 %', label: 'Disponibilité', gradient: 'from-green-600 to-emerald-600' },
            { number: '24/7', label: 'Support FR', gradient: 'from-purple-600 to-pink-600' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                   style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              />
              <div className="relative text-center p-6 bg-[#111413]/80 backdrop-blur-sm rounded-xl border border-slate-700 group-hover:border-transparent transition-all">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Interactive3DTV;
