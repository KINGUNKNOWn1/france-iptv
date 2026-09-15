import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaMobileAlt, FaTv, FaStar, FaAndroid, FaApple, FaWhatsapp } from 'react-icons/fa';
import SEO from '../../components/SEO';

const BesteIPTVApps2024 = () => {
  const seoData = {
    title: 'Meilleures Applications IPTV 2024 : Top 10 pour Android, iOS & Smart TV',
    description: 'Découvrez les meilleures applications IPTV de 2024. Comparez IPTV Smarters, TiviMate, GSE Smart IPTV et plus. Téléchargements gratuits, conseils d\'installation et avis.',
    keywords: 'meilleure application iptv, iptv smarters, tivimate, gse smart iptv, application iptv android, application iptv ios',
    ogType: 'article',
    canonicalPath: '/blog/meilleures-applications-iptv-2024'
  };

  const apps = [
    {
      name: 'IPTV Smarters Pro',
      rating: 4.8,
      platforms: ['Android', 'iOS', 'Fire Stick', 'Smart TV'],
      price: 'Gratuit',
      pros: ['Facile à utiliser', 'Prise en charge EPG', 'Multi-écrans', 'Contrôle parental'],
      cons: ['Publicités dans la version gratuite'],
      recommended: true,
      icon: <FaMobileAlt />
    },
    {
      name: 'TiviMate IPTV Player',
      rating: 4.9,
      platforms: ['Android', 'Fire Stick', 'Android TV'],
      price: '4,99 €/an',
      pros: ['Meilleure interface', 'Décalage EPG', "Fonction d'enregistrement", 'Plusieurs playlists'],
      cons: ['Android uniquement', 'Premium pour toutes les fonctions'],
      recommended: true,
      icon: <FaTv />
    },
    {
      name: 'GSE Smart IPTV',
      rating: 4.6,
      platforms: ['iOS', 'Apple TV', 'macOS'],
      price: 'Gratuit',
      pros: ['Meilleure app iOS', 'Prise en charge Chromecast', 'M3U/Xtream API', 'Mises à jour régulières'],
      cons: ['Interface complexe pour débutants'],
      recommended: true,
      icon: <FaApple />
    },
    {
      name: 'Perfect Player',
      rating: 4.5,
      platforms: ['Android', 'Fire Stick'],
      price: 'Gratuit',
      pros: ['Léger et rapide', 'Nombreuses personnalisations', 'Gratuit sans limitation'],
      cons: ['Interface datée', 'Moins ergonomique'],
      recommended: false,
      icon: <FaAndroid />
    }
  ];

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-white text-brand-black pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-[#141311] via-[#241F19] to-[#141311] text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Meilleures Applications IPTV <span className="text-purple-400">2024</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Comparez les meilleures applications IPTV pour Android, iOS, Fire Stick et Smart TV. Avis détaillés et instructions d'installation.
              </p>
              <p className="text-sm text-gray-400">📅 Dernière mise à jour : Septembre 2026 • ⏱️ Temps de lecture : 6 minutes</p>
            </motion.div>
          </div>
        </section>

        <article className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-brand-gray mb-4">
                Une bonne <strong>application IPTV</strong> fait toute la différence entre la frustration et le plaisir de profiter de votre contenu préféré. Nous avons testé et comparé les applications IPTV les plus populaires selon leur ergonomie, leurs fonctionnalités et leur compatibilité.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <p className="text-brand-black font-semibold mb-2">💡 Le saviez-vous ?</p>
                <p className="text-brand-gray">
                  Avec <Link to="/" className="text-purple-600 underline">France IPTV</Link>, toutes les applications ci-dessous fonctionnent parfaitement. Recevez directement votre lien M3U et vos codes Xtream API à l'inscription !
                </p>
              </div>
            </section>

            {/* Top Apps */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-purple-600">Top 10 des Applications IPTV 2024</h2>
              <div className="space-y-6">
                {apps.map((app, index) => (
                  <div key={index} className={`bg-brand-offwhite p-6 rounded-lg border-2 ${app.recommended ? 'border-purple-500' : 'border-brand-gray-border'}`}>
                    {app.recommended && (
                      <div className="bg-purple-600 text-white px-4 py-1 rounded-full inline-block mb-4 text-sm font-semibold">
                        ⭐ Meilleur Choix
                      </div>
                    )}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl text-purple-600">{app.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-brand-black">{app.name}</h3>
                          <p className="text-yellow-500">
                            {'⭐'.repeat(Math.floor(app.rating))} {app.rating}/5
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-purple-600">{app.price}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-brand-gray mb-2">Plateformes :</p>
                      <div className="flex flex-wrap gap-2">
                        {app.platforms.map((platform, i) => (
                          <span key={i} className="bg-white border border-brand-gray-border px-3 py-1 rounded text-sm text-brand-black">{platform}</span>
                        ))}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-green-600 mb-2">✅ Avantages :</p>
                        <ul className="space-y-1 text-sm">
                          {app.pros.map((pro, i) => (
                            <li key={i} className="text-brand-gray">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-orange-600 mb-2">⚠️ Inconvénients :</p>
                        <ul className="space-y-1 text-sm">
                          {app.cons.map((con, i) => (
                            <li key={i} className="text-brand-gray">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Choose */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-purple-600">Comment Choisir la Bonne Application IPTV ?</h2>
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mb-4 text-brand-black">Éléments à prendre en compte :</h3>
                <ul className="text-brand-gray space-y-2 mb-6">
                  <li>✅ <strong className="text-brand-black">Plateforme :</strong> L'application fonctionne-t-elle sur votre appareil ? (Android/iOS/Fire Stick)</li>
                  <li>✅ <strong className="text-brand-black">Ergonomie :</strong> L'interface est-elle intuitive et claire ?</li>
                  <li>✅ <strong className="text-brand-black">Prise en charge EPG :</strong> Guide électronique des programmes pour s'y retrouver</li>
                  <li>✅ <strong className="text-brand-black">Multi-écrans :</strong> Regarder plusieurs flux à la fois</li>
                  <li>✅ <strong className="text-brand-black">Contrôle parental :</strong> Important en présence d'enfants</li>
                  <li>✅ <strong className="text-brand-black">Mises à jour :</strong> Mises à jour régulières et correctifs</li>
                </ul>

                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4 text-brand-black">Nos Recommandations par Appareil :</h3>
                  <ul className="space-y-3 text-brand-gray">
                    <li><strong className="text-purple-600">Android :</strong> TiviMate (meilleure interface) ou IPTV Smarters (gratuit)</li>
                    <li><strong className="text-purple-600">iOS/Apple TV :</strong> GSE Smart IPTV (meilleure app iOS)</li>
                    <li><strong className="text-purple-600">Fire Stick :</strong> TiviMate ou IPTV Smarters</li>
                    <li><strong className="text-purple-600">Smart TV :</strong> IPTV Smarters (la plus compatible)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Installation Guide */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-purple-600">Installer une Application IPTV (3 Étapes)</h2>
              <div className="space-y-4">
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">1</div>
                    <h3 className="text-xl font-bold text-brand-black">Téléchargez l'Application</h3>
                  </div>
                  <p className="text-brand-gray">
                    Téléchargez l'application choisie depuis l'App Store, Google Play, ou l'Amazon App Store. Toutes les applications ci-dessus sont téléchargeables gratuitement.
                  </p>
                </div>
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">2</div>
                    <h3 className="text-xl font-bold text-brand-black">Ajoutez vos Identifiants IPTV</h3>
                  </div>
                  <p className="text-brand-gray">
                    Ouvrez l'application et ajoutez votre lien M3U ou vos codes Xtream API. Vous les recevez de votre <Link to="/abonnement-iptv" className="text-purple-600 underline">fournisseur IPTV</Link>.
                  </p>
                </div>
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">3</div>
                    <h3 className="text-xl font-bold text-brand-black">Commencez à Regarder !</h3>
                  </div>
                  <p className="text-brand-gray">
                    Vos chaînes se chargent. Choisissez une chaîne et profitez de votre contenu en qualité HD ou 4K !
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-purple-600">Questions Fréquentes</h2>
              <div className="space-y-4">
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-brand-black">Quelle est la meilleure application IPTV ?</h3>
                  <p className="text-brand-gray">
                    <strong>TiviMate</strong> a la meilleure interface et les meilleures fonctionnalités, mais uniquement sur Android. Pour iOS, <strong>GSE Smart IPTV</strong> est le meilleur choix. <strong>IPTV Smarters</strong> fonctionne parfaitement sur toutes les plateformes et est gratuit.
                  </p>
                </div>
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-brand-black">Les applications IPTV sont-elles gratuites ?</h3>
                  <p className="text-brand-gray">
                    Oui, la plupart des applications IPTV sont téléchargeables gratuitement. Certaines comme TiviMate ont une version premium payante (5€/an) avec des fonctions supplémentaires. Un abonnement IPTV reste nécessaire pour le contenu lui-même.
                  </p>
                </div>
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-brand-black">Toutes les applications IPTV fonctionnent-elles avec France IPTV ?</h3>
                  <p className="text-brand-gray">
                    Oui ! <Link to="/" className="text-purple-600 underline">France IPTV</Link> fonctionne avec toutes les applications IPTV populaires. Vous recevez à la fois des liens M3U et des codes Xtream API, compatibles avec TiviMate, IPTV Smarters, GSE et plus.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-purple-600 to-brand-gold p-8 rounded-xl text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Prêt à Commencer avec l'IPTV ?</h2>
              <p className="text-xl mb-6">
                Commandez France IPTV et recevez immédiatement vos identifiants pour chaque application IPTV !
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/abonnement-iptv" className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-all">
                  Voir les Abonnements
                </Link>
                <a href="https://wa.me/18653169315" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all">
                  <FaWhatsapp className="inline mr-2" /> Conseils WhatsApp
                </a>
              </div>
            </section>
          </div>
        </article>

        {/* Related */}
        <section className="py-12 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-brand-black">📖 Articles Similaires</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/blog/acheter-iptv-france-guide-complet" className="bg-white border border-brand-gray-border p-4 rounded-lg hover:border-brand-gold transition-colors">
                <h3 className="font-bold mb-2 text-brand-black">Guide Complet Acheter IPTV en France</h3>
                <p className="text-sm text-brand-gray">Tout savoir sur l'achat d'IPTV en France →</p>
              </Link>
              <Link to="/blog/installer-iptv-samsung-tv" className="bg-white border border-brand-gray-border p-4 rounded-lg hover:border-brand-gold transition-colors">
                <h3 className="font-bold mb-2 text-brand-black">Installer l'IPTV sur Samsung TV</h3>
                <p className="text-sm text-brand-gray">Guide étape par étape →</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BesteIPTVApps2024;
