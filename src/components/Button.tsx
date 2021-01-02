import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

interface Props {
  bgColor: string // tailwind className
  children: string | JSX.Element | JSX.Element[]
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
  circle?: boolean
  style?: React.CSSProperties
}

const Button: React.FC<Props> = (props) => {
  const { bgColor, children, onClick, className, circle: isCircle, style } = props
  return (
    <button
      style={style}
      onClick={onClick}
      className={classNames(
        bgColor,
        className,
        isCircle ? 'rounded-full' : 'btn py-3 px-14'
      )}
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
  className: PropTypes.string,
  circle: PropTypes.bool,
  style: PropTypes.object
}

export default Button
