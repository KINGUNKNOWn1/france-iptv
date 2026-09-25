import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SeoGuideSection from '../components/SeoGuideSection';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaTv, FaGlobe, FaFootballBall, FaFilm, FaNewspaper, FaChild, FaMusic } from 'react-icons/fa';
import SEO from '../components/SEO';
import ChannelExplorer from '../components/ChannelExplorer';

const chainesFaqs = [
  { q: 'Combien de chaînes sont incluses ?', a: "L'abonnement donne accès à plus de 30 500 chaînes en direct, françaises et internationales, ainsi qu'à plus de 150 000 films et séries à la demande. Le contenu est identique dans toutes les formules." },
  { q: 'Les chaînes françaises sont-elles en HD ?', a: "Oui, la plupart des chaînes françaises sont proposées en HD, et certaines en Full HD ou 4K. La qualité affichée dépend aussi de votre connexion et de votre appareil." },
  { q: 'Y a-t-il un guide des programmes et le replay ?', a: "Oui. Le guide des programmes (EPG) s'affiche dans l'application, et de nombreuses chaînes proposent le rattrapage pour revoir un programme déjà diffusé." },
  { q: 'Peut-on voir la liste complète avant de s\'engager ?', a: "Oui : avec le test gratuit de 24 h, vous accédez à l'ensemble des chaînes et vérifiez que vos chaînes préférées sont disponibles et fluides sur votre appareil." },
];

const Kanalen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      icon: <FaTv className="text-5xl" />,
      name: "Chaînes Françaises",
      count: "80+",
      color: "from-blue-500 to-brand-gold",
      examples: ["TF1", "France 2", "M6", "Canal+"]
    },
    {
      icon: <FaFootballBall className="text-5xl" />,
      name: "Sport",
      count: "250+",
      color: "from-green-500 to-green-600",
      examples: ["ESPN", "beIN Sports", "Canal+ Sport", "Eurosport"]
    },
    {
      icon: <FaFilm className="text-5xl" />,
      name: "Films & Séries",
      count: "150+",
      color: "from-purple-500 to-purple-600",
      examples: ["Cinéma", "Séries", "Documentaires"]
    },
    {
      icon: <FaGlobe className="text-5xl" />,
      name: "International",
      count: "28 000+",
      color: "from-blue-500 to-brand-gold",
      examples: ["BBC", "CNN", "Al Jazeera", "TRT"]
    },
    {
      icon: <FaNewspaper className="text-5xl" />,
      name: "Actualités",
      count: "120+",
      color: "from-red-500 to-red-600",
      examples: ["BFM TV", "France Info", "Sky News"]
    },
    {
      icon: <FaChild className="text-5xl" />,
      name: "Enfants",
      count: "80+",
      color: "from-pink-500 to-pink-600",
      examples: ["Nickelodeon", "Disney", "Cartoon Network"]
    },
    {
      icon: <FaMusic className="text-5xl" />,
      name: "Musique",
      count: "50+",
      color: "from-yellow-500 to-yellow-600",
      examples: ["MTV", "VH1", "Trace"]
    },
    {
      icon: <FaTv className="text-5xl" />,
      name: "Divertissement",
      count: "200+",
      color: "from-indigo-500 to-indigo-600",
      examples: ["Discovery", "National Geographic", "TLC"]
    }
  ];

  const languageGroups = [
    { language: "🇫🇷 Français", channels: "80+ chaînes" },
    { language: "🇬🇧 Anglais", channels: "8 500+ chaînes" },
    { language: "🇸🇦 Arabe", channels: "4 200+ chaînes" },
    { language: "🇹🇷 Turc", channels: "2 800+ chaînes" },
    { language: "🇩🇪 Allemand", channels: "1 200+ chaînes" },
    { language: "🇳🇱 Néerlandais", channels: "950+ chaînes" },
    { language: "🇪🇸 Espagnol", channels: "1 100+ chaînes" },
    { language: "🇮🇹 Italien", channels: "650+ chaînes" },
    { language: "🇵🇹 Portugais", channels: "420+ chaînes" },
    { language: "🇵🇱 Polonais", channels: "380+ chaînes" },
    { language: "🇷🇴 Roumain", channels: "290+ chaînes" },
    { language: "🇷🇺 Russe", channels: "540+ chaînes" }
  ];

  return (
    <>
      <SEO
        title="Liste des Chaînes IPTV : 30 500+ Chaînes en Direct"
        description="Découvrez notre catalogue de plus de 30 500 chaînes en direct : chaînes françaises, sportives, cinéma, internationales, arabes et turques. Qualité HD/4K garantie."
        keywords="liste chaînes iptv, chaînes françaises iptv, chaînes sportives iptv, catalogue iptv"
        canonicalPath="/chaines"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: chainesFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })}</script>
      </Helmet>
      <div className="min-h-screen bg-white text-brand-black pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#090B0B] via-[#111413] to-[#090B0B] text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  30 500+ Chaînes IPTV
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                La plus grande liste de chaînes de France. Toutes les chaînes françaises + divertissement mondial,
                sport, films et séries en HD/UHD/4K.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#chaines"
                  className="px-8 py-4 bg-brand-gold hover:bg-[#C4FF86] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Chercher ma chaîne
                </a>
                <Link
                  to="/acheter-iptv"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Acheter IPTV
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-4xl font-bold text-brand-gold">30 500+</div>
                  <div className="text-gray-300 mt-2">Chaînes en Direct</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-4xl font-bold text-purple-300">150 000+</div>
                  <div className="text-gray-300 mt-2">Titres VOD</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-4xl font-bold text-green-300">80+</div>
                  <div className="text-gray-300 mt-2">Chaînes Françaises</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-4xl font-bold text-orange-300">4K</div>
                  <div className="text-gray-300 mt-2">Qualité UHD</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-brand-offwhite" id="categories">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-brand-black">
              Chaînes IPTV par <span className="text-brand-gold">Catégorie</span>
            </h2>
            <p className="text-center text-brand-gray mb-12 text-lg">
              Découvrez notre offre complète répartie en catégories populaires
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${category.color} p-6 rounded-xl text-white hover:scale-105 transition-transform cursor-pointer`}
                >
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <div className="text-3xl font-bold mb-3">{category.count}</div>
                  <div className="text-sm opacity-90">
                    {category.examples.map((ex, i) => (
                      <span key={i}>
                        {ex}
                        {i < category.examples.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Language Groups */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-brand-black">
              Chaînes dans <span className="text-brand-gold">Votre Langue</span>
            </h2>
            <p className="text-center text-brand-gray mb-12 text-lg">
              Du contenu mondial dans plus de 40 langues
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {languageGroups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-brand-offwhite border border-brand-gray-border p-4 rounded-lg hover:border-brand-gold transition-all"
                >
                  <div className="text-xl font-bold mb-1 text-brand-black">{group.language}</div>
                  <div className="text-brand-gray text-sm">{group.channels}</div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-brand-gray">
                + 30 autres langues disponibles
              </p>
            </div>
          </div>
        </section>

        <ChannelExplorer />

        <SeoGuideSection title="Liste des chaînes françaises en IPTV">
          <p>
            Voici les principales <strong>chaînes françaises</strong> disponibles avec l'abonnement, classées par catégorie. Elles
            s'affichent avec le guide des programmes (EPG) et, pour la plupart, en HD. La liste complète, avec les chaînes
            internationales, est consultable avec le <a href="/abonnement-iptv">test gratuit de 24 h</a>.
          </p>
          <h3>Chaînes publiques</h3>
          <p>France 2, France 3, France 4, France 5, franceinfo, France 24, LCP, Public Sénat, Arte.</p>
          <h3>Chaînes de la TNT</h3>
          <p>TF1, M6, W9, TMC, TFX, C8, CStar, 6ter, RMC Story, RMC Découverte, Chérie 25, NRJ 12, L'Équipe, Gulli.</p>
          <h3>Information</h3>
          <p>BFM TV, CNews, LCI, franceinfo, Euronews, France 24, BBC World News, CNN International.</p>
          <h3>Régionales</h3>
          <p>France 3 régions (Île-de-France, Provence-Alpes, Occitanie, Normandie…), BFM Paris, BFM Lyon, TV8 Mont-Blanc, Vosges Télévision, Alsace 20, TVR Rennes.</p>
          <h3>Musique</h3>
          <p>MTV, MCM, Trace, M6 Music, Mezzo.</p>
          <h3>Jeunesse</h3>
          <p>Gulli, Canal J, Piwi+, Nickelodeon, Cartoon Network, Boomerang.</p>
          <h3>Chaînes internationales</h3>
          <p>
            Au-delà des chaînes françaises, l'abonnement inclut de nombreuses chaînes étrangères, pratiques pour les familles
            bilingues : <strong>belges</strong> et <strong>suisses</strong> francophones, <strong>maghrébines</strong> et
            <strong> arabes</strong>, <strong>turques</strong>, <strong>portugaises</strong>, <strong>italiennes</strong>,{' '}
            <strong>espagnoles</strong>, <strong>britanniques</strong> et bien d'autres. Pour la Belgique, voir aussi la page{' '}
            <a href="/iptv-belgique">IPTV Belgique</a>.
          </p>
          <h3>Questions fréquentes</h3>
          {chainesFaqs.map(({ q, a }) => (
            <div key={q}>
              <p><strong>{q}</strong></p>
              <p>{a}</p>
            </div>
          ))}
          <h3>Comment retrouver vos chaînes dans l'application</h3>
          <p>
            Dans IPTV Smarters Pro ou TiviMate, les chaînes sont rangées par catégorie (France, Sport, Cinéma, Info…). Ajoutez vos
            chaînes préférées en <strong>favoris</strong> pour y accéder en un clic, et activez le guide TV pour voir les programmes
            en cours. Les réglages sont détaillés dans nos guides <a href="/blog/iptv-smarters-pro">IPTV Smarters Pro</a> et 
            <a href="/blog/tivimate">TiviMate</a>.
          </p>
        </SeoGuideSection>

        {/* VOD Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              + 150 000 <span className="text-purple-600">Films & Séries</span> à la Demande
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-surface border border-lime/30 p-8 rounded-xl text-white">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-2xl font-bold mb-3">Films</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Derniers succès du box-office</li>
                  <li>• Classiques d'Hollywood</li>
                  <li>• Films français</li>
                  <li>• Cinéma international</li>
                  <li>• Qualité 4K UHD</li>
                </ul>
              </div>

              <div className="bg-surface border border-brand-gold/40 p-8 rounded-xl text-white">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-2xl font-bold mb-3">Séries</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Saisons complètes</li>
                  <li>• Séries françaises</li>
                  <li>• Meilleures séries US/UK</li>
                  <li>• K-Drama, Anime</li>
                  <li>• Mises à jour hebdomadaires</li>
                </ul>
              </div>

              <div className="bg-surface border border-lime/30 p-8 rounded-xl text-white">
                <div className="text-4xl mb-4">🎪</div>
                <h3 className="text-2xl font-bold mb-3">Contenu Bonus</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Documentaires</li>
                  <li>• Stand-up comedy</li>
                  <li>• Concerts & musique</li>
                  <li>• Programmes pour enfants</li>
                  <li>• Émissions de téléréalité</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-offwhite to-surface">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-black">
              Accédez à 30 500+ Chaînes
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Toutes les <Link to="/iptv-france" className="text-brand-gold underline">chaînes IPTV françaises</Link> +
              divertissement mondial. Dès 8 € le mois, 45 € l'année.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/abonnement-iptv"
                className="px-10 py-4 bg-brand-gold hover:bg-[#C4FF86] text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Voir les Abonnements
              </Link>
              <a
                href="https://wa.me/18653169315?text=Je%20souhaite%20plus%20d%27infos%20sur%20les%20cha%C3%AEnes"
                className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Des Questions ? Contactez-Nous
              </a>
            </div>
            <p className="text-sm text-brand-gray mt-6">
              📺 30 500+ chaînes • 🎬 150 000+ VOD • ⚡ HD/UHD/4K • 🇫🇷 Support francophone
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Kanalen;
