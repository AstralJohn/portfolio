import React, { useEffect } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

const DesktopNavbar: React.FC = () => {
  const linkStyles =
    'cursor-pointer font-headings font-medium pr-24 text-xl 2xl:text-2xl'
  const handleScroll = () => {}

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="hidden lg:block fixed top-0 bg-blue-dark right-0 left-0 text-white z-50">
      <div className="2xl:pl-32 px-10 4k:pl-60">
        <Link
          onClick={() => scroll.scrollToTop()}
          to="root"
          className="cursor-pointer font-display text-xl text-white bg-blue-dark px-5 lg:pl-2 lg:py-4 2xl:py-7 mr-24 inline-block"
        >
          John Dinh
        </Link>
        <span id="right-links" className="right-0 absolute top-1/2 transform -translate-y-1/2">
          <Link
            to="root"
            onClick={() => scroll.scrollToTop()}
            className={linkStyles}
          >
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
