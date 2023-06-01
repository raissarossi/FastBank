/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          grey1: '#A0AAB2',
          grey2: '#EDEDED',
          blue_grey1: '#8DB0CF',
          blue_grey2: '#CEE1F1',
          blue_grey3: '#F2F9FF',
          blue1: '#469DE3',
          blue2: '#0072CE',
          blue3: '#004B8C',
          blue4: '#002442',
        },
        dark: {
          grey1: '#A0AAB2',
          grey2: '#414950',
          grey3: '#0F0F0F',
          blue_grey1: '#3D5B76',
          blue_grey2: '#213546',
          blue1: '#469DE3',
          blue2: '#0072CE',
          blue3: '#004B8C',
          blue4: '#003763',
          blue5: '#002442',
          blue6: '#00192F',
        },
      },
      screens: {
        'ssm': '440px',
        'sm': '640px',
        'sm1': '700px',
        'md': '768px',
        'md1': '830px',
        'lg': '1024px',
        'lg1': '1100px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        'light': '0 0px 50px 10px rgba(0, 0, 0, 0.1)',
        'dark': '0 0px 35px 0px rgba(255, 255, 255, 0.2)',
      }
    },
  },
  plugins: [],
}