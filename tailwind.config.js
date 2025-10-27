/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        'pure-white': '#FFFFFF',
        'soft-gray': '#F7F7F7',
        'charcoal-black': '#1A1A1A',
        'slate-gray': '#4D4D4D',
        'cool-gray': '#888888',
        'light-gray': '#DDDDDD',
        'divider-gray': '#E6E6E6',
        
        // Dark Mode Colors - Pure black background with white text
        'dark-background': '#000000',
        'dark-surface': '#111111',
        'dark-surface-elevated': '#1A1A1A',
        'dark-text': '#FFFFFF',
        'dark-text-secondary': '#FFFFFF',
        'dark-border': '#FFFFFF',
        'dark-divider': '#333333',
        
        // Accent Colors (work in both modes)
        'burgundy-red': '#8A3C3C',
        'olive-green': '#4A6652',
        'slate-blue': '#3C546E',
        'dusty-rose': '#A65D5D',
        'gold-accent': '#A68A64',
        
        // Royal Blue for headings
        'royal-blue': '#1E3A8A',
        'navy-blue': '#1E40AF',
        
        // Interaction Glows
        'soft-burgundy-glow': '#D9B3B3',
        'champagne-gold-glow': '#E1CFA5',
        'dusty-green-glow': '#9BC5A2',
        
        // Legacy compatibility
        'charcoal': '#1A1A1A',
        'warm-grey': '#F7F7F7',
        'soft-grey': '#DDDDDD',
        'medium-grey': '#888888',
        'dark-grey': '#4D4D4D',
        'cognac': '#8A3C3C',
      },
      fontFamily: {
        'cambria': ['Cambria', 'serif'],
        'inter': ['Cambria', 'serif'],
        'montserrat': ['Cambria', 'serif'],
        'playfair': ['Cambria', 'serif'],
      },
      letterSpacing: {
        'luxury': '0.05em',
        'wide': '0.1em',
        'elegant': '0.08em',
        'spacious': '0.15em',
      },
      borderRadius: {
        'luxury': '1rem',
        '4xl': '1rem',
        '3xl': '1rem',
        '2xl': '1rem',
        'xl': '1rem',
        'lg': '1rem',
        'md': '1rem',
        'sm': '1rem',
        'DEFAULT': '1rem',
        'none': '0',
        'full': '9999px',
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(138, 60, 60, 0.15)',
        'soft': '0 2px 15px rgba(26, 26, 26, 0.1)',
        'luxury-soft': '0 8px 32px rgba(26, 26, 26, 0.1)',
        'inner-glow': 'inset 0 0 20px rgba(138, 60, 60, 0.1)',
        'futuristic': '0 8px 32px rgba(138, 60, 60, 0.2), 0 0 0 1px rgba(138, 60, 60, 0.1)',
        // Dark mode shadows - All white glows
        'dark-soft': '0 2px 15px rgba(255, 255, 255, 0.1)',
        'dark-luxury-soft': '0 8px 32px rgba(255, 255, 255, 0.15)',
        'dark-elegant': '0 4px 20px rgba(255, 255, 255, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'float-in': 'floatIn 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'flip-y': 'flipY 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'modal-enter': 'modalEnter 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'futuristic-glow': 'futuristicGlow 4s ease-in-out infinite',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'title-glow': 'titleGlowBlue 5s ease-in-out infinite',
        'micro-pulse': 'microPulse 2s ease-in-out infinite',
        'subtle-rotate': 'subtleRotate 0.3s ease-out',
        'page-fade-in': 'pageFadeIn 300ms ease-out',
        'page-fade-out': 'pageFadeOut 250ms ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.96)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        flipY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        modalEnter: {
          '0%': { opacity: '0', transform: 'translateY(60px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        futuristicGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(138, 60, 60, 0.4), 0 0 40px rgba(138, 60, 60, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(138, 60, 60, 0.6), 0 0 60px rgba(138, 60, 60, 0.3), 0 0 90px rgba(138, 60, 60, 0.1)' 
          },
        },
        titleGlowBlue: {
          '0%, 100%': { 
            textShadow: '0 0 15px rgba(30, 58, 138, 0.4), 0 0 30px rgba(30, 58, 138, 0.3), 0 0 45px rgba(30, 58, 138, 0.2)' 
          },
          '50%': { 
            textShadow: '0 0 25px rgba(30, 58, 138, 0.6), 0 0 50px rgba(30, 58, 138, 0.4), 0 0 75px rgba(30, 58, 138, 0.3)' 
          },
        },
        textShimmer: {
          '0%, 100%': { 
            backgroundPosition: '200% center' 
          },
          '50%': { 
            backgroundPosition: '-200% center' 
          },
        },
        microPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        subtleRotate: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(2deg)' },
        },
        pageFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pageFadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      backdropBlur: {
        'luxury': '20px',
      },
      backgroundImage: {
        'elegant-gradient': 'linear-gradient(135deg, #8A3C3C, #A65D5D, #A68A64)',
        'royal-blue-gradient': 'linear-gradient(135deg, #1E3A8A, #1E40AF, #3B82F6)',
        'futuristic-gradient': 'linear-gradient(135deg, #3C546E, #4A6652, #8A3C3C)',
        'warm-shimmer': 'linear-gradient(90deg, transparent, rgba(138, 60, 60, 0.6), transparent)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '13': '3.25rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    function({ addUtilities, addBase }) {
      addBase({
        'body': {
          backgroundColor: '#FFFFFF',
          color: '#1A1A1A',
          fontFamily: 'Cambria, serif',
        },
        '.dark body': {
          backgroundColor: '#000000',
          color: '#FFFFFF',
        },
        'button': {
          borderRadius: '1rem !important',
        },
        '.cursor-pointer': {
          borderRadius: '1rem !important',
        },
        'div[onclick]': {
          borderRadius: '1rem !important',
        },
        '[role="button"]': {
          borderRadius: '1rem !important',
        },
        'a, input, select, textarea': {
          borderRadius: '1rem !important',
        },
      });
      
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.glass-blur': {
          backdropFilter: 'blur(20px)',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '1rem',
        },
        '.dark .glass-blur': {
          background: 'rgba(0, 0, 0, 0.95)',
        },
        '.elegant-text-gradient': {
          background: 'linear-gradient(135deg, #1E3A8A, #1E40AF, #3B82F6)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          backgroundSize: '200% auto',
          animation: 'textShimmer 4s ease-in-out infinite',
        },
        '.dark .elegant-text-gradient': {
          background: 'linear-gradient(135deg, #FFFFFF, #F0F0F0, #E0E0E0)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          backgroundSize: '200% auto',
          animation: 'textShimmer 4s ease-in-out infinite',
        },
        '.royal-blue-glow': {
          boxShadow: '0 0 20px rgba(30, 58, 138, 0.4), 0 0 40px rgba(30, 58, 138, 0.2)',
          border: '2px solid rgba(30, 58, 138, 0.6)',
          borderRadius: '1rem',
        },
        '.royal-blue-hover-glow:hover': {
          boxShadow: '0 0 25px rgba(30, 58, 138, 0.6), 0 0 50px rgba(30, 58, 138, 0.3)',
          border: '2px solid rgba(30, 58, 138, 0.8)',
          transform: 'scale(1.02) perspective(1000px) rotateY(2deg)',
          borderRadius: '1rem',
        },
        '.dark .royal-blue-hover-glow:hover': {
          boxShadow: '0 0 25px rgba(100, 149, 237, 0.4), 0 0 50px rgba(100, 149, 237, 0.2)',
          border: '2px solid rgba(100, 149, 237, 0.6)',
          transform: 'scale(1.02) perspective(1000px) rotateY(2deg)',
          borderRadius: '1rem',
        },
        '.futuristic-glow': {
          boxShadow: '0 0 20px rgba(138, 60, 60, 0.4), 0 0 40px rgba(138, 60, 60, 0.2)',
          border: '2px solid rgba(138, 60, 60, 0.6)',
          borderRadius: '1rem',
        },
        '.futuristic-glow-red': {
          boxShadow: '0 0 15px rgba(255, 69, 69, 0.6), 0 0 30px rgba(255, 69, 69, 0.3)',
          border: '2px solid rgba(255, 69, 69, 0.8)',
          borderRadius: '1rem',
        },
        '.futuristic-glow-yellow': {
          boxShadow: '0 0 15px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.3)',
          border: '2px solid rgba(255, 215, 0, 0.8)',
          borderRadius: '1rem',
        },
        '.futuristic-glow-green': {
          boxShadow: '0 0 15px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.3)',
          border: '2px solid rgba(34, 197, 94, 0.8)',
          borderRadius: '1rem',
        },
        '.futuristic-hover-glow:hover': {
          boxShadow: '0 0 25px rgba(138, 60, 60, 0.6), 0 0 50px rgba(138, 60, 60, 0.3)',
          border: '2px solid rgba(138, 60, 60, 0.8)',
          transform: 'scale(1.02) perspective(1000px) rotateY(2deg)',
          borderRadius: '1rem',
        },
        '.dark .futuristic-hover-glow:hover': {
          boxShadow: '0 0 25px rgba(255, 255, 255, 0.6), 0 0 50px rgba(255, 255, 255, 0.3)',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          transform: 'scale(1.02) perspective(1000px) rotateY(2deg)',
          borderRadius: '1rem',
        },
        '.rounded-force': {
          borderRadius: '1rem !important',
        },
        '.page-enter-active': {
          animation: 'pageFadeIn 300ms ease-out',
        },
        '.page-exit-active': {
          animation: 'pageFadeOut 250ms ease-in',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};