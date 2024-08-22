/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'blue-dark': '#181e3e',
        'blue-light': '#01a8d4',
        'purplee': '#45134e',
        'yelloww': '#fcc140',
        'whitee': '#ffffff',
      },
    },

  },
  plugins: [],
}

