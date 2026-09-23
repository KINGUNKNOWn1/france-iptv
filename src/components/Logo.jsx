import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = "", textColor = "black", size = "md", showTagline = true }) => {
  const isDark = textColor === 'white';

  // Size variants
  const sizes = {
    sm: { box: 32, bar: 4, gap: 3, word: '15px', tagline: '9px' },
    md: { box: 40, bar: 5, gap: 4, word: '18px', tagline: '10px' },
    lg: { box: 56, bar: 7, gap: 5, word: '24px', tagline: '11px' }
  };

  const currentSize = sizes[size] || sizes.md;

  const inkOrCream = isDark ? '#FDFCF9' : '#1C1B19';
  const taglineColor = isDark ? '#9A968C' : '#8A877F';

  // Reversed on dark: icon box becomes cream, middle bar becomes ink instead of white
  const boxBg = isDark ? '#FDFCF9' : '#1C1B19';
  const barBlue = isDark ? '#4D6FAE' : '#33518C';
  const barMiddle = isDark ? '#1C1B19' : '#FDFCF9';
  const barRed = isDark ? '#C25B50' : '#B8433A';

  const barHeights = [0.55, 1, 0.75]; // short / tall / medium, as a fraction of box height minus padding

  return (
    <Link
      to="/"
      className={`flex items-center gap-3 py-1.5 ${className} cursor-pointer transition-opacity hover:opacity-80`}
      aria-label="Aller à la page d'accueil"
    >
      {/* Tricolore signal-bars mark */}
      <div
        className="rounded-lg flex items-end justify-center flex-shrink-0"
        style={{
          width: `${currentSize.box}px`,
          height: `${currentSize.box}px`,
          background: boxBg,
          gap: `${currentSize.gap}px`,
          paddingBottom: `${currentSize.box * 0.18}px`,
        }}
      >
        {[barBlue, barMiddle, barRed].map((color, i) => (
          <div
            key={i}
            style={{
              width: `${currentSize.bar}px`,
              height: `${currentSize.box * 0.64 * barHeights[i]}px`,
              background: color,
              borderRadius: '1px',
            }}
          />
        ))}
      </div>

      {/* Wordmark + tagline */}
      <div className="flex flex-col gap-1">
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: currentSize.word,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            color: inkOrCream,
          }}
        >
          France IPTV
        </span>
        {showTagline && (
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: currentSize.tagline,
              fontWeight: 500,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: taglineColor,
            }}
          >
            .stream
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
