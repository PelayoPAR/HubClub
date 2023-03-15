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
  // console.log("projecccts: ", projects)
  console.log("selectedProjects: ", selectedProjects)
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
    /* ToDo: 
      a. display the project that matches by name and empty module 
      b. display the project that matches by name and module
      c. display the project that matches by module only
       c2. update options to only show ironhackers that have project with that module
      d. display all (kinda already happenin')
      */
    console.log("theFinalChosen is: ", theChosen)
    const nameFilteredProjects = projects.filter(
      (project) => project.owners.includes(theChosen.ironhacker)
      // project.module == theChosen.module
    )
    // console.log("single filter whiskey: ", nameFilteredProjects)
    const doubleFilteredProjects = nameFilteredProjects.filter(
      (project) => project.module == theChosen.module
    )
    const moduleFilteredProjects = projects.filter(
      (project) => project.module == theChosen.module
    )
    // console.log(nameFilteredProjects)
    // console.log("the chosen is:", theChosen)
    // console.log("theChosen module is: ", theChosen.module)
    // console.log("double filter whiskey: ", doubleFilteredProjects)
    if (theChosen.ironhacker && !theChosen.module) {
      setSelectedProjects(nameFilteredProjects)
    }
    if (theChosen.ironhacker && theChosen.module) {
      setSelectedProjects(doubleFilteredProjects)
    }
    if (!theChosen.ironhacker && theChosen.module) {
      setSelectedProjects(moduleFilteredProjects)
    }
  }

  console.log("selectos are: ", selectedProjects)

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
