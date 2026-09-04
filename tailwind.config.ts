import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070d1a",
          900: "#0b1526",
          800: "#0f1f38",
          700: "#152a4a",
          600: "#1c3760",
          500: "#284674",
        },
        gold: {
          50: "#faf6ec",
          100: "#f2e8cc",
          200: "#e5d3a0",
          300: "#d4ba72",
          400: "#c6a352",
          500: "#b8913c",
          600: "#9c7830",
          700: "#7d5f27",
        },
        ink: {
          50: "#f6f7f9",
          100: "#eceef1",
          200: "#d7dbe1",
          300: "#a9b0bc",
          400: "#7a8494",
          500: "#5a6373",
          600: "#434b59",
          700: "#2e3542",
          800: "#1c212b",
          900: "#12151c",
        },
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(160deg, #0b1526 0%, #152a4a 60%, #1c3760 100%)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
