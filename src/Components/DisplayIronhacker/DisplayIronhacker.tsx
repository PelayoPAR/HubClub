import { Ironhacker } from "../../Types/Types"

function DisplayIronhacker({ singleIronhacker }: Ironhacker) {

    const { name, email, linkedIn, gitHub, portfolio, aboutMe } = singleIronhacker

    return (
        <div>
            <h2>Ironhacker</h2>
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