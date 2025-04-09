/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        sunriseYellow: '#FDE68A',
        sunsetOrange: '#F97316',
        deepBlue: '#1E3A8A',
        grassGreen: '#10B981',
        skyBlue: '#22D3EE',
        slateShadow: '#1F2937',
      },
    },
  },
  plugins: [],
};

