import React, { useState } from 'react'
import LetterSvg from 'components/Icons/letter'
import TwitterSvg from 'components/Icons/logo-twitter'
import LinkedinSvg from 'components/Icons/logo-linkedin'
import Button from 'components/Button'
import CircleGraphic from './circleGraphic'

interface FormData {
  fullName: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const initialFormData = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
  }

  const [formData, setFormData] = useState<FormData>(initialFormData)

  const handleOnChange: React.ChangeEventHandler = (e) => {
    // Auto resize textarea
    if (e.target.id === 'message') {
      const target = e.target as HTMLTextAreaElement
      target.style.height = 'inherit'
      target.style.height = `${target.scrollHeight}px`
    }

    const target = e.target as HTMLInputElement
    const text = target.value

    setFormData({
      ...formData,
      [target.name]: text
    })
  }

  const handleOnSubmit: React.FormEventHandler = (e) => {
    // const regex = /[^a-zA-Z0-9.-]/g
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className="bg-orange lg: lg:bg-white text-white">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-6xl py-6 text-center lg:text-blue-dark lg:mb-10">
          Contact
        </h1>
        <div className="flex justify-center flex-col lg:flex-row">
          <div className="overflow-hidden lg:bg-orange lg:flex-col lg:px-12 lg:pt-12 relative">
            <div className="flex justify-center gap-12 lg:gap-2 mb-10 lg:flex-col lg:text-orange-dark">
              <div className="hidden lg:block pb-12 text-white">
                <h2 className="text-3xl font-medium">Let&#39;s Get In Touch</h2>
                <p className="text-sm">
                  Fill out the form to send me an email, or reach out to me with
                  the following
                </p>
              </div>
              <span className="flex items-center">
                <Button
                  link
                  href="mailto:john@johndinh.dev"
                  target="_blank"
                  className="h-16 w-16 p-3 block lg:pl-0"
                  bgColor="bg-blue-dark lg:bg-transparent"
                  circle
                >
                  <LetterSvg strokewidth={2} />
                </Button>
                <p className="hidden lg:inline-block text-white">
                  john@johndinh.dev
                </p>
              </span>
              <span className="flex items-center">
                <Button
                  href="https://twitter.com/johndinhdev"
                  target="_blank"
                  link
                  className="h-16 w-16 p-3 block"
                  bgColor="bg-blue-dark lg:bg-transparent lg:pl-0"
                  circle
                >
                  <TwitterSvg className="stroke-current stroke-2" fill="none" />
                </Button>
                <p className="hidden lg:inline-block text-white">
                  @johndinhdev
                </p>
              </span>
              <span className="flex items-center">
                <Button
                  className="h-16 w-16 p-3"
                  bgColor="bg-blue-dark lg:bg-transparent lg:pl-0"
                  circle
                >
                  <LinkedinSvg
                    className="stroke-current transform scale-90"
                    fill="none"
                  />
                </Button>
                <p className="hidden lg:inline-block text-white">
                  @johndinhdev
                </p>
              </span>
            </div>
            <CircleGraphic />
          </div>
          <form
            onSubmit={handleOnSubmit}
            className="px-12 lg:inline-block lg:bg-white-tint lg:w-120 lg:px-32 lg:py-20"
          >
            <div>
              <div className="lg:flex lg:gap-4 lg:justify-between">
                <label className="text-left lg:text-blue 2xl:w-2/5">
                  Full Name
                  <input
                    value={formData.fullName}
                    id="fullName"
                    name="fullName"
                    className="block w-full mb-6 placeholder-orange-dark placeholder-opacity-50 bg-transparent border-b-2 border-white lg:border-blue lg:placeholder-blue-dark lg:placeholder-opacity-50 lg:mb-20 lg:text-blue-dark"
                    onChange={handleOnChange}
                    placeholder="John Doe"
                    type="text"
                  />
                </label>
                <label className="text-left lg:text-blue 2xl:w-2/5">
                  Email
                  <input
                    value={formData.email}
                    onChange={handleOnChange}
                    id="email"
                    name="email"
                    className="block w-full mb-6 placeholder-orange-dark placeholder-opacity-50 bg-transparent border-b-2 border-white lg:border-blue lg:placeholder-blue-dark lg:placeholder-opacity-50 lg:mb-20 lg:text-blue-dark"
                    placeholder="your@email.com"
                    type="email"
                  />
                </label>
              </div>
              <label className="text-left lg:text-blue">
                Subject
                <input
                  value={formData.subject}
                  onChange={handleOnChange}
                  id="subject"
                  name="subject"
                  className="block w-full mb-6 placeholder-orange-dark placeholder-opacity-50 bg-transparent border-b-2 border-white lg:border-blue lg:placeholder-blue-dark lg:placeholder-opacity-50 lg:mb-20 lg:text-blue-dark"
                  placeholder="Subject"
                  type="text"
                />
              </label>
              <label className="text-left lg:text-blue">
                Message
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  className="resize-none bg-transparent block mb-12 border-b-2 placeholder-orange-dark placeholder-opacity-50 border-white lg:border-blue lg:placeholder-blue-dark lg:placeholder-opacity-50 w-full h-auto lg:mb-20 lg:text-blue-dark"
                  placeholder="Your message"
                  rows={1}
                  onChange={handleOnChange}
                ></textarea>
              </label>
              <Button
                className="pl-5 pr-5 mx-auto block shadow-2xl min-w-min mb-8 lg:ml-0"
                bgColor="bg-blue"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
        <h2 className="text-orange-dark text-center text-3xl pb-8 lg:text-blue-dark lg:text-7xl lg:mt-20">
          Thanks for visiting
        </h2>
      </div>
    </section>
  )
}

export default Contact
