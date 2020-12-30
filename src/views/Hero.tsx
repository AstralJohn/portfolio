import React from 'react'

const Hero: React.FC = () => {
  return (
    <header className="container px-10 bg-blue-dark text-blue-light text-center py-16">
      <h1 className="text-5xl mb-2">Hi, I&apos;m John</h1>
      <h2 className="text-lg tracking-tight mb-8">
        A full stack developer that creates things for the web
      </h2>
      <p className="leading-8">
        I work on web projects from simple WordPress sites to complex web
        applications. I like working with React and GraphQL as
        JavaScript/TypeScript is my specialty. View my work or get in touch with
        me below. I would love to create new opportunities on the web for you!
      </p>
    </header>
  )
}

export default Hero
