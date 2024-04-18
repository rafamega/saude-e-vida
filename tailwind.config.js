/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clrs: {
          primary: "#FFF8D6",
          secondary: "#F7E1AE",
          accent_light: "#A4D0A4",
          accent_dark: "#617A55",
        },
      },
      fontFamily: {
        alegreya: ["Alegreya Sans", "sans-serif"],
        quattrocento: ["Quattrocento", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        della: ["Della Respira", "serif"],
        caveat: ["Caveat", "cursive"],
        amatic: ["Amatic SC", "cursive"],
      },
    },
  },
  plugins: [],
};
