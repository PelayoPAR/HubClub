import React, { ChangeEvent, useEffect, useState } from "react"
import apiClient from "../../../Service/apiClient"
import { SingleIronhackerType, SingleProjectType } from "../../../Types/Types"

interface searchFunctionProp {
  displaySearchedProjects: (theChosen: {
    ironhacker: string
    module: string
  }) => void
}

function SearchIronhacker({ displaySearchedProjects }: searchFunctionProp) {
  const [allIronhackers, setAllIronhackers] = useState<SingleIronhackerType[]>(
    []
  )
  const [allProjects, setAllProjects] = useState<SingleProjectType[]>([])
  const [selectedIronhacker, setSelectedIronhacker] = useState("")
  const [projectModules, setProjectModules] = useState<string[]>([])
  const [theChosen, setTheChosen] = useState({ ironhacker: "", module: "" })

  const getIronhackers = async () => {
    await apiClient
      .get<SingleIronhackerType[]>("/ironhackers")
      .then((result) => setAllIronhackers(result.data))
      .catch((err) => console.log(err))
  }

  const getProjects = async () => {
    await apiClient
      .get<SingleProjectType[]>("/projects")
      .then((result) => {
        const fetchedData = result.data
        setAllProjects(fetchedData)
        getModules(fetchedData)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getIronhackers()
    getProjects()
  }, [])

  function getModules(fetchedData: SingleProjectType[]) {
    let moduleArr: string[] = []
    fetchedData.map((project) => {
      if (!moduleArr.includes(project.module)) {
        moduleArr.push(project.module)
      }
    })
    moduleArr.sort()
    console.log("mod", moduleArr)
    setProjectModules(moduleArr)
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target
    setTheChosen({ ...theChosen, [name]: value })
  }

  useEffect(() => {
    displaySearchedProjects(theChosen)
  }, [theChosen])

  return (
    <div>
      <form>
        <fieldset>
          <legend>Search Projects:</legend>
          <label htmlFor="ironhacker">by Ironhacker: </label>
          <select
            id="ironhacker"
            name="ironhacker"
            // value={selectedIronhacker}
            onChange={handleChange}
          >
            <option></option>
            <optgroup label="Ironhacker">
              {allIronhackers.map((ironhacker) => {
                return (
                  <option value={ironhacker.name} key={ironhacker.id}>
                    {ironhacker.name}
                  </option>
                )
              })}
            </optgroup>
          </select>
          <label htmlFor="module">by Ironhack Module: </label>
          <select id="module" name="module" onChange={(event) => handleChange}>
            <option></option>
            <optgroup label="Module">
              {projectModules.map((module, index) => {
                return (
                  <option value={module} key={index}>
                    {module}
                  </option>
                )
              })}
            </optgroup>
          </select>
        </fieldset>
      </form>
    </div>
  )
}

export default SearchIronhacker
