/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          800: "#1b3b2b",
          900: "#11261c",
        },
        earth: {
          sand: "#f8f6f0",
          clay: "#c85a32",
          muted: "#e8e4dc",
        },
        goldenrod: "#d4af37",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
