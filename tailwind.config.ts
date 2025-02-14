import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stack: "rgba(255, 255, 255, .1)",
        accent: "rgba(255, 255, 0, 1)"
      },
    },
  },
  plugins: [],
} satisfies Config;
