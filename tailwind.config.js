/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue:"#2D4ACD",
        customOrange:"#F48832",
        customGreen:"#32A87E",
        customGrey:"#616165",
        customBlack:"#E5E5E5"
      },
    },
  },
  plugins: [],
}

