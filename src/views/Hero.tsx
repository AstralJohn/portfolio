import React from 'react'
import Button from 'components/Button'
import headshot150 from 'assets/me-150w.png'
import headshot300 from 'assets/me-300w.png'

const Hero: React.FC = () => {
  return (
    <header className="px-10 bg-blue-dark md:bg-white text-blue-light md:text-blue-dark text-center md:text-left md:grid gap-8 grid-cols-3 py-16">
      <picture className="col-span-1 order-1 md:flex items-center">
        <source srcSet={headshot300} media="(min-width: 768px)" />
        <img
          className="mx-auto mb-5 rounded-full md:rounded-none bg-blue-light md:bg-white border-blue-light border-4 md:border-none"
          src={headshot150}
          alt="A headshot photo of John Dinh"
        />
      </picture>
      <div className="col-span-2">
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
            className="mb-8 xs:mb-0 block md:inline-block md:mr-10 mx-auto xs:mx-0"
            bgColor="bg-blue"
          >
            View Work
          </Button>
          <Button bgColor="bg-orange">Contact</Button>
        </div>
      </div>
    </header>
  )
}

export default Hero
