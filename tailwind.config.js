/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primeryColor': '#F9C6C8',
      'secondaryColor': '#F29799',
      'darkColor': '#222222',
      'whiteColor': '#ffffff',
      'grayColor': '#6C6C6C',
      'accentColor': '#46515C',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      text: ['Inter', 'sans-serif'],
    },
    extend: {
      opacity: ['enabled']
    },
  },
  plugins: [],
}
