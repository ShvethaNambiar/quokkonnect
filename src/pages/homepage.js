import './homepage.scss'

import Home from '../components/Home/home'
import OurGoal from '../components/OurGoal/ourGoal'
import Product from '../components/Product/product'
import Faq from '../components/FAQ/faq'
import WhoAreWe from '../components/WhoAreWe/whoAreWe'
import OurTeam from '../components/OurTeam/ourTeam'
import ContactUs from '../components/ContactUs/contactUs'
import NavBar from '../components/Navbar/navbar'

const HomePage = () => {
    return (
        <div>
            {/* <NavBar /> */}
            <Home />
            <OurGoal />
            <Product />
            <Faq />
            <WhoAreWe />
            <OurTeam />
            <ContactUs />
        </div>
    )
}

export default HomePage