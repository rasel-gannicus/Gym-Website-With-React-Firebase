import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import './ServiceDetailCard.css';
import check from '../../../assets/img/check.png';
import close from '../../../assets/img/close.png';

const ServiceDetailCard = ({ service }) => {
    const { Aerobics, cardio, crossfit, plan, price, shortDesc, snacks, swimmingPool, vipRestroom } = service;
    console.log(service);
    return (
        <div className="detail-card-single">
            <div className="detail-card-header">
                <h2>{plan}</h2>
                <hr className="horizontal" />
                <p>{shortDesc}</p>
                <h1>$ {price}<span>/Month</span> </h1>
            </div>
            <div className="detail-card-details">
                <div className="">
                    <p>Cardio</p>
                    <span><img src={check} alt="" /></span>
                </div>
                <div className="">
                    <p>Swimming Pool</p>
                    <span><img src={close} alt="" /></span>
                </div>
                <div className="">
                    <p>Snacks</p>
                    <span><img src={close} alt="" /></span>
                </div>
                <div className="">
                    <p>Vip Restroom</p>
                    <span><img src={close} alt="" /></span>
                </div>
                <div className="">
                    <p>Aerobics</p>
                    <span><img src={check} alt="" /></span>
                </div>
                <div className="">
                    <p>Crossfit</p>
                    <span><img src={check} alt="" /></span>
                </div>
            </div>
            <div className="service-button-div">
                <button>Buy Membership</button>
            </div>
        </div>
    );
};

export default ServiceDetailCard;