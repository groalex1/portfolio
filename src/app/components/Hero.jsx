import React from 'react';
import Image from 'next/image';
import {saveAs} from 'file-saver';

const Hero = () => {
    return (
      <section className="snap-section">
        <div className="section-container flex items-center justify-center"> {/* Added justify-center */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center"> {/* Added gap and items-center */}
            {/* Text column */}
            <div className="col-span-6 place-self-center text-center sm:text-left">
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-400">
                  Hi, I am {" "}
                </div>
                Alexander
              </h1>
              <p className="text-gray-500 text-base sm:text-lg lg:text-xl mb-5">
                Welcome to my portfolio site, stay a while :)
              </p>
              <div className="pt-5">
                <a 
                  href='/Files/Alexander_Groman_Resume.pdf' 
                  download 
                  className="text-white w-full sm:w-fit px-6 py-3 mb-4 rounded-full bg-gradient-to-br from-yellow-300 to-purple-400 bg-black border border-white hover:text-black"
                >
                  Download CV
                </a>
              </div>
            </div>
  
            {/* Image column */}
            <div className="col-span-6 flex justify-end"> {/* Changed to justify-end */}
              <div className="rounded-full bg-purple-800 w-[220px] h-[220px] relative">
                <Image
                  src="/images/Hero_Image.png"
                  alt="avatar"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  width={200}
                  height={200}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };  

export default Hero