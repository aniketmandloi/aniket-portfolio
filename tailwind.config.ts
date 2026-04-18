import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        ember: "rgb(var(--ember) / <alpha-value>)",
        rule: "rgb(var(--rule) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        "paper-2": "rgb(var(--paper-2) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "masthead": ["clamp(3.75rem, 14vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "chapter": ["clamp(2rem, 5vw, 3.75rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "feature": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        widest2: "0.24em",
      },
      screens: {
        xs: "420px",
      },
      keyframes: {
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(-15%, 5%)" },
          "50%": { transform: "translate(7%, -15%)" },
          "70%": { transform: "translate(-5%, 15%)" },
          "90%": { transform: "translate(10%, 5%)" },
        },
      },
      animation: {
        "grain-shift": "grain-shift 8s steps(6) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
