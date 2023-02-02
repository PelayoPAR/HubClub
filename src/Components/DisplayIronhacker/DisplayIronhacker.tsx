import { useNavigate } from "react-router-dom"
import { Ironhacker } from "../../Types/Types"

function DisplayIronhacker({ singleIronhacker }: Ironhacker) {

    const { name, email, linkedIn, gitHub, portfolio, aboutMe, slug } = singleIronhacker
    const navigate = useNavigate()    

    return (
        <div style={{border: "solid lightGrey 1px", margin:"6px"}} 
        onClick={()=>{
            navigate(`/ironhackers/${slug}`)
        }
            }>
            <p>{name}</p>
            <p>{email}</p>
            <a href={linkedIn}>LinkedIn</a>
            <a href={gitHub}><i className="fa fa-github" style={{ fontSize: '36px' }}></i></a>
            <a href={portfolio}>Portfolio</a>
            <p>{aboutMe}</p>
        </div>
    )
}

export default DisplayIronhacker