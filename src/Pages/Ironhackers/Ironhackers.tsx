import React from 'react'
import DisplayIronhacker from '../../Components/DisplayIronhacker/DisplayIronhacker'
import ironhackers from '../../Data/ironhackers.json'

function Ironhackers() {
  return (
    <div>
      <h3>Ironhackers</h3>
        <div>

        {ironhackers.map((ironhacker, index)=> {
          return <DisplayIronhacker key={index} singleIronhacker={ironhacker}/>
        })}
      </div>
    </div>
  )
}

export default Ironhackers