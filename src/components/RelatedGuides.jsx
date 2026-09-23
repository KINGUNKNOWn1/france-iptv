import React from 'react';
import { Link } from 'react-router-dom';

const GUIDES = [
  { to: '/blog/prix-iptv-france', title: 'Prix IPTV France 2026', text: "Combien coûte un abonnement IPTV, et pourquoi se méfier des prix trop bas" },
  { to: '/blog/meilleur-iptv-france', title: 'Meilleur IPTV France', text: 'Les 7 critères pour choisir un fournisseur IPTV fiable' },
  { to: '/appareils/freebox', title: 'IPTV sur Freebox', text: 'Installer et faire fonctionner l\'IPTV sur Freebox Pop, Delta ou Mini 4K' },
  { to: '/blog/iptv-ne-fonctionne-plus', title: 'IPTV ne fonctionne plus', text: 'Les 6 causes de pannes les plus fréquentes et leurs solutions' }
];

const RelatedGuides = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center text-brand-black">
        Guides IPTV France à Consulter
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {GUIDES.map((g) => (
          <Link
            key={g.to}
            to={g.to}
            className="bg-brand-offwhite border border-brand-gray-border p-5 rounded-lg hover:border-brand-gold transition-colors"
          >
            <h3 className="font-bold mb-2 text-brand-black">{g.title}</h3>
            <p className="text-sm text-brand-gray">{g.text} →</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedGuides;
