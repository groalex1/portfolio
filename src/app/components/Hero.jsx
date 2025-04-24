"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="snap-section min-h-screen flex items-center justify-center relative overflow-hidden
                         bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-secondary-light/10 dark:bg-secondary-dark/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container z-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
          {/* Text column */}
          <AnimatedSection className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-text-light dark:text-text-dark mb-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-400">
                  Hi, I&apos;m {" "}
              </div>
              Alexander
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl mb-6 max-w-lg">
              Recently graduated software engineer passionate about building innovative solutions with clean, efficient code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <a 
                href='/Files/Alexander_Groman_Resume.pdf' 
                download 
                className="px-6 py-3 rounded-full flex items-center justify-center gap-2 
                         bg-gradient-to-r from-secondary-light to-primary-light dark:from-secondary-dark dark:to-primary-dark
                         text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <DocumentArrowDownIcon className="w-5 h-5" />
                Download CV
              </a>
              <button 
                onClick={scrollToNextSection}
                className="px-6 py-3 rounded-full flex items-center justify-center gap-2
                           dark:bg-gray-800 dark:text-white dark:border-gray-700
                           bg-white text-gray-800 border border-gray-200
                           hover:shadow-lg transition-all duration-300"
              >
                Learn More
                <ArrowDownIcon className="w-5 h-5" />
              </button>
            </div>
          </AnimatedSection>

          {/* Image column */}
          <AnimatedSection className="col-span-5 flex justify-center sm:justify-end" delay={200}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r 
                              from-secondary-light to-primary-light dark:from-secondary-dark dark:to-primary-dark 
                              animate-pulse blur-2xl opacity-20"></div>
              <div className="relative rounded-full overflow-hidden border-4 
                              dark:border-gray-800 border-white
                              shadow-xl w-[280px] h-[280px]">
                <Image
                  src="/images/Hero_Image.png"
                  alt="Alexander Groman"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 280px"
                  priority
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownIcon className="w-6 h-6 dark:text-gray-400 text-gray-600" />
      </div>
    </section>
  );
};  

export default Hero;