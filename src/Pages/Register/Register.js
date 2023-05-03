import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';
import { updateProfile } from '@firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";


const Register = () => {
    const [isAgree, setIsAgree] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
    // --- creating a popup success message when account will be created successfully
    const successMsg = () => toast.success('Account Created Successfully', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    // --- Navigating user to home page after successfully creating account
    const navigate = useNavigate();
    // --- creating user with firebase hooks
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
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
            errorMsg(error.message);
        }
        if (!error && !loading && user) {
            console.log("User created successfully : ", user);
            successMsg();
            navigate('/');
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
              }).catch((errors) => {
                // An error occurred
                console.log(errors)
              })
        }
    }, [error, loading, user]);

    
    // --- sign in with social accounts
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

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
    
    if (user || googleUser || facebookUser || githubUser) {
        successMsg();
        navigate(from, {replace : true});

    }
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
                        <button 
                        type="submit" 
                        disabled={!isAgree || loading} 
                        className={`${isAgree ? "" : "disabled-button"} ${loading ? "loading-state" : ""}`}
                         > 
                         {loading && <span className="loader-small"><ClipLoader color="white" size={15} /></span> } <span>{loading ? 'Registering' : 'Register'}</span> 
                         </button>
                    </div>
                </form>
            </div>
            <div className="forgot-link">
                <span><a href="">Forgot Password / &nbsp; </a></span>
                <span><Link to="/register"> Register</Link></span>
            </div>
            {/* === social login === */}
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

export default Register;