module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        dark: '#002C3D',
        DEFAULT: '#029CC2',
        light: '#ECEDEF'
      },
      orange: {
        DEFAULT: '#FF7A49',
        dark: '#B3502D'
      }
    },
    fontFamily: {
      headings: ['Montserrat', 'sans-serif'],
      body: ['"Open Sans"', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
