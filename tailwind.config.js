/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      textClr: "#101828",
      lightBLue: "#475467",
      lightGray: "#d0d5dd",
      outLineClr: "#9e77ed",
      white: "rgb(255 255 255)",
      lightBG: "#f9fafb",
      secondarygray: "rgba(208, 213, 221, 1)",
      purple: "rgba(127, 86, 217, 1)",
    },
    screens: {
      md: { max: "767px" },
      xs: { max: "343px" },
    },
    extend: {
      backgroundImage: {
        "modal-texture": "url('./src/assets/circles.svg')",
      },
      boxShadow: {
        modalShadow: "0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        inputShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [],
};
