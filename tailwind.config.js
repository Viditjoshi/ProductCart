/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-1": ["Kablammo", "system-ui"],
        "font-2": ["Oxanium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
