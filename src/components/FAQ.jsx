import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Comment démarrer avec France IPTV ?',
      answer: "C'est très simple ! Contactez-nous via WhatsApp, choisissez votre forfait, payez en toute sécurité par Binance Pay ou PayPal, et recevez vos identifiants sous 5 minutes. Vous pouvez alors commencer à regarder immédiatement sur tous vos appareils.",
    },
    {
      question: 'Sur combien d\'appareils puis-je regarder en même temps ?',
      answer: 'Avec tous nos forfaits, vous pouvez regarder sur 4 appareils maximum simultanément. Parfait pour toute la famille ! Chaque écran reçoit la même qualité élevée.',
    },
    {
      question: 'Quelles chaînes sont disponibles ?',
      answer: 'Nous proposons plus de 30 500 chaînes en direct, dont des chaînes françaises, turques, arabes, anglaises et bien d\'autres chaînes internationales. Vous avez également accès à plus de 150 000 films et séries à la demande.',
    },
    {
      question: 'Comment fonctionne le rattrapage ?',
      answer: "Avec notre fonction de rattrapage sur 14 jours (Catch-Up TV), vous pouvez revoir les programmes manqués jusqu'à 14 jours en arrière. Les programmes manqués sont directement disponibles dans le guide EPG.",
    },
    {
      question: 'Quels moyens de paiement acceptez-vous ?',
      answer: 'Nous acceptons Binance Pay et PayPal pour des paiements sûrs et simples. Après paiement, vous recevez immédiatement vos identifiants via WhatsApp.',
    },
    {
      question: "Proposez-vous un essai gratuit ?",
      answer: "Oui ! Nous offrons 1 jour d'essai gratuit pour que vous puissiez juger de la qualité de notre service avant de vous engager. Contactez-nous simplement via WhatsApp pour en profiter. Si vous êtes satisfait, notre abonnement 1 mois à 8 € vous permet ensuite de continuer sans engagement, puis de passer à une formule plus longue (3, 6 ou 12 mois) si vous le souhaitez.",
    },
    {
      question: "Que se passe-t-il à la fin de mon abonnement ?",
      answer: "Nous ne pratiquons PAS la reconduction automatique. Votre abonnement s'arrête automatiquement à la fin de la période choisie. Vous recevez un rappel lorsque votre abonnement arrive à échéance, pour le renouveler si vous le souhaitez.",
    },
    {
      question: 'Ai-je un support francophone ?',
      answer: 'Absolument ! Nous proposons un support francophone 24/7 via WhatsApp et e-mail. Notre équipe est toujours disponible pour vous.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #121110 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
            Questions{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Fréquentes
            </span>
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur France IPTV
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-offwhite border border-brand-gray-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white transition-colors"
              >
                <span className="font-bold text-lg pr-8 text-brand-black">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FaChevronDown className="text-primary-500 text-xl" />
                </motion.div>
              </button>

              {/* Always rendered (collapsed to 0 height) so answers are in the HTML crawlers see. */}
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-brand-gray leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-brand-offwhite border border-brand-gray-border p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold mb-4 text-brand-black">Vous avez d'autres questions ?</h3>
            <p className="text-brand-gray mb-6">
              Notre équipe est disponible 24/7 via WhatsApp
            </p>
            <a
              href="https://wa.me/18653169315?text=J%27ai%20une%20question%20sur%20France%20IPTV"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Nous Contacter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
