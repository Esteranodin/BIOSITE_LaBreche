import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "breche-rose": "#EFC7C2",
      "breche-green": "#D3F9B5",
      "breche-mint": "#E2FCEF",
      "breche-cream": "#FAFAF9",
    },
  },
  plugins: [],
}

export default config
