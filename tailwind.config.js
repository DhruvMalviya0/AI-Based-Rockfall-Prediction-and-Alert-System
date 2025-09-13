/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f172a',
        'accent-teal': '#14b8a6',
        'accent-cyan': '#06b6d4',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          '0%': {
            boxShadow: '0 0 5px #14b8a6, 0 0 10px #14b8a6, 0 0 15px #14b8a6'
          },
          '100%': {
            boxShadow: '0 0 10px #14b8a6, 0 0 20px #14b8a6, 0 0 30px #14b8a6'
          }
        }
      }
    },
  },
  plugins: [],
}
