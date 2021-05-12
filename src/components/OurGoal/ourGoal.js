import './ourGoal.scss'
// import Goal1 from '../../assets/goal-1.svg'
import Goal2 from '../../assets/goal-2.svg'
import Goal1 from './svgRotate'
const OurGoal = () => {
    return (
        <div id="goal">
            <div className="goal-flex goal-1">
                <div className="goal-text">
                    <h2 className="heading">Our Goal</h2>
                    <p>We aspire to connect young students from 10 to 15 years of age from different regions and walks of life. Our main goal is to bring them to appreciate the cultural diversity and understand the importance of sustainable development, while making fun, creative projects!</p>
                </div>
                {/* <div className="goal-img"><img className="svg-img" src={Goal1}></img></div> */}
                <div className=" "><Goal1 /></div>
            </div>
            <div className="goal-flex goal-2">
                <div className="goal-text">
                    <p>We aim to contribute to the Target 4.7 of the United Nations’ SDG 4 (Sustainable Development Goal 4),  which focuses on ensuring all learners aquire knowledge and skills to promote sustainable development.</p>
                    <a className="link" href="https://sdgs.un.org/goals/goal4" target="_blank">Click here to know more</a>
                </div>
                <div className="goal-img"><img className="svg-img" src={Goal2}></img></div>
            </div>
        </div>
    )
}

export default OurGoal