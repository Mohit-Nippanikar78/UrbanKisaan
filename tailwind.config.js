/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(), addVariablesForColors],
};

function addVariablesForColors(options) {
  const { addBase, theme } = options;
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.entries(allColors).reduce((acc, [key, val]) => {
    acc[`--${key}`] = val;
    return acc;
  }, {});

  addBase({
    ":root": newVars,
  });
}

