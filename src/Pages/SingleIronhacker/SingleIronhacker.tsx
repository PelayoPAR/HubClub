import Ironhackers from '../../Data/ironhackers.json'
import { useParams } from 'react-router-dom'

function SingleIronhacker() {
  const { name } = useParams()

  const ironhacker = Ironhackers.find(ironhacker => ironhacker.slug === name)

  // console.log(ironhacker)

  if (ironhacker) {
    const { name, email, linkedIn, gitHub, portfolio, aboutMe } = ironhacker

    return (
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
        <a href={linkedIn}>LinkedIn</a>
        <a href={gitHub}><i className="fa fa-github" style={{ fontSize: '36px' }}></i></a>
        <a href={portfolio}>Portfolio</a>
        <p>{aboutMe}</p>
      </div>
    )
  }

  return (
    <div>UPSI</div>
  )
}

export default SingleIronhacker