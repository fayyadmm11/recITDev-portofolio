/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tomorrow: ["Tomorrow", "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [],
};
