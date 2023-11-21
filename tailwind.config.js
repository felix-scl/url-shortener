/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import daisyui from 'daisyui';

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
  daisyui: {
    themes: ['light'],
    base: false,
  },
  plugins: [
    daisyui,
    plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
};
