import React from 'react'
import Project from './project'
import pocketnow480 from 'assets/pocketnow-480w.jpg'
import pocketnow960 from 'assets/pocketnow-960w.jpg'
import JsConsoleSvg from 'components/Icons/js-console'
import GrainEffectSvg from 'components/Icons/grain-effect'
import TextureSvg from 'components/Icons/texture'
import EditBrightnessSvg from 'components/Icons/edit-brightness'

const MyWork: React.FC = () => {
  return (
    <section id="my-work" className="text-center container mx-auto">
      <h1 className="text-6xl mb-3">My Work</h1>
      <p className="px-5 mb-14">
        Here are a few projects I have worked on recently. Want more details on
        my projects?{' '}
        <span className="block">
          <a className="font-bold text-blue" href="mailto:john@johndinh.dev">
            Email me.
          </a>
        </span>
      </p>

      <div className="relative">
        <div className="h-16 w-16 hidden lg:block lg-2:hidden xl:block lg:absolute lg:left-10 xl:left-0 xl-1:left-4 xl-1:scale-125 lg:-top-20 transform rotate-12">
          <JsConsoleSvg fill="#029CC2" secondaryfill="#FF7340" />
        </div>
        <div className="h-16 w-16 hidden lg:block lg-2:hidden xl:block lg:absolute lg:left-5 xl:left-0 xl-1:left-4 xl-1:scale-125 lg:top-56 transform rotate-45">
          <GrainEffectSvg fill="#029CC2" secondaryfill="#FF7340" />
        </div>
        <div className="h-16 w-16 hidden lg:block lg-2:hidden xl:block lg:absolute lg:right-10 xl:right-0 xl-1:right-4 xl-1:scale-125 lg:top-24 transform rotate-12">
          <TextureSvg fill="#029CC2" secondaryfill="#FF7340" />
        </div>
        <div className="h-16 w-16 hidden lg:block lg-2:hidden xl:block absolute lg:right-10 xl:right-0 xl-1:right-4 xl-1:scale-125 lg:top-96 transform rotate-12">
          <EditBrightnessSvg fill="#029CC2" secondaryfill="#FF7340" />
        </div>
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
