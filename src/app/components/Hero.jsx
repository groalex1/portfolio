import React from 'react';
import Image from 'next/image';
import {saveAs} from 'file-saver';

const Hero = () => {
  return (
    <section> 
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-400 ">
                        Hi, I am {" "}
                    </div>
                    Alexander
                </h1>
                <p className="text-gray-500 text-base sm:text-lg lg:text-xl mb-5">
                    Welcome to my portfolio site, stay a while :)
                </p>
                <div>
                    <button className="text-white w-full sm:w-fit px-6 py-3 mb-4 rounded-full mr-6 bg-gradient-to-br from-yellow-300 to-purple-400 bg-black border border-white hover:text-black">
                        Hire Me
                    </button>
                    <a href='public/Files/Alexander-Groman-Resume.pdf' download className="text-white w-full sm:w-fit px-6 py-3 mb-4 rounded-full bg-gradient-to-br from-yellow-300 to-purple-400 bg-black border border-white hover:text-black">
                        Download CV
                    </a>
                </div>
            </div>
            <div className="col-span-5 place-self-center">
                <div className="rounded-full bg-blue-400 lg:w-[300px] lg:h-[300px] w-[220px] h-[220px] relative">
                    <Image
                        src ="/images/Avatar.png"
                        alt = "avatar"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width = {200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero