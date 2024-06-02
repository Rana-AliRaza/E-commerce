/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#088178",
        btnColor: "#41506B",
        hoverBtnColor: "#046963",
        navbarBorder:"#bdd5d3"
      },
      backgroundColor:{
         secondary: "#088178",
         hoverBtn: "#066760"
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'spartan': ['League Spartan','sans-serif']
      },
      height: {
        'screen-80': '80vh'
      },
      listStyleType: {
        circle: 'circle',
        alpha: "lower-alpha",
        roman: 'lower-roman',
      },
      borderColor: {
        secondary: "#088178",
      }
    },
  },
  plugins: [],
}