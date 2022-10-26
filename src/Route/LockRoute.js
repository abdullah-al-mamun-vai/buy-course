import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Auth/Authcontext';

const LockRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation();
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    if (loading) {
        return <button className="btn loading">loading</button>
    }
    return children;
};

export default LockRoute;