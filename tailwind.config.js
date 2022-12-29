/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E50FF',
        'secondary' : '#FFB830',
        'black' : '#0F182E',
        'white' : '#FFFFFF',
        'bgcolor' : '#0E0202'
      },
    },
  },
  variants: {},
  plugins: [],
};