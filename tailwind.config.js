/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        khaki: "#8C7156",
      },
      fontFamily: {
        'Jost': ["Jost", " sans - serif"],
        'Bebas': ["Bebas Neue", "sans - serif"],
      },
    },
  },
  plugins: [],
};
