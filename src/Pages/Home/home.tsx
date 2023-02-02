import Projects from "../../Data/projects.json"
import Ironhackers from "../../Data/ironhackers.json"
import DisplayProject from '../../Components/DisplayProject/DisplayProject';
import { useState } from 'react';
import { ChosenProject, ChosenIronhacker } from '../../Types/Types';
import DisplayIronhacker from '../../Components/DisplayIronhacker/DisplayIronhacker';


function HomePage() {
  const swapDisplayTimerMs = 5000

  let getRandomIndex = () => {
    return Math.floor(Math.random() * (Projects.length))
  }
  let getRandomIronhackerIndex = () => {
    return Math.floor(Math.random() * (Ironhackers.length))
  }

  const [randomIndex, setRandomIndex] = useState(getRandomIndex)
  const [randomIhIndex, setRandomIhIndex] = useState(getRandomIronhackerIndex)

  setTimeout(() => {
    const newIndex = getRandomIndex()
    if (newIndex === randomIndex) {
      console.log("Nex: ", newIndex)
      console.log("Prev: ", randomIndex)
      setRandomIndex((newIndex + 1) % Projects.length)
    } else {
      console.log("Not equal")
      setRandomIndex(newIndex)
    }

    const newIhIndex = getRandomIronhackerIndex()
    if (newIhIndex === randomIhIndex) {
      console.log("Nex Ironhacker: ", newIhIndex)
      console.log("Prev Ironhacker: ", randomIhIndex)
      setRandomIhIndex((newIhIndex + 1) % Ironhackers.length)
    } else {
      console.log("Not same IH")
      setRandomIhIndex(newIhIndex)
    }
  }, swapDisplayTimerMs)

  const randomProject: ChosenProject = Projects[randomIndex]
  const randomIronhacker: ChosenIronhacker = Ironhackers[randomIhIndex]

  return (
    <div className="App">
      

      <h1>IronVengers Hub Club</h1>

      <DisplayIronhacker chosenIronhacker={{ ...randomIronhacker }} />
      <DisplayProject chosenProject={{ ...randomProject }} />
    </div>
  );
}

export default HomePage;
