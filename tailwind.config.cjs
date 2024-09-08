/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      colors: {
        'red': 'hsl(14, 86%, 42%)',
          'rose': {
            '900': 'hsl(14, 65%, 9%)',
            '500': 'hsl(12, 20%, 44%)',
            '400': 'hsl(7, 20%, 60%)',
            '300': 'hsl(14, 25%, 72%)',
            '100': 'hsl(13, 31%, 94%)',
            '50': 'hsl(20, 50%, 98%)',
        },
        'green': 'hsl(159, 69%, 38%)',
        'white': '#FFFFFF',
        'black': '#000000',
    },  
    fontFamily: {
      'sans': ['"RedHat"', ...defaultTheme.fontFamily.sans],
    },
    },
  },
  plugins: [],
}
