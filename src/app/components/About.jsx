"use client";

import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import Tabs from './Tabs';
import AnimatedSection from './AnimatedSection';

const tabData = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-5 text-gray-600 dark:text-gray-300'>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React/Next.js</li>
                <li>SQL</li>
                <li>Full Stack Development</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-5 text-gray-600 dark:text-gray-300'>
                <li>B.S. Computer Science</li>
                <li>University of Maryland: Global Campus Summa Cum Laude</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-5 text-gray-600 dark:text-gray-300'>
                <li>Software Developer with BeachRunners</li>
                <li>Software Development Intern with FINRA</li>
                <li>DataCenter Technician II with Google</li>
            </ul>
        )
    }
]

const About = () => {
  const [tab, setTab] = useState("skills");
  const [/*isPending*/, startTransition] = useTransition();

  const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        });
  };
  
  return (
    <section className='snap-section min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300' id="about"> 
        <div className='max-w-7xl mx-auto md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <AnimatedSection>
                <div className="relative rounded-2xl overflow-hidden border-8 border-gray-100 dark:border-gray-800 shadow-xl">
                    <Image 
                        src="/images/aboutIMG.png" 
                        width={500} 
                        height={500} 
                        alt="About section profile"
                        className="w-full h-auto" 
                    />
                </div>
            </AnimatedSection>
            
            <AnimatedSection className='mt-8 md:mt-0 text-left flex flex-col h-full' delay={200}>
                <h2 className='text-4xl font-bold text-gray-800 dark:text-white mb-4'>About Me</h2>
                <p className='text-base md:text-lg mb-4 text-gray-600 dark:text-gray-300'>
                    I am Alexander, a recently graduated software engineer. I am fascinated by the sheer variety of things you can build with code, 
                    which explains why I have dipped my toes into so many different languages and frameworks.
                </p>
                <p className='text-base md:text-lg text-gray-600 dark:text-gray-300'>
                    I have often coded bits and pieces of projects that interested me, whether or not they worked out each one taught me something new. 
                    I am a firm believer in learning by doing, and I am always eager to dive in. 
                    If you are looking for someone with a broad skillset and a passion for exploring the ever-evolving world of programming, here I am.
                </p>
                <div className='flex flex-row mt-8 border-b border-gray-200 dark:border-gray-700'>
                    <Tabs 
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}>
                            {" "}Proficient Skills{" "}
                    </Tabs>
                    <Tabs 
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}>
                            {" "}Education{" "}
                    </Tabs>
                    <Tabs   
                        selectTab={() => handleTabChange("experience")}
                        active={tab === "experience"}>
                            {" "}Experience{" "}
                    </Tabs>
                </div>
                <div className='mt-8'> 
                    {tabData.find((t) => t.id === tab).content}
                </div>
            </AnimatedSection>
        </div>
    </section>
  )
}

export default About