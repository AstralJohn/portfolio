import React from 'react'
import BrowserModal from './browserModal'
import pocketnow480 from 'assets/pocketnow-480w.jpg'
import pocketnow960 from 'assets/pocketnow-960w.jpg'
import Button from 'components/Button'

const MyWork: React.FC = () => {
  return (
    <section className="text-center container mx-auto">
      <h1 className="text-6xl mb-24">My Work</h1>
      <BrowserModal
        data={{
          pictureData: [{ src: pocketnow960 }],
          title: 'PocketNow',
          src: pocketnow480,
          alt: 'Screenshot of PocketNow.com'
        }}
      />
      <BrowserModal
        data={{
          pictureData: [{ src: pocketnow960 }],
          title: 'PocketNow',
          src: pocketnow480,
          alt: 'Screenshot of PocketNow.com'
        }}
      />
      <BrowserModal
        data={{
          pictureData: [{ src: pocketnow960 }],
          title: 'PocketNow',
          src: pocketnow480,
          alt: 'Screenshot of PocketNow.com'
        }}
      />
      <Button className="text-white shadow-lg" bgColor="bg-blue">View More</Button>
    </section>
  )
}

export default MyWork
