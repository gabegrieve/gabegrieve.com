const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        "off-white": "#F8FAFC",
        "black-blue": "#111729",
        "light-blue": "#A4C8E1",
        "dull-blue": "#64748B",
      },
      lineHeight: {
        tighter: "1.15",
      },
    },
  },
  plugins: [],
};
