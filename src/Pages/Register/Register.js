import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';


const Register = () => {
    const [isAgree, setIsAgree] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const [user] = useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password, confirmPassword);
        if (password.length < 6) {
            console.log('Password should be more than 6 character');
            return;
        }
        if (password !== confirmPassword) {
            console.log("Password didn't matched");
            return;
        }

        createUserWithEmailAndPassword(email, password);
        return;
    }

    useEffect(() => {
        if (error) {
            console.log(error.message);
        }
        if (loading) {
            console.log('loading');
        }
        if (!error && !loading && user) {
            console.log("User created successfully : ", user);
        }
    }, [error, loading, user])
    return (
        <div className="login-div">
            <h2>Register</h2>
            <hr />
            <div className="login-form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="">
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="" placeholder="Your Email" id="" />
                    </div>
                    <div className="">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="" placeholder="Your Name" id="" required />
                    </div>
                    <div className="">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" placeholder="Your Password" id="" required />
                    </div>
                    <div className="">
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="" placeholder="Confirm Password" id="" required />
                        <div className="agree-div">
                            <input onChange={() => setIsAgree(!isAgree)} type="checkbox" name="" id="" value={isAgree} required />
                            <p>Agree to the terms and conditions</p>
                        </div>
                        <button type="submit" disabled={!isAgree} className={isAgree ? "" : "disabled-button"} >Register</button>
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