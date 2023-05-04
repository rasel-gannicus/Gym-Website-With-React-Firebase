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
import ServiceHomePage from './ServiceHomePage/ServiceHomePage';
import ClipLoader from 'react-spinners/ClipLoader';
// import { useGetGymServicesMutation } from '../../features/gymServiceApi/gymServiceApi';

const Services = () => {

    // --- Loading service detail data from redux toolkit api
    const{data, isLoading, isError, error} = useGetGymServicesQuery();
    
    // --- deciding what to print while loading data 
    let content = null ; 
    if(isLoading && !isError){
        content = <div className=""><ClipLoader color="white" size={15} /></div>
    } 
    if(!isLoading && isError){
        console.log(error);
        content = <div className="">There was an error loading the content</div>
    }
    if(!isLoading && !isError && data.length>0){
        content = data.map(index=><ServiceHomePage data={index} key={index.serviceId}></ServiceHomePage>)
    }
    return (
        <div className="service-section">
            <div className="service-header">
                <h2>Try</h2>
                <h1>Our Exclusive Services</h1>
                <hr />
            </div>
            <div className="service-details">
                {content}
            </div>
        </div>
    );
};

export default Services;