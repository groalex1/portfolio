import React from 'react'
import ProjectCard from './ProjectCard'

    const projectsData = [
        {
            id: 1,
            title: "Portfolio Site",
            desc: "A website developed in React Node.js using tailwind css for a single page site, you are here now! ",
            image: "/images/ProjectIMG/p1.png",
            tag: ["All", "Web"],
            gitURL: "https://github.com/groalex1/portfolio",
            previewURL: "https://www.alexanderdev.info"
        },
        {
            id: 2,
            title: "GPT Chatbot",
            desc: "Expirementing with GPT-4 and GPT Turbo model API calls to create a functioning chatbot wrapper",
            image: "/images/ProjectIMG/p2.png",
            tag: ["All", "Web"],
            gitURL: "https://github.com/groalex1/Chatbot",
            previewURL: "https://github.com/groalex1/Chatbot" //Adjust this later on to a live site
        },
        {
            id: 3,
            title: "Wellness Ios Application for Small Business",
            desc: "Was contracted to build an IOS application for a small business, using Swift and SwiftUI, this application is a wellness app that allows users to book yoga classes and track their attendance and schedules.",
            image: "/images/ProjectIMG/p3.png",
            tag: ["All", "Web"],
            gitURL: "https://github.com/groalex1/AhimsaWellness",
            previewURL: "https://github.com/groalex1/AhimsaWellness"
        },
    ]

const Projects = () => {
  return (
    <section className="snap-section">
        <div>
            <h2 className='text-4xl font-bold text-white mb-4'>My Projects</h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id} 
                        title={project.title} 
                        desc={project.desc} 
                        imgUrl={project.image}
                        tags ={project.tag}
                        gitURL={project.gitURL}
                        previewURL={project.previewURL}
                    />
                ))}
            </div>
            <div className='pb-48'></div>
        </div>
    </section>
  )
}

export default Projects