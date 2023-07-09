/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // #4D4D4D
      colors: {
        customDark: "#4D4D4D",
      },
    },
  },
  plugins: [],
};
