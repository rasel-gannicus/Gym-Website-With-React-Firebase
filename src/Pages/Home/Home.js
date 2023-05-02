import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Trainers from '../Trainers/Trainers';

const Home = () => {
    return (
        <div>
            <Features></Features>
            <About></About>
            <Trainers></Trainers>
            <Services></Services>
        </div>
    );
};

export default Home;