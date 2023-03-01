import { useEffect, useState } from "react"
import DisplayProject from "../../Components/DisplayProject/DisplayProject"
import apiClient from "../../Service/apiClient"
import { SingleProjectType } from "../../Types/Types"

function Projects() {
  const [projects, setProjects] = useState<SingleProjectType[]>([])

  useEffect(() => {
    apiClient
      .get<SingleProjectType[]>("/projects")
      .then((result) => setProjects(result.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h3>Projects</h3>
      {projects.map((project, index) => {
        return <DisplayProject key={index} singleProject={project} />
      })}
    </div>
  )
}

export default Projects
