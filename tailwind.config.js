/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(29.57% 69.06% at 50% 43.67%, #1A1D4B 0%, #050614 100%)',
      },

    },
  },
  plugins: [],
}