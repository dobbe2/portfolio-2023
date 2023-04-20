// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import Para from '../Para';
import SectionContainer from '../Section-Container';
import Heading from '../Heading';
import Button from '../Button';
import Title from '../Title';
import { useForm } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mrgvrzjp");

  return (
    <SectionContainer className="bg-purple-heart" id="contact">
    <Heading dark title="Contact Me" />
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="px-4 py-4 sm:px-0">
          <Para dark>
            I would love to connect with you and discuss opportunities, collaborations, or the deep mysteries of life. Send me a message or connect with me on Discord, GitHub, or LinkedIn!
          </Para>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  <Title>Name</Title>
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Nicknames are fine too :)"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  <Title>Message</Title>
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8">
          { state.succeeded ? 
            <Button
              type="submit"
              disabled="disabled"
              label={"Thank You!"}
              className="cursor-not-allowed bg-purple-heart"
            > Thank You! </Button>:
            <Button
              type="submit"
              disabled={state.submitting}
              label={"Send"}
              className="bg-purple-heart hover:bg-viking-tint"
            >
              Send
            </Button>
          }
          </div>
        </form>
      </div>
    </SectionContainer>
  );}