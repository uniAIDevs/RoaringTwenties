const { resolveProjectPath } = require('wasp/dev')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    resolveProjectPath('./src/**/*.{js,jsx,ts,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  colors.stone[50],
          100: colors.stone[100],
          200: colors.stone[200],
          300: colors.stone[300],
          400: colors.stone[400],
          500: colors.stone[500],
          600: colors.stone[600],
          700: colors.stone[700],
          800: colors.stone[800],
          900: colors.stone[900],
        }
      }
    },
  },
}