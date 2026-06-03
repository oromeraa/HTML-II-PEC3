/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        sabero: {
          blue: '#0071bc',
          green: '#008f4c',
          gray: '#e5e5e5',
          gold: '#eac102',
          red: '#ed1c24',
          black: '#000000',
        },
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
        leonesa: ['LeonesaCancilleresca', 'serif'],
      },
      borderRadius: {
        card: '1rem',
        pill: '2rem',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/container-queries'), // habilitar si las réplicas necesitan @container
  ],
};
