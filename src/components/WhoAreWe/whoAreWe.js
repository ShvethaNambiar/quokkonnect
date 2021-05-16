import './whoAreWe.scss'
import Wavimg from '../../assets/whoarewe-1.svg'

const WhoAreWe = () => {
    return (
        <div id="whoarewe">

            <div className="whoarewe-flex">
                <div className="whoarewe-text">
                    <h2 className="heading">Who are we?</h2>
                    <p>We are a global multicultural and multidisciplinary team with one dream: Serving the future generations by equipping them with knowledge and practical experience about sustainable development.<br />Our team met and conceptualised Quokkonnect at the international Global Virtual Hackathon 2021- Hack for a sustainable ‘new normal’</p>
                </div>
                <div className="whoarewe-img"><img className="svg-img" src={Wavimg} alt="whoarewe"></img></div>
            </div>

        </div>
    )
}

export default WhoAreWe