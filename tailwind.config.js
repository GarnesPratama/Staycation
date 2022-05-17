module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#0000",
      white: "#ffff",
      blue_dark: "#152C5B",
      blue: "#3252DF",
      purple: "#7e5bef",
      pink: "#FF498B",
      orange: "#ff7849",
      green: "#1ABC9C",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      blank: "#E5E5E5",
      gray_light: "#B0B0B0",
      gray_form: "#F5F6F8",
      gray_text: "#898989",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 960px) { ... }

      lg: "1024px",
      // => @media (min-width: 1440px) { ... }

      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
