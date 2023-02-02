import Projects from "../../Data/projects.json"
import Ironhackers from "../../Data/ironhackers.json"
import DisplayProject from '../../Components/DisplayProject/DisplayProject';
import { useState } from 'react';
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


  
  return (
    <div className="App">      

      <h1>IronVengers Hub Club</h1>
      <h2>Ironhacker</h2>
      <DisplayIronhacker singleIronhacker={{ ...Ironhackers[randomIhIndex] }} />
      <h2>Project</h2>
      <DisplayProject singleProject={{ ...Projects[randomIndex] }} />
    </div>
  );
}

export default HomePage;
