import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// "Guides liés" block rendered under every device guide and blog article
// (mounted once in App, before the footer). Hand-picked related pages so each
// guide links to its neighbours and no guide depends on the menu alone.
const TITLES = {
  '/appareils/samsung-tv': 'IPTV sur Samsung TV',
  '/appareils/lg-tv': 'IPTV sur LG Smart TV',
  '/appareils/fire-stick': 'IPTV sur Fire TV Stick',
  '/appareils/android-tv': 'IPTV sur Android TV et box Android',
  '/appareils/chromecast-google-tv': 'IPTV sur Google TV et Chromecast',
  '/appareils/iphone-ipad': 'IPTV sur iPhone et iPad',
  '/appareils/freebox': 'IPTV sur Freebox',
  '/appareils/orange': 'IPTV sur box Orange',
  '/appareils/sfr': 'IPTV bloquée par SFR : que faire',
  '/appareils/bbox-bouygues': 'IPTV sur Bbox Bouygues',
  '/appareils/erreur-lecture-iptv': 'Erreur de lecture IPTV : solutions',
  '/appareils/activer-code-iptv': 'Activer son code IPTV (Xtream, M3U)',
  '/blog/tivimate': 'Configurer TiviMate',
  '/blog/iptv-smarters-pro': 'Installer IPTV Smarters Pro',
  '/blog/code-iptv-invalide': 'Code IPTV invalide ou expiré',
  '/blog/iptv-foot': 'Regarder le foot en IPTV',
  '/blog/formuler-mag-iptv': 'IPTV sur Formuler et MAG',
  '/blog/m3u-xtream-codes-mac': 'M3U, Xtream Codes ou adresse MAC',
  '/blog/meilleure-box-iptv': 'Quelle box IPTV choisir',
  '/blog/iptv-qui-coupe': 'IPTV qui coupe : 8 solutions',
  '/blog/meilleures-applications-iptv': 'Meilleures applications IPTV',
  '/blog/iptv-legal-en-france': "L'IPTV est-elle légale en France ?",
  '/blog/prix-iptv-france': "Prix d'un abonnement IPTV en France",
  '/blog/meilleur-iptv-france': 'Meilleur IPTV en France : comparatif',
  '/blog/iptv-ne-fonctionne-plus': 'IPTV ne fonctionne plus : que faire',
};

const RELATED = {
  '/appareils/samsung-tv': ['/appareils/lg-tv', '/blog/iptv-smarters-pro', '/blog/code-iptv-invalide', '/blog/prix-iptv-france'],
  '/appareils/lg-tv': ['/appareils/samsung-tv', '/blog/iptv-smarters-pro', '/appareils/activer-code-iptv', '/blog/iptv-foot'],
  '/appareils/fire-stick': ['/blog/tivimate', '/blog/meilleure-box-iptv', '/appareils/android-tv', '/appareils/chromecast-google-tv'],
  '/appareils/android-tv': ['/blog/tivimate', '/appareils/fire-stick', '/appareils/chromecast-google-tv', '/blog/formuler-mag-iptv'],
  '/appareils/chromecast-google-tv': ['/appareils/android-tv', '/appareils/iphone-ipad', '/blog/meilleures-applications-iptv', '/blog/iptv-qui-coupe'],
  '/appareils/iphone-ipad': ['/blog/iptv-smarters-pro', '/blog/meilleures-applications-iptv', '/blog/m3u-xtream-codes-mac', '/appareils/activer-code-iptv'],
  '/appareils/freebox': ['/appareils/orange', '/appareils/bbox-bouygues', '/appareils/sfr', '/blog/iptv-legal-en-france'],
  '/appareils/orange': ['/appareils/freebox', '/appareils/sfr', '/appareils/bbox-bouygues', '/blog/iptv-ne-fonctionne-plus'],
  '/appareils/sfr': ['/appareils/orange', '/appareils/freebox', '/blog/iptv-legal-en-france', '/blog/iptv-ne-fonctionne-plus'],
  '/appareils/bbox-bouygues': ['/appareils/freebox', '/appareils/orange', '/appareils/sfr', '/blog/meilleure-box-iptv'],
  '/appareils/erreur-lecture-iptv': ['/blog/iptv-ne-fonctionne-plus', '/blog/iptv-qui-coupe', '/blog/code-iptv-invalide', '/appareils/iphone-ipad'],
  '/appareils/activer-code-iptv': ['/blog/m3u-xtream-codes-mac', '/blog/code-iptv-invalide', '/blog/formuler-mag-iptv', '/appareils/iphone-ipad'],
  '/blog/tivimate': ['/appareils/fire-stick', '/appareils/android-tv', '/blog/meilleures-applications-iptv', '/blog/iptv-foot'],
  '/blog/iptv-smarters-pro': ['/appareils/samsung-tv', '/appareils/lg-tv', '/appareils/iphone-ipad', '/blog/code-iptv-invalide'],
  '/blog/code-iptv-invalide': ['/appareils/activer-code-iptv', '/appareils/erreur-lecture-iptv', '/blog/iptv-ne-fonctionne-plus', '/blog/m3u-xtream-codes-mac'],
  '/blog/iptv-foot': ['/blog/iptv-qui-coupe', '/blog/prix-iptv-france', '/blog/iptv-legal-en-france', '/appareils/fire-stick'],
  '/blog/formuler-mag-iptv': ['/blog/m3u-xtream-codes-mac', '/blog/meilleure-box-iptv', '/appareils/activer-code-iptv', '/appareils/bbox-bouygues'],
  '/blog/m3u-xtream-codes-mac': ['/appareils/activer-code-iptv', '/blog/formuler-mag-iptv', '/blog/tivimate', '/blog/code-iptv-invalide'],
  '/blog/meilleure-box-iptv': ['/appareils/fire-stick', '/blog/formuler-mag-iptv', '/appareils/android-tv', '/blog/prix-iptv-france'],
  '/blog/iptv-qui-coupe': ['/appareils/erreur-lecture-iptv', '/blog/iptv-ne-fonctionne-plus', '/blog/iptv-foot', '/appareils/sfr'],
  '/blog/meilleures-applications-iptv': ['/blog/tivimate', '/blog/iptv-smarters-pro', '/appareils/iphone-ipad', '/blog/formuler-mag-iptv'],
  '/blog/iptv-legal-en-france': ['/blog/meilleur-iptv-france', '/blog/prix-iptv-france', '/appareils/sfr', '/blog/iptv-foot'],
  '/blog/prix-iptv-france': ['/blog/meilleur-iptv-france', '/blog/iptv-legal-en-france', '/blog/iptv-foot', '/blog/meilleure-box-iptv'],
  '/blog/meilleur-iptv-france': ['/blog/prix-iptv-france', '/blog/iptv-legal-en-france', '/blog/iptv-foot', '/blog/meilleures-applications-iptv'],
  '/blog/iptv-ne-fonctionne-plus': ['/appareils/erreur-lecture-iptv', '/blog/iptv-qui-coupe', '/blog/code-iptv-invalide', '/appareils/orange'],
};

export const GUIDES_LIES = RELATED;

const GuidesLies = () => {
  const { pathname } = useLocation();
  const links = RELATED[pathname.replace(/\/$/, '')];
  if (!links) return null;

  return (
    <nav aria-labelledby="guides-lies" className="py-12 bg-brand-offwhite border-t border-brand-gray-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 id="guides-lies" className="text-2xl md:text-3xl font-bold mb-6 text-brand-black">Guides liés</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {links.map((to) => (
            <li key={to}>
              <Link
                to={to}
                className="flex items-center justify-between gap-3 min-h-[56px] px-4 py-3 rounded-lg border border-brand-gray-border hover:border-brand-gold text-brand-black hover:text-brand-gold transition-colors"
              >
                <span>{TITLES[to]}</span>
                <ArrowRight size={18} className="flex-shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default GuidesLies;
