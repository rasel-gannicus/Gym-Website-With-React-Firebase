import React from 'react';
import './About.css';
import equip1 from '../../assets/img/bike-.png';
import equip2 from '../../assets/img/about (1).png';
import equip3 from '../../assets/img/about (3).png';
import equip4 from '../../assets/img/about (4).png';
import equip5 from '../../assets/img/about (6).png';
import equip6 from '../../assets/img/about (2).png';

import bodyPic from '../../assets/img/pxfuel (7).jpg';

const About = () => {
    return (
        <div className="about-section" >
            <div className="about-header">
                <p>About Our Company</p>
                <h1>Who We Are and What We Do </h1>
                <hr/>
            </div>  
            <div className="about-mains">
                <div className="about-main">
                    <div className="about-single">
                        <div className="about-single-header">
                            <h2>Modern Equipment</h2>
                            <img src={equip1} alt=""/>
                        </div>
                        <div className="about-single-details">
                            <p>Benjamin Franklin, inventor, statesman, writer, publisher and economist relates in his autobiography that early in his life .</p>
                        </div>
                    </div>
                    <div className="about-single">
                        <div className="about-single-header">
                            <h2>THE AREA OF 7000 M2</h2>
                            <img src={equip2} alt=""/>
                        </div>
                        <div className="about-single-details">
                            <p>What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback.</p>
                        </div>
                    </div>
                    <div className="about-single">
                        <div className="about-single-header">
                            <h2>SWIMMING POOLS AVAILABLE</h2>
                            <img src={equip3} alt=""/>
                        </div>
                        <div className="about-single-details">
                            <p>Commit the plan to paper and then keep it with you at all times. Review it regularly and ensure that every step takes you closer to your Vision and Goals.</p>
                        </div>
                    </div>
                </div>

                <div className="about-main about-mid">
                    <img src={bodyPic} alt=""/>
                </div>

                <div className="about-main">
                    <div className="about-single">
                        <div className="about-single-header">
                            <h2>COACHES CHAMPIONS</h2>
                            <img src={equip4} alt=""/>
                        </div>
                        <div className="about-single-details">
                            <p>Along with your plans, you should consider developing an action orientation that will keep you motivated to move forward.</p>
                        </div>
                    </div>
                    <div className="about-single">
                        <div className="about-single-header">
                            <h2>PARKING FOR 160 SPOTS</h2>
                            <img src={equip5} alt=""/>
                        </div>
                        <div className="about-single-details">
                            <p>This requires a little self-discipline, but is a crucial component to achievement of any kind. Before starting any new activity.</p>
                        </div>
                    </div>
                    <div className="about-single">
                        <div className="about-single-header">
                            <h2>LARGE BAR WITH SPORTS NUTRITION</h2>
                            <img src={equip6} alt=""/>
                        </div>
                        <div className="about-single-details">
                            <p>Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price.ng.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;