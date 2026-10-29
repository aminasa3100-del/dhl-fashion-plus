import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f4ef',
          100: '#f1e6d8',
          200: '#e0c9aa',
          300: '#d0ac82',
          400: '#b98352',
          500: '#8c5d31',
          600: '#704a27',
          700: '#57371c',
          800: '#382512',
          900: '#1f140d'
        },
        sand: '#f6f1eb',
        cream: '#fbf7f2'
      },
      boxShadow: {
        soft: '0 12px 30px rgba(74, 52, 31, 0.08)'
      },
      fontFamily: {
        sans: ['Tahoma', 'Arial', 'sans-serif'],
        arabic: ['Tahoma', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
