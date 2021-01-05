import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'

interface Props {
  onClick?: React.MouseEventHandler
}

const NavButton: React.FC<Props> = () => {
  const [isClosed, setIsClosed] = useState<boolean>(true)
  const toggleClassName = 'opacity-0 scale-80'

  const onClickHandler = () => {
    setIsClosed(!isClosed)
  }

  return (
    <Button
      className="fixed z-50 bottom-4 right-4 w-16 h-16 text-white block lg:hidden"
      bgColor="bg-blue-dark"
      onClick={onClickHandler}
      circle
    >
      <span className="sr-only">Open site navigation</span>
      <svg
        id="navbar-open-svg"
        width="24"
        height="24"
        fill="none"
        className={`absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform ${
          !isClosed ? toggleClassName : ''
        }`}
      >
        <path
          d="M4 8h16M4 16h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <svg
        width="24"
        height="24"
        fill="none"
        className={`absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform ${
          isClosed ? toggleClassName : ''
        }`}
      >
        <path
          id="navbar-close-svg"
          d="M6 18L18 6M6 6l12 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </Button>
  )
}

NavButton.propTypes = {
  onClick: PropTypes.func
}

export default NavButton
