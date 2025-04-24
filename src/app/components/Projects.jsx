import React from 'react';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

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
        previewURL: "https://github.com/groalex1/Chatbot" 
    },
    {
        id: 3,
        title: "Wellness Ios Application for Small Business",
        desc: "Was contracted to build an IOS application for a small business, using Swift and SwiftUI, this application is a wellness app that allows users to book yoga classes and track their attendance and schedules.",
        image: "/images/ProjectIMG/p3.png",
        tag: ["All", "Application", "Mobile"],
        gitURL: "https://github.com/groalex1/AhimsaWellness",
        previewURL: "https://github.com/groalex1/AhimsaWellness"
    },
]

const Projects = () => {
  return (
    <section className="snap-section min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-16 px-4" id="projects">
        <div className="max-w-6xl mx-auto w-full">
            <AnimatedSection>
                <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center'>My Projects</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-12">
                  Here are some of the projects I&apos;ve worked on. Each represents different skills and technologies I&apos;ve explored.
                </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <AnimatedSection key={project.id} delay={index * 100}>
                        <ProjectCard
                            title={project.title} 
                            desc={project.desc} 
                            imgUrl={project.image}
                            tags={project.tag}
                            gitURL={project.gitURL}
                            previewURL={project.previewURL}
                        />
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects