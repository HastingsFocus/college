export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // default font
      },
      colors: {
    primary: "#38bdf8",   // light blue 🔵
    accent: "#f97316",    // orange 🟠
    darkText: "#111827",
  },
    },
  },
  plugins: [],
};