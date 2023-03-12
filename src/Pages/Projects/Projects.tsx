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

  const displaySearchedProjects = (theChosen: {
    ironhacker: string
    module: string
  }) => {
    const filteredProjects = projects.filter(
      (project) => project.owners.includes(theChosen.ironhacker)
      // &&
      // project.module === theChosen.module
      /* ToDo: 
      a. display the project that matches by name and empty module 
      b. display the project that matches by name and module
      c. display the project that matches by module only
       c2. update options to only show ironhackers that have project with that module
      d. display all (kinda already happenin')
      */
    )
    console.log(filteredProjects)
    console.log(theChosen)
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
    </div>
  )
}

export default Projects
