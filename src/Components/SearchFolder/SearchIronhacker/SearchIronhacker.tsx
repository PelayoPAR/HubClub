import React, { useEffect, useState } from "react"
import apiClient from "../../../Service/apiClient"
import { SingleIronhackerType, SingleProjectType } from "../../../Types/Types"

interface searchFunctionProp {
  displaySearchedProjects: (IHname: string) => void
}

function SearchIronhacker({ displaySearchedProjects }: searchFunctionProp) {
  const [allIronhackers, setAllIronhackers] = useState<SingleIronhackerType[]>(
    []
  )
  const [selectedIronhacker, setSelectedIronhacker] = useState("")

  useEffect(() => {
    apiClient
      .get<SingleIronhackerType[]>("/ironhackers")
      .then((result) => setAllIronhackers(result.data))
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    displaySearchedProjects(selectedIronhacker)
  }, [selectedIronhacker])

  return (
    <div>
      Search
      <form>
        <fieldset>
          <legend>Search Ironhacker:</legend>
          <label htmlFor="ironhacker">Ironhacker:</label>
          <select
            id="ironhacker"
            name="country"
            value={selectedIronhacker}
            onChange={(event) => setSelectedIronhacker(event.target.value)}
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
        </fieldset>
      </form>
    </div>
  )
}

export default SearchIronhacker
