/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'] 
      }
    },
    colors:{
      "popup_violet":"#7D4AEA",
      "popup_orange":"#F37C34",
      "popup_white":"#DDDDDD",
      "popup_card_container":"#EAEAEA",
      "popup_border_gray":"#D2DAE3"
    },
  },
  plugins: [],
}
