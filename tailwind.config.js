/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "pages/**/*.{html,js}",
    "components/**/*.{html,js}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        myowncolor: "#ffb4e6",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
