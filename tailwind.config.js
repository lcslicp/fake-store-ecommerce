module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Product Sans', 'sans-serif']
    }, 
    colors: {
      'gray': {
        100: '#DCE2E4',
        200: '#CCCCCC',
        300: '#9A9999',
        400: '#4A4444',
      },
      'black': '#2C2727',
      'yellow': '#FFD21F',
      'white': '#FFFFFF',
    }, 
    borderRadius: {
      0: '0.2rem',
      1: '0.75rem',
      2: '1rem',
      3: '2.5rem',
      4: '5.6rem',
    },
    extend: {},
  },
  plugins: [],
}
