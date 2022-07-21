/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '25': '25%',
      '50': '50%',
      '75': '75%',
    },
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
        '100': '#6c6c6c'
      },
      whiteColor: '#ffffff',
      lightColor: '#e8e8e8',
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
      backgroundOpacity: ['active'],
      backgroundImage: {
        'hero': "url('/images/bg-hero.jpg')",
        'hero-tablet': "url('/images/bg-hero-tablet.jpg')",
        'hero-mobile': "url('/images/bg-hero-mobile.jpg')",
        'pattern-balls': "url('/images/pattern-bg.jpg')",
        'flower-light': "url('/images/flower-light-color.svg')",
        'footer': "url('/images/bg-footer.jpg')",
        'flower-light-reverse': "url('/images/flower-light-color-reverse.svg')",
        'aspas': "url('/images/depo-aspas.png')"
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '25': '0.25',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '75': '0.75',
        '80': '0.8',
        '90': '0.9',
        '95': '0.95',
        '100': '1',
      },
      boxShadow: {
        'img': '-8px 8px 0 0 #F29799'
      }
    },
    
  },
  plugins: [],
}
