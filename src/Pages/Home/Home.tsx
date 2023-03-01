import DisplayProject from "../../Components/DisplayProject/DisplayProject"
import { useState, useEffect } from "react"
import DisplayIronhacker from "../../Components/DisplayIronhacker/DisplayIronhacker"
import { SingleIronhackerType, SingleProjectType } from "../../Types/Types"
import apiClient from "../../Service/apiClient"

function HomePage() {
  const swapDisplayTimerMs = 5000

  const [ironhackers, setIronhackers] = useState<SingleIronhackerType[]>([])
  const [projects, setProjects] = useState<SingleProjectType[]>([])

  const getIronhackers = async () => {
    await apiClient
      .get<SingleIronhackerType[]>("/ironhackers")
      .then((result) => setIronhackers(result.data))
      .catch((err) => console.log(err))
  }

  const getProjects = async () => {
    await apiClient
      .get<SingleProjectType[]>("/projects")
      .then((result) => setProjects(result.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getIronhackers()
    getProjects()
  }, [])

  let getRandomIndex = () => {
    return Math.floor(Math.random() * projects.length)
  }
  let getRandomIronhackerIndex = () => {
    return Math.floor(Math.random() * ironhackers.length)
  }

  const [randomIndex, setRandomIndex] = useState(getRandomIndex)
  const [randomIhIndex, setRandomIhIndex] = useState(getRandomIronhackerIndex)

  setTimeout(() => {
    const newIndex = getRandomIndex()
    if (newIndex === randomIndex) {
      console.log("Nex: ", newIndex)
      console.log("Prev: ", randomIndex)
      setRandomIndex((newIndex + 1) % projects.length)
    } else {
      console.log("Not equal")
      setRandomIndex(newIndex)
    }

    const newIhIndex = getRandomIronhackerIndex()
    if (newIhIndex === randomIhIndex) {
      console.log("Nex Ironhacker: ", newIhIndex)
      console.log("Prev Ironhacker: ", randomIhIndex)
      setRandomIhIndex((newIhIndex + 1) % ironhackers.length)
    } else {
      console.log("Not same IH")
      setRandomIhIndex(newIhIndex)
    }
  }, swapDisplayTimerMs)

  return (
    <div className="App">
      <h1>IronVengers Hub Club</h1>
      <h2>Ironhacker</h2>
      <DisplayIronhacker singleIronhacker={{ ...ironhackers[randomIhIndex] }} />
      <h2>Project</h2>
      <DisplayProject singleProject={{ ...projects[randomIndex] }} />
    </div>
  )
}

export default HomePage
