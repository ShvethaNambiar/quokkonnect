import './faq.scss'
import React, { useState } from 'react'
import FaqData from './faqData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngellist, faLine } from '@fortawesome/free-brands-svg-icons'

const Question = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='question'>
            <div className={!expanded ? "question-box" : "extended-questionbox"}>
                <p className="faqquestion" onClick={() => setExpanded(!expanded)} >
                    {question}
                </p>
                <button className='btn' onClick={() => setExpanded(!expanded)}>
                    {expanded ? <FontAwesomeIcon icon={faAngellist} /> : <FontAwesomeIcon icon={faLine} />}
                </button>
            </div>
            <div>
                {expanded && <p className="faqanswer">{answer}</p>}
            </div>

        </div>
    )
}
const Faq = () => {
    const [questions, setQuestions] = useState(FaqData)

    return (
        <div id="faq">
            <h2 className="heading">FAQ's</h2>
            <div >
                {questions.map((question) => (
                    <Question key={question.id}{...question} />
                ))}
            </div>
        </div>
    );
};


export default Faq