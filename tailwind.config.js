module.exports = {

  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
    "./utils/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "3xl": "2000px",
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),],
}
