/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // France IPTV Brand Colors — ink, cream & tricolore (blue/red) editorial palette
        brand: {
          black: '#1C1B19',       // Ink (text, headings)
          gold: '#33518C',        // Primary accent — French blue (kept key name "gold" to avoid touching every call site)
          red: '#B8433A',         // Secondary accent — French red, used sparingly for urgency/badges
          offwhite: '#F7F5F0',    // Warm cream background
          gray: '#8A877F',        // Secondary gray
          'gray-light': '#9A968C', // Label gray (for use on dark backgrounds)
          'gray-border': '#E2E0DA', // Border gray
        },
        // French blue accent scale
        primary: {
          50: '#F3F5F8',
          100: '#E0E5EE',
          200: '#C2CBDD',
          300: '#99A8C6',
          400: '#667DA9',
          500: '#33518C',  // Brand blue (matches the logo mark)
          600: '#2B4577',
          700: '#243962',
          800: '#1C2D4D',
          900: '#142038',
        },
        secondary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Legacy alias kept for a couple of unused/dead components; unreferenced elsewhere
        dutch: {
          orange: '#33518C',
          'orange-light': '#667DA9',
          'orange-dark': '#2B4577',
          blue: '#1C1B19',
          'blue-light': '#3A3733',
          'blue-dark': '#131211',
          red: '#B8433A',
          white: '#FFFFFF',
        },
        // Override Tailwind's stock orange/amber scales with the brand blue so
        // every text-orange-*, bg-orange-*, from-orange-* utility already in
        // the markup renders on-brand without touching each call site.
        orange: {
          50: '#F3F5F8',
          100: '#E0E5EE',
          200: '#C2CBDD',
          300: '#99A8C6',
          400: '#667DA9',
          500: '#33518C',
          600: '#2B4577',
          700: '#243962',
          800: '#1C2D4D',
          900: '#142038',
        },
        amber: {
          50: '#F3F5F8',
          100: '#E0E5EE',
          200: '#C2CBDD',
          300: '#99A8C6',
          400: '#667DA9',
          500: '#33518C',
          600: '#2B4577',
          700: '#243962',
          800: '#1C2D4D',
          900: '#142038',
        },
        // A handful of leftover accent classes from an earlier pass still use
        // Tailwind's stock "blue" scale as the brand accent — keep it mapped
        // to the same scale so it stays consistent with the brand blue.
        blue: {
          50: '#F3F5F8',
          100: '#E0E5EE',
          200: '#C2CBDD',
          300: '#99A8C6',
          400: '#667DA9',
          500: '#33518C',
          600: '#2B4577',
          700: '#243962',
          800: '#1C2D4D',
          900: '#142038',
        },
        background: '#ffffff',
        foreground: '#1C1B19',
        card: '#ffffff',
        'card-foreground': '#1C1B19',
        muted: '#F7F5F0',
        'muted-foreground': '#8A877F',
        border: '#E2E0DA',
        destructive: '#dc2626',
        'on-destructive': '#ffffff',
        ring: '#33518C',
      },
      fontFamily: {
        brand: ['Space Grotesk', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['IBM Plex Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
