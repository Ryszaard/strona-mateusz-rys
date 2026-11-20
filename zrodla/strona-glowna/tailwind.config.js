/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        mblue: '#7c5cff',
        mdark: '#6a48f0',
        mred: '#e4002b',
        ink: '#0b0d17',
      },
      backgroundImage: { grad: 'linear-gradient(120deg,#7c5cff 0%,#22d3ee 100%)' },
      keyframes: {
        drop: {
          '0%': { transform: 'translateY(-6px)', opacity: 0 },
          '40%': { opacity: 1 },
          '100%': { transform: 'translateY(10px)', opacity: 0 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        drop: 'drop 1.8s cubic-bezier(.6,0,.4,1) infinite',
        shimmer: 'shimmer 4s linear infinite',
      },
    },
  },
  plugins: [],
}
