import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        foreground: "#1A1A1A",
        text: "#E5EFD8",
        accent: "#393434",
        primary: "#191919",
        secondary: "#C3D1B1",
      },
    },
  },
  plugins: [],
} satisfies Config;
