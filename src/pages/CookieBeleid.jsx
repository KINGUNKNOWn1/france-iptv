import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Cookie, Shield, BarChart, Settings, Eye, Trash2, CheckCircle } from 'lucide-react';

const CookieBeleid = () => {
  const [acceptedCookies, setAcceptedCookies] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  });

  const cookieTypes = [
    {
      id: 'essential',
      title: 'Cookies Essentiels',
      icon: Shield,
      required: true,
      description: 'Nécessaires au fonctionnement du site. Ces cookies ne peuvent pas être désactivés.',
      examples: [
        'Cookies de session pour la connexion',
        'Fonctionnalité du panier',
        'Cookies de sécurité',
        'Mémorisation des préférences de cookies'
      ],
      duration: "Session jusqu'à 1 an",
      color: 'green'
    },
    {
      id: 'analytics',
      title: 'Cookies Analytiques',
      icon: BarChart,
      required: false,
      description: "Nous aident à comprendre comment les visiteurs utilisent le site, afin d'améliorer l'expérience utilisateur.",
      examples: [
        'Google Analytics',
        'Pages vues et temps de visite',
        'Sources de trafic',
        'Pages populaires'
      ],
      duration: "Jusqu'à 2 ans",
      color: 'blue'
    },
    {
      id: 'marketing',
      title: 'Cookies Marketing',
      icon: Eye,
      required: false,
      description: "Utilisés pour la publicité ciblée et le suivi de l'efficacité des campagnes marketing.",
      examples: [
        'Facebook Pixel',
        'Conversions Google Ads',
        'Campagnes de retargeting',
        'Intégrations réseaux sociaux'
      ],
      duration: "Jusqu'à 1 an",
      color: 'purple'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Politique de Cookies - France IPTV</title>
        <meta name="description" content="Politique de cookies de France IPTV : quels cookies nous utilisons (essentiels, analytiques, marketing), pourquoi, et comment gérer votre consentement." />
        <link rel="canonical" href="https://franceiptv.stream/politique-de-cookies" />
      </Helmet>

      <div className="min-h-screen bg-white text-brand-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#090B0B] via-[#111413] to-[#090B0B] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
            >
              <Cookie className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">Conforme au RGPD</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Politique de Cookies
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              France IPTV utilise des cookies pour améliorer votre expérience et optimiser notre site. Découvrez ici quels cookies nous utilisons et pourquoi.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-gray-400 mt-4"
            >
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* What are cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">Que sont les cookies ?</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      Les cookies sont de petits fichiers texte déposés sur votre ordinateur ou appareil mobile lorsque vous visitez un site. Les cookies sont largement utilisés pour faire fonctionner les sites efficacement et fournir des informations aux propriétaires du site.
                    </p>
                    <p className="text-brand-gray leading-relaxed">
                      France IPTV utilise des cookies pour :
                    </p>
                    <ul className="space-y-2 text-brand-gray mt-4">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Faire fonctionner correctement le site</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Mémoriser vos préférences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Comprendre comment les visiteurs utilisent notre site</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Afficher du contenu et des publicités pertinents</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Cookie Types */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-brand-black">Quels Cookies Utilisons-Nous ?</h2>
                {cookieTypes.map((type, index) => {
                  const Icon = type.icon;
                  const colorClasses = {
                    green: 'from-green-50 to-surface border-green-300',
                    blue: 'from-blue-50 to-surface border-blue-300',
                    purple: 'from-purple-50 to-surface border-purple-300'
                  };

                  return (
                    <motion.div
                      key={type.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-gradient-to-br ${colorClasses[type.color]} border rounded-2xl p-8`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 bg-${type.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-7 h-7 text-${type.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-brand-black">{type.title}</h3>
                            {type.required ? (
                              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                                Obligatoire
                              </span>
                            ) : (
                              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                                Facultatif
                              </span>
                            )}
                          </div>

                          <p className="text-brand-gray leading-relaxed mb-4">
                            {type.description}
                          </p>

                          <div className="bg-white rounded-lg p-4 border border-brand-gray-border mb-4">
                            <h4 className="font-bold text-brand-black mb-2">Exemples :</h4>
                            <ul className="space-y-1 text-brand-gray text-sm">
                              {type.examples.map((example, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-brand-gold mt-0.5">•</span>
                                  <span>{example}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <p className="text-sm text-brand-gray">
                            <strong className="text-brand-black">Durée de conservation :</strong> {type.duration}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* How to manage cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">Gérer les Cookies</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      Vous disposez de plusieurs options pour gérer et supprimer les cookies :
                    </p>

                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                        <h3 className="font-bold text-brand-black mb-2">1. Sur ce site</h3>
                        <p className="text-brand-gray text-sm mb-3">
                          Vous pouvez ajuster vos préférences de cookies via le bandeau qui apparaît lors de votre première visite, ou via les paramètres ci-dessous.
                        </p>
                        <button className="bg-brand-gold hover:bg-[#C4FF86] text-white px-6 py-2 rounded-full font-semibold transition-colors text-sm">
                          Ajuster les Préférences de Cookies
                        </button>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                        <h3 className="font-bold text-brand-black mb-2">2. Via votre navigateur</h3>
                        <p className="text-brand-gray text-sm mb-3">
                          La plupart des navigateurs vous permettent de bloquer ou supprimer les cookies :
                        </p>
                        <ul className="space-y-2 text-brand-gray text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-brand-gold mt-0.5">•</span>
                            <span><strong className="text-brand-black">Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-brand-gold mt-0.5">•</span>
                            <span><strong className="text-brand-black">Firefox :</strong> Options → Vie privée et sécurité → Cookies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-brand-gold mt-0.5">•</span>
                            <span><strong className="text-brand-black">Safari :</strong> Préférences → Confidentialité → Cookies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-brand-gold mt-0.5">•</span>
                            <span><strong className="text-brand-black">Edge :</strong> Paramètres → Confidentialité et services → Cookies</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
                        <p className="text-brand-gray text-sm">
                          <strong className="text-yellow-700">Attention :</strong> Si vous bloquez les cookies, certaines parties de notre site risquent de ne plus fonctionner correctement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Third-party cookies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">Cookies Tiers</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Outre nos propres cookies, des tiers peuvent également déposer des cookies sur votre appareil lorsque vous visitez notre site :
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                    <h3 className="font-bold text-brand-black mb-2">Google Analytics</h3>
                    <p className="text-brand-gray text-sm">
                      Pour comprendre comment les visiteurs utilisent notre site. Nous avons un accord de sous-traitance avec Google et avons activé l'anonymisation des adresses IP.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                    <h3 className="font-bold text-brand-black mb-2">Google Ads / Facebook Pixel</h3>
                    <p className="text-brand-gray text-sm">
                      Pour afficher des publicités pertinentes. Ces cookies ne sont déposés qu'avec votre consentement.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-brand-gray-border">
                    <h3 className="font-bold text-brand-black mb-2">Réseaux Sociaux</h3>
                    <p className="text-brand-gray text-sm">
                      Si vous utilisez des boutons de réseaux sociaux (partager sur Facebook, Twitter, etc.), ces plateformes peuvent déposer des cookies.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Your rights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-brand-black">Vos Droits</h2>
                    <p className="text-brand-gray leading-relaxed mb-4">
                      Vous disposez des droits suivants concernant les cookies :
                    </p>
                    <ul className="space-y-2 text-brand-gray">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong className="text-brand-black">Retirer votre consentement :</strong> Vous pouvez retirer votre consentement aux cookies à tout moment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong className="text-brand-black">Supprimer les cookies :</strong> Vous pouvez supprimer les cookies existants à tout moment via votre navigateur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong className="text-brand-black">Bloquer les cookies :</strong> Vous pouvez bloquer entièrement les cookies via les paramètres de votre navigateur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span><strong className="text-brand-black">Accès :</strong> Vous pouvez demander quelles données ont été collectées via les cookies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Updates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-offwhite border border-brand-gray-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4 text-brand-black">Modifications de la Politique de Cookies</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Nous pouvons modifier cette politique de cookies de temps à autre, par exemple lorsque nous utilisons de nouveaux cookies ou que la réglementation évolue.
                </p>
                <p className="text-brand-gray leading-relaxed">
                  La version la plus récente est toujours disponible sur cette page. En cas de modification importante, nous vous informerons via le site ou par e-mail.
                </p>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface border border-lime/30 border border-brand-gold/30 rounded-2xl p-8 text-center"
              >
                <Cookie className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4 text-brand-black">Des Questions sur les Cookies ?</h2>
                <p className="text-brand-gray mb-6">
                  Vous avez des questions sur notre utilisation des cookies ? N'hésitez pas à nous contacter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:privacy@franceiptv.stream"
                    className="bg-brand-gold hover:bg-[#C4FF86] text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    E-mail à l'Équipe Confidentialité
                  </a>
                  <a
                    href="https://wa.me/18653169315"
                    className="bg-white hover:bg-blue-50 text-brand-black px-8 py-3 rounded-full font-semibold transition-colors border border-brand-gray-border"
                  >
                    Contact WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookieBeleid;
