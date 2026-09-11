import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        "primary-blue": "#0057A8",
        "primary-dark": "#003B73",
        "primary-yellow": "#FFC928",
        "yellow-light": "#FFF7D6",
        
        // Neutral colors
        "bg-light": "#F7F9FC",
        "text-primary": "#1F2937",
        "text-secondary": "#64748B",
        "border-color": "#E2E8F0",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
