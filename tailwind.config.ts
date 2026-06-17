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
        background: "#09090B",
        foreground: "#F4F1EA",

        gold: {
          DEFAULT: "#D6B25E",
        },

        purple: {
          DEFAULT: "#8B5CF6",
        },
      },

      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-cormorant)"],
      },

      boxShadow: {
        glow: "0 0 80px rgba(214,178,94,0.15)",
        purpleGlow: "0 0 80px rgba(139,92,246,0.15)",
      },

      backdropBlur: {
        luxury: "24px",
      },
    },
  },

  plugins: [],
};

export default config;