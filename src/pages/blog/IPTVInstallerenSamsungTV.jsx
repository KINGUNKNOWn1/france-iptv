import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTv, FaMobileAlt, FaDownload, FaWhatsapp, FaCog } from 'react-icons/fa';
import SEO from '../../components/SEO';

const IPTVInstallerenSamsungTV = () => {
  const seoData = {
    title: "Installer l'IPTV sur Samsung TV : Guide Complet 2024",
    description: "Apprenez à installer l'IPTV sur votre Samsung Smart TV en 5 minutes. Guide étape par étape pour Tizen OS, Smart Hub et tous les modèles Samsung TV.",
    keywords: 'iptv samsung tv, samsung smart tv iptv, installer iptv samsung, tizen iptv, smart hub iptv',
    ogType: 'article'
  };

  const steps = [
    { num: 1, title: 'Ouvrir le Smart Hub', desc: 'Appuyez sur le bouton Smart Hub de votre télécommande' },
    { num: 2, title: "Télécharger l'App IPTV", desc: 'Recherchez « IPTV Smarters » dans le store d\'applications' },
    { num: 3, title: "Installer l'Application", desc: "Cliquez sur installer et attendez la fin de l'installation" },
    { num: 4, title: 'Ajouter les Identifiants', desc: 'Ouvrez l\'application et saisissez vos identifiants IPTV' },
    { num: 5, title: 'Commencer à Regarder', desc: 'Choisissez une chaîne et profitez !' }
  ];

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-white text-brand-black pt-20">
        <section className="py-16 bg-gradient-to-br from-[#141311] via-[#201C18] to-[#141311] text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Installer l'IPTV sur <span className="text-[#7B9FD9]">Samsung TV</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">Guide complet étape par étape pour tous les modèles Samsung Smart TV (2016-2024)</p>
              <p className="text-sm text-gray-400">📅 Septembre 2026 • ⏱️ 5 minutes</p>
            </motion.div>
          </div>
        </section>

        <article className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <section className="mb-12">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-8">
                <p className="text-brand-black font-semibold mb-2">⚡ Aperçu Rapide</p>
                <p className="text-brand-gray">Installez l'IPTV sur votre Samsung TV en <strong>5 minutes</strong>. Fonctionne sur toutes les Samsung Smart TV depuis 2016 sous Tizen OS.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-gold">Prérequis</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg text-center">
                  <FaTv className="text-4xl text-brand-gold mx-auto mb-3" />
                  <h3 className="font-bold mb-2 text-brand-black">Samsung Smart TV</h3>
                  <p className="text-sm text-brand-gray">Modèle 2016 ou plus récent</p>
                </div>
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg text-center">
                  <FaMobileAlt className="text-4xl text-brand-gold mx-auto mb-3" />
                  <h3 className="font-bold mb-2 text-brand-black">Connexion Internet</h3>
                  <p className="text-sm text-brand-gray">WiFi ou Ethernet (25+ Mbps)</p>
                </div>
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg text-center">
                  <FaCheckCircle className="text-4xl text-brand-gold mx-auto mb-3" />
                  <h3 className="font-bold mb-2 text-brand-black">Abonnement IPTV</h3>
                  <p className="text-sm text-brand-gray">Identifiants prêts</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-gold">Installation Étape par Étape</h2>
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.num} className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-2xl font-bold text-white">{step.num}</div>
                      <h3 className="text-2xl font-bold text-brand-black">{step.title}</h3>
                    </div>
                    <p className="text-brand-gray ml-16">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12 relative">
              {/* Background text "Problème ?" */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-10">
                <span className="text-[120px] md:text-[180px] font-bold text-brand-black select-none">
                  Problème ?
                </span>
              </div>

              {/* Main title */}
              <div className="relative z-10 text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-purple-500 to-brand-gold">
                    Solutions
                  </span>
                </h2>
                <p className="text-brand-gray">Problèmes courants et leurs solutions</p>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg border-l-4 border-l-red-500">
                  <h3 className="text-xl font-bold mb-2 text-red-500">Application indisponible dans le Smart Hub ?</h3>
                  <p className="text-brand-gray"><span className="text-green-600 font-semibold">Solution :</span> Changez la région dans les paramètres TV vers la France/Belgique, ou utilisez l'application alternative « SS IPTV ».</p>
                </div>
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg border-l-4 border-l-red-500">
                  <h3 className="text-xl font-bold mb-2 text-red-500">Mémoire tampon ou problèmes de chargement ?</h3>
                  <p className="text-brand-gray"><span className="text-green-600 font-semibold">Solution :</span> Vérifiez votre vitesse internet (min. 25 Mbps). Privilégiez un câble Ethernet plutôt que le WiFi.</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-brand-gold to-purple-600 p-8 rounded-xl text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Pas Encore d'Abonnement IPTV ?</h2>
              <p className="text-xl mb-6">Démarrez avec France IPTV : 30 500+ chaînes, fonctionne parfaitement sur Samsung TV !</p>
              <Link to="/abonnement-iptv" className="inline-block px-8 py-4 bg-white text-brand-gold font-bold rounded-lg hover:bg-blue-50">Voir les Abonnements</Link>
            </section>
          </div>
        </article>

        <section className="py-12 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-brand-black">📖 Articles Similaires</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/blog/meilleures-applications-iptv-2024" className="bg-white border border-brand-gray-border p-4 rounded-lg hover:border-brand-gold transition-colors">
                <h3 className="font-bold mb-2 text-brand-black">Meilleures Applications IPTV 2024</h3>
                <p className="text-sm text-brand-gray">Comparez toutes les applications IPTV →</p>
              </Link>
              <Link to="/blog/acheter-iptv-france-guide-complet" className="bg-white border border-brand-gray-border p-4 rounded-lg hover:border-brand-gold transition-colors">
                <h3 className="font-bold mb-2 text-brand-black">Acheter IPTV en France</h3>
                <p className="text-sm text-brand-gray">Guide d'achat complet →</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPTVInstallerenSamsungTV;
