"use client";

import React, {useTransition,useState} from 'react'
import Image from 'next/image'
import Tabs from './Tabs';


const tabData = [

    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-dic pl-2'>
                <li>Example.js</li>
                <li>Software</li>
                <li>Yadda</li>
                <li>Shmungus</li>
                <li>Amongus</li>
            </ul>

        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-dic pl-2'>
                <li>Bachelors Degree</li>
                <li>Computer Science</li>
                <li>University of Maryland: Global Campus</li>
                <li>4.0 baby</li>
            </ul>
        )
    },
    {

        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-dic pl-2'>
                <li>Software Developer</li>
                <li>Software Development Intern</li>
                <li>DataCenter Technician II</li>
            </ul>
        )

    }

]

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {

        startTransition(() => {
            setTab(id)
        });
  };
  return (
    <section className='text-white'> 
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src = "/images/aboutIMG.png" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base md:text-lg'>
                    I am a full stack software developer I am a full stack software developer
                    I am a full stack software developer I am a full stack software developer
                    I am a full stack software developer I am a full stack software developer
                    I am a full stack software developer I am a full stack software developer
                </p>
                <div className='flex flex-row mt-8'>
                    <Tabs 
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}>
                            {" "}Skills{" "}
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
                <div className='mt-8'> {tabData.find((t) => t.id === tab).content}

                </div>
            </div>
        </div>
    </section>
  )
}

export default About