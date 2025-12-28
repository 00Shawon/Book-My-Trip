import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(!user){
        return <Navigate to="/auth/login" ></Navigate>
    }
    return children;
};

export default PrivateRoute;