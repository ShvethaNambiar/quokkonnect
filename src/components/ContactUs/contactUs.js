import './contactUs.scss'
import React, { useState } from 'react'
import contactUsImg from '../../assets/contactUs-img.jpg'
import contactUsBg from '../../assets/contactUs-bg.svg'
import emailjs from 'emailjs-com'
// import configData from '/config.json'

const ContactUs = () => {
    const [username, setUsername] = useState("");
    const [usersurname, setUsersurname] = useState("");
    const [userEmail, setUseremail] = useState("");
    const [userMessage, setUermessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(process.env.REACT_APP_SERVICE_ID);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED', error);
            });
    }

    return (
        <div id="contactus">
            <h2 className="contact-heading">Have any questions? <br /> Reach out to us!</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input name="userName" id="name" type="text" input={username} onChange={e => setUsername(e.target.value)} placeholder="Name" required />
                <input name="usersurname" id="surname" type="text" input={usersurname} onChange={e => setUsersurname(e.target.value)} placeholder="Surname" required />
                <input name="userEmail" id="email" type="email" input={userEmail} onChange={e => setUseremail(e.target.value)} placeholder="E-mail" required />
                <textarea rows="4" cols="50" name="userMessage" id="message" type="text" input={userMessage} onChange={e => setUermessage(e.target.value)} placeholder="Message for us" required />
                <input id="submit" type="submit" value="SEND" />
            </form>


            <img className="contact-us-bg" src={contactUsBg} alt="contact-us-bg" />
            <img className="contact-us-img" src={contactUsImg} alt="contact-us-img" />

        </div>
    )
}

export default ContactUs