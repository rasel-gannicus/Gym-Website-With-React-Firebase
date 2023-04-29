import React from 'react';
import './Services.css';
import service1 from '../../assets/img/Services/services (1).jpg';

const Services = () => {
    return (
        <div className="service-section">
            <div className="service-header">
                <h2>Try</h2>
                <h1>Our Exclusive Services</h1>
                <hr/>
            </div>
            <div className="service-details">
                <div className="service-card">
                    <img src={service1} alt=""/>
                    <div className="card-details">
                        <h2>Private & Group Lessons</h2>
                        <p>Give yourself the power of responsibility the only thing stopping you is yourself.</p>
                    </div>
                    <button>Purchase Plan</button>
                </div>
            </div>
        </div>
    );
};

export default Services;