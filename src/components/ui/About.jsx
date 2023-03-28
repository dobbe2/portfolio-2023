import Me from "../../assets/images/me.jpg";
import Para from "../Para";
import Heading from "../Heading";
import SectionContainer from "../Section-Container";

export default function About() {
  return (
    <SectionContainer>
      <div className="absolute top-0 bottom-0 hidden w-screen left-3/4 bg-gray-50 lg:block" />
      <div className="mx-auto text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <Heading title="About Me" />
      </div>
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="relative lg:col-start-2 lg:row-start-1">
          <svg
            className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
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
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-christale"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
            />
          </svg>
          <div className="relative mx-auto text-base lg:max-w-none">
            <figure>
              <div class="filter grayscale-[50%] hover:filter-none hover:contrast-200 hover:duration-150 duration-150 ease-in-out">
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="object-cover object-center rounded-lg shadow-lg lg:max-w-md"
                    src={Me}
                    alt="My daughter and I at a restaurant"
                    width={1184}
                    height={1376}
                  />
                </div>
              </div>
              <figcaption className="flex mt-3 text-sm text-gray-500">
                {/* <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" /> */}
                <span className="ml-2">
                  My daughter and I having too much fun
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="mx-auto text-base lg:max-w-none">
            <Para>
              Hello! My name is James Dobbe, and I enjoy building websites and
              designing for new and growing businesses. My interest in front-end
              web development is fueled by a mix of artistic and logical
              perspectives that get enjoyment from building both interesting and
              engaging pages and components.{" "}
            </Para>
          </div>
          <div className="mt-5 prose text-gray-500 prose-indigo lg:col-start-1 lg:row-start-1 lg:max-w-none">
            <Para>
              I've worked for a large crypto firm, helping to build and
              implement a complete redesign of a handful of applications for
              active users. Projects include an NFT marketplace and a
              voting/ballot monitoring app.
            </Para>
            <Para>
              I have also worked with businesses to build modern websites that
              are designed to help drive more traffic and engage their users.
            </Para>
            <Para>
              Here are a few technologies I’ve been working with recently:
            </Para>
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
    </SectionContainer>
  );
}
