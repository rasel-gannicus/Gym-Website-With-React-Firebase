import React from 'react';
import { useNavigate } from 'react-router';

const ServiceHomePage = ({ data }) => {

    const { serviceId, plan, serviceName, short_desc, img, allPlan } = data;

    // --- navigating to individual service detail page when user will click see more button
    const navigate = useNavigate();
    const servicePage = () => {
        navigate(`/serviceDetails/${serviceId}`);
    }
    return (
        <div className="service-card">
            <div className="">
                <div className="service-img">
                    <img src={img} alt="" />
                    <div className="special-icons">
                        <p>$ {allPlan[0].price}</p>
                        <p>{allPlan[0].duration} Months</p>
                        <p>{allPlan[0].hrsPerWeek} hrs/week</p>
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