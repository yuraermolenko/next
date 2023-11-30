import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF6700',
        slate: '#EBEBEB',
        gray: '#C0C0C0',
        green: '#3F612D',
        black: '#00100B'
      },
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        sans: ['var(--font-source-sans-3)'],
      },
      boxShadow: {
        '2': '2px 2px 0px #222222',
      },
    },
  },
  plugins: [],
}
export default config
