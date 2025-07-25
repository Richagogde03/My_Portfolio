/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': {transform: 'scle(1)'},
          '33%': {transform: 'scle(1.2)'},
          '66%': {transform: 'scle(0.8)'},
          '100%': {transform: 'scle(1)'},
        },
      },
      animation:{
        blob: 'blob 10s infinite'
      },
      backgroundImage: {
        "skills-gradient": 'linear-gradient(38.7sdeg, rgba(204,0,107,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)'
        
      }
    },
  },
  plugins: [],
};
