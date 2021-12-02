import './course_1.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../../../assets/course_1/1.jpg'
import Image2 from '../../../assets/course_1/2.jpg'
import Image3 from '../../../assets/course_1/3.jpg'
import Image4 from '../../../assets/course_1/4.jpg'
import Image5 from '../../../assets/course_1/5.jpg'
import Image6 from '../../../assets/course_1/6.jpg'
import Image7 from '../../../assets/course_1/7.jpg'
import Image8 from '../../../assets/course_1/8.jpg'


const Course_1 = () => {
    return (
        <div className="">
            <h2 className="heading_2">Course: </h2>
            <h2 className="heading_course">Innovation and Sustainable Development</h2>
            <div className="regnow">
                <a id="submit-2" href='https://forms.gle/A6RabxfmbhVLdtTu8' target="_blank">Register Now</a>
            </div>
            <h3 className="course_1_h2"> Story line </h3>
            <div className="timeline">
                <div className="timeline__content">
                    {/* <span className="content_date">1</span> */}
                    <p className="content_p">Leo and Ema became good friends ever since their first joint project on Quokkonnect.They decided to start their next journey: Innovation and Sustainable Development.
                    </p>
                    <img src={Image1} alt="" className="carousel__image" />
                </div>

                <div className="timeline__content">
                    {/* <span className="content_date">2</span> */}
                    <p className="content_p">They met Joey from Hongkong and Ben from the States.</p>
                    <img src={Image2} alt="" className="carousel__image" />
                </div>
                <div className="timeline__content">
                    {/* <span className="content_date">3</span> */}
                    <p className="content_p">During week 1, they met Sam, their project facilitator. The four young members were guided with some simple task to build the team. After that, they were asked to watch some videos on Youtube concerning innovation so they could get onboarded.
                    </p>
                    <img src={Image3} alt="" className="carousel__image" />
                </div>

                <div className="timeline__content">
                    {/* <span className="content_date">4</span> */}
                    <p className="content_p">During the week 2 meeting, they exchanged their ideas and learnings from their homework. They got some tips from Sam about doing interviews with people and discussed briefly about the different people they can interview.
                    </p>
                    <img src={Image4} alt="" className="carousel__image" />
                </div>
                <div className="timeline__content">
                    {/* <span className="content_date">5</span> */}
                    <p className="content_p">Coming back in week 3, they collected information about people’s understanding towards innovation and sustainable development. They figured out that people have limited understanding about these topics. Their homework was now to generate as many ideas as possible on how they can help people increase their awareness.
                    </p>
                    <img src={Image5} alt="" className="carousel__image" />
                </div>
                <div className="timeline__content">
                    {/* <span className="content_date">6</span> */}
                    <p className="content_p">In week 4 they collected the ideas, discussed and voted for one of the ideas, which will be turned into a prototype: An Info-Flyer for innovation and sustainable development in A2 format, which could be folded to A6 booklet to be carried around in pockets.
                    </p>
                    <img src={Image6} alt="" className="carousel__image" />
                </div>
                <div className="timeline__content">
                    {/* <span className="content_date">7</span> */}
                    <p className="content_p">Week 5 was officially the final week. They decided to record a simple video message for the promotion of their Info-Flyer. With the help of Sam, they are going to receive 20 copies each for distribution and reaching out to people so they can share their findings on innovation and sustainable development.

                    </p>
                    <img src={Image7} alt="" className="carousel__image" />
                </div>
                <div className="timeline__content">
                    {/* <span className="content_date">8</span> */}
                    <p className="content_p">This project came to an end, however, their journey did not. They decided to meet once a week for the upcoming 4 weeks so they could share feedback they received from people when handing out their Info-Flyers. Of course, Sam is more than happy to stay with them as a coach.
                    </p>
                    <img src={Image8} alt="" className="carousel__image" />
                </div>
            </div>
            <div className="regnow_2">
                <a id="submit-2" href='https://forms.gle/A6RabxfmbhVLdtTu8' target="_blank">Register Now</a>
            </div>
            <div className="goback">
                <Link to='/'><input id="submit-2" type="submit" value="Go Back" /></Link>
            </div>


        </div >
    );
};


export default Course_1