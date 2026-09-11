import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#12372A",
        sand: "#E7D8C0",
        teal: "#2F7F7B",
        offwhite: "#F7F6F1",
        charcoal: "#17201C",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "hero-desktop": ["6rem", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "hero-tablet": ["4rem", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "hero-mobile": ["2.75rem", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
