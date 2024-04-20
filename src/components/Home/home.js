import './home.scss'
import './home-mobile.scss'
import { Link } from 'react-router-dom'

import Homeimg from '../../assets/img.png'
import Homebg from '../../assets/home-back.svg'
import Logo from '../../assets/LOGO.svg'
import Sun from '../../assets/sun.svg'

import HomeMob from '../../assets/img-mob.png'
import HomeMobbg from '../../assets/home-back-mobile.svg'

const Home = () => {
    return (
        <div id="home">
            <img className="sun1" src={Sun} alt="sun"></img>
            <img className="sun2" src={Sun} alt="sun"></img>
            <img className="sun3" src={Sun} alt="sun"></img>
            <img className="sun4" src={Sun} alt="sun"></img>
            <div>
                <img className="home-bg" src={Homebg} alt="home img" />
                <img className="home-img" src={Homeimg} alt="home img" />
            </div>
            <div className="mob-container">
                <img className="home-bg-mob" src={HomeMobbg} alt="home img" />
                <img className="home-img-mob" src={HomeMob} alt="home img" />
            </div>
            <div className="home-main">
                <h2 className="mainheading">Welcome to Quokkonnect</h2>
                <h2 className="subheading">Connect, learn and grow</h2>
                <div className="home_links">
                    <Link to='/quokkonnect/innovation_and_sustainable_development_challenge' id="homebutton">
                        <a >Check out our course</a>
                    </Link>
                    {/* <a id="homebutton" href='https://forms.gle/A6RabxfmbhVLdtTu8' target="_blank">Register Now</a> */}
                </div>
                <div ><img className="main-logo" src={Logo} alt="logo" /></div>
            </div>
        </div>
    )
}

export default Home