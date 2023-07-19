/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
      },
      letterSpacing: {
        wider: '.2em',
      },
      colors: {
        'purple': '#4E56A6',
        'blue-btn': '#4F68C1',
        'blue-dark-btn': '#2e3b6b',
        'red-btn': '#C14F4F',
        'red-dark-btn': '#7c2727',
        'green-btn': '#4FC16F',
        'green-dark-btn': '#1d7536',
        'brown-btn': '#C1784F',
        'brown-dark-btn': '#745645'
      },
      backgroundColor: {
        'overlay': 'rgba(0, 0, 0, 0)',
        'overlay-hover': 'rgba(0, 0, 0, 0.5)'
      },
      transitionProperty: {
        'background-color': 'backgroundColor'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
