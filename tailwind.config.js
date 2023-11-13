/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        updown: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-25px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        floating: "updown 5s infinite ease-in-out",
        fadeIn: "fadeIn 1s ",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
};
