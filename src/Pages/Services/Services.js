import React from 'react';
import './Services.css';

import service1 from '../../assets/img/Services/services (1).jpg';
import service2 from '../../assets/img/Services/services (2).jpg';
import service3 from '../../assets/img/Services/services (7).jpg';
import service4 from '../../assets/img/Services/services (4).jpg';
import service5 from '../../assets/img/Services/services (5).jpg';
import service6 from '../../assets/img/Services/services (6).jpg';

const Services = () => {
    return (
        <div className="service-section">
            <div className="service-header">
                <h2>Try</h2>
                <h1>Our Exclusive Services</h1>
                <hr />
            </div>
            <div className="service-details">
                <div className="service-card">
                    <div className="service-img">
                        <img src={service5} alt="" />
                        <div className="special-icons">
                            <p>$ 150</p>
                            <p>3 Months</p>
                            <p>7 hrs/week</p>
                        </div>
                    </div>
                    <div className="card-details">
                        <h2>Fitness For Beginners</h2>
                        <p>Make a list of your achievements toward your long-term goal and remind.</p>
                    </div>
                    <button>Enroll Now</button>
                </div>
                <div className="service-card">
                    <div className="service-img">
                        <img src={service6} alt="" />
                        <div className="special-icons">
                            <p>$ 250</p>
                            <p>4 Months</p>
                            <p>9 hrs/week</p>
                        </div>
                    </div>
                    <div className="card-details">
                        <h2>Private & Group Lessons</h2>
                        <p>Give yourself the power of responsibility the only thing stopping you is yourself.</p>
                    </div>
                    <button>Enroll Now</button>
                </div>
                <div className="service-card">
                    <div className="service-img">
                        <img src={service1} alt="" />
                        <div className="special-icons">
                            <p>$ 300</p>
                            <p>6 Months</p>
                            <p>9 hrs/week</p>
                        </div>
                    </div>
                    <div className="card-details">
                        <h2>Arm Improvement</h2>
                        <p>Give yourself the power of responsibility the only thing stopping you is yourself.</p>
                    </div>
                    <button>Enroll Now</button>
                </div>
                <div className="service-card">
                    <div className="service-img">
                        <img src={service2} alt="" />
                        <div className="special-icons">
                            <p>$ 350</p>
                            <p>2 Months</p>
                            <p>7 hrs/week</p>
                        </div>
                    </div>
                    <div className="card-details">
                        <h2>Yoga Charming</h2>
                        <p>Let success motivate you. Find a picture of what epitomizes success to you.</p>
                    </div>
                    <button>Enroll Now</button>
                </div>
                <div className="service-card">
                    <div className="service-img">
                        <img src={service3} alt="" />
                        <div className="special-icons">
                            <p>$ 450</p>
                            <p>4 Months</p>
                            <p>8 hrs/week</p>
                        </div>
                    </div>

                    <div className="card-details">
                        <h2>Fitness Core</h2>
                        <p>Reflect and experiment until you find the right combination of motivators for.</p>
                    </div>
                    <button>Enroll Now</button>
                </div>
                <div className="service-card">
                    <div className="service-img">
                        <img src={service4} alt="" />
                        <div className="special-icons">
                            <p>$ 1150</p>
                            <p>9 Months</p>
                            <p>12 hrs/week</p>
                        </div>
                    </div>
                    <div className="card-details">
                        <h2>Fitness Restore</h2>
                        <p>Success isn’t really that difficult. There is a significant portion of the population.</p>
                    </div>
                    <button>Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Services;