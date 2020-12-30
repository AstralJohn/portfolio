import React from 'react'
import Button from 'components/Button'

const Hero: React.FC = () => {
  return (
    <header className="px-10 bg-blue-dark text-blue-light text-center py-16">
      <h1 className="text-5xl mb-1">Hi, I&apos;m John</h1>
      <h2 className="text-lg tracking-tight mb-8">
        A full stack developer that creates things for the web
      </h2>
      <p className="leading-8 mb-14">
        I work on web projects from simple WordPress sites to complex web
        applications. I like working with React and GraphQL as
        JavaScript/TypeScript is my specialty. View my work or get in touch with
        me below. I would love to create new opportunities on the web for you!
      </p>

      <div className="block xs:flex justify-around">
        <Button className="mb-8 xs:mb-0 block mx-auto xs:mx-0" bgColor="bg-blue">
          View Work
        </Button>
        <Button bgColor="bg-orange">Contact</Button>
      </div>
    </header>
  )
}

export default Hero
