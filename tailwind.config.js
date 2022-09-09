/*
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}*/

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        'layout-primary': colors.blue[600],
        'layout-bg': colors.slate,
        'layout-text': colors.white,
        main: colors.gray[100],
        'main-text': colors.gray[900]
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
