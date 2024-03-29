import Heading from "../Heading";
import Para from "../Para";
import Title from "../Title";
import ShineOuter from "../ShineOuter";
import Shine from "../Shine";
import SectionContainer from "../Section-Container";
import anagram from "../../assets/images/anagram.png";
import baseball from "../../assets/images/baseballApp.png";
import lbc from "../../assets/images/LBC1.png";
import nft from "../../assets/images/MainNFT.jpg";
import walkeasy from "../../assets/images/walkEasy1.png";
import cpg from "../../assets/images/cpg.png";
import portfolio from "../../assets/images/portfolio2023.png"
import { FiExternalLink } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"
import ListItem from '../ListItem';
import { Slide, Fade, Zoom } from "react-awesome-reveal";



const features = [
    {
      name: 'Pedorthist Medical Website',
      description: `Designed and created a company site for a Medical Professional to replace a very slow and poorly designed WordPress site.`,
      imageSrc: walkeasy,
      imageAlt: 'Hero Section of the WalkEasy foot doctor website',
      tools: ['Next.js', 'Tailwind CSS', 'Tailwind UI'],
      href: 'http://walk-easy.vercel.app',
    },
    {
      name: 'Construction Contractor Website',
      description: 'Built a WordPress website for a construction company to showcase projects and drive business with an elegant and modern responsive design. ',
      imageSrc: lbc,
      imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
      tools: ['WordPress', 'HTML', 'CSS'],
      href: 'https://leebrannamconstruction.com'
    },
    {
      name: 'Craft Group Website',
      description: 'Built a WordPress website for a craft group to showcase items, advertise events, and drive sales. ',
      imageSrc: cpg,
      imageAlt: 'Landing for craft group website',
      tools: ['WordPress', 'HTML', 'CSS'],
      href: 'https://checkeredpastgals.com/'
    },
    {
        name: 'ZAP NFT Marketplace',
        description: 'Remotely worked with developers and designers from around the world, contributing to the redesign of a large application containing an NFT marketplace, Oracles Price Feeds, and other Exchanges. Designed with mobile development as top priority.',
        imageSrc: nft,
        imageAlt: 'Frontpage layout of the ZAP Protocol NFT Marketplace',
        tools: ['React', 'Typescript', 'Figma', 'Styled-Components', 'Storybook'],
        href: 'https://app.zap.org/nft',

    },
    {
        name: 'Interactive Baseball Scoreboard',
        description: 'Developed a visual representation of a baseball scoreboard.  Programmed the many situations that occur during a ball and strike count, and the runners on the basepaths. Built with an abundance of conditional logic.',
        imageSrc: baseball,
        imageAlt: 'Picture of the baseball game app with a game in progress.',
        tools: ['HTML', 'CSS', 'Javascript', 'jQuery'],
        href: 'https://dobbe2.github.io/baseballScoreboard/',
        github: 'https://github.com/dobbe2/baseballScoreboard',
    },
    {
      name: 'Personal Portfolio',
      description: 'Created a new personal portfolio page to showcase my experiences as a developer, as well as conveying my personality and attention to detail. ',
      imageSrc: portfolio,
      imageAlt: 'Screenshot of this portfolio',
      tools: ['React', 'Typescript', 'Tailwind CSS', 'Figma'],
      href: 'https://dobbe2.github.io/portfolio-2023',
      github: 'https://github.com/dobbe2/portfolio-2023',

  },
    {
        name: 'Anagram Checker',
        description: 'A project created to check if two sets of letters or words are anagrams of each other.',
        imageSrc: anagram,
        imageAlt: 'Picture of the anagram app.',
        tools: ['HTML', 'CSS', 'Javascript'],
        href: 'https://dobbe2.github.io/anagram',
        github: 'https://github.com/dobbe2/anagram',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example() {
    return (
      <div className="bg-white">
        <SectionContainer id="work">
          <Slide triggerOnce>
            <Heading title="Some Things I’ve Built" />
          </Slide>
          <div className="mt-16 space-y-16">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-6 xl:col-start-7',
                    'mt-6 lg:col-span-7 lg:row-start-1 lg:mt-0 xl:col-span-6'
                  )}
                >
                  <Para bold>Featured Project </Para>
                  <a target="_blank" rel="noreferrer" href={feature.href}>
                    <Title bold className="transition duration-300 hover:text-viking">{feature.name}</Title>
                  </a>
                  <Para className="mt-2">{feature.description}</Para>
                  <Para bold className="mt-2">Technologies Used</Para>
                  <Fade triggerOnce cascade duration={500}>
                    <ul className="ml-5 text-lg list-disc marker:text-viking">{
                      feature.tools.map((tool, index) => {             
                        return(<ListItem key={index} item={tool}>
                        </ListItem>)
                      })
                    }
                    </ul>
                    </Fade>
                    <div className="flex gap-2 mt-2">
                    { feature.github ? 
                    <ShineOuter>
                    <Fade triggerOnce>
                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href={feature.github}>
                        <FaGithub size={25} color="#5f22d9" />
                        <Shine />
                      </a>
                      </Fade>
                      </ShineOuter>
                      : 
                      <></>}
                      <ShineOuter>
                      <Fade triggerOnce>
                      <a className="cursor-pointer" target="_blank" rel="noreferrer" href={feature.href}>
                        <FiExternalLink size={25} color="#5f22d9" />
                      </a>
                      <Shine />
                      </Fade>
                      </ShineOuter>
                    </div>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-8 ' : 'lg:col-start-1',
                    'flex-auto lg:col-span-5 lg:row-start-1 '
                  )}
                >
                  <Zoom triggerOnce className="overflow-hidden bg-gray-100 rounded-lg shadow-xl aspect-w-5 aspect-h-5">
                    <a target="_blank" rel="noreferrer" href={feature.href}>
                      <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                    </a>
                  </Zoom>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>
    )
  }
  