import React from 'react'
import PropTypes from 'prop-types'

interface Props {
  fill?: string
  width?: string
  height?: string
  title?: string
  className?: string
  style?: React.CSSProperties
}

const DotGrid: React.FC<Props> = (props) => {
  const fill = props.fill || 'currentColor'
  const width = props.width || '100%'
  const height = props.height || '100%'
  const title = props.title || 'dot grid'
  const className = props.className || ''
  const style = props.style || {}

  return (
    <svg
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 257 255"
    >
      <title>{title}</title>
      <g transform="translate(-890 -216)">
        <circle
          id="Ellipse_1025"
          data-name="Ellipse 1025"
          cx="5"
          cy="5"
          r="5"
          transform="translate(890 216)"
          fill={fill}
        />
        <circle
          id="Ellipse_1041"
          data-name="Ellipse 1041"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1030 216)"
          fill={fill}
        />
        <circle
          id="Ellipse_1057"
          data-name="Ellipse 1057"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1032 356)"
          fill={fill}
        />
        <circle
          id="Ellipse_1073"
          data-name="Ellipse 1073"
          cx="5"
          cy="5"
          r="5"
          transform="translate(892 356)"
          fill={fill}
        />
        <circle
          id="Ellipse_1029"
          data-name="Ellipse 1029"
          cx="5"
          cy="5"
          r="5"
          transform="translate(890 251)"
          fill={fill}
        />
        <circle
          id="Ellipse_1042"
          data-name="Ellipse 1042"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1030 251)"
          fill={fill}
        />
        <circle
          id="Ellipse_1058"
          data-name="Ellipse 1058"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1032 391)"
          fill={fill}
        />
        <circle
          id="Ellipse_1074"
          data-name="Ellipse 1074"
          cx="5"
          cy="5"
          r="5"
          transform="translate(892 391)"
          fill={fill}
        />
        <circle
          id="Ellipse_1033"
          data-name="Ellipse 1033"
          cx="5"
          cy="5"
          r="5"
          transform="translate(890 286)"
          fill={fill}
        />
        <circle
          id="Ellipse_1045"
          data-name="Ellipse 1045"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1030 286)"
          fill={fill}
        />
        <circle
          id="Ellipse_1061"
          data-name="Ellipse 1061"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1032 426)"
          fill={fill}
        />
        <circle
          id="Ellipse_1077"
          data-name="Ellipse 1077"
          cx="5"
          cy="5"
          r="5"
          transform="translate(892 426)"
          fill={fill}
        />
        <circle
          id="Ellipse_1037"
          data-name="Ellipse 1037"
          cx="5"
          cy="5"
          r="5"
          transform="translate(890 321)"
          fill={fill}
        />
        <circle
          id="Ellipse_1050"
          data-name="Ellipse 1050"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1030 321)"
          fill={fill}
        />
        <circle
          id="Ellipse_1066"
          data-name="Ellipse 1066"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1032 461)"
          fill={fill}
        />
        <circle
          id="Ellipse_1082"
          data-name="Ellipse 1082"
          cx="5"
          cy="5"
          r="5"
          transform="translate(892 461)"
          fill={fill}
        />
        <circle
          id="Ellipse_1026"
          data-name="Ellipse 1026"
          cx="5"
          cy="5"
          r="5"
          transform="translate(925 216)"
          fill={fill}
        />
        <circle
          id="Ellipse_1043"
          data-name="Ellipse 1043"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1065 216)"
          fill={fill}
        />
        <circle
          id="Ellipse_1059"
          data-name="Ellipse 1059"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1067 356)"
          fill={fill}
        />
        <circle
          id="Ellipse_1075"
          data-name="Ellipse 1075"
          cx="5"
          cy="5"
          r="5"
          transform="translate(927 356)"
          fill={fill}
        />
        <circle
          id="Ellipse_1030"
          data-name="Ellipse 1030"
          cx="5"
          cy="5"
          r="5"
          transform="translate(925 251)"
          fill={fill}
        />
        <circle
          id="Ellipse_1044"
          data-name="Ellipse 1044"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1065 251)"
          fill={fill}
        />
        <circle
          id="Ellipse_1060"
          data-name="Ellipse 1060"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1067 391)"
          fill={fill}
        />
        <circle
          id="Ellipse_1076"
          data-name="Ellipse 1076"
          cx="5"
          cy="5"
          r="5"
          transform="translate(927 391)"
          fill={fill}
        />
        <circle
          id="Ellipse_1034"
          data-name="Ellipse 1034"
          cx="5"
          cy="5"
          r="5"
          transform="translate(925 286)"
          fill={fill}
        />
        <circle
          id="Ellipse_1046"
          data-name="Ellipse 1046"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1065 286)"
          fill={fill}
        />
        <circle
          id="Ellipse_1062"
          data-name="Ellipse 1062"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1067 426)"
          fill={fill}
        />
        <circle
          id="Ellipse_1078"
          data-name="Ellipse 1078"
          cx="5"
          cy="5"
          r="5"
          transform="translate(927 426)"
          fill={fill}
        />
        <circle
          id="Ellipse_1038"
          data-name="Ellipse 1038"
          cx="5"
          cy="5"
          r="5"
          transform="translate(925 321)"
          fill={fill}
        />
        <circle
          id="Ellipse_1051"
          data-name="Ellipse 1051"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1065 321)"
          fill={fill}
        />
        <circle
          id="Ellipse_1067"
          data-name="Ellipse 1067"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1067 461)"
          fill={fill}
        />
        <circle
          id="Ellipse_1083"
          data-name="Ellipse 1083"
          cx="5"
          cy="5"
          r="5"
          transform="translate(927 461)"
          fill={fill}
        />
        <circle
          id="Ellipse_1027"
          data-name="Ellipse 1027"
          cx="5"
          cy="5"
          r="5"
          transform="translate(960 216)"
          fill={fill}
        />
        <circle
          id="Ellipse_1047"
          data-name="Ellipse 1047"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1100 216)"
          fill={fill}
        />
        <circle
          id="Ellipse_1063"
          data-name="Ellipse 1063"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1102 356)"
          fill={fill}
        />
        <circle
          id="Ellipse_1079"
          data-name="Ellipse 1079"
          cx="5"
          cy="5"
          r="5"
          transform="translate(962 356)"
          fill={fill}
        />
        <circle
          id="Ellipse_1031"
          data-name="Ellipse 1031"
          cx="5"
          cy="5"
          r="5"
          transform="translate(960 251)"
          fill={fill}
        />
        <circle
          id="Ellipse_1048"
          data-name="Ellipse 1048"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1100 251)"
          fill={fill}
        />
        <circle
          id="Ellipse_1064"
          data-name="Ellipse 1064"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1102 391)"
          fill={fill}
        />
        <circle
          id="Ellipse_1080"
          data-name="Ellipse 1080"
          cx="5"
          cy="5"
          r="5"
          transform="translate(962 391)"
          fill={fill}
        />
        <circle
          id="Ellipse_1035"
          data-name="Ellipse 1035"
          cx="5"
          cy="5"
          r="5"
          transform="translate(960 286)"
          fill={fill}
        />
        <circle
          id="Ellipse_1049"
          data-name="Ellipse 1049"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1100 286)"
          fill={fill}
        />
        <circle
          id="Ellipse_1065"
          data-name="Ellipse 1065"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1102 426)"
          fill={fill}
        />
        <circle
          id="Ellipse_1081"
          data-name="Ellipse 1081"
          cx="5"
          cy="5"
          r="5"
          transform="translate(962 426)"
          fill={fill}
        />
        <circle
          id="Ellipse_1039"
          data-name="Ellipse 1039"
          cx="5"
          cy="5"
          r="5"
          transform="translate(960 321)"
          fill={fill}
        />
        <circle
          id="Ellipse_1052"
          data-name="Ellipse 1052"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1100 321)"
          fill={fill}
        />
        <circle
          id="Ellipse_1068"
          data-name="Ellipse 1068"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1102 461)"
          fill={fill}
        />
        <circle
          id="Ellipse_1084"
          data-name="Ellipse 1084"
          cx="5"
          cy="5"
          r="5"
          transform="translate(962 461)"
          fill={fill}
        />
        <circle
          id="Ellipse_1028"
          data-name="Ellipse 1028"
          cx="5"
          cy="5"
          r="5"
          transform="translate(995 216)"
          fill={fill}
        />
        <circle
          id="Ellipse_1053"
          data-name="Ellipse 1053"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1135 216)"
          fill={fill}
        />
        <circle
          id="Ellipse_1069"
          data-name="Ellipse 1069"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1137 356)"
          fill={fill}
        />
        <circle
          id="Ellipse_1085"
          data-name="Ellipse 1085"
          cx="5"
          cy="5"
          r="5"
          transform="translate(997 356)"
          fill={fill}
        />
        <circle
          id="Ellipse_1032"
          data-name="Ellipse 1032"
          cx="5"
          cy="5"
          r="5"
          transform="translate(995 251)"
          fill={fill}
        />
        <circle
          id="Ellipse_1054"
          data-name="Ellipse 1054"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1135 251)"
          fill={fill}
        />
        <circle
          id="Ellipse_1070"
          data-name="Ellipse 1070"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1137 391)"
          fill={fill}
        />
        <circle
          id="Ellipse_1086"
          data-name="Ellipse 1086"
          cx="5"
          cy="5"
          r="5"
          transform="translate(997 391)"
          fill={fill}
        />
        <circle
          id="Ellipse_1036"
          data-name="Ellipse 1036"
          cx="5"
          cy="5"
          r="5"
          transform="translate(995 286)"
          fill={fill}
        />
        <circle
          id="Ellipse_1055"
          data-name="Ellipse 1055"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1135 286)"
          fill={fill}
        />
        <circle
          id="Ellipse_1071"
          data-name="Ellipse 1071"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1137 426)"
          fill={fill}
        />
        <circle
          id="Ellipse_1087"
          data-name="Ellipse 1087"
          cx="5"
          cy="5"
          r="5"
          transform="translate(997 426)"
          fill={fill}
        />
        <circle
          id="Ellipse_1040"
          data-name="Ellipse 1040"
          cx="5"
          cy="5"
          r="5"
          transform="translate(995 321)"
          fill={fill}
        />
        <circle
          id="Ellipse_1056"
          data-name="Ellipse 1056"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1135 321)"
          fill={fill}
        />
        <circle
          id="Ellipse_1072"
          data-name="Ellipse 1072"
          cx="5"
          cy="5"
          r="5"
          transform="translate(1137 461)"
          fill={fill}
        />
        <circle
          id="Ellipse_1088"
          data-name="Ellipse 1088"
          cx="5"
          cy="5"
          r="5"
          transform="translate(997 461)"
          fill={fill}
        />
      </g>
    </svg>
  )
}

DotGrid.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

export default DotGrid
