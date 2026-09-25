import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaCrown } from 'react-icons/fa';

const ComparisonTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  // Compares categories of offers a buyer actually weighs, with qualitative
  // facts only (no invented competitor figures).
  const features = [
    { name: 'Chaînes en direct', streamholland: '30 500+', competitor1: 'Annoncé, rarement vérifiable', competitor2: 'Bouquet limité' },
    { name: 'Films & séries (VOD)', streamholland: '150 000+', competitor1: 'Variable', competitor2: 'Abonnements séparés' },
    { name: 'Garantie satisfait ou remboursé', streamholland: '24 h sur le 1er mois', competitor1: 'Rarement', competitor2: false },
    { name: 'Sans reconduction automatique', streamholland: true, competitor1: 'Variable', competitor2: false },
    { name: 'Sans engagement de durée', streamholland: true, competitor1: true, competitor2: 'Souvent 12 à 24 mois' },
    { name: 'Support francophone', streamholland: '24/7 sur WhatsApp', competitor1: 'Souvent injoignable', competitor2: 'Horaires limités' },
    { name: 'Paiement traçable', streamholland: 'PayPal, Binance Pay', competitor1: 'Rarement', competitor2: true },
    { name: 'Mise en service', streamholland: '5 minutes', competitor1: 'Variable', competitor2: 'Plusieurs jours' },
    { name: 'Écrans simultanés', streamholland: '4', competitor1: 'Variable', competitor2: 'Limité au décodeur' },
    { name: 'Guide TV (EPG) et replay', streamholland: true, competitor1: 'Variable', competitor2: true },
    { name: 'Prix', streamholland: '8 € le mois, 45 € l’année', competitor1: '5 à 15 € par an', competitor2: '20 à 60 €/mois' },
  ];

  const renderCell = (value, isFranceIPTV = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <FaCheckCircle className={`text-2xl mx-auto ${isFranceIPTV ? 'text-green-500' : 'text-green-600/70'}`} />
      ) : (
        <FaTimesCircle className="text-2xl text-red-500/70 mx-auto" />
      );
    }
    return (
      <span className={`font-semibold ${isFranceIPTV ? 'text-white text-lg' : 'text-gray-400'}`}>
        {value}
      </span>
    );
  };

  return (
    <section id="comparison" className="py-20 bg-gradient-to-b from-[#090B0B] via-[#111413] to-[#090B0B]">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            France IPTV comparé aux autres offres
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ce qui change concrètement face à une offre IPTV à très bas prix et à un bouquet TV classique
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-2xl border border-slate-700">
              <table className="min-w-full divide-y divide-slate-700">
                {/* Table Header */}
                <thead>
                  <tr className="bg-[#090B0B]">
                    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      Caractéristiques
                    </th>
                    <th className="px-6 py-5 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                          <FaCrown className="text-yellow-500 text-xl" />
                          <span className="text-lg font-bold text-white">France IPTV</span>
                        </div>
                        <span className="px-3 py-1 bg-surface border border-brand-gold/40 text-white text-xs font-bold rounded-full">
                          RECOMMANDÉ
                        </span>
                      </div>
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-400">
                      Offre IPTV à très bas prix
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-400">
                      Bouquet TV classique
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="bg-[#111A0D] divide-y divide-slate-700/50">
                  {features.map((feature, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      onHoverStart={() => setHoveredRow(index)}
                      onHoverEnd={() => setHoveredRow(null)}
                      className={`transition-colors duration-200 ${
                        hoveredRow === index ? 'bg-[#090B0B]/50' : ''
                      }`}
                    >
                      <td className="px-6 py-4 text-sm text-gray-300 font-medium">
                        {feature.name}
                      </td>

                      {/* France IPTV Column (Highlighted) */}
                      <td className="px-6 py-4 text-center bg-gradient-to-r from-brand-gold/10 to-[#C4FF86]/10 border-x-2 border-blue-500/30">
                        {renderCell(feature.streamholland, true)}
                      </td>

                      <td className="px-6 py-4 text-center">
                        {renderCell(feature.competitor1)}
                      </td>

                      <td className="px-6 py-4 text-center">
                        {renderCell(feature.competitor2)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Commencez par le 1er mois à 8 €, satisfait ou remboursé 24 h : accès actif en 5 minutes.
          </p>
          <a
            href="/tarifs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-lime hover:bg-lime-hover text-lime-on font-bold rounded-xl transition-colors text-lg"
          >
            <FaCrown />
            Voir les formules, dès 8 €
          </a>
        </motion.div>

        {/* Trust Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-green-600/10 border border-green-600/30 rounded-xl">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <div className="text-left">
              <p className="text-white font-bold">Satisfait ou remboursé 24 h sur le 1er mois</p>
              <p className="text-sm text-gray-300">Pas satisfait du 1er mois ? Remboursement intégral de 8 € dans les 24 h.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
