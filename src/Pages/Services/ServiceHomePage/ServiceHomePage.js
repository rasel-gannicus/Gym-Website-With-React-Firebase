import React from 'react';
import { useNavigate } from 'react-router';

const ServiceHomePage = ({ data }) => {

    const { serviceId, plan, serviceName, short_desc, img, basic_plan } = data;

    // --- navigating to individual service detail page when user will click see more button
    const navigate = useNavigate();
    const servicePage = () => {
        navigate('/serviceDetails');
    }
    return (
        <div className="service-card">
            <div className="">
                <div className="service-img">
                    <img src={img} alt="" />
                    <div className="special-icons">
                        <p>$ {basic_plan.price}</p>
                        <p>{basic_plan.duration} Months</p>
                        <p>{basic_plan.hrsPerWeek} hrs/week</p>
                    </div>
                </div>
                <div className="card-details">
                    <h2>{serviceName}</h2>
                    <p>{short_desc}</p>
                </div>
            </div>
            <button onClick={servicePage}>See Details</button>
        </div>
    );
};

export default ServiceHomePage;