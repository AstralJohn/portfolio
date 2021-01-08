import React, { useState } from 'react'
import LetterSvg from 'components/Icons/letter'
import TwitterSvg from 'components/Icons/logo-twitter'
import LinkedinSvg from 'components/Icons/logo-linkedin'
import Button from 'components/Button'

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

    const text = (e.target as HTMLInputElement).value

    setFormData({
      ...formData,
      [e.target.id]: text
    })
  }

  const handleOnSubmit: React.FormEventHandler = (e) => {
    // const regex = /[^a-zA-Z0-9.-]/g
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className="bg-orange lg: lg:bg-white text-white">
      <div className="container mx-auto">
        <h1 className="text-6xl py-6 text-center lg:text-blue-dark">Contact</h1>
        <div className="flex justify-center flex-col lg:flex-row">
          <div className="lg:bg-orange lg:flex-col lg:px-12 lg:pt-12 lg:max-w-sm">
            <div className="flex justify-center gap-12 lg:gap-2 mb-10 lg:flex-col lg:text-orange-dark">
              <div className="hidden lg:block pb-12 text-white">
                <h2 className="text-3xl font-medium">Let&#39;s Get In Touch</h2>
                <p className="text-sm">
                  Fill out the form to send me an email, or reach out to me with
                  the following
                </p>
              </div>
              <Button
                link
                href="https://google.com"
                target="_blank"
                className="h-16 w-16 p-3 block"
                bgColor="bg-blue-dark lg:bg-transparent"
                circle
              >
                <LetterSvg strokewidth={2} />
              </Button>
              <Button
                href="https://twitter.com/johndinhdev"
                target="_blank"
                link
                className="h-16 w-16 p-3 block"
                bgColor="bg-blue-dark lg:bg-transparent"
                circle
              >
                <TwitterSvg className="stroke-current stroke-2" fill="none" />
              </Button>
              <Button
                className="h-16 w-16 p-3"
                bgColor="bg-blue-dark lg:bg-transparent"
                circle
              >
                <LinkedinSvg
                  className="stroke-current transform scale-90"
                  fill="none"
                />
              </Button>
            </div>
          </div>
          <form
            onSubmit={handleOnSubmit}
            className="px-12 lg:inline-block lg:bg-white-tint"
          >
            <label className="text-left">
              Full Name
              <input
                value={formData.fullName}
                id="fullName"
                className="block w-full mb-6 placeholder-orange-dark placeholder-opacity-50 bg-transparent border-b-2 border-white lg:border-blue lg:placeholder-blue-dark lg:placeholder-opacity-50"
                onChange={handleOnChange}
                placeholder="John Doe"
                type="text"
              />
            </label>
            <label className="text-left">
              Email
              <input
                value={formData.email}
                onChange={handleOnChange}
                id="email"
                className="block w-full mb-6 placeholder-orange-dark placeholder-opacity-50 bg-transparent border-b-2 border-white lg:border-blue lg:placeholder-blue-dark lg:placeholder-opacity-50"
                placeholder="your@email.com"
                type="email"
              />
            </label>
            <label className="text-left">
              Subject
              <input
                value={formData.subject}
                onChange={handleOnChange}
                id="subject"
                className="block w-full mb-6 placeholder-orange-dark placeholder-opacity-50 bg-transparent border-b-2 border-white lg:border-blue lg:placeholder-blue-dark lg:placeholder-opacity-50"
                placeholder="John Doe"
                type="text"
              />
            </label>
            <label className="text-left">
              Message
              <textarea
                id="message"
                value={formData.message}
                className="resize-none bg-transparent block mb-12 border-b-2 placeholder-orange-dark placeholder-opacity-50 border-white lg:border-blue lg:placeholder-blue-dark lg:placeholder-opacity-50 w-full h-auto"
                placeholder="Your message"
                rows={1}
                onChange={handleOnChange}
              ></textarea>
            </label>
            <Button
              className="pl-5 pr-5 mx-auto block shadow-2xl min-w-min mb-8"
              bgColor="bg-blue"
            >
              Send Message
            </Button>
          </form>
        </div>
        <h2 className="text-orange-dark text-center text-3xl pb-8">
          Thanks for visiting
        </h2>
      </div>
    </section>
  )
}

export default Contact
