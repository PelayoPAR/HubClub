import { useNavigate } from "react-router-dom"
import { SingleIronhackerType } from "../../Types/Types"
export type DisplayIronhackerProps = { singleIronhacker: SingleIronhackerType }

function DisplayIronhacker({ singleIronhacker }: DisplayIronhackerProps) {
  const { name, email, linkedIn, gitHub, portfolio, slug } = singleIronhacker
  const navigate = useNavigate()

  return (
    <div
      style={{ border: "solid lightGrey 1px", margin: "6px" }}
      onClick={() => {
        navigate(`/ironhackers/${slug}`)
      }}
    >
      <p>{name}</p>
      <p>{email}</p>
      <a href={linkedIn}>LinkedIn</a>
      <a href={gitHub}>
        <i className="fa fa-github" style={{ fontSize: "36px" }}></i>
      </a>
      <a href={portfolio}>Portfolio</a>
    </div>
  )
}

export default DisplayIronhacker
