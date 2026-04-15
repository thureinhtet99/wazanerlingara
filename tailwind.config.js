const { themeTokens } = require("./constants/theme-tokens");

const fontSize = Object.fromEntries(
  Object.entries(themeTokens.fontSize).map(([name, size]) => [
    name,
    [
      `${size}px`,
      {
        lineHeight: `${themeTokens.lineHeight[name]}px`,
      },
    ],
  ]),
);

const lineHeight = Object.fromEntries(
  Object.entries(themeTokens.lineHeight).map(([name, size]) => [
    name,
    `${size}px`,
  ]),
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: themeTokens.palette,
      fontFamily: {
        primary: [themeTokens.fontFamily.primary],
      },
      fontSize,
      lineHeight,
    },
  },
  plugins: [],
};
