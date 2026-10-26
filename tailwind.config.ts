import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#182230",
        muted: "#667085",
        line: "#e8ebef",
        soft: "#f7f8fa",
        accent: "#4f46e5"
      }
    }
  },
  plugins: []
};

export default config;