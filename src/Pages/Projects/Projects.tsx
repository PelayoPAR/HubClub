import { useEffect, useState } from "react"
import DisplayProject from "../../Components/DisplayProject/DisplayProject"
import SearchIronhacker from "../../Components/SearchFolder/SearchIronhacker/SearchIronhacker"
import apiClient from "../../Service/apiClient"
import { SingleProjectType } from "../../Types/Types"

function Projects() {
  const [projects, setProjects] = useState<SingleProjectType[]>([])
  const [selectedProjects, setSelectedProjects] = useState<SingleProjectType[]>(
    []
  )

  useEffect(() => {
    apiClient
      .get<SingleProjectType[]>("/projects")
      .then((result) => {
        setProjects(result.data)
      })
      .catch((err) => console.log(err))
  }, [])

  // useEffect(() => {}, [selectedProjects])

  const displaySearchedProjects = (IHname: string) => {
    const filteredProjects = projects.filter((project) =>
      project.owners.includes(IHname)
    )

    setSelectedProjects(filteredProjects)
  }

  return (
    <div>
      <h3>Projects</h3>
      <SearchIronhacker displaySearchedProjects={displaySearchedProjects} />
      {selectedProjects.length > 0
        ? selectedProjects.map((project, index) => {
            return <DisplayProject key={index} singleProject={project} />
          })
        : projects.map((project, index) => {
            return <DisplayProject key={index} singleProject={project} />
          })}
      {/* {selectedProjects.map((project, index) => {
        return <DisplayProject key={index} singleProject={project} />
      })} */}
    </div>
  )
}

export default Projects
