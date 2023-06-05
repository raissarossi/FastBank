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
//   theme: {
//     extend: {
//       colors: {
//         light: {
//           grey: '#A0AAB2',
//           blue_grey: '#8DB0CF',
//           blue1: '#469DE3',
//           blue2: '#0072CE',
//           blue3: '#004B8C',
//           blue4: '#002442',
//         },
//         dark: {
//           grey1: '#A0AAB2',
//           grey2: '#414950',
//           blue_grey: '#3D5B76',
//           blue1: '#469DE3',
//           blue2: '#0072CE',
//           blue3: '#004B8C',
//           blue4: '#003763',
//           blue5: '#002442',
//           blue6: '#00192F',
//         },
//       },
//     },
//   },
//   plugins: ["nativewind/babel"],
// }

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
      'ss': '380px',
      'ssm': '400px',
      'sm': '640px',
      'sm1': '700px',
      'md': '768px',
      'md1': '830px',
      'lg': '1024px',
      'lg1': '1100px',
      'xl': '1280px'
    }
  },
},
plugins: [],
}

