import './faq.scss'
import React, { useState } from 'react'
import FaqData from './faqData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group';
import { Curve_1, Curve_2 } from './faqCurve'


const Question = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='question'>
            <div className={!expanded ? "question-box" : "extended-questionbox"} onClick={() => setExpanded(!expanded)}>
                <p className="faqquestion" >
                    {question}
                </p>
                <button className='btn' >
                    {expanded ? <FontAwesomeIcon className="faicon" icon={faAngleUp} /> : <FontAwesomeIcon className="faicon" icon={faAngleDown} />}
                </button>
            </div>
            <div>
                <CSSTransition in={expanded} timeout={400} classNames="faq-transition">
                    <div>
                        {expanded && <p className="faqanswer">{answer}</p>}
                    </div>
                </CSSTransition>

            </div>

        </div>
    )
}
const Faq = () => {
    const [questions] = useState(FaqData)

    return (
        <div className="faq-container">
            <Curve_1 />
            <div id="faq">
                <h2 className="heading">FAQ's</h2>
                <div >
                    {questions.map((question) => (
                        <Question key={question.id}{...question} />
                    ))}
                </div>
            </div>
            <Curve_2 />
        </div>
    );
};


export default Faq