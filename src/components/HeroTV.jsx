import React, { useEffect, useRef, useState } from 'react';
import { Mountain, Trophy, Clapperboard, Tv, Newspaper, ArrowRight } from 'lucide-react';
import { channelGroups } from '../data/channels';

// Makes the TV in the homepage hero photo "play": a remote under the TV switches
// what is shown on its screen. Large screens only (xl+), where the TV is visible.
//
// The screen overlay is positioned from the photo's own geometry, so it has to
// mirror the hero <img>: 1600x701 source, object-cover, object-position 70% 50%.
const IMG_W = 1600;
const IMG_H = 701;
const POS_X = 0.7;
const POS_Y = 0.5;
// TV screen in source-image pixels (bounding box), and its corners as a
// clip-path, since the photo shows the TV in slight perspective.
const SCREEN = { x: 842, y: 26, w: 610, h: 403 };
const SCREEN_CLIP = 'polygon(0% 14.9%, 100% 0%, 100% 100%, 0% 95.8%)';

// Unsplash-licensed stills, self-hosted. `null` = the photo's own picture.
// `hints` are channel names shown under the remote, taken from the channel list
// (src/data/channels.js) so the two never disagree.
const namesFrom = (groupId, pick) => {
  const list = channelGroups.find((g) => g.id === groupId)?.channels || [];
  return pick ? pick.filter((n) => list.includes(n)) : list.slice(0, 4);
};

export const TV_CHANNELS = [
  { id: 'decouverte', label: 'Découverte', Icon: Mountain, image: null, quality: '4K', hints: namesFrom('docs') },
  { id: 'sport', label: 'Sport', Icon: Trophy, image: '/assets/tv/sport.webp', quality: '4K', hints: namesFrom('sport', ['beIN Sports 1', 'Canal+ Sport', 'RMC Sport 1', 'Eurosport 1']) },
  { id: 'cinema', label: 'Cinéma', Icon: Clapperboard, image: '/assets/tv/cinema.webp', quality: '4K', hints: namesFrom('cinema') },
  { id: 'series', label: 'Séries', Icon: Tv, image: '/assets/tv/series.webp', quality: 'HD', hints: namesFrom('france', ['Série Club', 'Téva', 'TV Breizh', 'Comédie+']) },
  { id: 'info', label: 'Info', Icon: Newspaper, image: '/assets/tv/info.webp', quality: 'HD', hints: namesFrom('info') },
];

const ZAP_MS = 6000;
const SWITCH_MS = 260;

export const useHeroTV = (sectionRef) => {
  const [box, setBox] = useState(null);
  const [channel, setChannel] = useState(0);
  const [switching, setSwitching] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);
  const userPicked = useRef(false);

  // Track where the TV screen lands for the current hero size.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const measure = () => {
      const { width: w, height: h } = el.getBoundingClientRect();
      const scale = Math.max(w / IMG_W, h / IMG_H);
      const ox = (w - IMG_W * scale) * POS_X;
      const oy = (h - IMG_H * scale) * POS_Y;
      setBox({
        left: ox + SCREEN.x * scale,
        top: oy + SCREEN.y * scale,
        width: SCREEN.w * scale,
        height: SCREEN.h * scale,
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [sectionRef]);

  // Load the channel stills only after the page has settled (keeps them off the
  // critical path), and only on screens where the TV is shown.
  useEffect(() => {
    if (!window.matchMedia('(min-width: 1280px)').matches) return undefined;
    const t = setTimeout(() => setImagesReady(true), 2500);
    return () => clearTimeout(t);
  }, []);

  // `target` is a channel index or an updater (c) => index.
  const tune = (target) => {
    setSwitching(true);
    setTimeout(() => {
      setChannel(target);
      setSwitching(false);
    }, SWITCH_MS);
  };
  const following = (c) => (c + 1) % TV_CHANNELS.length;

  // Zap through the channels on its own until the visitor picks one.
  useEffect(() => {
    if (!imagesReady || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => {
      if (!userPicked.current) tune(following);
    }, ZAP_MS);
    return () => clearInterval(id);
  }, [imagesReady]);

  const pick = (i) => {
    userPicked.current = true;
    if (i !== channel) tune(i);
  };
  return { box, channel, switching, imagesReady, pick };
};

export const HeroTVScreen = ({ tv }) => {
  const { box, channel, switching, imagesReady } = tv;
  if (!box) return null;
  const current = TV_CHANNELS[channel];

  return (
    <div
      aria-hidden="true"
      className="hidden xl:block absolute overflow-hidden pointer-events-none"
      style={{ ...box, clipPath: SCREEN_CLIP }}
    >
      {imagesReady && TV_CHANNELS.filter((c) => c.image).map((c) => (
        <img
          key={c.id}
          src={c.image}
          alt=""
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: current.id === c.id ? 1 : 0 }}
        />
      ))}

      {/* Channel-change flash */}
      <span
        className="absolute inset-0 bg-white pointer-events-none transition-opacity"
        style={{ opacity: switching ? 0.35 : 0, transitionDuration: `${SWITCH_MS / 2}ms` }}
      />

      {/* On-screen display */}
      {imagesReady && (
        <span
          className="absolute right-[4%] bottom-[6%] inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/60 text-white text-[11px] font-semibold tracking-[0.12em] transition-opacity duration-200"
          style={{ opacity: switching ? 0 : 1 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          EN DIRECT · {current.label.toUpperCase()} · {current.quality}
        </span>
      )}
    </div>
  );
};

export const HeroTVRemote = ({ tv }) => {
  const { box, channel, pick } = tv;
  if (!box) return null;
  const current = TV_CHANNELS[channel];

  return (
    <div
      className="hidden xl:flex absolute z-20 flex-col items-center gap-1.5"
      style={{ left: box.left + box.width / 2, top: box.top + box.height + 34, transform: 'translateX(-50%)' }}
    >
      <div role="radiogroup" aria-label="Choisir une chaîne" className="flex items-center gap-1 p-1.5 rounded-full border border-white/15 bg-ink/75 backdrop-blur-md shadow-2xl">
        {TV_CHANNELS.map(({ id, label, Icon }, i) => (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={channel === i}
            onClick={() => pick(i)}
            className={`inline-flex items-center gap-1.5 min-h-[40px] px-3.5 rounded-full text-xs font-semibold transition-colors ${
              channel === i ? 'bg-lime text-lime-on' : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Icon size={15} strokeWidth={1.8} /> {label}
          </button>
        ))}
      </div>
      <p key={current.id} aria-live="polite" className="text-xs text-gray-300 text-center animate-fade-in">
        <span className="text-white font-medium">{current.label} :</span> {current.hints.join(' · ')}…
      </p>
      <a href="#chaines" className="inline-flex items-center gap-1.5 text-xs text-lime hover:underline">
        30 500+ chaînes · Chercher ma chaîne <ArrowRight size={14} />
      </a>
    </div>
  );
};
