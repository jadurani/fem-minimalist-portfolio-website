import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      body2: "0.8rem",
      body1: "1rem",
      h6: "1rem",
      h5: "1.25rem",
      h4: "1.563rem",
      h3: "1.953rem",
      h2: "2.441rem",
      h1: "3.052rem",
    },
    extend: {
      colors: {
        verdigris: "#5FB4A2", // cyan
        elephant: "#203A4C", // dark blue
        tuna: "#33323D", // greyish dark blue
        alabaster: "#FAFAFA", // BG
        eggshell: "#EAEAEB", // text field
        error: "#F43030",
      },
      fontFamily: {
        heading: ["var(--font-heading)", ...fontFamily.sans],
        body: ["var(--font-body)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
