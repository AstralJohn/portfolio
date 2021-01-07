import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

interface Props {
  height?: string
  width?: string
  className?: string
  style?: React.CSSProperties
  children?: string | JSX.Element | JSX.Element[]
  overlay?: any
  isHovering?: boolean
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
}

const Browser: React.FC<Props> = (props) => {
  const {
    height = 'h-72',
    width = 'w-84',
    className,
    style,
    children,
    overlay,
    onMouseEnter,
    onMouseLeave,
    isHovering
  } = props
  return (
    <div
      style={{ boxShadow: '0 0 30px #0000004F', ...style }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      <div
        className={classNames(
          'pt-8 relative rounded-t-lg shadow-2xl overflow-hidden transition-all duration-300',
          {
            'bg-blue': !overlay,
            'z-10': overlay
          },
          `${
            overlay && isHovering
              ? 'bg-blue-dark bg-opacity-100'
              : overlay && 'bg-blue bg-opacity-75'
          }`,
          height,
          width,
          'bg-blue-dark'
        )}
      >
        <div className="bg-white h-10 flex items-center rounded-t-lg absolute left-0 top-0 right-0">
          <div className="flex gap-3 ml-5">
            <div className="bg-red h-5 w-5 rounded-full border border-red-border"></div>
            <div className="bg-yellow h-5 w-5 rounded-full border border-yellow-border"></div>
            <div className="bg-green h-5 w-5 rounded-full border border-green-border"></div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

Browser.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
  overlay: PropTypes.any,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isHovering: PropTypes.bool
}

export default Browser
