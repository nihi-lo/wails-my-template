import { nextui } from "@nextui-org/react";
import { withTV } from "tailwind-variants/transformer";
import type { Config } from "tailwindcss";

const config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx}",
    "./index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [nextui()],
} satisfies Config;

export default withTV(config);
