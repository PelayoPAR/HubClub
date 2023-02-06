import { useParams } from "react-router-dom"
import Projects from "../../Data/projects.json"

function SingleProject() {
    const { projectName } = useParams()

    const project = Projects.find(project => project.slug === projectName)

    if (project) {
        const { projectName, URL, description, owners, tech_used, img, module } = project

        return (
            <div>
                <h3>{projectName}</h3>
                <a target="_blank" rel="noreferrer" href={URL}>{URL}</a>

                <p>{description}</p>
                {owners?.map((owner, index) => {
                    return <p key={index}>{owner}</p>
                })}
                <p>{tech_used?.map((tech, index) => {
                    return <span key={index}>{tech} </span>
                })}</p>
                <p>Module: {module}</p>
                <img src={img} alt="oopsies" />
            </div>
        )
    }
    return (
        <div>UPSI</div>
    )
}

export default SingleProject