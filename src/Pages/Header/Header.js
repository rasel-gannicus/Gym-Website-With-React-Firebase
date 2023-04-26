import React from 'react';
import Banner from './Banner/Banner';
import './Header.css';

const Header = () => {
    return (
        <div className="full-header">
            <div className="header-nav">
                <div className="header-left">
                    <h1>Fitness</h1>
                </div>
                <div className="header-right">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Trainers</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Header;