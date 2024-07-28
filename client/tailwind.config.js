/** @type {import("tailwindcss").Config} */
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
        gray: "#FCF9F1",
        fullWhite: "#fff",
        lightYellow: "#F4F1DD",
        darkYellow: "#F5E2AF",
        lightOrange: "#fdf9f0",
        hoverOrange: "#f6cc6a85",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    daisyui,
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          textShadow: "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.20)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      })
    }
  ],
  daisyui: {
    themes: [
      {
        "custom-theme": {
          "primary": "#570df8",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
          "secondary": "#7030A0",
          "fucsia": "#D22A89",
          "orange": "#F6CC6A",
        }
      }
    ]
  }
};
