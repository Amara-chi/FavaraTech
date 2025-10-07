/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This is important - make sure it's set to 'class'
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-up': 'fadeInUp 1s ease-in-out',
        'fade-in-down': 'fadeInDown 1s ease-in-out',
        'scroll': 'scroll 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          to: { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInDown: {
          from: { 
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          to: { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(5px)' },
        },
      },
    },
  },
  plugins: [],
}