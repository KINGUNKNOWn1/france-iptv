/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark "home cinema" theme. Token names are kept from the old light
        // palette so every call site re-themes without edits: "black" is now
        // the main text colour, "offwhite" a dark section background and
        // "gold" the lime accent.
        brand: {
          black: '#F5F4EE',       // Main text
          gold: '#B3F66B',        // Lime accent (links, highlights, primary buttons)
          red: '#F07A6E',         // Secondary accent for urgency/badges
          offwhite: '#0B0D0D',    // Alternate section background
          gray: '#A8ADAD',        // Muted text
          'gray-light': '#8B9090',
          'gray-border': '#262A28', // Hairlines and card borders
        },
        ink: '#090B0B',           // Page background
        surface: '#111413',       // Cards and white-section background
        'surface-2': '#1A1E1B',   // Raised elements, hovers
        lime: {
          DEFAULT: '#B3F66B',
          hover: '#C4FF86',
          on: '#101709',          // Text on lime
        },
        // French blue accent scale
        primary: {
          50: '#111A0D',
          100: '#16210F',
          200: '#223214',
          300: '#3F5A24',
          400: '#8FD150',
          500: '#B3F66B',
          600: '#A2E85A',
          700: '#C4FF86',
          800: '#D5FFA8',
          900: '#E6FFC9',
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
          50: '#111A0D',
          100: '#16210F',
          200: '#223214',
          300: '#3F5A24',
          400: '#8FD150',
          500: '#B3F66B',
          600: '#A2E85A',
          700: '#C4FF86',
          800: '#D5FFA8',
          900: '#E6FFC9',
        },
        amber: {
          50: '#111A0D',
          100: '#16210F',
          200: '#223214',
          300: '#3F5A24',
          400: '#8FD150',
          500: '#B3F66B',
          600: '#A2E85A',
          700: '#C4FF86',
          800: '#D5FFA8',
          900: '#E6FFC9',
        },
        // A handful of leftover accent classes from an earlier pass still use
        // Tailwind's stock "blue" scale as the brand accent — keep it mapped
        // to the same scale so it stays consistent with the brand blue.
        blue: {
          50: '#111A0D',
          100: '#16210F',
          200: '#223214',
          300: '#3F5A24',
          400: '#8FD150',
          500: '#B3F66B',
          600: '#A2E85A',
          700: '#C4FF86',
          800: '#D5FFA8',
          900: '#E6FFC9',
        },
        purple: {
          50: '#111A0D',
          100: '#16210F',
          200: '#223214',
          300: '#C4FF86',
          400: '#D6FF9E',
          500: '#C4FF86',
          600: '#9BDB5A',
          700: '#8FD150',
          800: '#6FA83C',
          900: '#3F5A24',
        },
        background: '#090B0B',
        foreground: '#F5F4EE',
        card: '#111413',
        'card-foreground': '#F5F4EE',
        muted: '#0B0D0D',
        'muted-foreground': '#A8ADAD',
        border: '#262A28',
        destructive: '#F07A6E',
        'on-destructive': '#101709',
        ring: '#B3F66B',
      },
      fontFamily: {
        brand: ['DM Sans', 'sans-serif'],
        heading: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
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
