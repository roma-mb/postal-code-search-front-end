/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "courier-y": "#fdc300",
        "courier-yf": "#ffd500",
        "courier-b": "#004169",
        "courier-w": "#fef8ea",
        "error-r": "#f44336",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
