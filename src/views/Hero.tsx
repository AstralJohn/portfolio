import React from 'react'
import Button from 'components/Button'
import headshot150 from 'assets/me-150w.png'
import headshotStyled from 'assets/me-styled-300w.png'

const Hero: React.FC = () => {
  return (
    <header className="px-10 bg-blue-dark md:bg-white text-blue-light md:text-blue-dark text-center md:text-left md:grid grid-cols-12 py-16">
      <picture className="col-span-4 md-2:col-span-5 order-1 md:flex items-end">
        <source srcSet={headshotStyled} media="(min-width: 768px)" />
        <img
          className="mx-auto md:mr-0 mb-5 md:mb-0 rounded-full md:rounded-none bg-blue-light md:bg-white border-blue-light border-4 md:border-none"
          src={headshot150}
          alt="A headshot photo of John Dinh"
        />
      </picture>
      <div className="col-span-8 md-2:col-span-7">
        <h1 className="text-5xl mb-1">Hi, I&apos;m John</h1>

        <h2 className="text-lg tracking-tight mb-8">
          A full stack developer that creates things for the web
        </h2>

        <p className="leading-8 mb-14">
          I work on web projects from simple WordPress sites to complex web
          applications. I like working with React and GraphQL as
          JavaScript/TypeScript is my specialty. View my work or get in touch
          with me below. I would love to create new opportunities on the web for
          you!
        </p>

        <div className="block xs:flex md:block justify-around text-white">
          <Button
            className="mb-8 xs:mb-0 block md:inline-block mx-auto xs:mx-0 md:mr-5 md-2:mr-16"
            bgColor="bg-blue"
          >
            View Work
          </Button>
          <Button style={{ transform: 'translateY(-1px)' }} bgColor="bg-orange">
            Contact
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Hero
