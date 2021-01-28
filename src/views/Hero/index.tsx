import React from 'react'
import Button from 'components/Button'
import headshot150 from 'assets/me-150w.png'
import headshotStyled from 'assets/me-styled-300w.png'
import headshotDesktop from 'assets/me-1280w.png'
import Browser from 'components/Browser'
import DotGrid from 'components/Icons/dot-grid'

const Hero: React.FC = () => {
  return (
    <header className="2xl:pl-32 px-10 4k:pl-60 lg:gap-24 bg-blue-dark md:bg-white text-blue-light md:text-blue-dark text-center md:text-left md:grid grid-cols-12 pb-16 lg-2:h-lg-2-hero 2xl:h-auto mb-10">
      <div className="hero-image md:flex relative 1 order-1 col-span-4 md-2:col-span-5 max-h-screen lg:col-span-7 4k:col-span-8">
        <picture className="z-0 md:flex items-end md:relative bottom-0 right-0">
          <source srcSet={headshotDesktop} media="(min-width: 1024px)" />
          <source srcSet={headshotStyled} media="(min-width: 768px)" />
          <img
            className="mx-auto md:mr-0 mb-5 md:mb-0 rounded-full md:rounded-none bg-blue-light md:bg-white border-blue-light border-4 md:border-none lg:bg-opacity-0"
            src={headshot150}
            alt="A headshot photo of John Dinh"
          />
          <Browser className="transform hidden absolute lg:block scale-50 xl:scale-65 2xl:scale-75 left-0 origin-top-left -bottom-20 lg:-bottom-4 xl-2:-bottom-0 4k:scale-100 4k:bottom-44">
            <DotGrid
              style={{ zIndex: -1, top: 'calc(50% - 1rem)', left: '50%' }}
              className="absolute"
              fill="#D0E2EE"
            />
          </Browser>
          <Browser
            style={{ zIndex: -1 }}
            className="transform hidden absolute lg:block scale-50 xl:scale-65 2xl:scale-75 left-36 origin-top-left top-4 4k:left-72 4k:scale-100"
          >
            <DotGrid
              style={{ zIndex: -1, top: 'calc(50% - 1rem)', right: '50%' }}
              className="absolute"
              fill="#00AEBA"
            />
          </Browser>
          <Browser
            style={{ zIndex: -1 }}
            className="transform hidden absolute lg:block scale-50 xl:scale-65 2xl:scale-75 -right-40 origin-top-left -bottom-20 lg:-bottom-4 xl-2:-bottom-0 4k:scale-100 4k:bottom-44 4k:right-0"
          >
            <DotGrid
              style={{ zIndex: -1, bottom: 'calc(50% - 1rem)', left: '50%' }}
              className="absolute"
              fill="#D0E2EE"
            />
          </Browser>
        </picture>
      </div>
      <div className="col-span-8 md-2:col-span-7 lg:col-span-5 4k:col-span-4 lg-2:my-auto">
        <h1 className="text-5xl xl:text-7xl mb-1">Hi, I&apos;m John</h1>

        <h2 className="xl:pl-2 text-lg lg:text-2xl xl:font-medium tracking-tight mb-8 md:w-120">
          A full stack developer that creates things for the web
        </h2>

        <p className="xl:pl-2 leading-8 mb-14 xl:text-xl">
          I work on web projects from simple WordPress sites to complex web
          applications. I like working with React and GraphQL as
          JavaScript/TypeScript is my specialty. View my work or get in touch
          with me below. I would love to create new opportunities on the web
          with you
        </p>

        <div className="block xs:flex md:block justify-around text-white lg:w-120">
          <Button
            className="mb-8 xs:mb-0 block md:inline-block mx-auto xs:mx-0 md:mr-5 lg:mr-16 lg:mb-8"
            bgColor="bg-blue"
            bgHoverColor="bg-blue-dark"
          >
            View Work
          </Button>
          <Button
            style={{ transform: 'translateY(-1px)' }}
            bgColor="bg-orange"
            bgHoverColor="bg-orange-dark"
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Hero
