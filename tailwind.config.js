module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('~/assets/images/jumbotron.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'primary': {
          50: '#688191',
          100: '#143D59'
        },
        'secondary':{
          100: '#E18D12'
        },
        'accent':{
          100: '#333333'
        },
        'neutral' : {
          100: '#F2F2F2'
        },
        'light': {
          100: '#f8f9fa'
        }
      },
      fontFamily: {
        poppins: ['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
};
