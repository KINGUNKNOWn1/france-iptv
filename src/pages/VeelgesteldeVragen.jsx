import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCheckCircle } from 'react-icons/fa';
import SEO from '../components/SEO';

const VeelgesteldeVragen = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Général",
      questions: [
        {
          q: "Qu'est-ce que l'IPTV ?",
          a: "IPTV signifie Internet Protocol Television. C'est une manière de regarder la télévision via votre connexion internet plutôt que par satellite ou câble traditionnel. Avec France IPTV, vous avez accès à 30 500+ chaînes et 150 000+ films et séries via internet."
        },
        {
          q: "France IPTV est-il légal ?",
          a: "Oui, France IPTV est un fournisseur IPTV légal. Nous proposons un service fiable avec du contenu officiel et un support client complet. Acheter un IPTV légal, c'est choisir un fournisseur de confiance comme France IPTV."
        },
        {
          q: "Quelle vitesse internet me faut-il ?",
          a: "Pour la qualité SD : minimum 3 Mbps, qualité HD : 5-8 Mbps, qualité UHD/4K : 15-25 Mbps. Une connexion internet stable est plus importante que la vitesse elle-même."
        }
      ]
    },
    {
      category: "Commander & Payer",
      questions: [
        {
          q: "Comment puis-je acheter un IPTV ?",
          a: "Vous pouvez acheter votre IPTV directement en ligne via WhatsApp ou notre site. Choisissez votre abonnement, payez par CB, PayPal ou SEPA, et vous êtes actif en 5 minutes. Sans tracas, sans attente."
        },
        {
          q: "Quels moyens de paiement acceptez-vous ?",
          a: "Nous acceptons la carte bancaire (la plus populaire), PayPal et le virement SEPA. Pour une activation la plus rapide possible, nous recommandons la carte bancaire."
        },
        {
          q: "Combien coûte un abonnement IPTV ?",
          a: "Nos abonnements démarrent à 8 € pour 1 mois (sans engagement), 23 € pour 3 mois (7,67 €/mois), 32 € pour 6 mois (5,33 €/mois), ou 48 € pour 12 mois (4 €/mois). Aucun frais caché ni reconduction automatique."
        },
        {
          q: "Est-ce que je reçois une facture ?",
          a: "Oui, vous recevez automatiquement une facture par e-mail après votre paiement. Vous pouvez l'utiliser pour votre comptabilité ou vos démarches professionnelles."
        }
      ]
    },
    {
      category: "Activation & Installation",
      questions: [
        {
          q: "En combien de temps mon abonnement IPTV est-il actif ?",
          a: "Votre abonnement France IPTV est actif en 5 minutes après le paiement par CB, PayPal ou SEPA. Vous recevez immédiatement vos identifiants par e-mail et pouvez commencer à regarder tout de suite."
        },
        {
          q: "Comment installer l'IPTV sur mon appareil ?",
          a: "L'installation est très simple : 1) Téléchargez une application IPTV comme IPTV Smarters Pro, 2) Saisissez les identifiants reçus par e-mail, 3) Commencez à regarder ! Nous envoyons des instructions détaillées par e-mail."
        },
        {
          q: "Sur combien d'appareils puis-je regarder ?",
          a: "Avec un seul abonnement France IPTV, vous pouvez regarder sur un nombre illimité d'appareils à la fois. Parfait pour les familles ! Aucun frais supplémentaire pour des appareils en plus."
        },
        {
          q: "L'IPTV fonctionne-t-il sur ma Smart TV ?",
          a: "Oui ! France IPTV fonctionne sur presque toutes les Smart TV : Samsung, LG, Sony, Philips, TCL, Hisense et plus. Également sur Android TV, Apple TV, Fire TV et autres appareils de streaming."
        }
      ]
    },
    {
      category: "Chaînes & Contenu",
      questions: [
        {
          q: "Combien de chaînes propose France IPTV ?",
          a: "France IPTV propose plus de 30 500 chaînes en direct dans différentes langues, dont 80+ chaînes françaises. Nous proposons également plus de 150 000 films et séries à la demande."
        },
        {
          q: "Quelles chaînes françaises sont disponibles ?",
          a: "Toutes les chaînes françaises populaires : TF1, France 2, France 3, M6, Canal+, W9, TMC, et bien plus. Ainsi que toutes les chaînes sportives comme ESPN, beIN Sports et Canal+ Sport."
        },
        {
          q: "Puis-je regarder la Ligue 1 ?",
          a: "Oui ! Nous avons toutes les chaînes sportives françaises et internationales, dont la Ligue 1, la Ligue des Champions, la Premier League, et plus. Ainsi que la Formule 1, le tennis, et d'autres sports."
        },
        {
          q: "Y a-t-il aussi des films et séries à la demande ?",
          a: "Absolument ! Nous proposons 150 000+ films et séries à la demande. Des derniers succès du box-office aux classiques, des productions françaises aux blockbusters internationaux. Le tout en HD/UHD/4K."
        }
      ]
    },
    {
      category: "Abonnement & Renouvellement",
      questions: [
        {
          q: "Mon abonnement se renouvelle-t-il automatiquement ?",
          a: "Non ! Chez France IPTV, il n'y a aucune reconduction automatique. Vous gardez le contrôle total. Nous vous envoyons un rappel avant l'expiration de votre abonnement, pour que vous décidiez vous-même si vous souhaitez le renouveler."
        },
        {
          q: "Puis-je annuler mon abonnement ?",
          a: "Durant les 14 premiers jours, nous offrons une garantie satisfait ou remboursé. Après 14 jours, votre abonnement arrive simplement à échéance à la fin de la période choisie, sans reconduction automatique."
        },
        {
          q: "Puis-je passer à un abonnement plus long ?",
          a: "Oui, vous pouvez toujours passer à une formule plus longue. Vous payez la différence et votre nouvelle période démarre immédiatement. Contactez-nous via WhatsApp pour être aidé dans cette démarche."
        }
      ]
    },
    {
      category: "Questions Techniques",
      questions: [
        {
          q: "Que faire en cas de mise en mémoire tampon ?",
          a: "Les coupures sont rares mais peuvent venir d'une connexion internet lente. Vérifiez votre vitesse internet (min. 5 Mbps pour la HD), redémarrez votre routeur, ou changez de serveur dans l'application. Notre support est là pour vous aider."
        },
        {
          q: "Ai-je besoin d'un VPN ?",
          a: "Non, un VPN n'est pas nécessaire. France IPTV fonctionne directement en France sans logiciel supplémentaire. Pour la confidentialité, vous pouvez utiliser un VPN si vous le souhaitez, mais ce n'est pas obligatoire."
        },
        {
          q: "L'IPTV fonctionne-t-il aussi à l'étranger ?",
          a: "Oui, vous pouvez utiliser France IPTV partout dans le monde. Votre abonnement fonctionne partout où vous avez internet. Parfait pour les vacances ou si vous vivez à l'étranger."
        },
        {
          q: "Qu'est-ce que l'EPG ?",
          a: "L'EPG (Electronic Program Guide) est le guide électronique des programmes. Vous voyez quels programmes passent maintenant et plus tard sur chaque chaîne, comme sur une télévision classique. Notre EPG est entièrement en français."
        }
      ]
    },
    {
      category: "Support & Service",
      questions: [
        {
          q: "Comment contacter le support ?",
          a: "Nous proposons un service client francophone 24/7 via WhatsApp (+1 (865) 316-9315) et e-mail (support@franceiptv.stream). WhatsApp est le plus rapide pour une aide immédiate."
        },
        {
          q: "Le support est-il en français ?",
          a: "Oui ! L'ensemble de notre service client est en français. Nous parlons aussi anglais, arabe et turc pour nos clients internationaux."
        },
        {
          q: "Que faire en cas de problème technique ?",
          a: "Contactez-nous directement via WhatsApp. Notre support technique vous aide en quelques minutes. Nous résolvons 95 % des problèmes à distance."
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Questions Fréquentes IPTV | FAQ - France IPTV"
        description="Toutes les réponses à vos questions sur France IPTV : tarifs, installation, appareils compatibles, paiement et légalité de l'IPTV."
        keywords="faq iptv, questions iptv, aide iptv, support iptv france"
        canonicalPath="/faq"
      />
      <div className="min-h-screen bg-white text-brand-black pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#141311] via-[#201C18] to-[#141311] text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Questions Fréquentes
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Toutes les réponses à vos questions sur France IPTV. Vous ne trouvez pas votre question ?
                Contactez-nous via WhatsApp !
              </p>
              <a
                href="https://wa.me/18653169315?text=J%27ai%20une%20question%20sur%20l%27IPTV"
                className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all"
              >
                Posez Votre Question via WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-heading font-bold mb-6 text-brand-gold">
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: questionIndex * 0.05 }}
                        className="bg-brand-offwhite border border-brand-gray-border rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white transition-colors"
                        >
                          <span className="font-semibold text-lg pr-8 text-brand-black">{faq.q}</span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaChevronDown className="text-brand-gold flex-shrink-0" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-6 pb-4 text-brand-gray border-t border-brand-gray-border pt-4">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-heading font-bold text-center mb-12 text-brand-black">
              Plus d'Informations
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/acheter-iptv"
                className="bg-gradient-to-br from-brand-gold to-[#2B4577] p-8 rounded-xl hover:scale-105 transition-transform text-white"
              >
                <FaCheckCircle className="text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">Acheter IPTV</h3>
                <p className="text-white/90">
                  Découvrez comment acheter votre IPTV et ce que vous recevez
                </p>
              </Link>

              <Link
                to="/chaines"
                className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-xl hover:scale-105 transition-transform text-white"
              >
                <FaCheckCircle className="text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">Chaînes</h3>
                <p className="text-white/90">
                  Découvrez toutes les 30 500+ chaînes et le contenu VOD
                </p>
              </Link>

              <Link
                to="/appareils"
                className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl hover:scale-105 transition-transform text-white"
              >
                <FaCheckCircle className="text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">Appareils</h3>
                <p className="text-white/90">
                  Vérifiez si votre appareil est compatible
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-gradient-to-br from-white to-brand-offwhite">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-black">
              Question Sans Réponse ?
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Notre service client francophone est disponible 24/7. Posez votre question via WhatsApp
              et obtenez une réponse en quelques minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/18653169315?text=J%27ai%20une%20question%20sur%20France%20IPTV"
                className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Contactez-Nous sur WhatsApp
              </a>
              <Link
                to="/contact"
                className="px-10 py-4 bg-brand-gold hover:bg-[#2B4577] text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Formulaire de Contact
              </Link>
            </div>
            <p className="text-sm text-brand-gray mt-6">
              📞 Support 24/7 • 🇫🇷 Français • ⚡ Réponse rapide • 💬 WhatsApp ou E-mail
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default VeelgesteldeVragen;
