import './ourTeam.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import data from './data.js'


const TeamCard=({member})=>{
    return(
        <div className="member-card">
            <div className="card-container">
                <figure className="img-container">
                    <img src={member.image} alt={member.name} className="img" />
                    <figcaption className="links    ">
                        <a className='linkedin' href={member.links.linkedin} target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className='instagram' href={member.links.instagram} target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a className='email' href={member.links.email} target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faEnvelope} />
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
    return(
        <div id="ourteam">
            <h2 className="heading" >Our Team</h2>
            <div className="layout">
                {data.map(member => <TeamCard key={member.id} member={member}/>)}
            </div>
        </div>
    )
}

export default OurTeam