import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaTv, FaGlobe, FaFootballBall, FaFilm, FaNewspaper, FaChild, FaMusic } from 'react-icons/fa';
import SEO from '../components/SEO';
import ChannelGrid from '../components/ChannelGrid';

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
      examples: ["HBO", "Ciné+", "Comedy Central"]
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
      <div className="min-h-screen bg-white text-brand-black pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#141311] via-[#201C18] to-[#141311] text-white">
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
                  href="#categories"
                  className="px-8 py-4 bg-brand-gold hover:bg-[#2B4577] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  Voir les Catégories
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
                  <div className="text-4xl font-bold text-[#7B9FD9]">30 500+</div>
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

        {/* Channel Grid Component */}
        <section className="py-20 bg-brand-offwhite">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              Découvrez Notre <span className="text-brand-gold">Liste de Chaînes</span>
            </h2>
          </div>
          <ChannelGrid />
        </section>

        {/* VOD Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-brand-black">
              + 150 000 <span className="text-purple-600">Films & Séries</span> à la Demande
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-xl text-white">
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

              <div className="bg-gradient-to-br from-brand-gold to-[#2B4577] p-8 rounded-xl text-white">
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

              <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl text-white">
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
        <section className="py-20 bg-gradient-to-br from-brand-offwhite to-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-black">
              Accédez à 30 500+ Chaînes
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Toutes les <Link to="/iptv-france" className="text-brand-gold underline">chaînes IPTV françaises</Link> +
              divertissement mondial. À partir de 3,75 € par mois.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/abonnement-iptv"
                className="px-10 py-4 bg-brand-gold hover:bg-[#2B4577] text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
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
