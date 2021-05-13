import './contactUs.scss'
import React, { useState } from 'react'
import contactUsImg from '../../assets/contactUs-img.png'
import contactUsBg from '../../assets/contactUs-bg.svg'

const ContactUs = () => {

    const [username, setUsername] = useState("");
    console.log(username);
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    return (
        <div id="contactus">
            <h2 className="contact-heading">Have and questions <br /> Reach out to us!</h2>

            <form onSubmit={handleSubmit}>
                <input id="name" type="text" input={username} onChange={e => setUsername(e.target.value)} placeholder="Name" required />
                <input id="surname" placeholder="Surname" required />
                <input id="email" placeholder="E-mail" required />
                <input id="message" placeholder="Message for us!" required />
                <input type="submit" placeholder="Submit" />
            </form>


            <img className="contact-us-bg" src={contactUsBg} alt="contact-us-bg" />
            <img className="contact-us-img" src={contactUsImg} alt="contact-us-img" />
        </div>
    )
}

export default ContactUs