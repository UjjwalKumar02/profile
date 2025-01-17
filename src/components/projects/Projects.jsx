import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='sm:w-[45%] w-[90%] sm:p-8 p-6 mt-6 bg-white rounded-lg shadow-xl'>
      <h1 className='font-semibold text-xl'>Projects</h1>

      <div className='flex gap-4 flex-wrap justify-between mt-4'>
        <ProjectCard
        title={"Project-1"} 
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
        />

        <ProjectCard
        title={"Project-2"} 
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
        />

        <ProjectCard
        title={"Project-3"} 
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
        />

        <ProjectCard
        title={"Project-4"} 
        desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit"}
        />
      </div>
    </section>
  )
}

export default Projects