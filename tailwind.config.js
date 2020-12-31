module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        DEFAULT: '#FFFFFF'
      },
      blue: {
        dark: '#002C3D',
        DEFAULT: '#029CC2',
        light: '#ECEDEF'
      },
      orange: {
        DEFAULT: '#FF7A49',
        dark: '#B3502D'
      },
      red: {
        DEFAULT: '#F3605C',
        border: '#D64542'
      },
      yellow: {
        DEFAULT: '#F8BE39',
        border: '#D89F2C'
      },
      green: {
        DEFAULT: '#50C845',
        border: '#40AB2F'
      }
    },
    fontFamily: {
      headings: ['Montserrat', 'sans-serif'],
      body: ['"Open Sans"', 'sans-serif']
    },
    screens: {
      'xs': '525px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '22.5rem',
        '96': '24rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
