import React from 'react';
import "./Banner.css";
import fbIcon from "../../../assets/img/facebook.png";
import twitterIcon from "../../../assets/img/twitter.png";
import instaIcon from "../../../assets/img/instagram.png";

const Banner = () => {
    return (
        <div className="banner-details">
            <h1>Build Perfect Body <br/> With Clean Mind </h1>
            <p>Looking to achieve the perfect body? At our gym, we believe that a clean mind is just as important as a strong physique. Our state-of-the-art facilities and expert trainers will help you reach your fitness goals while promoting mental clarity and well-being. Join us today and start building the body and mind you've always wanted.</p>
            <button>Get Started</button>

            <div className="social-button">
                <a href=""><img src={fbIcon} alt=""/></a>
                <a href=""><img src={twitterIcon} alt=""/></a>
                <a href=""><img src={instaIcon} alt=""/></a>
            </div>
        </div>
    );
};

export default Banner;