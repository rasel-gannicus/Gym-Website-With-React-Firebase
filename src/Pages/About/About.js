import React from 'react';
import './About.css';
import equip1 from '../../assets/img/cycling.png';
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
                            <p>Benjamin Franklin, inventor, statesman, writer, publisher and economist relates in his autobiography that early in his life he decided to focus on arriving.</p>
                        </div>
                    </div>
                    <div className="about-single">
                        <div className="about-single-header">
                            <h2>Modern Equipment</h2>
                            <img src={equip1} alt=""/>
                        </div>
                        <div className="about-single-details">
                            <p>Benjamin Franklin, inventor, statesman, writer, publisher and economist relates in his autobiography that early in his life he decided to focus on arriving.</p>
                        </div>
                    </div>
                    <div className="about-single">
                        <div className="about-single-header">
                            <h2>Modern Equipment</h2>
                            <img src={equip1} alt=""/>
                        </div>
                        <div className="about-single-details">
                            <p>Benjamin Franklin, inventor, statesman, writer, publisher and economist relates in his autobiography that early in his life he decided to focus on arriving.</p>
                        </div>
                    </div>
                </div>

                <div className="about-main about-mid">
                    <img src={bodyPic} alt=""/>
                </div>

                <div className="about-main">
                    <div className="about-single">
                        <div className="about-single-header">
                            <h2>Modern Equipment</h2>
                            <img src={equip1} alt=""/>
                        </div>
                        <div className="about-single-details">
                            <p>Benjamin Franklin, inventor, statesman, writer, publisher and economist relates in his autobiography that early in his life he decided to focus on arriving.</p>
                        </div>
                    </div>
                    <div className="about-single">
                        <div className="about-single-header">
                            <h2>Modern Equipment</h2>
                            <img src={equip1} alt=""/>
                        </div>
                        <div className="about-single-details">
                            <p>Benjamin Franklin, inventor, statesman, writer, publisher and economist relates in his autobiography that early in his life he decided to focus on arriving.</p>
                        </div>
                    </div>
                    <div className="about-single">
                        <div className="about-single-header">
                            <h2>Modern Equipment</h2>
                            <img src={equip1} alt=""/>
                        </div>
                        <div className="about-single-details">
                            <p>Benjamin Franklin, inventor, statesman, writer, publisher and economist relates in his autobiography that early in his life he decided to focus on arriving.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;