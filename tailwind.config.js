/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7c3aed',
          'purple-light': '#a855f7',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          dark: '#0a0a0f',
          'dark-2': '#0f0f1a',
          'dark-3': '#13131f',
          glass: 'rgba(255,255,255,0.05)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(59,130,246,0.2) 0%, transparent 50%), radial-gradient(ellipse 40% 50% at 20% 80%, rgba(6,182,212,0.15) 0%, transparent 50%)',
        'card-gradient': 'linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(59,130,246,0.05) 100%)',
        'section-gradient': 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.15)',
        'neon-blue': '0 0 20px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.15)',
        'neon-cyan': '0 0 20px rgba(6,182,212,0.4)',
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        'card-hover': '0 20px 60px rgba(124,58,237,0.25), 0 8px 32px rgba(0,0,0,0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(124,58,237,0.8), 0 0 80px rgba(124,58,237,0.3)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
