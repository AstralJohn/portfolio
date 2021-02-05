import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-scroll'

const DesktopNavbar: React.FC = () => {
  const linkStyles =
    'z-50 cursor-pointer font-headings font-medium pl-24 text-xl 2xl:text-2xl'

  let scrollYPosition = 0

  const initialNavStyles = {
    nav: 'relative'
  }

  const navRef = useRef(null)

  const [navStyles, setNavStyles] = useState(initialNavStyles)

  const handleScrollDirection = () => {
    const currentYPosition = window.pageYOffset
    if (currentYPosition > scrollYPosition || currentYPosition === 0) {
      // down scroll
      document.getElementById('root')!.style.paddingTop = '0px'

      setNavStyles({
        nav: 'relative'
      })
    } else {
      // @ts-ignore
      const navHeight = navRef.current.offsetHeight
      // up scroll
      setNavStyles({
        nav: 'fixed bg-blue-dark right-0 left-0 text-white'
      })

      document.getElementById('root')!.style.paddingTop = navHeight + 'px'
    }

    scrollYPosition = currentYPosition <= 0 ? 0 : currentYPosition
  }

  // Initialize event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScrollDirection)
    return () => {
      window.removeEventListener('scroll', handleScrollDirection)
    }
  }, [])

  return (
    <nav
      ref={navRef}
      className={
        'hidden mb-4 lg:block z-50 transition-all top-0 duration-500' + ' ' + navStyles.nav
      }
    >
      <div className="2xl:px-32 px-10 4k:px-60 flex justify-between">
        <Link
          to="root"
          smooth={true}
          className="cursor-pointer font-display text-xl text-white bg-blue-dark px-5 lg:py-4 2xl:py-7 mr-24 inline-block"
        >
          John Dinh
        </Link>
        <span className="self-center">
          <Link to="root" smooth={true} className={linkStyles}>
            HOME
          </Link>
          <Link to="my-work" smooth={true} className={linkStyles}>
            MY WORK
          </Link>
          <Link to="contact" smooth={true} className={linkStyles}>
            CONTACT
          </Link>
        </span>
      </div>
    </nav>
  )
}

export default DesktopNavbar
