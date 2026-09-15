import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaShieldAlt, FaUsers, FaClock, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaShieldAlt,
      title: 'Fiabilité',
      description: 'Actifs en France depuis 2021. Nous sommes transparents sur qui nous sommes et publions notre politique de confidentialité.'
    },
    {
      icon: FaUsers,
      title: '24 000+ Clients',
      description: 'Disponibilité de 99,9 % sur tous les écrans. Nous investissons dans la scalabilité, pas dans du multi-écrans au rabais.'
    },
    {
      icon: FaClock,
      title: 'Flexibilité',
      description: 'Aucun contrat annuel obligatoire. Choisissez votre durée : 3, 6 ou 12 mois. Arrêtez quand vous voulez.'
    },
    {
      icon: FaWhatsapp,
      title: 'Support Francophone',
      description: 'Commande via WhatsApp. Paiement par CB, PayPal ou SEPA. Identifiants sous 5 minutes. Support francophone 24/7.'
    }
  ];

  const features = [
    'Disponible dans toute la France',
    "Pas de panel revendeur anonyme",
    'Transparents sur notre identité',
    'Politique de confidentialité publique',
    'Joignable personnellement via WhatsApp',
    'Disponibilité garantie de 99,9 %',
    'Paiement par CB, PayPal ou SEPA',
    'Aucune reconduction automatique'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#141311] via-[#201C18] to-[#141311]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À Propos de France IPTV
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fournisseur IPTV fiable au service de toute la France
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
loading="lazy" decoding="async"                 src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80"
                alt="France"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-[#141311]/50 to-transparent" />

              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Basé en France</p>
                      <p className="text-gray-300 text-sm">Actif dans tout le pays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Six raisons de choisir France IPTV pour <Link to="/acheter-iptv" className="text-[#7B9FD9] hover:text-white underline">acheter votre IPTV</Link>
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Pas ce que chaque fournisseur promet. Ce que nous faisons concrètement différemment. Découvrez nos <Link to="/tarifs" className="text-[#7B9FD9] hover:text-white underline">tarifs transparents</Link> sans frais cachés.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-brand-gray-border rounded-xl p-6 hover:border-brand-gold transition-all group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-brand-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="text-white text-2xl" />
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-brand-black mb-2">
                {value.title}
              </h4>

              {/* Description */}
              <p className="text-brand-gray text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Prêt à commencer avec France IPTV ?
          </h3>
          <p className="text-gray-300 mb-6">
            Actif en 5 minutes. Aucune reconduction automatique. <Link to="/contact" className="text-[#7B9FD9] hover:text-white underline">Commandez maintenant via WhatsApp</Link>.
          </p>
          <Link
            to="/tarifs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-xl hover:bg-[#2B4577] transition-all shadow-lg shadow-brand-gold/30"
          >
            Voir les Tarifs de l'Abonnement IPTV
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
