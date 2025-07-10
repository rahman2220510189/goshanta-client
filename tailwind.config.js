/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
          bgFadeZoom: {
          '0%': {
            opacity: '0',
            transform: 'scale(1.1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      
      },
      animation: {
      
         bgFadeZoom: 'bgFadeZoom 1.5s ease-out forwards',
      },
    },
  },
  plugins: [require('daisyui')],
}


