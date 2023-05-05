import React from 'react';
import { useParams } from 'react-router';
import ServiceDetailCard from './ServiceDetailCard';
import { useGetGymServicesQuery } from '../../../features/gymServiceApi/gymServiceApi';
import ClipLoader from 'react-spinners/ClipLoader';

const ServiceDetails = () => {
    const params = useParams();

    // --- Loading service detail data from redux toolkit api
    const { data, isLoading, isError, error } = useGetGymServicesQuery();

    // --- deciding what to print while loading data 
    let content = null;
    if (isLoading && !isError) {
        content = <div className="custom-loader"><ClipLoader color="black" size={75} /></div>
    }
    if (!isLoading && isError) {
        console.log(error);
        content = <div className="">There was an error loading the content</div>
    }
    let content2 = null;
    if (!isLoading && !isError && data.length > 0) {
        content2 = data[params.id-1].allPlan;
        content = content2.map(index => <ServiceDetailCard service={index} key={index.plan} ></ServiceDetailCard>)
    }

    return (
        <div className="service-card-details">
            <h1 className='service-card-header'>{data?.length > 0 && data[params.id-1]?.serviceName}</h1>
            <div className="detail-cards">
                {content}
            </div>
        </div>
    );
};

export default ServiceDetails;