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

const GrainEffect: React.FC<Props> = (props) => {
  const fill = props.fill || 'currentColor'
  const secondaryfill = props.secondaryfill || fill
  const strokewidth = props.strokewidth || 1
  const width = props.width || '100%'
  const height = props.height || '100%'
  const title = props.title || 'grain effect'

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
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="5"
          y="50"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="5"
          y="32"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="5"
          y="14"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="5"
          y="5"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="14"
          y="41"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="14"
          y="50"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="14"
          y="32"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="14"
          y="14"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="14"
          y="23"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="23"
          y="41"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="23"
          y="32"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="23"
          y="5"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="32"
          y="32"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="32"
          y="23"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="32"
          y="5"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="41"
          y="41"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="41"
          y="32"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="50"
          y="50"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={fill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="50"
          y="23"
        />
        <rect
          height="9"
          width="9"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="square"
          strokeWidth={strokewidth}
          x="50"
          y="5"
        />
      </g>
    </svg>
  )
}

GrainEffect.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokewidth: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string
}

export default GrainEffect
