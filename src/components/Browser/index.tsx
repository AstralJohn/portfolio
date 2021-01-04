import React from 'react'
import PropTypes from 'prop-types'

interface Props {
  height?: string
  width?: string
  className?: string
  style?: React.CSSProperties
}

const Browser: React.FC<Props> = (props) => {
  const { height = 'h-72', width = 'w-84', className, style } = props
  return (
    <div
      style={style}
      className={`mt-5 mx-auto pt-8 bg-blue relative rounded-t-lg shadow-2xl ${height} ${width} ${className}`}
    >
      <div className="bg-white h-10 flex items-center rounded-t-lg absolute left-0 top-0 right-0">
        <div className="flex gap-3 ml-5">
          <div className="bg-red h-5 w-5 rounded-full border border-red-border"></div>
          <div className="bg-yellow h-5 w-5 rounded-full border border-yellow-border"></div>
          <div className="bg-green h-5 w-5 rounded-full border border-green-border"></div>
        </div>
      </div>
    </div>
  )
}

Browser.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Browser

// <div
/// * style={{ width: '365px', minHeight: 286 }} */
// className={`mt-5 mx-auto pt-8 bg-blue relative rounded-t-lg shadow-2xl ${height} ${width}`}
// >
// <div className="bg-white h-10 flex items-center rounded-t-lg absolute left-0 top-0 right-0">
// <div className="flex gap-3 ml-5">
// <div className="bg-red h-5 w-5 rounded-full border border-red-border"></div>
// <div className="bg-yellow h-5 w-5 rounded-full border border-yellow-border"></div>
// <div className="bg-green h-5 w-5 rounded-full border border-green-border"></div>
// </div>
// </div>
// </div>
