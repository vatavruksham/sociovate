/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7c3aed', // violet-600
          light: '#a78bfa',
          dark: '#6d28d9',
        },
        accent: {
          DEFAULT: '#06b6d4', // cyan-500
          light: '#22d3ee',
          dark: '#0891b2',
        },
        surface: {
          DEFAULT: '#faf8ff',
          50: '#f7f5ff',
          100: '#eee9fc',
          200: '#ded4f7',
          300: '#c7b8ef',
        },
        ink: {
          DEFAULT: '#20163a',
          soft: '#4d3f6b',
          muted: '#7e719a',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(124,58,237,0.06), 0 8px 24px rgba(124,58,237,0.07)',
        'card-hover': '0 10px 34px rgba(124,58,237,0.18)',
        glow: '0 0 24px rgba(124,58,237,0.40)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(124,58,237,0.30)' },
          '50%': { boxShadow: '0 0 30px rgba(124,58,237,0.55)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
