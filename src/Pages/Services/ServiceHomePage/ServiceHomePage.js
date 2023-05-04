import React from 'react';

const ServiceHomePage = () => {
    return (
        <div>
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
                    <button onClick={servicePage}>See Details</button>
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
                    <button onClick={servicePage}>See Details</button>
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
                    <button onClick={servicePage}>See Details</button>
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
                    <button onClick={servicePage}>See Details</button>
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
                    <button onClick={servicePage}>See Details</button>
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
                    <button onClick={servicePage}>See Details</button>
                </div>
        </div>
    );
};

export default ServiceHomePage;