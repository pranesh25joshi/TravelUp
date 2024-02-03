/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        heropattern:'url("./vedansh/hero-bg.jpg")',
        bottompattern:'url("./vedansh/cta-bg.jpg")'
      },
      spacing:{
        100: '40rem'
      },
      screens:{
        gd: '930px'
      }
    },
  },
  plugins: [],
}
