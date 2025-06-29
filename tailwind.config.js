/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive-1': ['Dancing Script', 'cursive'],
        'cursive-2': ['Great Vibes', 'cursive'],
        'cursive-3': ['Pacifico', 'cursive'],
        'cursive-4': ['Kaushan Script', 'cursive'],
      },
      colors: {
        primary: {
          50: '#fef7ff',
          100: '#fdeeff',
          200: '#fdddff',
          300: '#fac2ff',
          400: '#f597ff',
          500: '#ed64ff',
          600: '#d730f7',
          700: '#b91de3',
          800: '#9818b9',
          900: '#7c1a98',
        }
      }
    },
  },
  plugins: [],
} 