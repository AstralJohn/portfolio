import React from 'react'

const DesktopNavbar: React.FC = () => {
  const linkStyles = 'font-headings font-medium pr-24 text-2xl'
  // TODO: update style on scroll down, hide on scroll up
  return (
    <nav>
      <a
        href="#"
        className="font-display text-xl text-white bg-blue-dark px-5 py-7 mr-24 inline-block mb-12"
      >
        John Dinh
      </a>
      <a href="#" className={linkStyles}>
        HOME
      </a>
      <a href="#" className={linkStyles}>
        MY WORK
      </a>
      <a href="#" className={linkStyles}>
        CONTACT
      </a>
    </nav>
  )
}

export default DesktopNavbar
