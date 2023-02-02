import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to={"ironhackers"} style={{paddingLeft:"10px"}}>Ironhackers</Link>
        <Link to={"projects"} style={{paddingLeft:"10px"}}>Projects</Link>
        <Link to={"/"} style={{paddingLeft:"10px"}}>Home</Link>
    </div>
  )
}

export default Navbar