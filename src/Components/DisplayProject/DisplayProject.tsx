import React from 'react'
import { Project } from '../../Types/Types'

// type Project = {
//     singleProject: ChosenProject,
// }

function DisplayProject({ singleProject }: Project) {
    // if (singleProject) {
    //     console.log(singleProject)
    //     console.log(`name is : ${singleProject.projectName}`)
    // } else {
    //     console.log("failurrreeeee")
    // }
    const { projectName, URL, description, owners, tech_used, img, module } = singleProject

    return (
        <div>
            <p>{projectName}</p>
            <a target="_blank" rel="noreferrer" href={URL}>{URL}</a>

            <p>{description}</p>
            {owners?.map((owner, index) => {
                return <p key={index}>{owner}</p>
            })}
            <p>{tech_used?.map((tech, index) => {
                return <span key={index}>{tech} </span>
            })}</p>
            <p>Module: {module}</p>
            <img src={img} alt="oopsies" />
        </div>
    )
}

export default DisplayProject