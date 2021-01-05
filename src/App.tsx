import React from 'react'
import Hero from 'views/Hero'
import MobileNavbar from 'views/Nav/mobileNavbar'
import DesktopNavbar from 'views/Nav/desktopNavbar'
const App: React.FC = () => {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
      <Hero />
    </>
  )
}

export default App
