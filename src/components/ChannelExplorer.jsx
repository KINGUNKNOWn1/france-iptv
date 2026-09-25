import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Wifi, Tv, Zap, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { channelGroups, allChannels } from '../data/channels';
import { openWhatsApp } from '../utils/tracking';

// Searchable channel showcase: answers the first question visitors ask
// ("do you have my channel?") and hands anything not listed to WhatsApp.
const PREVIEW_COUNT = 40;

const normalize = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

const NEEDS = [
  {
    Icon: Wifi,
    title: 'Une connexion internet',
    text: '7 Mbit/s pour la HD, 25 Mbit/s pour la 4K, par écran.',
    link: { to: '/test-debit-iptv', label: 'Tester mon débit' },
  },
  {
    Icon: Tv,
    title: 'Un appareil compatible',
    text: 'Smart TV, Fire Stick, box Android, Freebox, téléphone, ordinateur.',
    link: { to: '/appareils', label: 'Voir les appareils' },
  },
  {
    Icon: Zap,
    title: '5 minutes',
    text: 'On vous envoie vos accès et on vous guide sur WhatsApp, en français.',
    link: { to: '/tarifs', label: 'Voir les formules' },
  },
];

const ChannelExplorer = () => {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const q = normalize(query.trim());
  const results = useMemo(() => {
    const pool = group === 'all' ? allChannels : channelGroups.find((g) => g.id === group).channels;
    return q ? pool.filter((c) => normalize(c).includes(q)) : pool;
  }, [group, q]);

  const truncated = !showAll && !q && group === 'all' && results.length > PREVIEW_COUNT;
  const visible = truncated ? results.slice(0, PREVIEW_COUNT) : results;

  const askForChannel = () =>
    openWhatsApp(
      query.trim()
        ? `Bonjour, avez-vous la chaîne « ${query.trim()} » ?`
        : 'Bonjour, je voudrais vérifier si vous avez une chaîne précise.'
    );

  return (
    <section id="chaines" className="bg-ink py-16 md:py-20 px-4 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="flex items-center justify-center gap-4 text-[11px] tracking-[0.28em] font-medium text-white mb-5">
            <span className="inline-block w-10 h-px bg-lime" /> LA LISTE DES CHAÎNES
          </p>
          <h2 className="text-4xl md:text-5xl text-white mb-3">Vos chaînes, avant de payer.</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Tapez le nom de votre chaîne. Vous ne la trouvez pas ? Demandez-nous sur WhatsApp, on vous répond avant toute commande.
          </p>
        </div>

        <label className="relative block max-w-xl mx-auto mb-5">
          <span className="sr-only">Rechercher une chaîne</span>
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ex. : TF1, beIN Sports, 2M, RTL-TVI…"
            className="w-full min-h-[52px] pl-12 pr-4 rounded-xl bg-surface border border-white/15 text-white placeholder:text-brand-gray focus:outline-none focus:border-lime text-base"
          />
        </label>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 md:flex-wrap md:justify-center" role="tablist" aria-label="Catégories de chaînes">
          {[{ id: 'all', name: 'Toutes' }, ...channelGroups].map((g) => (
            <button
              key={g.id}
              type="button"
              role="tab"
              aria-selected={group === g.id}
              onClick={() => { setGroup(g.id); setShowAll(false); }}
              className={`flex-shrink-0 min-h-[44px] px-4 rounded-full text-sm border transition-colors ${
                group === g.id ? 'bg-lime text-lime-on border-lime font-semibold' : 'border-white/15 text-gray-300 hover:border-lime/60'
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {visible.map((c) => (
              <li key={c} className="px-3 py-3 rounded-lg bg-surface border border-white/10 text-sm text-white truncate" title={c}>
                {c}
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-8 px-4 rounded-xl border border-white/10 bg-surface">
            <p className="text-white mb-1">« {query.trim()} » n'est pas dans cette liste.</p>
            <p className="text-brand-gray text-sm mb-5">La liste ci-dessus n'est qu'un aperçu : demandez-nous, on vérifie tout de suite.</p>
            <button
              type="button"
              onClick={askForChannel}
              className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-lg bg-lime hover:bg-lime-hover text-lime-on font-semibold text-sm"
            >
              <FaWhatsapp size={18} /> Demander cette chaîne
            </button>
          </div>
        )}

        {truncated && (
          <div className="text-center mt-5">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="min-h-[44px] px-5 rounded-lg border border-white/30 text-white text-sm hover:bg-white/5"
            >
              Voir les {results.length} chaînes de l'aperçu
            </button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 text-sm">
          <p className="text-gray-300">Plus de 30 500 chaînes au total. Une chaîne précise vous tient à cœur ?</p>
          <button type="button" onClick={askForChannel} className="inline-flex items-center gap-2 min-h-[44px] text-lime hover:underline">
            <FaWhatsapp size={16} /> Vérifier sur WhatsApp
          </button>
        </div>
        <p className="text-center text-xs text-brand-gray mt-2">
          Aperçu indicatif : la disponibilité d'une chaîne peut évoluer.
        </p>

        <div className="mt-14">
          <h3 className="text-2xl md:text-3xl text-white text-center mb-6">Ce qu'il vous faut pour regarder</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {NEEDS.map(({ Icon, title, text, link }) => (
              <div key={title} className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                <Icon size={28} strokeWidth={1.4} className="text-lime mb-3" />
                <p className="text-white font-medium mb-1">{title}</p>
                <p className="text-sm text-gray-300 mb-3">{text}</p>
                <Link to={link.to} className="inline-flex items-center gap-2 min-h-[44px] text-sm text-lime hover:underline">
                  {link.label} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelExplorer;
