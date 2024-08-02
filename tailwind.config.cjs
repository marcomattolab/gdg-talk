/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        elca: {
          red: "#e03a26",
          blue: "#007fff",
        },
      },
    },
    fontFamily: {
      sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
