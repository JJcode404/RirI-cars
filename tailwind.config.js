/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CC0000',
          dark: '#AA0000',
          darker: '#880000',
          light: '#E60000',
          subtle: '#FEF2F2',
        },
        dark: {
          DEFAULT: '#0D0D0D',
          charcoal: '#1A1A1A',
          surface: '#242424',
          nav: '#0B1A31',
        },
        accent: {
          DEFAULT: '#D4AF37',
          dark: '#B8960C',
          light: '#F0CE60',
        },
        brand: {
          bg: '#F7F7F7',
          surface: '#FFFFFF',
          low: '#F4F3F3',
          border: '#E5E7EB',
        },
        muted: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
          dark: '#374151',
        },
        success: { DEFAULT: '#16A34A', bg: '#F0FDF4' },
        warning: { DEFAULT: '#D97706', bg: '#FFFBEB' },
        error: { DEFAULT: '#EF4444', bg: '#FEF2F2' },
        info: { DEFAULT: '#3B82F6', bg: '#EFF6FF' },
      },
      fontFamily: {
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        full: '9999px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 10px 30px rgba(204,0,0,0.12), 0 4px 10px rgba(0,0,0,0.10)',
        'red-glow': '0 0 24px rgba(204,0,0,0.35)',
        'gold-glow': '0 0 20px rgba(212,175,55,0.40)',
        nav: '0 2px 20px rgba(0,0,0,0.60)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(11,26,49,0.72) 50%, rgba(0,0,0,0.55) 100%)',
        'red-shine': 'linear-gradient(135deg, #AA0000 0%, #CC0000 50%, #E60000 100%)',
        'cta-gradient': 'linear-gradient(135deg, #0B1A31 0%, #1A1A1A 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
