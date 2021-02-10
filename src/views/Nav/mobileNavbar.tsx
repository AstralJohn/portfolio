import React, { useState } from 'react'
import NavButton from './navButton'
import { Link } from 'react-scroll'

const MobileNavbar: React.FC = () => {
  const [isClosed, setIsClosed] = useState<boolean>(true)

  const onClickHandler = () => {
    setIsClosed(!isClosed)
  }

  const linkStyles =
    'cursor-pointer font-headings font-medium block mb-24 text-2xl'
  return (
    <div className="lg:hidden">
      <nav
        className={`z-50 text-center transition-all p-10 bg-white w-9/12 fixed h-screen top-0 duration-500 shadow-2xl ${
          isClosed ? '-right-full' : 'right-0'
        }`}
      >
        <Link
          to="root"
          smooth={true}
          onClick={onClickHandler}
          className="cursor-pointer font-display text-xl text-white bg-blue-dark py-7 block mb-12"
        >
          John Dinh
        </Link>
        <Link
          to="root"
          smooth={true}
          onClick={onClickHandler}
          className={linkStyles}
        >
          HOME
        </Link>
        <Link
          to="my-work"
          smooth={true}
          onClick={onClickHandler}
          className={linkStyles}
        >
          MY WORK
        </Link>
        <Link
          to="contact"
          smooth={true}
          onClick={onClickHandler}
          className={linkStyles}
        >
          CONTACT
        </Link>
      </nav>
      <NavButton onClick={onClickHandler} isNavClosed={isClosed} />
    </div>
  )
}

export default MobileNavbar
