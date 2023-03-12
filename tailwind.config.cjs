const theme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {
      fontFamily: {sans: ['Outfit', ...theme.fontFamily.sans]}
    },
  },
  plugins: [],
}
