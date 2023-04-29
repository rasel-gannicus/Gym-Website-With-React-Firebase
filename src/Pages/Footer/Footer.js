import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-upper">
                <div className="footer-single">
                    <h2 className="footer-title">Address</h2>
                    <p>24/7 Gec Circle <br /> Gec <br />Chittagong</p>
                    <h2 className="footer-title">Phone Number</h2>
                    <h3 className="phone-number">+880 1716707031</h3>
                </div>
                <div className="footer-single">
                    <h2 className="footer-title">Information</h2>
                    <a href="">About Us</a>
                    <a href="">Classes</a>
                    <a href="">Gallery</a>
                    <a href="">Blog</a>
                    <a href="">Contact us</a>
                </div>
                <div className="footer-single">
                    <h2 className="footer-title">My Account</h2>
                    <a href="">Shop</a>
                    <a href="">Cart</a>
                    <a href="">Wishlist</a>
                    <a href="">Orders</a>
                    <a href="">Product History</a>
                </div>
                <div className="footer-single footer-subscribe">
                    <h2 className="footer-title">Subscribe Us</h2>
                    <p>Sign up to our newsletter to get the latest news and offers.</p>
                    <input type="email" name="" placeholder="Your Email" id="" />
                    <button>Get Notified</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;