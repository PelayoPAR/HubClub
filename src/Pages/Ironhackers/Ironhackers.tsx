import { useEffect, useState } from 'react'
import DisplayIronhacker from '../../Components/DisplayIronhacker/DisplayIronhacker'
import apiClient from '../../Service/apiClient'
import { SingleIronhackerType } from "../../Types/Types"

function Ironhackers() {

  const [ironhackers, setIronhackers] = useState<SingleIronhackerType[]>([]);

  useEffect(() => {
    apiClient.get<SingleIronhackerType[]>("/ironhackers").then((result) => setIronhackers(result.data)).catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h3>Ironhackers</h3>
      <div>
        {ironhackers.map((ironhacker, index) => {
          return <DisplayIronhacker key={index} singleIronhacker={ironhacker} />
        })}
        </div>
    </div>
  )
}

export default Ironhackers