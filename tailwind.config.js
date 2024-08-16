/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      "poppings": ["Poppins", "sans-serif"]
    },
    colors: {
      "yellow":"#FBD062",
      "black":"#111430",
      "white":"rgb(250 250 249)",
      "green":"#7AB259"
    },

    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
    },
  },
  plugins: [],
}