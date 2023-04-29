import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="login-div">
            <h2>Register</h2>
            <hr />
            <div className="login-form">
                <form action="">
                    <div className="">
                        <input type="email" name="" placeholder="Your Email" id="" />
                    </div>
                    <div className="">
                        <input type="name" name="" placeholder="Your Name" id="" />
                    </div>
                    <div className="">
                        <input type="password" name="" placeholder="Your Password" id="" />
                    </div>
                    <div className="">
                        <input type="password" name="" placeholder="Confirm Password" id="" />
                        <div className="agree-div">
                        <input type="checkbox" name="" id=""/>
                        <p>Agree to the terms and conditions</p>
                        </div>
                        <button>Register</button>
                    </div>
                </form>
            </div>
            <div className="forgot-link">
                <span><a href="">Forgot Password / &nbsp; </a></span>
                <span><Link to="/register"> Register</Link></span>
            </div>
        </div>
    );
};

export default Register;