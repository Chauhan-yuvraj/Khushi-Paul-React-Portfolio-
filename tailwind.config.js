/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        EerieBlack : '#1B1B1B',
        TextColor  : '#9C9C9C',
        BtnColor : '#3F8E00' 
      },
      fontFamily:{
        IBM :['IBM Plex Mono', 'monospace'],
        Raleway : ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}