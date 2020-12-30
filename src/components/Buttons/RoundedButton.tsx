import React from 'react'
import PropTypes from 'prop-types'

interface Props {
  bgColor: string // tailwind className
  children: string | JSX.Element | JSX.Element[]
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
}

const Button: React.FC<Props> = (props) => {
  const { bgColor, children, onClick, className } = props
  return (
    <button
      onClick={onClick}
      className={`fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full text-white block ${bgColor} ${className}`}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default Button
