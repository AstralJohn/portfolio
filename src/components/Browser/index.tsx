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
    onMouseLeave
  } = props
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
      style={style}
    >
      <div
        style={{ boxShadow: '0 0 30px #0000004F' }}
        className={classNames(
          'pt-8 relative rounded-t-lg shadow-2xl bg-blue',
          {
            'bg-opacity-75 z-10': overlay
          },
          height,
          width
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  overlay: PropTypes.any,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

export default Browser
