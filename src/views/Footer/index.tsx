import React from 'react'
import Button from 'components/Button'
import LinkedinSvg from 'components/Icons/logo-linkedin'
import TwitterSvg from 'components/Icons/logo-twitter'
import GithubSvg from 'components/Icons/logo-github'

const Footer: React.FC = () => {
  return (
    <footer className="lg:mt-16 bg-blue-dark text-white text-center py-14">
      <p className="mb-4">John Dinh &#169; 2021</p>
      <Button
        link
        href="https://www.linkedin.com/in/johndinhdev/"
        target="_blank"
        className="h-16 w-16 p-3 inline-block"
        bgColor="bg-transparent"
        circle
      >
        <LinkedinSvg fill="white" />
      </Button>
      <Button
        link
        href="https://twitter.com/johndinhdev"
        target="_blank"
        className="h-16 w-16 p-3 inline-block"
        bgColor="bg-transparent"
        circle
      >
        <TwitterSvg fill="white" />
      </Button>
      <Button
        link
        href="https://github.com/JohnDinhDev"
        target="_blank"
        className="h-16 w-16 p-3 inline-block"
        bgColor="bg-transparent"
        circle
      >
        <GithubSvg fill="white" />
      </Button>
    </footer>
  )
}

export default Footer
