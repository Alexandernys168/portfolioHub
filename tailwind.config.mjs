import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'desert-start': '#4b5766',
        'desert-end': '#2c3e50',
      },
      backgroundImage: {
        'desert-gradient': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
