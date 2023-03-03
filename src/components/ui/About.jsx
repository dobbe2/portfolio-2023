import Me from "../../assets/images/me.jpg";

export default function About() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative w-full py-16 px-6 md:px-24 md:p-24 ">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            {/* <h2 className="text-lg font-semibold text-indigo-600">About Me</h2> */}
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-indigo-600 sm:text-4xl">About Me</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-heliotrope" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto text-base lg:max-w-none">
              <figure>
              <div class="filter grayscale-[50%] hover:filter-none hover:contrast-200 hover:duration-150 duration-150 ease-in-out">
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src={Me}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div></div>
                {/* <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  <span className="ml-2">Photograph by Marcus O’Leary</span>
                </figcaption> */}
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto text-base lg:max-w-none">
              <p className="text-lg text-gray-500">
                My name is James Dobbe, and I am a junior front-end web developer with a background in creative arts and management. I have earned a certificate in full-stack development from the University of Washington. I have learned to create dynamic, repsonsive apps using HTML and CSS, as well as skills in Javascript and React. My passion shines through in design, functionality, and efficiency. In many of my projects, I took the lead design role, creating polished and professional products. I have been greatly appreciated by my coworkers and management at my first front-end developer job. 
              </p>
            </div>
            <div className="prose prose-indigo mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                I have experience working for the Blockchain Center, focusing on React and Typescript to redesign an NFT Marketplace, Price Feeds, and other applications for the ZAP Protocol project. I took part in design team meetings, developer handoffs of materials and designs, and helped to write and assign tickets using Github. My time at this position taught me valuable technologies and gave me confidence in my craft.
              </p>
              <p>
                My family is most important to me. I have a beautiful wife, Becky, a 4 year old son, Cruz, a 15 year old daughter, Morgan, and a 2 year old girl, Haven. We have a tabby cat, Apollo, and we have an Australian Shepard/Border Collie mix named Lucy. Some of my hobbies include playing piano and guitar, pyrography (wood burning), snowboarding, playing retro video games, going to Seattle Mariners games, and making pizzas.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <div class="grid grid-cols-2 gap-4">
                <ul>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Wordpress</li>
                </ul>
                <ul>
                    <li>Figma</li>
                    <li>Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
