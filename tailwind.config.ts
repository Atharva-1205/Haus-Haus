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
        brand: {
          primary: "#0B3828", // Forest green
          secondary: "#174B38", // Deep green
          sage: "#A9B99D", // Muted sage
          ivory: "#F5F3ED", // Warm ivory
          stone: "#D8D2C5", // Warm stone
          charcoal: "#252A27", // Charcoal
          white: "#FFFFFF", // Pure white
          dark: "#072017",
          cream: "#FAF8F5",
          sand: "#EFECE6",
          border: "#E2DDD3",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "DM Serif Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(11, 56, 40, 0.04)",
        card: "0 4px 20px rgba(11, 56, 40, 0.06)",
        float: "0 12px 36px rgba(11, 56, 40, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;

