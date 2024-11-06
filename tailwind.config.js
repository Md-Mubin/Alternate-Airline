/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brandColor" : "#005AA9",
        "commonColor" : "#636363"
      },
    },

    fontFamily:{
      "poppins" : [ "Poppins", "sans-serif"],
    },

    container:{
      center:true ,
      padding:{
        DEFAULT: "35px",
        md: "47px",
        xl: "90px"
      }
    }
  },
  plugins: [],
}