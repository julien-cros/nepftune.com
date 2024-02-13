import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
			colors: {
				'brown': '#A08479',
				'brown-light': '#C0A89E',
				'brown-dark': '#62534D',
				'pink-brown': '#D3BCB3',
				'yellow-light': '#fffaf1',
				'yellow-semi-light': '#FCF2E7',
			},
    },
  },
  plugins: [],
};
export default config;
