import React from 'react'
import { Project } from '../../Types/Types'

// type Project = {
//     chosenProject: ChosenProject,
// }

function DisplayProject({ chosenProject }: Project) {
    // if (chosenProject) {
    //     console.log(chosenProject)
    //     console.log(`name is : ${chosenProject.projectName}`)
    // } else {
    //     console.log("failurrreeeee")
    // }
    const { projectName, URL, description, owners, tech_used, img, module } = chosenProject

    return (
        <div>
            <h2>Project</h2>
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