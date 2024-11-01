import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bannerImg: "url('/background.png')"
      },
      colors: {
        linkedin: {
          100: "#cee0f3",
          200: "#9dc2e7",
          300: "#6ca3da",
          400: "#3b85ce",
          500: "#0a66c2",
          600: "#08529b",
          700: "#063d74",
          800: "#04294e",
          900: "#021427"
        },
      },
      
    },
  },
  plugins: [],
};
export default config;
