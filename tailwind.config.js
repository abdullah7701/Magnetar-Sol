/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        primary: "#0284C7",
        secondary: "#22D3EE",
        mid: "#24DBEF",
        customblack: "#1F2937",
      },
    },
  },
  plugins: [],
};
