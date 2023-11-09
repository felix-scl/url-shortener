/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        bungee: ['Bungee', 'sans-serif'],
      },
      backgroundImage: {
        'green-gradient': "url('./assets/green-gradient.png')",
      },
    },
  },
  plugins: [],
};
