/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'neumorphic': '5px 5px 10px #666666, -5px -5px 10px #666666'
      },
      fontFamily: {
        'body': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
