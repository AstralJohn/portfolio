import React from 'react'
import Project from './project'

// Project Images
import pocketnow480 from 'assets/pocketnow-480w.jpg'
import pocketnow960 from 'assets/pocketnow-960w.jpg'

import xdadevelopers480 from 'assets/xdadevelopers-480w.jpg'
import xdadevelopers960 from 'assets/xdadevelopers-960w.jpg'

import xdaforums480 from 'assets/xdaforums-480w.jpg'
import xdaforums960 from 'assets/xdaforums-960w.jpg'

import backyardboss480 from 'assets/backyardboss-480w.jpg'
import backyardboss960 from 'assets/backyardboss-960w.jpg'

import anitracker480 from 'assets/anitracker-480w.jpg'
import anitracker960 from 'assets/anitracker-960w.jpg'

import nextbuy480 from 'assets/nextbuy-480w.jpg'
import nextbuy960 from 'assets/nextbuy-960w.jpg'

import JsConsoleSvg from 'components/Icons/js-console'
import GrainEffectSvg from 'components/Icons/grain-effect'
import TextureSvg from 'components/Icons/texture'
import EditBrightnessSvg from 'components/Icons/edit-brightness'

const projectsData = [
  {
    pictureData: [{ src: pocketnow960 }],
    title: 'PocketNow',
    desc: 'High traffic, WordPress news site about phones and electronics.',
    src: pocketnow480,
    alt: 'Screenshot of PocketNow.com',
    href: 'https://pocketnow.com'
  },
  {
    pictureData: [{ src: xdadevelopers960 }],
    title: 'XDA-Developers',
    className: '-translate-y-1/4',
    desc: 'News site for the latest information on android devices',
    src: xdadevelopers480,
    alt: 'Screenshot of xda-developers.com',
    href: 'https://xda-developers.com'
  },
  {
    pictureData: [{ src: xdaforums960 }],
    title: 'XDA Forums',
    className: '-translate-y-1/4',
    desc: 'Forum website for rooting and customizing android devices',
    src: xdaforums480,
    alt: 'Screenshot of forums.xda-developers.com',
    href: 'https://forums.xda-developers.com'
  },
  {
    pictureData: [{ src: backyardboss960 }],
    title: 'BackyardBoss',
    desc: 'Blog site on the most useful tools for backyard gardening and more',
    src: backyardboss480,
    alt: 'Screenshot of backyardboss.net',
    href: 'https://backyardboss.net'
  },
  {
    pictureData: [{ src: anitracker960 }],
    title: 'aniTracker',
    desc: 'Chrome extension that conviently tracks anime episode progress',
    src: anitracker480,
    alt: 'Screenshot of aniTracker chrome extension',
    href:
      'https://chrome.google.com/webstore/detail/anitrack/nobmbldhlggcgmhkjeahdnjpcgoclhif?hl=en'
  },
  {
    pictureData: [{ src: nextbuy960 }],
    title: 'Nextbuy.Ai',
    desc: 'Database of smartphones',
    src: nextbuy480,
    alt: 'Screenshot of nextbuy.ai',
    href: 'https://nextbuy.ai'
  }
]

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
        {projectsData.map((project) => {
          return <Project key={project.title} data={project} />
        })}
      </div>
    </section>
  )
}

export default MyWork
