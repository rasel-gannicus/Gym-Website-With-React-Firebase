import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';
import auth from '../../utilities/firebase.init';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // --- creating a popup success message when user will be loggedIn successfully
    const successMsg = () => toast.success('Logged In successfully', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    // --- creating a popup error message
    const errorMsg = (dummy) => toast.error(dummy || 'error', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    // --- handle login
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log('ok');
        signInWithEmailAndPassword(email, password);
        return;
    }
    // --- Navigating user to home page after successfully creating account
    const navigate = useNavigate();
    const location = useLocation(); 
    const from = location?.state?.from?.pathname || '/';
    
    useEffect(() => {
        if (error) {
            console.log(error.message);
            errorMsg(error.message);
        }
        if (!error && !loading && user || googleUser || facebookUser || githubUser) {
            successMsg();
            navigate(from, {replace : true});

        }
    }, [error, loading, user]);


    // --- sign in with social accounts
    const [signInWithFacebook, facebookUser ] = useSignInWithFacebook(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser] = useSignInWithGithub(auth);

    const handleFacebookLogin = () => {
        signInWithFacebook();
    }
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    const handleGithubLogin = () => {
        signInWithGithub();
    }


    if (googleLoading) {
    }
    if (user || googleUser || facebookUser || githubUser) {
        successMsg();
        navigate(from, {replace : true});

    }


    return (
        <div className="login-div">
            <h2>Login</h2>
            <hr />
            <div className="login-form">
                <form action="" onSubmit={handleLogin} >
                    <div className="">
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="" placeholder="Your Email" id="" />
                    </div>
                    <div className="">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" placeholder="Your Password" id="" required />

                        <button
                            type="submit"
                            disabled={loading}
                            className={` ${loading ? "loading-state" : ""}`}
                        >
                            {loading && <span className="loader-small"><ClipLoader color="white" size={15} /></span>} <span>{loading ? 'Logging In' : 'Login'}</span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="forgot-link">
                <span><a href="">Forgot Password / &nbsp; </a></span>
                <span><Link to="/register"> Register</Link></span>
            </div>
            <div className="social-login">
                <p>Or Sign in using </p>
                <div className="social-icons-div">
                    <div onClick={handleGoogleLogin} className="social-login-icons">
                        <FontAwesomeIcon icon={faGoogle} />
                    </div>
                    <div onClick={handleFacebookLogin} className="social-login-icons">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div onClick={handleGithubLogin} className="social-login-icons">
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;