/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#94E8B4',
        secondary: '#73AF8A'
      },
     fontFamily: {
      sans: ['var(--font-recursive)'],
      mono: ['var(--font-roboto-mono)']
     } 
    },
  },
  plugins: [],
}
