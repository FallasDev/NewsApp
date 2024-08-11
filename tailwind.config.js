/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-400': 'repeat(auto-fill, minmax(400px, 1fr))'
      },
      screens: {
        cellphone: "792px"
      }
    },
  },
  plugins: [],
}