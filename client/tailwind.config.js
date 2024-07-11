/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F0F9F84D",
        orange: "#F6CC6A",
        textColor: "#232626",
        white: "#F0F9F8",
        magenta: "#7030A0",
        sky: "#17A2C8",
        fucsia: "#D22A89",
        accent: "#FF4A69",
        darkOrange: "#F5C046",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
