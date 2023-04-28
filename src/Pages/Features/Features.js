import React from 'react';
import './Features.css';
import feature1 from '../../assets/img/features (1).jpg';
import feature2 from '../../assets/img/features (2).jpg';
import feature3 from '../../assets/img/features (3).jpg';

const Features = () => {
    return (
        <div className="feature-div">
            <div className="feature-title">
                <h4>Why us ? </h4>
                <h1>Our Key Features</h1>
                <hr/>
            </div>
            <div className="feature-details">
                <div className="feature-single">
                    <img src={feature1} alt="" />
                    <div className="">
                        <div className="feature-single-details">
                            <h2>Get In Mood</h2>
                            <p>Use a past defeat as a motivator. Remind yourself.</p>
                        </div>
                    </div>
                </div>
                <div className="feature-single">
                    <img src={feature2} alt="" />
                    <div className="feature-single-details">
                        <h2>Get Fit In Time</h2>
                        <p>Success isn’t really that difficult. There is a significant?</p>
                    </div>
                </div>
                <div className="feature-single">
                    <img src={feature3} alt="" />
                    <div className="feature-single-details">
                        <h2>Work Your Butt Off</h2>
                        <p>For those of you who are serious about having more.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;