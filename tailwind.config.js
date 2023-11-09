/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'green-gradient': "url('./assets/green-gradient.png')",
      },
    },
  },
  plugins: [],
};
