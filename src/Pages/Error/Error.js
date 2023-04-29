import React from 'react';
import { useNavigate } from 'react-router';
import './Error.css';

const Error = () => {
    const navigation = useNavigate();
    const backHome = () => {
        navigation('/');
    }
    return (
        <div className="error-page">
            <h2>Error 404 <br/> Page not found</h2>
            <button onClick={backHome}>Back Home</button>
        </div>
    );
};

export default Error;