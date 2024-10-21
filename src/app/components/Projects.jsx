import React from 'react'
import ProjectCard from './ProjectCard'

    const projectsData = [
        {
            id: 1,
            title: "Project 1",
            desc: "Project 1 description",
            image: "/images/ProjectIMG/p1.png",
            tag: ["All", "Web"],
            gitURL: "/",
            previewURL: "/"
        },
        {
            id: 2,
            title: "Project 2",
            desc: "Project 2 description",
            image: "/images/ProjectIMG/p2.png",
            tag: ["All", "Web"],
            gitURL: "/",
            previewURL: "/"
        },
        {
            id: 3,
            title: "Project 3",
            desc: "Project 3 description",
            image: "/images/ProjectIMG/p3.png",
            tag: ["All", "Web"],
            gitURL: "/",
            previewURL: "/"
        },
    ]

const Projects = () => {
  return (
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
    </div>
  )
}

export default Projects