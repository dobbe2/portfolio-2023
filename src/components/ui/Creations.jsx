import Heading from "../Heading";
import Para from "../Para";
import SectionContainer from "../Section-Container";
import anagram from "../../assets/images/anagram.png";
import baseball from "../../assets/images/baseballApp.png";
import lbc from "../../assets/images/LBC1.png";
import nft from "../../assets/images/MainNFT.jpg";
import walkeasy from "../../assets/images/walkEasy1.png";


const features = [
    {
      name: 'Pedorthist Medical Website',
      description: 'Designed and created a company site for a Medical Professional (https://walk-easy.vercel.app) to replace a very slow and poorly designed WordPress site.',
      imageSrc: walkeasy,
      imageAlt: 'Hero Section of the WalkEasy foot doctor website',
      tools: ['Next.js', 'Tailwind CSS', 'Tailwind UI'],
    },
    {
      name: 'Construction Contractor Website',
      description: 'Built a WordPress website for a construction company (https://leebrannamconstruction.com) to showcase projects and drive business with an elegant and modern responsive design. ',
      imageSrc: lbc,
      imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
        name: 'ZAP NFT Marketplace',
        description: 'Remotely worked with developers and designers from around the world, contributing to the redesign of a large application containing an NFT marketplace, Oracles Price Feeds, and other Exchanges. Designed with mobile development as top priority.  Project can be found at https://app.zap.org/nft (requires digital wallet to view all content). ',
        imageSrc: nft,
        imageAlt: 'Frontpage layout of the ZAP Protocol NFT Marketplace',
    },
    {
        name: 'Interactive Baseball Scoreboard',
        description: 'Developed a visual representation of a baseball scoreboard.  Programmed the many conditional situations that occur during a ball and strike count, and the runners on the basepaths. Focused on heavy game logic.',
        imageSrc: baseball,
        imageAlt: 'Picture of the baseball game app with a game in progress.',
    }
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example() {
    // const toollist = features.map((tools, index) => <li key={index}>{tools}</li>)
    return (
      <div className="bg-white">
        <SectionContainer>
          {/* <div className="max-w-3xl mx-auto text-center"> */}
            <Heading title="Some Things I’ve Built" />
            {/* <Para className="mt-4">
              As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a
              fabric sleeve that matches in quality and looks.
            </Para> */}
          {/* </div> */}
  
          <div className="mt-16 space-y-16">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                  )}
                >
                  <Para bold className="hover:text-viking">{feature.name}</Para>
                  <Para className="mt-2">{feature.description}</Para>
                  <Para bold className="mt-2">Technologies Used</Para>
                    <ul>
                        {features.tools}
                    </ul>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                    'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                  )}
                >
                  <div className="overflow-hidden bg-gray-100 rounded-lg shadow-lg aspect-w-5 aspect-h-5">
                    <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>
    )
  }
  