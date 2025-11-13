import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./feature/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-primary': '#3B82F6',
        'app-secondary': '#10B981',
        'app-accent': '#F59E0B',
        'app-bg-dark': '#0B1125',

        'blue': {
          300: '#0B1125',
        },
        'gray': {
          50: '#FAFAFA',
          100: '#F5F5F5',
        },
        title:"#E3E3E3"
      },
      fontFamily: {
        'inter': ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

export default config
