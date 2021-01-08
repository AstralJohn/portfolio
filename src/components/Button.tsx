import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

interface Props {
  bgColor: string // tailwind className
  bgHoverColor?: string
  children: string | JSX.Element | JSX.Element[]
  onClick?: any
  className?: string
  circle?: any
  style?: React.CSSProperties
  link?: any
  href?: string
  target?: string
}

const Button: React.FC<Props> = (props) => {
  const {
    bgColor,
    bgHoverColor,
    children,
    onClick,
    className,
    circle: isCircle,
    style,
    link,
    target,
    href
  } = props
  if (link) {
    return (
      <a
        style={style}
        target={target}
        rel="noreferrer"
        href={href || '#'}
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
      </a>
    )
  }
  return (
    <button
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
}

Button.displayName = 'Button'

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  bgHoverColor: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  circle: PropTypes.any,
  style: PropTypes.object,
  link: PropTypes.any,
  href: PropTypes.string,
  target: PropTypes.string
}

export default Button
