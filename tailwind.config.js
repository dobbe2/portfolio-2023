/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 1s"
      },
      keyframes: {
        shine: {
          "100%": {left: "100%"},
        },
      },
      colors: {
      'purple-heart': '#5f22d9',
      'viking': '#01ffd3',
      'viking-tint': '#01ffd34c',
      'dusty-gray': '#9c9c9c',
      'mercury': '#e4e4e4',
      'galliano': '#d7ad0d',
      'christale': '#2c016d',
      'scorpion': '#5b5b5b',
      'heliotrope': "#ac73ff",
      'persian-red': '#c82b28',
      'emerald': '#32c563',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
