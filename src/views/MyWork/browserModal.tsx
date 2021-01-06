import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Browser from 'components/Browser'
import Button from 'components/Button'

interface PictureData {
  src: string
  media?: string
}

interface Data {
  pictureData?: PictureData[]
  title: string
  src: string
  alt: string
}

interface Props {
  data: Data
}

const BrowserModal: React.FC<Props> = (props) => {
  const { pictureData = [], title, src, alt } = props.data
  const textRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const onMouseEnterHandler = () => {
    textRef.current!.style.opacity = '0'
    textRef.current!.style.zIndex = '-1'
    buttonRef.current!.style.opacity = '1'
  }

  const onMouseLeaveHandler = () => {
    buttonRef.current!.style.opacity = '0'
    textRef.current!.style.zIndex = '10'
    textRef.current!.style.opacity = '1'
  }
  return (
    <Browser
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      overlay
      height="h-60"
      className="relative inline-block mb-14"
    >
      <picture className="absolute z-0 bottom-0 left-0">
        {pictureData.map(({ src, media = '(min-width: 960px)' }) => (
          <source key={src} srcSet={src} media={media} />
        ))}
        <img src={src} alt={alt} />
      </picture>
      <h1
        ref={textRef}
        className="pointer-events-none select-none text-white text-5xl font-medium z-10 absolute left-1/2 top-28 transition-opacity duration-500 transform -translate-x-1/2"
      >
        {title}
      </h1>
      <Button
        ref={buttonRef}
        className="absolute z-10 opacity-0 transition-opacity duration-300 left-1/2 top-28 transform -translate-x-1/2 text-white"
        bgColor="bg-orange"
      >
        View Details
      </Button>
    </Browser>
  )
}

BrowserModal.propTypes = {
  data: PropTypes.shape({
    pictureData: PropTypes.any,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired
}

export default BrowserModal
