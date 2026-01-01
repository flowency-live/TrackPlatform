import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        track: {
          primary: 'hsl(215, 45%, 45%)',
          'primary-dark': 'hsl(215, 45%, 35%)',
          'primary-light': 'hsl(215, 45%, 55%)',
          accent: 'hsl(32, 95%, 52%)',
          'accent-light': 'hsl(32, 95%, 62%)',
          background: 'hsl(220, 40%, 8%)',
          'background-light': 'hsl(220, 35%, 14%)',
          card: 'hsl(220, 35%, 14%)',
          foreground: 'hsl(0, 0%, 98%)',
          'muted-foreground': 'hsl(215, 20%, 60%)',
          muted: 'hsl(220, 30%, 18%)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
