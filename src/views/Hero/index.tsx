import React from 'react'
import Button from 'components/Button'
import headshot150 from 'assets/me-150w.png'
import headshotStyled from 'assets/me-styled-300w.png'
import headshotDesktop from 'assets/me-1280w.png'
import Browser from 'components/Browser'
import DotGrid from 'components/Icons/dot-grid'
import { scroller } from 'react-scroll'

const Hero: React.FC = () => {
  return (
    <header className="px-10 pb-16 mx-auto mb-10 text-center md:mt-10 lg-2:mt-0 2xl:pl-32 4k:pl-60 lg:gap-24 bg-blue-dark md:bg-white text-blue-light md:text-blue-dark md:text-left md:grid grid-cols-12 lg-2:h-lg-2-hero 2xl:h-auto">
      <div className="relative order-1 max-h-screen hero-image md:flex 1 col-span-4 md-2:col-span-5 lg:col-span-7 4k:col-span-8">
        <picture className="bottom-0 right-0 z-0 items-end md:flex md:relative">
          <source srcSet={headshotDesktop} media="(min-width: 1024px)" />
          <source srcSet={headshotStyled} media="(min-width: 768px)" />
          <img
            className="mx-auto mb-5 border-4 rounded-full md:mr-0 md:mb-0 md:rounded-none bg-blue-light md:bg-white border-blue-light md:border-none lg:bg-opacity-0"
            src={headshot150}
            alt="A headshot photo of John Dinh"
          />
          <Browser className="absolute left-0 hidden transform lg:block scale-50 xl:scale-65 2xl:scale-75 origin-top-left -bottom-20 lg:-bottom-4 xl-2:-bottom-0 4k:scale-100 4k:bottom-44">
            <DotGrid
              style={{ zIndex: -1, top: 'calc(50% - 1rem)', left: '50%' }}
              className="absolute"
              fill="#D0E2EE"
            />
          </Browser>
          <Browser
            style={{ zIndex: -1 }}
            className="absolute hidden transform lg:block scale-50 xl:scale-65 2xl:scale-75 left-36 origin-top-left top-4 lg-2:top-32 xl:top-4 4k:left-72 4k:scale-100"
          >
            <DotGrid
              style={{ zIndex: -1, top: 'calc(50% - 1rem)', right: '50%' }}
              className="absolute"
              fill="#00AEBA"
            />
          </Browser>
          <Browser
            style={{ zIndex: -1 }}
            className="absolute hidden transform lg:block scale-50 xl:scale-65 2xl:scale-75 -right-40 origin-top-left -bottom-20 lg:-bottom-4 xl-2:-bottom-0 4k:scale-100 4k:bottom-44 4k:right-0"
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
        <h1 className="mb-1 text-5xl xl:text-7xl">Hi, I&apos;m John</h1>

        <h2 className="mb-8 text-lg tracking-tight xl:pl-2 lg:text-2xl xl:font-medium md:w-120">
          A full stack developer that creates things for the web
        </h2>

        <p className="xl:pl-2 leading-8 mb-14 xl:text-xl">
          I work on web projects from simple static websites to complex web applications. My speciality is JavaScript/TypeScript with React and GraphQL. Other than web development, I also find interest in UI/UX designing and tinkering with Linux machines to optimize and automate daily workflow.
        </p>

        <div className="justify-around block text-white xs:flex md:block lg:w-120">
          <Button
            className="block mx-auto mb-8 xs:mb-0 md:inline-block xs:mx-0 md:mr-5 lg:mr-16 lg:mb-8"
            bgColor="bg-blue"
            bgHoverColor="bg-blue-dark"
            onClick={() => {
              scroller.scrollTo('my-work', {
                duration: 1500,
                delay: 100,
                smooth: true
              })
            }}
          >
            View Work
          </Button>
          <Button
            style={{ transform: 'translateY(-1px)' }}
            bgColor="bg-orange"
            bgHoverColor="bg-orange-dark"
            onClick={() => {
              scroller.scrollTo('contact', {
                duration: 1500,
                delay: 100,
                smooth: true
              })
            }}
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Hero
