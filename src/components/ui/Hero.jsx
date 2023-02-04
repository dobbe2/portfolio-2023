import React from "react";

export default function HeroComponent() {
    return (
        <div className="w-full py-16 px-6 md:px-24 md:p-24  bg-gray-100 lg:h-96 h-auto">
            <div className="flex flex-col items-start justify-center">
                <p className="text-lg text-violet-500">Hi, my name is</p>
                <h1 className="text-4xl font-bold">James Dobbe</h1>
                <h1 className="text-4xl">I am a front end developer.</h1>
                <p className="text-md">I design and build custom websites for cool people, just like you! I am currently working as a freelancer, designing brands and sites for the most exciting groups.</p> 
                <div className="mt-4">
                    <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">
                        Get started
                    </button>
                </div>
            </div>
        </div>
    );
}