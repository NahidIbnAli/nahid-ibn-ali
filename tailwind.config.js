/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      display: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
