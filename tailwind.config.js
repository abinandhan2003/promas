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
        'primary-dark': '#060411',
        'bg-secondary-dark': '#01a8d4',
        'bg-primary-dark': '#45134e',
        'secondary-dark': '#fcc140',
        'text-color': '#f5f3f2',
        'primary-light': '#f5f3f2',
        'bg-secondary-light': '#01a8d4',
        'bg-primary-light': '#45134e',
        'secondary-light': '#fcc140',
        'text-light' : '#060411',
      },
    },

  },
  plugins: [],
}

