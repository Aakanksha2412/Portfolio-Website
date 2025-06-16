// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Ensure Inter font is available or chosen for your design
      },
      keyframes: {
        // Define your custom keyframes here (copy from the <style> block in App.js)
        fadeInScale: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        spinSlow: {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
        },
        spinReverseSlow: {
            from: { transform: 'rotate(360deg)' },
            to: { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        // Map your keyframes to animation utilities
        'fade-in-scale': 'fadeInScale 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'bounce-y': 'bounceY 0.8s infinite',
        'spin-slow': 'spinSlow 30s linear infinite',
        'spin-reverse-slow': 'spinReverseSlow 30s linear infinite',
      },
    },
  },
  plugins: [],
};