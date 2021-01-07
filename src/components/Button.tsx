import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

interface Props {
  bgColor: string // tailwind className
  bgHoverColor?: string
  children: string | JSX.Element | JSX.Element[]
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
  circle?: any
  style?: React.CSSProperties
  ref?: React.Ref<HTMLButtonElement>
}

const Button = React.forwardRef((props: Props, ref: React.Ref<HTMLButtonElement>) => {
  const {
    bgColor,
    bgHoverColor,
    children,
    onClick,
    className,
    circle: isCircle,
    style,
  } = props
  return (
    <button
      ref={ref}
      style={style}
      onClick={onClick}
      className={classNames(
        bgColor,
        className,
        isCircle ? 'rounded-full' : 'btn py-3 px-14',
        bgHoverColor
          ? `hover:${bgHoverColor} hover:shadow-md transition-colors duration-300`
          : ''
      )}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  bgHoverColor: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  circle: PropTypes.any,
  style: PropTypes.object,
  ref: PropTypes.any
}

export default Button
