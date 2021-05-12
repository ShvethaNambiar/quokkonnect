import './ourTeam.scss'
import Shvetha from '../../assets/shvetha.png'
import Yash from '../../assets/yash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons'


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

    const data = [
        {
            id: 1,
            name: "Shvetha Nambiar",
            country:"India",
            image: Shvetha,
            links: {
                linkedin: "https://www.linkedin.com/in/shvetha-nambiar-46074b1a5/",
                instagram: "https://www.instagram.com/shvethaaaa/",
                email: "mailto:shvethanambiar@gmail.com"
            },
        },
        {
            id: 2,
            name: "Yash Rajgure",
            country:"India",
            image: Yash,
            links: {
                linkedin: "https://www.linkedin.com/in/yash-rajgure-b695371b0/",
                instagram: "https://www.instagram.com/yash_rajgure/",
                email: "mailto:yashrajgure0808@gmail.com"
            },
        },
        {
            id: 3,
            name: "Sam Yiheng",
            country:"Germany",
            image: Shvetha,
            links: {
                linkedin: "",
                instagram: "",
                email: ""
            },
        },
        {
            id: 4,
            name: "Jadie Luo",
            country:"Hong Kong",
            image: Shvetha,
            links: {
                linkedin: "",
                instagram: "",
                email: ""
            },
        },
        {
            id: 5,
            name: "Anita Floredi",
            country:"Italy",
            image: Shvetha,
            links: {
                linkedin: "",
                instagram: "",
                email: ""
            },
        },
        {
            id: 6,
            name: "Kartika Fissendri",
            country:"Japan",
            image: Shvetha,
            links: {
                linkedin: "",
                instagram: "",
                email: ""
            },
        }
    ]

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