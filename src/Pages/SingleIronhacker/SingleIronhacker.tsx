import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiClient from "../../Service/apiClient"
import { SingleIronhackerType } from "../../Types/Types"

function SingleIronhacker() {
  const { slugName } = useParams()

  const [ironhacker, setIronhacker] = useState<SingleIronhackerType>({
    id: "",
    name: "",
    email: "",
    linkedIn: "",
    gitHub: "",
    portfolio: "",
    aboutMe: "",
    slug: "",
  })
  //ToDo: find a better solution later (than adding all properties of ironhacker)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    apiClient
      .get<SingleIronhackerType>(`/ironhackers/${slugName}`)
      .then((result) => setIronhacker(result.data))
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }, [slugName])

  if (isError) {
    return <div>UPSI</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  const { name, email, linkedIn, gitHub, portfolio, aboutMe } = ironhacker

  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <a href={linkedIn}>LinkedIn</a>
      <a href={gitHub}>
        <i className="fa fa-github" style={{ fontSize: "36px" }}></i>
      </a>
      <a href={portfolio}>Portfolio</a>
      <p>{aboutMe}</p>
    </div>
  )
}

export default SingleIronhacker
