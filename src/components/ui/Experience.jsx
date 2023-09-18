import { PaperClipIcon } from '@heroicons/react/20/solid';
import Heading from '../Heading';
import SectionContainer from '../Section-Container';
import Para from '../Para';
import Title from '../Title';
import ListItem from '../ListItem';
import { Slide, Fade } from "react-awesome-reveal";


export default function Experience() {
  return (
    <SectionContainer className="bg-purple-heart" id="experience">
      <Slide>
        <Heading dark title="Where I've Worked" />
      </Slide>
      <div className="mt-5 prose text-gray-500 prose-indigo lg:col-start-1 lg:row-start-1 lg:max-w-none">
        <dl className="grid grid-cols-1 lg:mt-10 gap-x-4 gap-y-0 lg:gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <Title dark >Position</Title>
            <Para dark>Freelance Web Developer</Para>
          </div>
          <div className="sm:col-span-1">
            <Title dark>Date</Title>
            <Para dark>February 2021 - Present</Para>
          </div>
          <div className="sm:col-span-2">
          <Title dark>What I've Done</Title>
            <div className="grid lg:gap-4">
              <Fade cascade>
                <ul role="list" className='text-lg list-disc marker:text-viking'>
                  <ListItem dark item="Work with businesses to design and develop websites and branding/logos" />
                  <ListItem dark item="Assist in developing creative content" />
                  <ListItem dark item="Work with client to ensure shared vision and expectations" />
                  <ListItem dark item="Launched multiple websites, setting up domains, hosting, and monitoring/maintenance" />
                </ul>
              </Fade>
            </div>
          </div>
        </dl>
        </div>
        <div className="mt-5 prose text-gray-500 prose-indigo lg:col-start-1 lg:row-start-1 lg:max-w-none">
        <dl className="grid grid-cols-1 lg:mt-10 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <Title dark>Position</Title>
            <Para dark>Front End Developer @ ZAP Protocol</Para>
          </div>
          <div className="sm:col-span-1">
            <Title dark>Date</Title>
            <Para dark>October 2021 - April 2022</Para>
          </div>
          <div className="sm:col-span-2">
            <Title dark>What I've Done</Title>
            <div className="grid lg:gap-4">
              <Fade cascade>
                <ul role="list" className='text-lg list-disc marker:text-viking'>
                    <ListItem dark item="Used design tools such as Figma and Storybook to create reusable components for the entire application and to build and test all components" />
                    <ListItem dark item="Worked alongside design team through handoffs and bridges. Collaborated daily with front-end and design teams to keep progress pushing forward and give and receive feedback on current tasks" />
                    <ListItem dark item="Received and reviewed changes to the Design System and created tickets to assign to developers" />
                    <ListItem dark item="Performed bug testing and QA before version releases and made changes quickly and precisely" />
                  </ul>
                </Fade>
            </div>
          </div>
        </dl>
        </div>
      </SectionContainer>
  )
}
