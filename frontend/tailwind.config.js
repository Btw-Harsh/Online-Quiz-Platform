/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e9e8ff',
          100: '#c4c2ff',
          200: '#9b98ff',
          300: '#726eff',
          400: '#554dff',
          500: '#3b32ff', // Main primary
          600: '#2b22e5',
          700: '#1f18b3',
          800: '#15107a',
          900: '#0a053f',
        },
        secondary: {
          50: '#ffe8f0',
          100: '#ffc0da',
          200: '#ff97c4',
          300: '#ff6ebf',
          400: '#ff48b6',
          500: '#ff22aa', // neon accent
          600: '#e51993',
          700: '#b41372',
          800: '#7a0b4d',
          900: '#400426',
        },
        accent: '#42e695', // gradient neon for loader/buttons
        info: '#3b82f6',
        warning: '#f59e0b',
        danger: '#ef4444',
        dark: '#12102b',      // base dark background
        light: '#f9fafb',
        gradientStart: '#181c2f',
        gradientEnd: '#232946',
      },
    },
  },
  plugins: [],
};
