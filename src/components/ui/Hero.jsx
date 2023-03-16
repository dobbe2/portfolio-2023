import React from "react";
import Button from "../Button";

export default function Hero() {
  return (
    <div className="w-full pb-16 px-6 md:px-24 md:p-24  bg-purple-heart h-full pt-64 -mt-44 md:pt-72 md:-mt-48">
      <div className="flex flex-col items-start justify-center">
        <p className="text-xl text-viking font-semibold ">Hi, my name is</p>
        <h1 className="text-6xl font-bold text-white my-4">James Dobbe</h1>
        <h1 className="text-6xl text-mercury">I am a front end developer.</h1>
        <p className="text-xl text-mercury my-4">
          I design and build custom websites for cool people, just like you! I
          am currently working as a freelancer, designing brands and sites for
          the most exciting groups.
        </p>
        <div className="my-4 pb-4">
          <Button label="Get In Touch" size="text-xl" />
        </div>
      </div>
    </div>
  );
}
