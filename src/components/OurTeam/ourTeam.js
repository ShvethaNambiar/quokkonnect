import './ourTeam.scss'
import Shvetha from '../../assets/shvetha.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const TeamCard=(member)=>{
    return(
        <div>
            <figure>
                <img src={member.image}/>
                <figcaption>
                    <a className='linkedin' href={member.links.linkedIn} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className='instagram' href={member.links.instagram} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a className='github' href={member.links.github} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </figcaption>
            </figure>
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
            country:"India",
            image: Shvetha
        }
    ]

    return(
        <div id="ourteam">
            <h2 className="heading" >Our Team</h2>
            <div>

            </div>
        </div>
    )
}

export default OurTeam