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
        primary: "hsl(180, 29%, 50%)", 
        neutral: {
          lightGrayishCyanBg: "hsl(180, 52%, 96%)", 
          lightGrayishCyanFilter: "hsl(180, 31%, 95%)", 
          darkGrayishCyan: "hsl(180, 8%, 52%)", 
          veryDarkGrayishCyan: "hsl(180, 14%, 20%)", 
        },
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"], 
      },
      fontSize: {
        base: "15px", 
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
