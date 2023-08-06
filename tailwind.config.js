/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      md: "950px",
    },
    extend: {
      colors: {
        Blue1: "#3559C7",
        ash2: "#525B7A",
        bluelogo: "#2947A9",
        orange1: "#F9995D",
        ash: "#E0E3EB",
        purple1: "#5856E1",
        purple2: "#6360f8d9",
        ash1: "#606060",
        dirtwhite: "#F8F7FB",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },
      keyframes: {
        slideInDown: {
          "0%": { transform: "translateX(-500px)" },
          "50%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        slideInDown: "slideInDown 3s ease-in-out 0s 1 normal",
      },
    },
  },
  plugins: [],
};
