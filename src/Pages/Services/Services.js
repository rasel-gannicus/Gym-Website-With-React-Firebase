import React from 'react';
import './Services.css';

import service1 from '../../assets/img/Services/services (1).jpg';
import service2 from '../../assets/img/Services/services (2).jpg';
import service3 from '../../assets/img/Services/services (7).jpg';
import service4 from '../../assets/img/Services/services (4).jpg';
import service5 from '../../assets/img/Services/services (5).jpg';
import service6 from '../../assets/img/Services/services (6).jpg';
import { useNavigate } from 'react-router';
import { useGetGymServicesQuery } from '../../features/gymServiceApi/gymServiceApi';
// import { useGetGymServicesMutation } from '../../features/gymServiceApi/gymServiceApi';

const Services = () => {
    const navigate = useNavigate();
    const servicePage= () => {
        navigate('/serviceDetails');
    }
    const{data, isLoading, isError, error} = useGetGymServicesQuery();
    console.log(data) ; 
    return (
        <div className="service-section">
            <div className="service-header">
                <h2>Try</h2>
                <h1>Our Exclusive Services</h1>
                <hr />
            </div>
            <div className="service-details">
                
            </div>
        </div>
    );
};

export default Services;