/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': '#116459',
      'blue': '#0a07a2',
      'dark-grey': '#252525',
      'white': '#fafafa',
      'light-grey': '#D4D8D4',
      'purple': '#B67298',
      'blush': "#e6bbbb",
      'sage': "#c2c2a6",
      'redish': '#E21B1B'
    },
    extend: {
      screens: {
        'md': '800px', 
      },
    },
  },
  plugins: [],
}