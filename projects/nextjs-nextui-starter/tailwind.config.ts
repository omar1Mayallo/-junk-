import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        //___ Customize-Theme-Colors ___//
        // dark: {
        //   colors: {
        //     primary: {
        //       DEFAULT: "#BEF264",
        //     },
        //   },
        // },
        // light: {
        //   colors: {
        //     primary: {
        //       DEFAULT: "#BEF264",
        //     },
        //   },
        // },
      },
    }),
  ],
};
export default config;
