module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '343px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    letterSpacing: {
      
      widest: '.40em',
    },
    extend: {
      
      fontFamily: {
        'times': ['Times New Roman', 'serif'],
      },
      colors: {
        'custom-green': '#1A4032',
        'custom-gray': '#6C7289',
        'custom-black': '#1C232B',
    
      },
    },
  },
  plugins: [],
}
