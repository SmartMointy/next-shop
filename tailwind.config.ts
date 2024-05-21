import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slideInTop: "slideInTop 300ms ease-in forwards",
      },
      keyframes: {
        slideInTop: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      screens: {
        xs: "460px",
      },
      colors: {
        os: "#FFCF5D",
        gold: {
          DEFAULT: "#FFCF5D",
          50: "#FFFAED",
          /*50: "#FFF8E7",*/
          100: "#FFF3D7",
          200: "#FFE7AF",
          300: "#FFDB86",
          400: "#FFCF5D",
          500: "#FBC850",
          600: "#FFBE25",
          700: "#ECA600",
          800: "#B47E00",
          900: "#7C5700",
          950: "#604300",
        },
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
