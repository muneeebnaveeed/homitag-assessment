/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'dark': '#2a2c2b',
        'primary': '#23BA6D',
        'primary-dark': '#1D9659'
      },
      outline: {
        dark: ['10px solid #0000ff', '1px'],
      }
    },
  },
  plugins: [],
};
