/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    fontFamily: {
      'inter': 'Inter',
    },
    colors: {
      primaryColor: {
        '900': '#d48a8c',
        '700': '#f9c6c8',
        '500': '#fff2f3',
      },
      secondaryColor: {
        '900': '#cc6062',
        '700': '#f29799',
        '500': '#ffc4c6',
      },
      accentColor: {
        '900': '#212b36',
        '700': '#46515c',
        '500': '#767c82',
      },
      darkColor: {
        '900': '#242424',
        '500': '#595959',
      },
      whiteColor: '#ffffff',
      lightColor: '#ede8e8',
      successColor: {
        '900': '#D7FFC4',
        '700': '#beff9f',
        '500': '#8BD966',
      },
      dangerColor: {
        '900': '#FFB0B0',
        '700': '#FF8989',
        '500': '#D95555',
      },
      transparentColor: 'rgba(0,0,0,0)',
    },
    extend: {
      
    },
    backgroundImage: {
      'hero': "url('/images/bg-hero.jpg')",
      'pattern-bals': "url('/images/pattern-bg.jpg')",
    },
  },
  plugins: [],
}
