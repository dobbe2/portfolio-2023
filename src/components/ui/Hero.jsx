import React from "react";
import Button from "../Button";
import { Fade } from "react-awesome-reveal";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Hero() {
  return (
    
    <div className="w-full h-full px-6 pt-64 pb-16 md:px-24 md:p-24 bg-purple-heart -mt-44 md:pt-72 md:-mt-48">
      <div className="flex flex-col items-start justify-center">
        <Fade triggerOnce cascade damping={.3}>
          <p className="text-xl font-semibold text-viking ">Hi, my name is</p>
          <h1 className="my-4 text-6xl font-bold text-white">James Dobbe</h1>
          <h1 className="text-6xl text-mercury">I am a front end developer.</h1>
          <p className="my-4 text-xl text-mercury">
            I am a versatile web developer and freelancer dedicated to creating dynamic online experiences. Bringing a blend of creativity and technical prowess to every project, I specialize in crafting unique and user-friendly solutions. Let's collaborate to elevate your digital presence.
          </p>
          <div className="pb-4 my-4">
            <AnchorLink href="#contact">
              <Button label="Get In Touch" size="text-xl" />
            </AnchorLink>
          </div>
        </Fade>
      </div>
    </div>
    
  );
}
