import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import auth from '../../utilities/firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <h2>Loading ... </h2>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}}></Navigate>
    }

    return children;
};

export default RequireAuth;