/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#EDF2F4',
          200: '#CED4DB',
          300: '#AFB9C3',
          400: '#909EA7',
          500: '#8D99AE',
          600: '#6E798F',
          700: '#4F596E',
          800: '#30384F',
          900: '#2B2D42',
        },
        highlight: {
          300: '#EF233C',
          500: '#D90429',
          700: '#8C001E',
          800: '#660019',
          900: '#400013',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      gridTemplateColumns: {
        custom: '500px 1fr',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
