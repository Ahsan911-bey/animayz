import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["Sigmar", "sans-serif"], // Ensure sans-serif is added as fallback
        myfont2: ["Titan One", "sans-serif"], // Corrected font name
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: { // Place screens inside theme.extend
        '2xl': '1580px',
      },
    },
  },
  plugins: [],
};

export default config;