import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaLinkedin } from 'react-icons/fa';

const CEOSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: CEO Image & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* CEO Photo Container */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-brand-gold shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-ink via-brand-gray to-ink">
                  {/* Professional CEO photo */}
                  <img
loading="lazy" decoding="async"                     src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&q=80"
                    alt="Pierre Lambert - Fondateur"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Blue accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-gold"></div>
              </div>

              {/* Info Card */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-brand-gray-border rounded-xl p-6 shadow-xl max-w-xs">
                <h3 className="text-2xl font-bold text-brand-black mb-1">
                  Pierre Lambert
                </h3>
                <p className="text-brand-gold font-semibold mb-3">
                  Fondateur & Directeur
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-brand-gold hover:bg-[#C4FF86] flex items-center justify-center transition-colors"
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </a>
                  <span className="text-brand-gray text-sm">
                    France
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Message & Quote */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 rounded-full mb-6">
                <span className="text-brand-gold font-semibold text-sm">
                  DIRECTION
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
                Notre Vision pour l'Avenir
              </h2>

              {/* Quote */}
              <div className="relative pl-8 mb-8">
                <FaQuoteLeft className="absolute left-0 top-0 text-4xl text-brand-gold opacity-20" />
                <blockquote className="text-xl text-brand-gray italic leading-relaxed">
                  « Chez France IPTV, nous croyons que chacun doit avoir accès à une télévision de qualité,
                  sans contrats complexes ni frais cachés. Notre mission est simple : offrir la meilleure expérience
                  IPTV avec un service francophone en qui vous pouvez avoir confiance. »
                </blockquote>
              </div>

              {/* Mission Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-brand-black mb-1">
                      La Transparence Avant Tout
                    </h4>
                    <p className="text-brand-gray">
                      Aucun frais caché, aucune reconduction automatique. Ce que vous voyez est ce que vous obtenez.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-brand-black mb-1">
                      Qualité Garantie
                    </h4>
                    <p className="text-brand-gray">
                      99,9 % de disponibilité, plus de 30 500 chaînes en HD/4K, et un support francophone 24/7.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-brand-black mb-1">
                      Une Approche Centrée Client
                    </h4>
                    <p className="text-brand-gray">
                      Dans toute la France - nous sommes toujours là pour vous, via WhatsApp ou par téléphone.
                    </p>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="pt-6 border-t border-brand-gray-border">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {/* Signature placeholder */}
                    <div className="text-3xl font-brand italic text-brand-gold">
                      Pierre Lambert
                    </div>
                  </div>
                </div>
                <p className="text-brand-gray text-sm mt-2">
                  Fondateur & Directeur, France IPTV
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
