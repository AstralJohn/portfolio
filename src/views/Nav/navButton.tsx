import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'

interface Props {
  isNavClosed: boolean
  onClick?: React.MouseEventHandler
}

const NavButton: React.FC<Props> = ({ isNavClosed, onClick }) => {
  const toggleClassName = 'opacity-0 scale-80'
  return (
    <Button
      className="fixed z-50 bottom-4 right-4 w-16 h-16 text-white block lg:hidden"
      bgColor="bg-blue-dark"
      onClick={onClick}
      circle
    >
      <span className="sr-only">Open site navigation</span>
      <svg
        id="navbar-open-svg"
        width="24"
        height="24"
        fill="none"
        className={`absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform ${
          !isNavClosed ? toggleClassName : ''
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
          isNavClosed ? toggleClassName : ''
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
  isNavClosed: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}

export default NavButton
