import React, { useState } from 'react'
import NavButton from './navButton'

const MobileNavbar: React.FC = () => {
  const [isClosed, setIsClosed] = useState<boolean>(true)

  const onClickHandler = () => {
    setIsClosed(!isClosed)
  }

  const linkStyles = 'font-headings font-medium block pb-24 text-2xl'
  return (
    <div className="lg:hidden">
      <nav
        className={`z-50 text-center transition-all p-10 bg-white w-9/12 fixed h-screen top-0 duration-500 shadow-2xl ${
          isClosed ? '-right-full' : 'right-0'
        }`}
      >
        <a
          href="#"
          className="font-display text-xl text-white bg-blue-dark py-7 block mb-12"
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
      <NavButton onClick={onClickHandler} isNavClosed={isClosed} />
    </div>
  )
}

export default MobileNavbar
