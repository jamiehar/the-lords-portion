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
        ink: "#0d0d0b",
        parchment: "#c8b99a",
        "parchment-light": "#e7d6ad",
        "parchment-dark": "#b8a47f",
        seal: "#5c4a2a",
        gold: "#c9a84c",
        "gold-light": "#e6cd84",
        crimson: "#6b2018",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        courier: ["var(--font-courier)", "monospace"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-8px)" },
          "40%": { transform: "translateX(8px)" },
          "60%": { transform: "translateX(-6px)" },
          "80%": { transform: "translateX(6px)" },
        },
        "gold-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(201,168,76,0.55)" },
          "70%": { boxShadow: "0 0 0 10px rgba(201,168,76,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(201,168,76,0)" },
        },
        sealfloat: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-5px) rotate(1deg)" },
        },
        risein: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        shake: "shake 0.45s ease-in-out",
        "gold-pulse": "gold-pulse 0.9s ease-out",
        sealfloat: "sealfloat 6s ease-in-out infinite",
        risein: "risein 0.4s ease",
      },
    },
  },
  plugins: [],
};
export default config;
