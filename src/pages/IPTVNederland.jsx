import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTv, FaFootballBall, FaFilm, FaNewspaper } from 'react-icons/fa';
import SEO from '../components/SEO';

const IPTVNederland = () => {
  const frenchChannels = [
    { category: "Chaînes Françaises", count: "80+", icon: <FaTv />, examples: "TF1, France 2, France 3, M6, Canal+, W9, TMC, C8" },
    { category: "Chaînes Sportives", count: "250+", icon: <FaFootballBall />, examples: "beIN Sports, Canal+ Sport, ESPN, Eurosport" },
    { category: "Films & Séries", count: "150+", icon: <FaFilm />, examples: "Ciné+, HBO, contenus Netflix, contenus Amazon Prime" },
    { category: "Actualités & Documentaires", count: "50+", icon: <FaNewspaper />, examples: "BFM TV, France Info, BBC News, CNN" }
  ];

  const features = [
    "Toutes les chaînes françaises en qualité HD",
    "Guide EPG complet en français",
    "Sous-titres français sur les contenus internationaux",
    "Chaînes sportives locales (Ligue 1, Formule 1, Tennis)",
    "Films et séries françaises à la demande",
    "Support client francophone 24/7",
    "Serveurs optimisés pour la France (connexion la plus rapide)",
    "Compatible avec toutes les Smart TV vendues en France",
    "Paiement par CB, PayPal ou virement SEPA",
    "Aucun VPN nécessaire - fonctionne directement en France"
  ];

  const popularChannels = [
    "TF1", "France 2", "France 3", "France 4", "France 5", "M6", "W9",
    "TMC", "C8", "Canal+", "Comedy Central", "Discovery Channel",
    "National Geographic", "ESPN", "beIN Sports 1", "Canal+ Sport",
    "Automoto", "Eurosport 1", "Eurosport 2", "RMC Sport 1", "RMC Sport 2",
    "Ciné+ Premier", "Ciné+ Frisson", "Ciné+ Famiz", "Ciné+ Émotion"
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white text-brand-black pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#33518C] via-[#141311] to-[#141311] text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-6xl mb-6">🇫🇷</div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                  IPTV France
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Le meilleur <strong>fournisseur IPTV en France</strong>. Toutes les chaînes françaises, sport,
                films et séries. Optimisé pour les téléspectateurs en France.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#channels"
                  className="px-8 py-4 bg-brand-gold hover:bg-[#2B4577] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Voir les Chaînes Françaises
                </a>
                <Link
                  to="/tarifs"
                  className="px-8 py-4 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Voir les Tarifs
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Channel Categories */}
        <section className="py-20 bg-brand-offwhite" id="channels">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Chaînes <span className="text-brand-gold">IPTV Françaises</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frenchChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-brand-gray-border p-6 rounded-lg hover:border-brand-gold transition-all"
                >
                  <div className="text-4xl text-brand-gold mb-4">{channel.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-brand-black">{channel.category}</h3>
                  <div className="text-3xl font-bold text-brand-gold mb-3">{channel.count}</div>
                  <p className="text-sm text-brand-gray">{channel.examples}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular French Channels */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-brand-black">
              Chaînes <span className="text-brand-gold">Françaises Populaires</span>
            </h2>
            <p className="text-center text-brand-gray mb-12 text-lg">
              Toutes les chaînes françaises en qualité HD/UHD
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {popularChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="bg-brand-offwhite border border-brand-gray-border p-4 rounded-lg text-center hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all cursor-pointer"
                >
                  <span className="text-sm font-semibold">{channel}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
              <p className="text-xl font-semibold mb-2 text-brand-black">
                + 30 420 chaînes internationales
              </p>
              <p className="text-brand-gray">
                Y compris des chaînes arabes, turques, anglaises, allemandes, espagnoles et bien plus
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Pourquoi France IPTV Est le Meilleur <span className="text-brand-gold">IPTV en France</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 bg-white border border-brand-gray-border p-4 rounded-lg"
                >
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                  <span className="text-brand-gray">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sport Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              <span className="text-brand-gold">Sport Français</span> en HD
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">⚽ Football</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li>• Ligue 1 (tous les matchs)</li>
                  <li>• Ligue des Champions</li>
                  <li>• Premier League</li>
                  <li>• Liga, Serie A, Bundesliga</li>
                  <li>• Les Bleus (Équipe de France)</li>
                </ul>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">🏎️ Formule 1</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li>• Toutes les courses de F1 en direct</li>
                  <li>• Qualifications et essais libres</li>
                  <li>• Le Grand Prix de France</li>
                  <li>• Formule 2 & Formule 3</li>
                  <li>• Courses de MotoGP</li>
                </ul>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-gold">🎾 Autres Sports</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li>• Tennis (Roland-Garros et Grand Chelem)</li>
                  <li>• Cyclisme (Tour de France)</li>
                  <li>• Patinage & Hockey sur glace</li>
                  <li>• Golf, Fléchettes, Boxe</li>
                  <li>• Jeux Olympiques</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Benefits */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Pensé Spécialement pour la <span className="text-brand-gold">France</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-brand-gold to-[#2B4577] p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Paiement Sécurisé</h3>
                <p className="text-white/90">
                  Payez en toute sécurité par CB, PayPal ou virement SEPA, les moyens de paiement les plus utilisés en France
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#141311] to-[#201C18] p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">🇫🇷</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Support Francophone</h3>
                <p className="text-white/90">
                  Service client francophone 24/7 via WhatsApp et e-mail
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Serveurs les Plus Rapides</h3>
                <p className="text-white/90">
                  Serveurs optimisés pour la France - aucune coupure, toujours stable
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-20 bg-gradient-to-br from-white to-brand-offwhite">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-black">
              Démarrez avec le Meilleur <span className="text-brand-gold">IPTV en France</span>
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              À partir de 4 € par mois. Toutes les chaînes françaises + 30 500+ chaînes internationales.
              Actif en 5 minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/abonnement-iptv"
                className="px-10 py-4 bg-brand-gold hover:bg-[#2B4577] text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Voir les Abonnements
              </Link>
              <a
                href="https://wa.me/18653169315?text=Je%20souhaite%20commander%20IPTV%20France"
                className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Commander via WhatsApp
              </a>
            </div>
            <p className="text-sm text-brand-gray mt-6">
              🇫🇷 Pensé pour la France • ✅ Toutes les chaînes françaises • ⚡ Actif en 5 min
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVNederland;
