/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Work Sans', 'sans-serif'],
      },
      backgroundColor: {
        app: '#E5E7EB', 
      },
    },
  },
  plugins: [],
}
