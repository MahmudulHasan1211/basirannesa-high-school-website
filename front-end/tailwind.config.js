/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}"
    ],
    theme: {
      extend: {
        animation: {
          scroll: 'scroll 10s linear infinite',
        },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
      },
    },
    darkMode: 'class', // or 'media'
    plugins: [aspectRatio],
  }
  