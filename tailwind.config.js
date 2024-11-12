/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c08552",

          secondary: "#8c523b",

          accent: "#f2d6ce",

          neutral: "#f2e7dd",

          "base-100": "#fff9f2",

          info: "#bae0da",

          success: "#7a958f",

          warning: "#ffc98b",

          error: "#ca8e82",
        },
      },
      "night",
    ],
  },
  darkMode: ["selector", '[data-theme="night"]'],
  plugins: [require("daisyui")],
};
