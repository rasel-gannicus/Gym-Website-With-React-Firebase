import React from 'react';
import './Trainers.css';
import trainer1 from "../../assets/img/02.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"



const Trainers = () => {
    return (
        <div className="trainer-div">
            <div className="trainer-header">
                <h4>Train With Expert</h4>
                <h1>Meet The Magnificent Trainers</h1>
                <hr />
            </div>
            <div className="trainer-details">
                <div className="trainer-card">
                    <div className="trainer-pic">
                        <img src={trainer1} alt="" />
                    </div>
                    <div className="trainer-info">
                        <h3>Abir Rahman</h3>
                        <p>Cardio Expert</p>
                    </div>
                    <div className="trainer-social">
                        <div className="trainer-social-icons">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className="trainer-social-icons">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className="trainer-social-icons">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className="trainer-social-icons">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainers;