/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#1B1A17",
      orange: "#F0A500",
      white: "#FFFFFF",
      lightOrange: "#E6D5B8",
    },
    fontFamily: { body: ["Barlow Condensed"] },

    // extend: {},
  },
  plugins: [],
  darkMode: "class",
};
