/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#4b0082 ",
        },
        dark: {
          DEFAULT: "#0A0B0B ",
          100: "#0A0B0B ",
          200: "#16181d ",
          500: "#0f1115 ",
          700: "#202125 ",
        },
      },
    },
  },
  variants: {
    boxShadow: ["dark"],
  },
  plugins: [],
};
