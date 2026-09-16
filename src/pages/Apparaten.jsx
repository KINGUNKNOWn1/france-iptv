import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaMobileAlt, FaTv, FaLaptop, FaTabletAlt, FaGamepad, FaApple, FaAndroid, FaWindows } from 'react-icons/fa';
import SEO from '../components/SEO';
import DeviceCompatibility from '../components/DeviceCompatibility';

const Apparaten = () => {
  const devices = [
    {
      icon: <FaTv className="text-6xl" />,
      name: "Smart TV",
      compatibility: "100%",
      color: "from-blue-500 to-brand-gold",
      brands: ["Samsung", "LG", "Sony", "Philips", "TCL", "Hisense"],
      apps: ["IPTV Smarters Pro", "SS IPTV", "TiviMate"],
      link: "/appareils/samsung-tv",
      description: "Streaming 4K Ultra HD sur votre Smart TV"
    },
    {
      icon: <FaMobileAlt className="text-6xl" />,
      name: "Smartphone",
      compatibility: "100%",
      color: "from-green-500 to-green-600",
      brands: ["iPhone", "Samsung", "Huawei", "Xiaomi", "OnePlus"],
      apps: ["IPTV Smarters Pro", "GSE Smart IPTV", "Perfect Player"],
      link: "/appareils/activer-code-iptv",
      description: "Regardez partout, tout le temps sur votre téléphone"
    },
    {
      icon: <FaTabletAlt className="text-6xl" />,
      name: "Tablette",
      compatibility: "100%",
      color: "from-purple-500 to-purple-600",
      brands: ["iPad", "Samsung Tab", "Huawei Pad", "Lenovo Tab"],
      apps: ["IPTV Smarters Pro", "GSE Smart IPTV"],
      link: "/appareils/iphone-ipad",
      description: "Format parfait pour la maison et les déplacements"
    },
    {
      icon: <FaGamepad className="text-6xl" />,
      name: "Boîtier TV",
      compatibility: "100%",
      color: "from-orange-500 to-orange-600",
      brands: ["MAG", "Formuler", "Dreambox", "Android TV Box"],
      apps: ["Applications natives", "IPTV Smarters", "TiviMate"],
      link: "/appareils/android-tv",
      description: "Une expérience IPTV dédiée"
    },
    {
      icon: <FaLaptop className="text-6xl" />,
      name: "Ordinateur",
      compatibility: "100%",
      color: "from-red-500 to-red-600",
      brands: ["PC Windows", "MacBook", "Linux"],
      apps: ["VLC Player", "Kodi", "MyIPTV Player"],
      link: "/appareils/activer-code-iptv",
      description: "Streamez sur votre ordinateur de bureau ou portable"
    },
    {
      icon: <FaApple className="text-6xl" />,
      name: "Apple TV",
      compatibility: "100%",
      color: "from-indigo-500 to-indigo-600",
      brands: ["Apple TV 4K", "Apple TV HD"],
      apps: ["IPTV Smarters Pro", "GSE Smart IPTV"],
      link: "/appareils/iphone-ipad",
      description: "IPTV premium sur Apple TV"
    }
  ];

  const platforms = [
    { icon: <FaAndroid />, name: "Android", version: "5.0+" },
    { icon: <FaApple />, name: "iOS", version: "12.0+" },
    { icon: <FaWindows />, name: "Windows", version: "10+" },
    { icon: <FaApple />, name: "macOS", version: "10.14+" },
    { icon: <FaTv />, name: "Android TV", version: "7.0+" },
    { icon: <FaTv />, name: "webOS", version: "4.0+" },
    { icon: <FaTv />, name: "Tizen", version: "5.0+" },
    { icon: <FaGamepad />, name: "Fire TV", version: "Tous" }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Téléchargez l'Application",
      description: "Téléchargez IPTV Smarters Pro ou une autre application compatible depuis votre store d'applications"
    },
    {
      step: "2",
      title: "Saisissez vos Identifiants",
      description: "Ouvrez l'application et saisissez les identifiants reçus par e-mail"
    },
    {
      step: "3",
      title: "Commencez à Regarder",
      description: "Profitez de 30 500+ chaînes sur votre appareil préféré"
    }
  ];

  return (
    <>
      <SEO
        title="IPTV Compatible Tous Appareils | Smart TV, Android, iOS"
        description="France IPTV fonctionne sur tous vos appareils : Smart TV, Android, iOS, Fire Stick, Samsung TV, Chromecast et plus. Installation simple et rapide."
        keywords="iptv appareils compatibles, iptv smart tv, iptv android, iptv firestick"
        canonicalPath="/appareils"
      />
      <div className="min-h-screen bg-white text-brand-black pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#141311] via-[#241F19] to-[#141311] text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  IPTV sur Tous les Appareils
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Regardez l'IPTV sur votre <strong>Smart TV, smartphone, tablette, ordinateur</strong> et plus.
                Compatible avec 99 % des appareils. Nombre illimité d'appareils simultanés.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#devices"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Voir les Appareils
                </a>
                <Link
                  to="/acheter-iptv"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Acheter IPTV
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Devices Grid */}
        <section className="py-20 bg-brand-offwhite" id="devices">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Appareils <span className="text-purple-600">Pris en Charge</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devices.map((device, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={device.link}
                    className={`block relative bg-gradient-to-br ${device.color} p-8 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]`}
                  >
                    {/* Glossy overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* 3D depth shadow */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-black/20 to-transparent rounded-2xl -z-10 blur-xl" />

                    {/* Icon with floating animation */}
                    <div className="relative mb-6">
                      <div className="text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {device.icon}
                      </div>
                      {/* Glow effect behind icon */}
                      <div className="absolute inset-0 bg-white/30 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2 text-white">{device.name}</h3>
                      <p className="text-white/90 text-sm mb-4 font-medium">{device.description}</p>

                      {/* Compatibility badge */}
                      <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                        <FaCheckCircle className="text-white mr-2" />
                        <span className="text-white font-bold">Compatible à {device.compatibility}</span>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-white/80 font-semibold mb-2 flex items-center">
                          <span className="w-1 h-4 bg-white/60 rounded mr-2" />
                          Marques Prises en Charge :
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {device.brands.map((brand, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white font-medium hover:bg-white/40 transition-colors"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-white/80 font-semibold mb-2 flex items-center">
                          <span className="w-1 h-4 bg-white/60 rounded mr-2" />
                          Applications Recommandées :
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {device.apps.map((app, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white font-medium hover:bg-white/40 transition-colors"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View guide link for devices with pages */}
                      {device.link !== "#" && (
                        <div className="mt-6 pt-4 border-t border-white/20">
                          <span className="text-white font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                            Voir le Guide d'Installation
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full transform translate-x-12 -translate-y-12" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-brand-black">
              Toutes les <span className="text-purple-600">Plateformes</span> Prises en Charge
            </h2>
            <p className="text-center text-brand-gray mb-12 text-lg">
              France IPTV fonctionne sur presque tous les appareils modernes
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg text-center hover:border-purple-400 transition-all"
                >
                  <div className="text-4xl text-purple-600 mb-3 flex justify-center">{platform.icon}</div>
                  <h3 className="text-lg font-bold mb-1 text-brand-black">{platform.name}</h3>
                  <p className="text-sm text-brand-gray">{platform.version}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Device & Box Guides */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-brand-black">
              Guides par <span className="text-brand-gold">Appareil</span>
            </h2>
            <p className="text-center text-brand-gray mb-12 text-lg">
              Un guide d'installation détaillé pour chaque box et appareil
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Freebox', desc: 'Pop, Mini 4K, Ultra, Delta, Révolution', link: '/appareils/freebox' },
                { name: 'Box Orange Livebox', desc: 'Installation et dépannage', link: '/appareils/orange' },
                { name: 'Bbox Bouygues', desc: 'Miami, Must, Ultym', link: '/appareils/bbox-bouygues' },
                { name: 'Box SFR', desc: 'Solutions aux problèmes courants', link: '/appareils/sfr' },
                { name: 'Amazon Fire Stick', desc: 'Lite, 4K, 4K Max', link: '/appareils/fire-stick' },
                { name: 'Android TV et Box', desc: 'Nvidia Shield, Mi Box et autres', link: '/appareils/android-tv' },
                { name: 'Chromecast / Google TV', desc: "Installation en quelques minutes", link: '/appareils/chromecast-google-tv' },
                { name: 'Samsung Smart TV', desc: 'Tizen OS, tous modèles', link: '/appareils/samsung-tv' },
                { name: 'LG Smart TV', desc: 'WebOS, OLED, NanoCell', link: '/appareils/lg-tv' },
                { name: 'iPhone et iPad', desc: 'iOS 14 et supérieur', link: '/appareils/iphone-ipad' }
              ].map((box, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={box.link}
                    className="block bg-white border border-brand-gray-border rounded-xl p-6 h-full hover:border-brand-gold hover:shadow-lg transition-all"
                  >
                    <FaTv className="text-3xl text-brand-gold mb-3" />
                    <h3 className="font-bold text-lg text-brand-black mb-1">{box.name}</h3>
                    <p className="text-sm text-brand-gray">{box.desc}</p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10 space-y-2">
              <p className="text-brand-gray mb-1">Un problème de lecture ou une erreur affichée ?</p>
              <Link to="/appareils/erreur-lecture-iptv" className="text-brand-gold hover:text-[#2B4577] underline font-semibold block">
                Consultez notre guide de dépannage IPTV →
              </Link>
              <p className="text-brand-gray mb-1 pt-4">Besoin d'aide pour entrer votre code d'activation ?</p>
              <Link to="/appareils/activer-code-iptv" className="text-brand-gold hover:text-[#2B4577] underline font-semibold block">
                Guide d'activation (Xtream Codes, M3U, MAC) →
              </Link>
            </div>
          </div>
        </section>

        {/* Device Compatibility Component */}
        <DeviceCompatibility />

        {/* Setup Guide */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-brand-black">
              Installer l'IPTV en <span className="text-purple-600">3 Étapes</span>
            </h2>
            <p className="text-center text-brand-gray mb-12 text-lg">
              C'est aussi simple que ça de démarrer avec France IPTV
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {setupSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 text-white">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-brand-black">{item.title}</h3>
                  <p className="text-brand-gray">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Besoin d'Aide pour l'Installation ?
              </h3>
              <p className="text-lg mb-6 opacity-90 text-white">
                Notre support francophone est là pour vous aider. Actif en 5 minutes !
              </p>
              <a
                href="https://wa.me/18653169315?text=J%27ai%20besoin%20d%27aide%20pour%20l%27installation"
                className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all"
              >
                Support WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Pourquoi France IPTV Fonctionne sur <span className="text-purple-600">Tous les Appareils</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-brand-gray-border p-6 rounded-lg">
                <FaCheckCircle className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-brand-black">Appareils Illimités</h3>
                <p className="text-brand-gray">
                  Regardez sur autant d'appareils que vous voulez à la fois. Parfait pour les familles.
                </p>
              </div>

              <div className="bg-white border border-brand-gray-border p-6 rounded-lg">
                <FaCheckCircle className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-brand-black">Multi-Plateforme</h3>
                <p className="text-brand-gray">
                  Fonctionne sur Android, iOS, Windows, macOS, Smart TV et plus.
                </p>
              </div>

              <div className="bg-white border border-brand-gray-border p-6 rounded-lg">
                <FaCheckCircle className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-brand-black">Installation Facile</h3>
                <p className="text-brand-gray">
                  Téléchargez l'application, saisissez vos identifiants, et commencez à regarder immédiatement.
                </p>
              </div>

              <div className="bg-white border border-brand-gray-border p-6 rounded-lg">
                <FaCheckCircle className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-brand-black">Qualité HD/4K</h3>
                <p className="text-brand-gray">
                  Qualité d'image optimale sur chaque appareil, ajustée automatiquement.
                </p>
              </div>

              <div className="bg-white border border-brand-gray-border p-6 rounded-lg">
                <FaCheckCircle className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-brand-black">Aucun Matériel Supplémentaire</h3>
                <p className="text-brand-gray">
                  Utilisez simplement vos appareils actuels. Aucun boîtier coûteux nécessaire.
                </p>
              </div>

              <div className="bg-white border border-brand-gray-border p-6 rounded-lg">
                <FaCheckCircle className="text-3xl text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-brand-black">Support 24/7</h3>
                <p className="text-brand-gray">
                  Le service client francophone vous aide à l'installation sur tous vos appareils.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-white to-brand-offwhite">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-black">
              Prêt à Regarder l'IPTV sur Vos Appareils ?
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Commencez dès aujourd'hui. Compatible avec votre{' '}
              <Link to="/appareils" className="text-purple-600 underline">Smart TV, smartphone, tablette et plus</Link>.
              À partir de 3,75 € par mois.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/abonnement-iptv"
                className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Voir les Abonnements
              </Link>
              <a
                href="https://wa.me/18653169315?text=Quels%20appareils%20sont%20compatibles%20%3F"
                className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Des Questions ? Contactez-Nous
              </a>
            </div>
            <p className="text-sm text-brand-gray mt-6">
              📱 Tous les appareils • 🔄 Nombre illimité • ⚡ Installation facile • 🇫🇷 Support francophone
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Apparaten;
