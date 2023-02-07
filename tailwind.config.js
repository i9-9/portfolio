/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baseBlack: 'Base Neue, black',
        baseBold: 'Base Neue, bold',
        baseMedium: 'Base Neue, medium',
        baseRegular: 'Base Neue, regular',
        offBitBold: 'OffBit, bold'
      },
      colors: {
        'violeta': '#79728E',
        'verde': '#ADE252',
      }
    },
  },
  plugins: [],
}
