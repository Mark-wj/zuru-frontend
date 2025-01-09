// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 3s steps(20) 1s forwards',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
