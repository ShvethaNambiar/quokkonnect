import './home.scss'
import Homeimg from '../../assets/img.png'
import Homebg from '../../assets/home-back.svg'
import Logo from '../../assets/LOGO.svg'
const Home=()=>{
    return(
        <div id="home">
        <div>
            <img className="home-bg" src={Homebg} alt="home img" />
            <img className="home-img" src={Homeimg} alt="home img" />
        </div>
        <div className="home-main">
            <h2 className="mainheading">Welcome to Quokkonnect</h2>
            <h2 className="subheading">Connect, learn and grow</h2>
            <div className="main-logo"><img src={Logo} alt="logo"/></div>
        </div>
        </div>
    )
}

export default Home