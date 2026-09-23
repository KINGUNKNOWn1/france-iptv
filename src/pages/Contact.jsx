import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import SEO from '../components/SEO';
import { trackWhatsAppContact, withSourceTag } from '../utils/tracking';

const Contact = () => {
  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      description: '+1 (865) 316-9315',
      detail: 'Le moyen le plus rapide de commander',
      link: 'https://wa.me/18653169315',
      primary: true
    },
    {
      icon: FaEnvelope,
      title: 'E-mail',
      description: 'info@franceiptv.stream',
      detail: "Nous répondons sous 1 heure",
      link: 'mailto:info@franceiptv.stream',
      primary: false
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localisation',
      description: 'France',
      detail: 'Au service de toute la France',
      link: null,
      primary: false
    },
    {
      icon: FaClock,
      title: 'Horaires du Support',
      description: 'Disponible 24/7',
      detail: 'Même le week-end',
      link: null,
      primary: false
    }
  ];

  const orderSteps = [
    'Contactez-nous via WhatsApp',
    'Choisissez votre abonnement souhaité (3, 6 ou 12 mois)',
    'Payez en toute sécurité par Binance Pay ou PayPal',
    'Recevez vos identifiants sous 5 minutes',
    "Installez l'application et commencez à regarder"
  ];

  const supportTopics = [
    "Commander un abonnement IPTV",
    'Questions sur les tarifs et le paiement',
    "Aide à l'installation sur votre appareil",
    'Support technique',
    'Questions sur les chaînes et fonctionnalités',
    'Problèmes de connexion ou de lecture'
  ];

  return (
    <>
      <SEO
        title="Contact | Commander IPTV via WhatsApp - France IPTV"
        description="Contactez France IPTV via WhatsApp ou e-mail. Support francophone 24/7. Commandez votre abonnement IPTV et recevez vos identifiants sous 5 minutes."
        keywords="contact iptv, commander iptv whatsapp, contact fournisseur iptv, service client iptv"
        canonicalPath="/contact"
      />

      <div className="min-h-screen bg-white pt-32">
        {/* Header */}
        <section className="pb-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-brand-black mb-6">
                Contact & Commande
              </h1>
              <p className="text-xl text-brand-gray leading-relaxed">
                Commandez votre <Link to="/abonnement-iptv" className="text-brand-gold hover:text-[#C4FF86] underline">abonnement IPTV</Link> directement via WhatsApp ou contactez-nous pour toute question.
                Support francophone disponible 24/7.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="pb-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-brand-offwhite border ${method.primary ? 'border-brand-gold' : 'border-brand-gray-border'} rounded-xl p-6 ${method.link ? 'hover:border-brand-gold cursor-pointer' : ''} transition-all group`}
                  onClick={() => {
                    if (!method.link) return;
                    const isWhatsApp = method.link.includes('wa.me/');
                    if (isWhatsApp) trackWhatsAppContact();
                    window.open(isWhatsApp ? withSourceTag(method.link) : method.link, '_blank');
                  }}
                >
                  <div className={`w-14 h-14 rounded-xl ${method.primary ? 'bg-gradient-to-br from-green-600 to-green-700' : 'bg-surface border border-brand-gold/40'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-2">
                    {method.title}
                  </h3>
                  <p className="text-brand-gray mb-1 font-semibold">
                    {method.description}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {method.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="pb-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface border border-lime/30 rounded-2xl p-12 text-center"
            >
              <FaWhatsapp className="text-white text-6xl mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Commandez Directement via WhatsApp
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Le moyen le plus rapide d'<Link to="/acheter-iptv" className="text-white underline font-semibold">acheter votre IPTV</Link>.
                Envoyez-nous un message et nous vous aidons immédiatement.
              </p>
              <a
                href="https://wa.me/18653169315"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg text-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Ouvrir le Chat WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        {/* Order Process */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-brand-black mb-4">
                Le processus de commande en 5 étapes
              </h2>
              <p className="text-xl text-brand-gray">
                Consultez d'abord nos <Link to="/tarifs" className="text-brand-gold hover:text-[#C4FF86] underline">tarifs IPTV</Link> et choisissez votre abonnement
              </p>
            </motion.div>

            <div className="space-y-4">
              {orderSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white border border-brand-gray-border rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-full bg-surface border border-brand-gold/40 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-brand-gray text-lg">{step}</p>
                  </div>
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Topics */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-brand-black mb-4">
                Comment pouvons-nous vous aider ?
              </h2>
              <p className="text-xl text-brand-gray">
                Notre support francophone vous aide avec
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {supportTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-brand-offwhite border border-brand-gray-border rounded-xl p-4"
                >
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span className="text-brand-gray">{topic}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-brand-gray mb-4">
                Vous avez des questions sur le service ? Consultez notre page
              </p>
              <Link
                to="/faq"
                className="text-brand-gold hover:text-[#C4FF86] underline text-lg"
              >
                Questions Fréquentes →
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container-custom max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-brand-gray-border rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-brand-black mb-4">
                  Nouveau client ?
                </h3>
                <p className="text-brand-gray mb-6">
                  Découvrez notre service et pourquoi nos clients choisissent France IPTV comme leur <Link to="/iptv-france" className="text-brand-gold hover:text-[#C4FF86] underline">fournisseur IPTV de confiance en France</Link>.
                </p>
                <Link
                  to="/a-propos"
                  className="inline-flex items-center gap-2 text-brand-gold hover:text-[#C4FF86] font-semibold"
                >
                  En savoir plus sur France IPTV →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-brand-gray-border rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-brand-black mb-4">
                  Vérifier la compatibilité ?
                </h3>
                <p className="text-brand-gray mb-6">
                  Vous voulez savoir si France IPTV fonctionne sur votre appareil ? Consultez notre liste des <Link to="/appareils" className="text-brand-gold hover:text-[#C4FF86] underline">appareils</Link> pris en charge.
                </p>
                <Link
                  to="/appareils"
                  className="inline-flex items-center gap-2 text-brand-gold hover:text-[#C4FF86] font-semibold"
                >
                  Voir les appareils →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
