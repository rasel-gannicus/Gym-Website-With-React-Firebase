import React from 'react';
import './Services.css';
import { useGetGymServicesQuery } from '../../features/gymServiceApi/gymServiceApi';
import ServiceHomePage from './ServiceHomePage/ServiceHomePage';
import ClipLoader from 'react-spinners/ClipLoader';

const Services = () => {

    // --- Loading service detail data from redux toolkit api
    const{data, isLoading, isError, error} = useGetGymServicesQuery();
    
    // --- deciding what to print while loading data 
    let content = null ; 
    if(isLoading && !isError){
        content = <div className=""><ClipLoader color="black" size={15} /></div>
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