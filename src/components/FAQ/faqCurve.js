import Svgcurve from '../../assets/curve-element.svg'
import './faqCurve.scss'

const Curve_1 = () => {
    return (
        <div className="curve-div">
            <img className="curve-1" src={Svgcurve} alt="curve"></img>
        </div>
    )
}
const Curve_2 = () => {
    return (
        <div className="curve-div">
            <img className="curve-2" src={Svgcurve} alt="curve"></img>
        </div>
    )
}

export { Curve_1, Curve_2 };