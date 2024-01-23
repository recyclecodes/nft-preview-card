import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
      boxShadow: {
        'nft': "0px 15px 30px 10px hsla(244, 76%, 8%, 0.464)",
      },
      colors: {
        "midnight-navy" : "hsl(217, 54%, 11%)",
        "dark-turquoise" : "hsl(216, 50%, 16%)",
        "pale-blue":"hsl(215, 51%, 70%)",
        "bright-cyan":"hsl(178, 100%, 50%)",
        "dark-blue":"hsl(215, 32%, 27%)",
        "nft-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
