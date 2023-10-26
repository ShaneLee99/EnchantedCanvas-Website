/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'serif']
    },
    colors: {
      "gray-light": "#2A3540",
      "gray-mid": "#202831",
      "gray-dark": "#1D2630",

      "orange-light": "#F37321",
      "orange-mid": "#E85A24",
      "orange-dark": "#C24327",

      "off-white": "#D5D6D6",
      "white": "#EFEFF0",

      "grad-pink": "#EF3A98",
      "grad-yellow": '#F0E7C4',
      "grad-blue": '#9CD0E0',

      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      sky: colors.sky,
      black: colors.black,
      indigo: colors.indigo,
      emerald: colors.emerald,
      transparent: 'transparent'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      breakpoints: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px'
      }
    },
  },
  plugins: [
    require('tailwind-clip-path')
  ],
}
