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
          primary: 'hsl(215, 45%, 55%)',
          'primary-dark': 'hsl(215, 50%, 45%)',
          'primary-light': 'hsl(215, 40%, 65%)',
          accent: 'hsl(38, 75%, 50%)',
          'accent-dark': 'hsl(38, 80%, 42%)',
          background: 'hsl(0, 0%, 100%)',
          'background-alt': 'hsl(220, 20%, 97%)',
          card: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(220, 25%, 18%)',
          'muted-foreground': 'hsl(220, 15%, 50%)',
          muted: 'hsl(220, 15%, 92%)',
          border: 'hsl(220, 20%, 88%)',
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
