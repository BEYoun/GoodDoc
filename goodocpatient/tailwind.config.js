const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#447EF2',
        'primary-deep': '#1E4BA6',
        'primary-low': '#6196FF',
        accent: '#FFE195',
        'accent-deep': '#E5B742',
        'accent-low': '#FFFBF1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
