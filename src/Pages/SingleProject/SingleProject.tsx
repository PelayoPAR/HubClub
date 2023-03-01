import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiClient from "../../Service/apiClient"
import { SingleProjectType } from "../../Types/Types"

function SingleProject() {
  const { projectName } = useParams()

  const [project, setProject] = useState<SingleProjectType>({
    id: "",
    title: "",
    URL: "",
    description: "",
    owners: [],
    tech_used: [],
    img: "",
    module: "",
    slug: "",
  })

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    apiClient
      .get<SingleProjectType>(`/projects/${projectName}`)
      .then((result) => {
        console.log("I kicked in", result)
        setProject(result.data)
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }, [projectName])

  if (isError) {
    return <div>UPSI</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  const { title, URL, description, owners, tech_used, img, module } = project

  return (
    <div>
      <h3>{title}</h3>
      <a target="_blank" rel="noreferrer" href={URL}>
        {URL}
      </a>

      <p>{description}</p>
      {owners?.map((owner, index) => {
        return <p key={index}>{owner}</p>
      })}
      <p>
        {tech_used?.map((tech, index) => {
          return <span key={index}>{tech} </span>
        })}
      </p>
      <p>Module: {module}</p>
      <img src={img} alt="oopsies" />
    </div>
  )
}

export default SingleProject
