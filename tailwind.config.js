module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '525px',
      sm: '640px',
      md: '768px',
      'md-2': '950px',
      lg: '1024px',
      'lg-2': '1174px',
      xl: '1280px',
      'xl-2': '1466px',
      '2xl': '1600px',
      '4k': '1900px'
    },
    extend: {
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
        display: ['"Noto Serif"', 'sans-serif'],
        headings: ['Montserrat', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif']
      },
      spacing: {
        72: '18rem',
        84: '22.5rem',
        96: '24rem'
      },
      height: {
        'lg-2-hero': '50rem'
      },
      width: {
        120: '120%'
      },
      scale: {
        65: '.65'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
