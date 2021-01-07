import React from 'react'
import Project from './project'
import pocketnow480 from 'assets/pocketnow-480w.jpg'
import pocketnow960 from 'assets/pocketnow-960w.jpg'

const MyWork: React.FC = () => {
  return (
    <section className="text-center container mx-auto">
      <h1 className="text-6xl mb-3">My Work</h1>
      <p className="px-5 mb-14">
        Here are a few projects I have had the pleasure to worked on recently.
        Want more details on my projects?{' '}
        <div>
          <a className="font-bold text-blue" href="mailto:john@johndinh.dev">
            Email me.
          </a>
        </div>
      </p>

      <div>
        <Project
          data={{
            pictureData: [{ src: pocketnow960 }],
            title: 'PocketNow',
            desc:
              'High traffic, WordPress news site about phones and electronics.',
            src: pocketnow480,
            alt: 'Screenshot of PocketNow.com'
          }}
        />
        <Project
          data={{
            pictureData: [{ src: pocketnow960 }],
            title: 'PocketNow',
            desc:
              'High traffic, WordPress news site about phones and electronics.',
            src: pocketnow480,
            alt: 'Screenshot of PocketNow.com'
          }}
        />
        <Project
          data={{
            pictureData: [{ src: pocketnow960 }],
            title: 'PocketNow',
            desc:
              'High traffic, WordPress news site about phones and electronics.',
            src: pocketnow480,
            alt: 'Screenshot of PocketNow.com'
          }}
        />
        <Project
          data={{
            pictureData: [{ src: pocketnow960 }],
            title: 'PocketNow',
            desc:
              'High traffic, WordPress news site about phones and electronics.',
            src: pocketnow480,
            alt: 'Screenshot of PocketNow.com'
          }}
        />
        <Project
          data={{
            pictureData: [{ src: pocketnow960 }],
            title: 'PocketNow',
            desc:
              'High traffic, WordPress news site about phones and electronics.',
            src: pocketnow480,
            alt: 'Screenshot of PocketNow.com'
          }}
        />
        <Project
          data={{
            pictureData: [{ src: pocketnow960 }],
            title: 'PocketNow',
            desc:
              'High traffic, WordPress news site about phones and electronics.',
            src: pocketnow480,
            alt: 'Screenshot of PocketNow.com'
          }}
        />
      </div>
    </section>
  )
}

export default MyWork
