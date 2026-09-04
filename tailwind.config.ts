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
          950: "#22030f",
          900: "#33051a",
          800: "#470826",
          700: "#5e0b32",
          600: "#7a0f40",
          500: "#98164e",
        },
        gold: {
          50: "#fbeef1",
          100: "#f5d7de",
          200: "#eab0bd",
          300: "#dc8496",
          400: "#c85c74",
          500: "#b03a56",
          600: "#902645",
          700: "#711b38",
        },
        ink: {
          50: "#f7f6f7",
          100: "#ece9ea",
          200: "#d7d1d3",
          300: "#aea3a8",
          400: "#7f7178",
          500: "#5f525a",
          600: "#463a42",
          700: "#31272d",
          800: "#1f171b",
          900: "#140e11",
        },
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Arial", "sans-serif"],
        sans: ["var(--font-body)", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(160deg, #22030f 0%, #470826 55%, #7a0f40 100%)",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(3%, -4%, 0) scale(1.08)" },
        },
        driftSlow: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(-4%, 3%, 0) scale(1.05)" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        "drift-slow": "driftSlow 24s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
