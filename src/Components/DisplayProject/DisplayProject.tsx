import { useNavigate } from "react-router-dom"
import { SingleProjectType } from "../../Types/Types"
export type DisplayProjectProps = {
  singleProject: SingleProjectType
}

function DisplayProject({ singleProject }: DisplayProjectProps) {
  // if (singleProject) {
  //     console.log(singleProject)
  //     console.log(`name is : ${singleProject.title}`)
  // } else {
  //     console.log("failurrreeeee")
  // }
  const { title, URL, description, owners, tech_used, img, module, slug } =
    singleProject
  const navigate = useNavigate()

  return (
    <div
      onClick={() => {
        navigate(`/projects/${slug}`)
      }}
    >
      <p>{title}</p>
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

export default DisplayProject
