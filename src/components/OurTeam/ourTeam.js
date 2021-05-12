import './ourTeam.scss'
import Shvetha from '../../assets/shvetha.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const TeamCard=({member})=>{
    return(
        <div className="member-card">
            <div className="card-container">
                <figure className="img-container">
                    <img src={member.image} alt={member.name} className="img" />
                    <figcaption className="links    ">
                        <a className='linkedin' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className='instagram' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className='github' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </figcaption>
                </figure>
                <div className="details">
                    <p className="name">{member.name}</p>
                    <p className="country">{member.country} </p>
                </div>
            </div>
        </div>
    )
}

const OurTeam=()=>{

    const data = [
        {
            id: 1,
            name: "Shvetha Nambiar",
            country:"India",
            image: Shvetha
        },
        {
            id: 2,
            name: "Yash Rajgure",
            country:"India",
            image: Shvetha
        },
        {
            id: 1,
            name: "Sam Yiheng",
            country:"Germany",
            image: Shvetha
        }
    ]

    return(
        <div id="ourteam">
            <h2 className="heading" >Our Team</h2>
            <div>
                {data.map(member => <TeamCard key={member.id} member={member}/>)}
            </div>
        </div>
    )
}

export default OurTeam