/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 3s linear infinite',
        'rainbow-text': 'colorRotate 1s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        colorRotate: {
          from: {
            color: '#6666ff',
          },
          '10%': {
            color: '#0099ff',
          },
          '50%': {
            color: '#00ff00',
          },
          '75%': {
            color: '#ff3399',
          },
          '100%': {
            color: '#6666ff',
          },
        },
      },
      colors: {
        'jerma-deep-blue': '#012846',
        'jerma-pink': '#F4516F',
        'jerma-light-blue': '#A5C5C8',
        'jerma-bright-blue': '#4EC8BD',
      },
      screens: {
        m: { raw: '(hover: hover)' },
      },
    },
  },
  plugins: [],
}
