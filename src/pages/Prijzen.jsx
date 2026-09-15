import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Pricing from '../components/Pricing';
import ComparisonTable from '../components/ComparisonTable';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const Prijzen = () => {
  const guarantees = [
    "Aucune reconduction automatique - votre abonnement s'arrête automatiquement à la fin de la durée choisie",
    'Paiement CB, PayPal ou SEPA - payez en toute sécurité avec les moyens de paiement les plus utilisés en France',
    'Actif immédiatement - recevez vos identifiants dans les 5 minutes suivant le paiement',
    '30 500+ chaînes - accès à toutes les chaînes françaises et internationales',
    '99,9 % de disponibilité garantie - un service fiable sans coupures',
    'Support francophone 24/7 - une aide via WhatsApp dès que vous en avez besoin'
  ];

  return (
    <>
      <SEO
        title="Tarifs IPTV France | Abonnement dès 48€/an - France IPTV"
        description="Tarifs de l'abonnement IPTV : 1 mois 8€, 3 mois 23€, 6 mois 32€, 12 mois 48€. Aucune reconduction automatique. Paiement CB, PayPal ou SEPA. 30 500+ chaînes. Commandez maintenant !"
        keywords="tarifs iptv, prix abonnement iptv, prix iptv, iptv pas cher, coût iptv"
        canonicalPath="/tarifs"
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
                Tarifs de l'Abonnement IPTV
              </h1>
              <p className="text-xl text-brand-gray leading-relaxed">
                Des prix transparents, sans frais cachés. Choisissez la durée qui vous convient.
                Consultez notre page <Link to="/acheter-iptv" className="text-brand-gold hover:text-[#2B4577] underline">acheter IPTV</Link> pour en savoir plus sur ce que vous recevez.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Component */}
        <Pricing />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* What You Get */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                Que recevez-vous avec chaque abonnement IPTV ?
              </h2>
              <p className="text-xl text-brand-gray max-w-3xl mx-auto">
                Quel que soit l'<Link to="/abonnement-iptv" className="text-brand-gold hover:text-[#2B4577] underline">abonnement IPTV</Link> que vous choisissez, vous avez toujours accès à notre offre complète
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white border border-brand-gray-border rounded-xl p-6"
                >
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xl" />
                  <span className="text-brand-gray">{guarantee}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Snippet */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-brand-black mb-4">
                Questions fréquentes sur les tarifs
              </h2>
            </motion.div>

            <div className="space-y-6">
              <div className="bg-brand-offwhite border border-brand-gray-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  Quelle est l'option la moins chère ?
                </h3>
                <p className="text-brand-gray">
                  L'abonnement 12 mois est l'option la plus avantageuse : seulement 48 € par an (4 € par mois).
                  C'est moins cher que la plupart des <Link to="/iptv-france" className="text-brand-gold hover:text-[#2B4577] underline">fournisseurs IPTV en France</Link>.
                </p>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  Puis-je payer par carte bancaire ?
                </h3>
                <p className="text-brand-gray">
                  Oui, nous acceptons la carte bancaire, PayPal et le virement SEPA. Ce sont les moyens de paiement les plus sûrs et les plus utilisés en France.
                  Contactez-nous par <Link to="/contact" className="text-brand-gold hover:text-[#2B4577] underline">contact</Link> via WhatsApp pour commander.
                </p>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  Mon abonnement se renouvelle-t-il automatiquement ?
                </h3>
                <p className="text-brand-gray">
                  Non, absolument pas. Votre abonnement s'arrête automatiquement à la fin de la durée choisie. Aucune surprise, aucune reconduction non désirée.
                </p>
              </div>

              <div className="bg-brand-offwhite border border-brand-gray-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-black mb-2">
                  Sur combien d'appareils puis-je regarder ?
                </h3>
                <p className="text-brand-gray">
                  Vous pouvez regarder sur un nombre illimité d'<Link to="/appareils" className="text-brand-gold hover:text-[#2B4577] underline">appareils</Link> à la fois.
                  Smart TV, téléphone, tablette, ordinateur portable - aucune limite.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/faq"
                className="text-brand-gold hover:text-[#2B4577] underline text-lg"
              >
                Voir toutes les questions fréquentes →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-white to-brand-offwhite">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-brand-gold to-[#2B4577] rounded-2xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Prêt à commencer ?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Commandez maintenant et recevez vos identifiants sous 5 minutes. Commencez à regarder plus de 30 500 chaînes dès maintenant.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-gold font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg text-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Commander via WhatsApp
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Prijzen;
