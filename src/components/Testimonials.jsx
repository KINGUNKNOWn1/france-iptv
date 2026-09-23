import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jean Dupont',
      location: 'Paris',
      rating: 5,
      text: "Service excellent ! La qualité est irréprochable et le prix est très raisonnable. Aucun buffering, même pendant les grands matchs. À recommander sans hésiter !",
      plan: 'IPTV Premium 12 mois',
      initials: 'JD'
    },
    {
      name: 'Sophie Martin',
      location: 'Lyon',
      rating: 5,
      text: "Enfin un fournisseur IPTV fiable ! L'installation était super simple sur ma Samsung TV. Le support francophone répond en quelques minutes via WhatsApp.",
      plan: 'IPTV Premium 6 mois',
      initials: 'SM'
    },
    {
      name: 'Karim Benali',
      location: 'Marseille',
      rating: 5,
      text: "Le meilleur IPTV que j'ai eu. Toutes les chaînes arabes et françaises en qualité parfaite. Toute ma famille est ravie. 5 étoiles amplement méritées !",
      plan: 'IPTV Premium 12 mois',
      initials: 'KB'
    },
    {
      name: 'Camille Petit',
      location: 'Toulouse',
      rating: 5,
      text: "Super contente de France IPTV ! Je peux enfin regarder toutes mes séries et films préférés sans galère. L'appli fonctionne parfaitement sur mon iPhone et mon iPad.",
      plan: 'IPTV Premium 3 mois',
      initials: 'CP'
    },
    {
      name: 'Mehmet Yilmaz',
      location: 'Strasbourg',
      rating: 5,
      text: "Très satisfait ! Toutes les chaînes turques disponibles en qualité HD. Le prix est juste et il n'y a aucun frais caché. À recommander à tout le monde !",
      plan: 'IPTV Premium 12 mois',
      initials: 'MY'
    },
    {
      name: 'Lucie Blanchard',
      location: 'Nantes',
      rating: 5,
      text: "Parfait pour les passionnés de sport ! Tous les matchs de foot en direct en 4K. La fonction replay est aussi très pratique quand on rate un match.",
      plan: 'IPTV Premium 6 mois',
      initials: 'LB'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-surface via-gray-50 to-surface">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-brand-gold font-bold text-sm">AVIS CLIENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Ce Que Disent{' '}
            <span className="bg-gradient-to-r from-brand-gold to-orange-600 bg-clip-text text-transparent">
              Nos Clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez pourquoi des milliers de Français choisissent France IPTV
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-orange-100">
                <FaQuoteLeft className="text-5xl" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-orange-500 text-lg" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Plan Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-orange-50 text-brand-gold text-xs font-semibold rounded-full">
                  {testimonial.plan}
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-gold to-orange-600 flex items-center justify-center text-white font-bold shadow-lg">
                  {testimonial.initials}
                </div>

                <div>
                  <p className="font-bold text-brand-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>

                {/* Verified Badge */}
                <div className="ml-auto">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <p className="text-4xl font-bold text-brand-gold mb-2">4,9/5</p>
            <p className="text-gray-600">Note Moyenne</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-gold mb-2">15 000+</p>
            <p className="text-gray-600">Clients Satisfaits</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-gold mb-2">99,9 %</p>
            <p className="text-gray-600">Disponibilité Garantie</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-gold mb-2">24/7</p>
            <p className="text-gray-600">Support Francophone</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
