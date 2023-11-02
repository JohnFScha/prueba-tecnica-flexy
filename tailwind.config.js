/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#7065F0',
      white: '#FFF',
      black: '#000',
      background: '#F7F7FD',
      border: '#E0DEF7',
      neutral: colors.gray,
      red: colors.red
    },
    screens: {
      'lg': '1024px',
      'sm': '425px'
    }
  },
  plugins: [],
}