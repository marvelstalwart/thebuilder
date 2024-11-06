/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#5B3C6A'
      },
      fontFamily: {
        mont: ["Montserrat", 'sans-serif']
      },
      boxShadow: {
        'custom-opacity': '0 4px 15px rgba(0, 0, 0, 0.05)', // Lower the last number for less opacity
      },
    },
  },
  plugins: [],
}
