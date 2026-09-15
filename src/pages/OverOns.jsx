import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaHeart, FaShieldAlt, FaUsers, FaClock, FaAward } from 'react-icons/fa';
import SEO from '../components/SEO';

const OverOns = () => {
  const values = [
    {
      icon: <FaHeart className="text-5xl" />,
      title: "Centré Client",
      description: "Votre satisfaction passe toujours en premier. Support francophone 24/7 et service personnalisé.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: "Fiable",
      description: "99,9 % de disponibilité garantie. Un service stable sur lequel vous pouvez compter, jour après jour.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaRocket className="text-5xl" />,
      title: "Innovant",
      description: "Toujours à la pointe avec les dernières technologies et fonctionnalités pour la meilleure expérience.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <FaAward className="text-5xl" />,
      title: "Qualité",
      description: "Qualité HD, UHD et 4K. La plus grande offre de chaînes et de contenu en France.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "24 587+", label: "Clients Satisfaits" },
    { number: "30 500+", label: "Chaînes en Direct" },
    { number: "99,9 %", label: "Disponibilité" },
    { number: "4,9/5", label: "Note Client" }
  ];

  const teamFeatures = [
    { icon: <FaClock />, text: "Service Client Francophone 24/7" },
    { icon: <FaUsers />, text: "Équipe Expérimentée de Spécialistes IPTV" },
    { icon: <FaShieldAlt />, text: "Paiement Sécurisé & Confidentialité" },
    { icon: <FaRocket />, text: "Activation Rapide (5 minutes)" }
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white text-brand-black pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#141311] via-[#201C18] to-[#141311] text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                À Propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  France IPTV
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Le meilleur <strong>fournisseur IPTV en France</strong>. Nous rendons la télévision
                de qualité accessible à tous. Avec passion pour la technologie et le service.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Notre <span className="text-brand-gold">Histoire</span>
            </h2>

            <div className="prose max-w-none">
              <div className="bg-white border border-brand-gray-border p-8 rounded-xl mb-8">
                <p className="text-lg text-brand-gray mb-4">
                  France IPTV est né d'une frustration envers les fournisseurs IPTV existants. Mauvaise qualité,
                  services peu fiables, absence de support francophone, et prix élevés. Nous nous sommes dit : on peut faire mieux.
                </p>
                <p className="text-lg text-brand-gray mb-4">
                  Nous avons démarré avec une mission claire : <strong>construire le meilleur service IPTV pour la France</strong>.
                  Un service où la qualité, la fiabilité et la satisfaction client passent avant tout.
                </p>
                <p className="text-lg text-brand-gray">
                  Aujourd'hui, nous servons plus de <strong>24 000 clients satisfaits</strong> en France
                  et au-delà. Nous sommes fiers de livrer chaque jour la meilleure expérience IPTV, à un prix juste,
                  avec un support francophone personnalisé.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              France IPTV en <span className="text-brand-gold">Chiffres</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-brand-gray">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-brand-black">
              Nos <span className="text-brand-gold">Valeurs Fondamentales</span>
            </h2>
            <p className="text-center text-brand-gray mb-12 text-lg">
              Les principes qui nous animent au quotidien
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${value.color} p-8 rounded-xl text-center hover:scale-105 transition-transform text-white`}
                >
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/90">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Pourquoi Choisir <span className="text-brand-gold">France IPTV</span> ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-gold">Ce Qui Nous Rend Uniques</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-brand-gray">
                      <strong className="text-brand-black">La Plus Grande Offre :</strong> 30 500+ chaînes et 150 000+ titres VOD.
                      Plus que n'importe quel concurrent.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-brand-gray">
                      <strong className="text-brand-black">Meilleur Prix :</strong> À partir de 4 € par mois. Aucun frais caché,
                      aucune reconduction automatique.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-brand-gray">
                      <strong className="text-brand-black">Service Francophone :</strong> Service client entièrement en français,
                      joignable 24/7 via WhatsApp.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-brand-gray">
                      <strong className="text-brand-black">99,9 % de Disponibilité :</strong> Une fiabilité ultime. Nos serveurs sont
                      toujours disponibles.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-brand-gray">
                      <strong className="text-brand-black">Installation Simple :</strong> Actif en 5 minutes, sur tous vos appareils,
                      sans connaissance technique.
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-brand-gold">Notre Engagement Envers Vous</h3>
                <div className="bg-gradient-to-br from-brand-gold to-purple-600 p-8 rounded-xl">
                  <ul className="space-y-4 text-white/95">
                    <li className="flex items-center gap-3">
                      <FaClock className="text-2xl flex-shrink-0" />
                      <span>Support 24/7 en français</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaShieldAlt className="text-2xl flex-shrink-0" />
                      <span>Garantie satisfait ou remboursé 14 jours</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaRocket className="text-2xl flex-shrink-0" />
                      <span>Actif en 5 minutes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaHeart className="text-2xl flex-shrink-0" />
                      <span>Prix justes, aucun frais caché</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FaUsers className="text-2xl flex-shrink-0" />
                      <span>Service personnalisé & à l'écoute</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Features */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Notre <span className="text-brand-gold">Équipe</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-brand-gray-border p-6 rounded-lg text-center hover:border-brand-gold transition-all"
                >
                  <div className="text-4xl text-brand-gold mb-4 flex justify-center">{feature.icon}</div>
                  <p className="text-brand-gray">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-white border border-brand-gray-border p-8 rounded-xl text-center">
              <p className="text-lg text-brand-gray mb-4">
                Notre équipe est composée de spécialistes IPTV passionnés, d'experts techniques et de professionnels du service client.
                Ensemble, nous travaillons chaque jour à vous offrir la meilleure expérience IPTV.
              </p>
              <p className="text-brand-gray">
                🇫🇷 Équipe entièrement francophone • 💼 Professionnelle • 🚀 Motivée • 🤝 Centrée client
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-white to-brand-offwhite">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-black">
              Prêt à Commencer avec France IPTV ?
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Rejoignez 24 587+ clients satisfaits. Découvrez par vous-même pourquoi nous sommes le{' '}
              <Link to="/iptv-france" className="text-brand-gold underline">meilleur fournisseur IPTV en France</Link>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/abonnement-iptv"
                className="px-10 py-4 bg-brand-gold hover:bg-[#2B4577] text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Voir les Abonnements
              </Link>
              <a
                href="https://wa.me/18653169315?text=Je%20souhaite%20en%20savoir%20plus%20sur%20France%20IPTV"
                className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Discutez avec Nous
              </a>
            </div>
            <p className="text-sm text-brand-gray mt-6">
              ✅ 24 587+ clients satisfaits • ⭐ 4,9/5 de moyenne • 🇫🇷 100 % Francophone
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default OverOns;
