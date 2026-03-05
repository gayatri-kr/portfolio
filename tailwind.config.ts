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
        cosmic: {
          dark: "#0d0d24",
          purple: "#7c3aed",
          violet: "#8b5cf6",
          pink: "#e59cff",
          blue: "#9cb2ff",
        },
      },
    },
  },
  plugins: [],
};

export default config;
