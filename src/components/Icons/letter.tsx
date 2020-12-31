import React from 'react'
import PropTypes from 'prop-types'

interface Props {
  fill?: string
  secondaryfill?: string
  strokewidth?: number
  width?: string
  height?: string
  title?: string
}

const Letter: React.FC<Props> = (props) => {
  const fill = props.fill || 'currentColor'
  const secondaryfill = props.secondaryfill || fill
  const strokewidth = props.strokewidth || 1
  const width = props.width || '100%'
  const height = props.height || '100%'
  const title = props.title || 'letter'

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={secondaryfill} stroke={secondaryfill}>
        <path
          d="M3,25V51a5,5,0,0,0,5,5H56a5,5,0,0,0,5-5V25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
        />
        <path
          d="M61,18V13a5,5,0,0,0-5-5H8a5,5,0,0,0-5,5v5L32,34Z"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  )
}

Letter.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokewidth: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string
}

export default Letter
