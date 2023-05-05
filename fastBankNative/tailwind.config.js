// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./App.{js,jsx,ts,tsx}", 
  "./screens/**/*.{js,jsx,ts,tsx}", 
  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          grey: '#A0AAB2',
          blue_grey: '#8DB0CF',
          blue1: '#469DE3',
          blue2: '#0072CE',
          blue3: '#004B8C',
          blue4: '#002442',
        },
        dark: {
          grey1: '#A0AAB2',
          grey2: '#414950',
          blue_grey: '#3D5B76',
          blue1: '#469DE3',
          blue2: '#0072CE',
          blue3: '#004B8C',
          blue4: '#003763',
          blue5: '#002442',
          blue6: '#00192F',
        },
      },
    },
  },
  plugins: ["nativewind/babel"],
}

