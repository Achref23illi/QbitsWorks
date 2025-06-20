/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#D8973C',
          50: '#F7F0E6',
          100: '#F0E1CD',
          200: '#E4C89B',
          300: '#D8973C',
          400: '#C48630',
          500: '#B07526',
          600: '#8F5F20',
          700: '#6E491A',
          800: '#4D3314',
          900: '#2C1D0E',
        },
        secondary: {
          DEFAULT: '#273E47',
          50: '#E8EAEB',
          100: '#D1D5D7',
          200: '#A3ABAF',
          300: '#758187',
          400: '#47575F',
          500: '#273E47',
          600: '#1F3139',
          700: '#17242B',
          800: '#0F171D',
          900: '#070A0F',
        }
      }
    },
  },
  plugins: [],
}

