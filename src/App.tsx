import React from 'react'
import Hero from 'views/Hero'
import MobileNavbar from 'views/Nav/mobileNavbar'
import DesktopNavbar from 'views/Nav/desktopNavbar'
import MyWork from 'views/MyWork'
import Contact from 'views/Contact'
const App: React.FC = () => {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
      <Hero />
      <MyWork />
      <Contact />
    </>
  )
}

export default App
