import React from 'react'
import Ironhackers from '../../Data/ironhackers.json'
import { useParams } from 'react-router-dom'

function SingleIronhacker() {
    const {name} = useParams()
    const ironhacker = Ironhackers.find(ironhacker=>ironhacker.slug===name)

    console.log(ironhacker)
  return (
    <div>
        {/* {ironhacker && <h3>{ironhacker.name}</h3>} */}
        {/* <h3>{ironhacker?.name}</h3> */}
        <h3>{ironhacker?.name}</h3>
    </div>
  )
}

export default SingleIronhacker