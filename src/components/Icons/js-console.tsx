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

const JsConsole: React.FC<Props> = (props) => {
  const fill = props.fill || 'currentColor'
  const secondaryfill = props.secondaryfill || fill
  const strokewidth = props.strokewidth || 1
  const width = props.width || '100%'
  const height = props.height || '100%'
  const title = props.title || 'js console'

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={secondaryfill} stroke={secondaryfill}>
        <rect
          height="54"
          width="54"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="5"
          y="5"
        />
        <polyline
          fill="none"
          points="17 19 30 32 17 45"
          stroke={secondaryfill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x1="30"
          x2="47"
          y1="19"
          y2="19"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x1="30"
          x2="47"
          y1="45"
          y2="45"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x1="39"
          x2="47"
          y1="32"
          y2="32"
        />
      </g>
    </svg>
  )
}

JsConsole.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokewidth: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string
}

export default JsConsole
