/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'purple-heart': '#5f22d9',
      'viking': '#51d6ca',
      'dusty-gray': '#9c9c9c',
      'mercury': '#e4e4e4',
      'galliano': '#d7ad0d',
      'christale': '#2c016d',
      'scorpion': '#5b5b5b',
      'heliotrope': "#ac73ff",
      'persian-red': '#c82b28',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
