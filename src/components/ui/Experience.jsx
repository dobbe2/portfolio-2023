import { PaperClipIcon } from '@heroicons/react/20/solid'
import Heading from '../Heading'
import SectionContainer from '../Section-Container'
import Para from '../Para'

export default function Experience() {
  return (
    <SectionContainer>
        <Heading title="Where I've Worked" />
      <div className="mt-5 prose text-gray-500 prose-indigo lg:col-start-1 lg:row-start-1 lg:max-w-none">
        <dl className="grid grid-cols-1 lg:mt-10 gap-x-4 gap-y-0 lg:gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <Para bold>Title</Para>
            <Para>Freelance Web Developer</Para>
          </div>
          <div className="sm:col-span-1">
            <Para bold>Date</Para>
            <Para>February 2021 - Present</Para>
          </div>
          <div className="sm:col-span-2">
          <Para bold>What I've Done</Para>
            <div className="grid lg:gap-4">
              <ul className='list-disc'>
                <li>Work with businesses to design and develop websites and branding/logos</li>
                <li>Assist in developing creative content</li>
                <li>Work with client to ensure shared vision and expectations</li>
                <li>Launched multiple websites, setting up domains, hosting, and monitoring/maintenance</li>
              </ul>
            </div>
          </div>
        </dl>
        </div>
        <div className="mt-5 prose text-gray-500 prose-indigo lg:col-start-1 lg:row-start-1 lg:max-w-none">
        <dl className="grid grid-cols-1 lg:mt-10 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <Para bold>Title</Para>
            <Para>Front End Developer @ ZAP Protocol</Para>
          </div>
          <div className="sm:col-span-1">
            <Para bold>Date</Para>
            <Para>October 2021 - April 2022</Para>
          </div>
          <div className="sm:col-span-2">
            <Para bold>What I've Done</Para>
            <div className="grid lg:gap-4">
              <ul className='list-disc'>
                <li>Used design tools such as Figma and Storybook to create reusable components for the entire application and to build and test all components</li>
                <li>Worked alongside design team through handoffs and bridges. Collaborated daily with front-end and design teams to keep progress pushing forward and give and receive feedback on current tasks</li>
                <li>Received and reviewed changes to the Design System and created tickets to assign to developers</li>
                <li>Performed bug testing and QA before version releases and made changes quickly and precisely</li>
              </ul>
            </div>
          </div>
        </dl>
        </div>
      </SectionContainer>
  )
}
