import './faq.scss'
import FaqData from './faqData'

const Faq = () => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    function handleClick(e) {
        e.preventDefault();
        e.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };

    return (
        <div id="faq">
            {FaqData.map((data) => (
                <div>
                    <button onClick={handleClick(data.id)} className="accordion" >{data.question}</button>
                    <div className="panel">
                        <p >{data.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Faq