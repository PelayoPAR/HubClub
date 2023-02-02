import React from 'react'
import DisplayProject from '../../Components/DisplayProject/DisplayProject'
import projects from "../../Data/projects.json"

function Projects() {
  return (
    <div>
        <h3>Projects</h3>
        {projects.map((project, index)=>{
            return <DisplayProject key={index} singleProject={project}/>
        })}
    </div>
  )
}

export default Projects