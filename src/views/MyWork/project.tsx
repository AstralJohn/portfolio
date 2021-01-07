import React, { useState } from 'react'
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
  desc: string
  src: string
  alt: string
}

interface Props {
  data: Data
}

const Project: React.FC<Props> = (props) => {
  const { pictureData = [], title, desc, src, alt } = props.data
  const [isHovering, setIsHovering] = useState<boolean>(false)

  const onMouseEnterHandler = () => {
    setIsHovering(true)
  }

  const onMouseLeaveHandler = () => {
    setIsHovering(false)
  }
  return (
    <Browser
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      isHovering={isHovering}
      overlay
      height="h-60"
      className="relative inline-block mb-14 md:mx-3 2xl:mx-12 4k:mx-24 overflow-hidden rounded-t-lg"
    >
      <picture
        className={`absolute z-0 bottom-0 left-0 transform transition-transfrom duration-150 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
      >
        {pictureData.map(({ src, media = '(min-width: 960px)' }) => (
          <source key={src} srcSet={src} media={media} />
        ))}
        <img src={src} alt={alt} />
      </picture>
      <h1
        className={`pointer-events-none select-none text-white text-5xl font-medium z-10 absolute left-1/2 top-28 transition-opacity duration-500 transform -translate-x-1/2 ${
          isHovering ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {title}
      </h1>
      <div
        className={`absolute z-10 opacity-0 transition-opacity duration-300 left-1/2 top-16 transform -translate-x-1/2 text-white ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-lg mb-2">{desc}</p>
        <Button className="w-52" bgColor="bg-orange">
          Visit Site
        </Button>
      </div>
    </Browser>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    pictureData: PropTypes.any,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired
}

export default Project
