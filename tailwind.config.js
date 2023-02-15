/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mesh': "url('/mesh.png')",
        'hero-mesh2': "url('/mesh2.png')"
      },
      fontFamily: {
        baseBlack: 'Base Neue, black',
        baseBold: 'Base Neue, bold',
        baseMedium: 'Base Neue, medium',
        baseRegular: 'Base Neue, regular',
        baseLight: 'Base Neue, light',
        offBitBold: 'OffBit, bold'
      },
      colors: {
        'violeta': '#79728E',
        'verde': '#ADE252',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}
