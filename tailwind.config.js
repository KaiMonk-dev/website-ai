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
          purple: '#8b5cf6',
          'purple-light': '#c084fc',
          blue: '#6366f1',
          cyan: '#22d3ee',
          pink: '#e879f9',
          dark: '#050508',
          'dark-2': '#0a0a12',
          'dark-3': '#0f0f1c',
          glass: 'rgba(255,255,255,0.05)',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 90% 70% at 50% -10%, rgba(139,92,246,0.5) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 80% 50%, rgba(99,102,241,0.3) 0%, transparent 50%), radial-gradient(ellipse 50% 60% at 20% 80%, rgba(34,211,238,0.2) 0%, transparent 50%), radial-gradient(ellipse 40% 40% at 60% 30%, rgba(232,121,249,0.15) 0%, transparent 50%)',
        'card-gradient': 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(99,102,241,0.06) 100%)',
        'section-gradient': 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)',
        'glow-gradient': 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(99,102,241,0.15) 50%, rgba(34,211,238,0.1) 100%)',
      },
      boxShadow: {
        'neon-purple': '0 0 25px rgba(139,92,246,0.6), 0 0 80px rgba(139,92,246,0.2)',
        'neon-blue': '0 0 25px rgba(99,102,241,0.6), 0 0 80px rgba(99,102,241,0.2)',
        'neon-cyan': '0 0 25px rgba(34,211,238,0.5)',
        'neon-pink': '0 0 25px rgba(232,121,249,0.4)',
        'glass': '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        'card-hover': '0 20px 60px rgba(139,92,246,0.35), 0 8px 32px rgba(0,0,0,0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'orb-ring': 'orbRing 3s ease-out infinite',
        'chip-float': 'chipFloat 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(139,92,246,0.5), 0 0 60px rgba(139,92,246,0.2)' },
          '50%': { boxShadow: '0 0 60px rgba(139,92,246,0.9), 0 0 120px rgba(99,102,241,0.4), 0 0 180px rgba(34,211,238,0.2)' },
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
        orbRing: {
          '0%':   { transform: 'scale(1)',   opacity: '0.6' },
          '100%': { transform: 'scale(2.8)', opacity: '0' },
        },
        chipFloat: {
          '0%, 10%':   { opacity: '0', transform: 'translateY(8px)' },
          '20%, 80%':  { opacity: '1', transform: 'translateY(0px)' },
          '90%, 100%': { opacity: '0', transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
