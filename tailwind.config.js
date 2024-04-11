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
      'Lapis': ['Lapis']
    },
    colors: {
      "gray-light": "#BB5299", //Thirdary Background
      "gray-mid": "#5E2679", // Secondary Background
      "gray-dark": "#13131d", // Main Background
      "black": "#1f2937", // Main Background

      "orange-light": "#F37321",
      "orange-mid": "#E85A24",
      "orange-dark": "#C24327",

      "off-white": "#D5D6D6",
      "white": "#EFEFF0",

      "lightpink": "#bb5299",
      "pink": "#5e2679",
      "grad-yellow": '#417926', // Green...
      "grad-blue": '#9CD0E0', // Blue....

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
