import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTv, FaFootballBall, FaFilm, FaNewspaper, FaChild, FaMusic, FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import SEO from '../../components/SEO';
import { blogPostSchemas } from '../../data/blogPosts';

const NederlandseIPTVKanalenLijst = () => {
  const seoData = {
    title: 'Liste des Chaînes IPTV Françaises 2026 : 80+ Chaînes FR',
    description: 'Liste complète des chaînes IPTV françaises 2026. TF1, France Télévisions, M6, chaînes régionales et sportives. Toutes les 80+ chaînes françaises en un coup d\'œil.',
    keywords: 'chaines iptv francaises, chaines tf1, france televisions iptv, m6 iptv, liste chaines francaises tv',
    ogType: 'article',
    canonicalPath: '/blog/liste-chaines-francaises-iptv'
  };

  const channels = [
    {
      category: 'Chaînes Publiques',
      icon: <FaTv />,
      channels: ['France 2', 'France 3', 'France 4', 'France 5', 'France Info', 'France 24', 'LCP', 'Public Sénat', 'France Ô', 'France tv Slash']
    },
    {
      category: 'Chaînes Commerciales',
      icon: <FaTv />,
      channels: ['TF1', 'M6', 'W9', 'TMC', 'TFX', 'C8', 'RMC Story', 'RMC Découverte', 'TF1 Séries Films']
    },
    {
      category: 'Sport',
      icon: <FaFootballBall />,
      channels: ['beIN Sports 1-3', 'Canal+ Sport', 'RMC Sport 1-2', 'Eurosport 1-2', "L'Équipe", 'Automoto', 'Golf Channel']
    },
    {
      category: 'Films & Divertissement',
      icon: <FaFilm />,
      channels: ['Canal+', 'Ciné+ Premier', 'Ciné+ Frisson', 'Ciné+ Famiz', 'Ciné+ Émotion', 'Paris Première', 'Comedy Central', 'TLC']
    },
    {
      category: 'Actualités',
      icon: <FaNewspaper />,
      channels: ['BFM TV', 'CNews', 'LCI', 'Franceinfo:', 'Euronews', 'CNN International', 'BBC World News']
    },
    {
      category: 'Enfants',
      icon: <FaChild />,
      channels: ['Gulli', 'Canal J', 'Piwi+', 'Nickelodeon', 'Disney Channel', 'Disney Junior', 'Cartoon Network', 'Boomerang']
    },
    {
      category: 'Musique',
      icon: <FaMusic />,
      channels: ['MTV', 'MCM', 'Trace', 'M6 Music', 'Mezzo']
    },
    {
      category: 'Régionales',
      icon: <FaTv />,
      channels: ['France 3 Île-de-France', 'France 3 Provence-Alpes', 'France 3 Occitanie', 'France 3 Normandie', 'BFM Paris', 'BFM Lyon', 'TV8 Mont-Blanc', 'Vosges Télévision', 'Alsace 20', 'TVR Rennes', 'IDF1', '8 Mont-Blanc']
    }
  ];

  return (
    <>
      <SEO {...seoData} />
      <Helmet>
        {blogPostSchemas('/blog/liste-chaines-francaises-iptv').map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>
      <div className="min-h-screen bg-white text-brand-black pt-20">
        <section className="py-16 bg-gradient-to-br from-[#090B0B] via-[#111413] to-[#090B0B] text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                🇫🇷 Liste des <span className="text-brand-gold">Chaînes IPTV Françaises</span> 2026
              </h1>
              <p className="text-xl text-gray-300 mb-4">Vue d'ensemble complète des 80+ chaînes françaises disponibles via IPTV</p>
              <p className="text-sm text-gray-400">📅 Septembre 2026 • 📺 80+ Chaînes</p>
            </motion.div>
          </div>
        </section>

        <article className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <section className="mb-12">
              <div className="bg-blue-50 border-l-4 border-brand-gold p-6 rounded">
                <p className="text-brand-black font-semibold mb-2">🔥 Avantage France IPTV</p>
                <p className="text-brand-gray">Avec <Link to="/" className="text-brand-gold underline">France IPTV</Link>, vous recevez TOUTES les chaînes françaises ci-dessous + 30 500 chaînes internationales pour seulement 4€/mois !</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-gold">Liste Complète des Chaînes</h2>
              <div className="space-y-6">
                {channels.map((cat, idx) => (
                  <div key={idx} className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl text-brand-gold">{cat.icon}</div>
                      <h3 className="text-2xl font-bold text-brand-black">{cat.category}</h3>
                      <span className="ml-auto bg-brand-gold text-white px-3 py-1 rounded-full text-sm">{cat.channels.length} chaînes</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {cat.channels.map((ch, i) => (
                        <div key={i} className="bg-white border border-brand-gray-border p-3 rounded text-sm flex items-center gap-2 text-brand-black">
                          <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                          {ch}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6 text-brand-gold">Questions Fréquentes</h2>
              <div className="space-y-4">
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-brand-black">Est-ce que je reçois toutes les chaînes françaises ?</h3>
                  <p className="text-brand-gray">Oui ! Avec <Link to="/abonnement-iptv" className="text-brand-gold underline">France IPTV</Link>, vous recevez les 80+ chaînes françaises, dont TF1, France Télévisions, M6, sport et chaînes régionales.</p>
                </div>
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-brand-black">TF1 et M6 fonctionnent-elles ?</h3>
                  <p className="text-brand-gray">Oui, toutes les chaînes publiques (France Télévisions) et commerciales (TF1, M6, C8) fonctionnent parfaitement. En direct et en qualité HD.</p>
                </div>
                <div className="bg-brand-offwhite border border-brand-gray-border p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-brand-black">Puis-je regarder la Ligue 1 ?</h3>
                  <p className="text-brand-gray">Oui ! Toutes les chaînes beIN Sports et Canal+ Sport sont disponibles, avec tous les matchs de Ligue 1 en direct.</p>
                </div>
              </div>
            </section>

            <section className="bg-surface border border-brand-gold/40 p-8 rounded-xl text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Toutes les Chaînes Françaises + 30 500 de Plus !</h2>
              <p className="text-xl mb-6">Démarrez avec France IPTV et regardez toutes les chaînes françaises + des milliers de chaînes internationales</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/abonnement-iptv" className="px-8 py-4 bg-white text-brand-gold font-bold rounded-lg hover:bg-blue-50">Voir les Abonnements</Link>
                <a href="https://wa.me/18653169315" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg"><FaWhatsapp className="inline mr-2" /> WhatsApp</a>
              </div>
            </section>
          </div>
        </article>

        <section className="py-12 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-brand-black">📖 Articles Similaires</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/blog/acheter-iptv-france-guide-complet" className="bg-white border border-brand-gray-border p-4 rounded-lg hover:border-brand-gold"><h3 className="font-bold mb-2 text-brand-black">Acheter IPTV en France</h3><p className="text-sm text-brand-gray">Guide complet →</p></Link>
              <Link to="/blog/meilleures-applications-iptv" className="bg-white border border-brand-gray-border p-4 rounded-lg hover:border-brand-gold"><h3 className="font-bold mb-2 text-brand-black">Meilleures Applications IPTV</h3><p className="text-sm text-brand-gray">Avis sur les applications →</p></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NederlandseIPTVKanalenLijst;
