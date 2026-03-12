import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#8E2458",
        accent: "#D4AF37",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
        glow: "pulse-glow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;