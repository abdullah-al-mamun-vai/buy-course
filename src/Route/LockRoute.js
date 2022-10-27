import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Auth/Authcontext';
import { Audio, BallTriangle } from 'react-loader-spinner'

const LockRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation();
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    if (loading) {
        return <div className='text-center py-4 h-screen mx-auto flex justify-center items-center'>
            <BallTriangle
                height={80}
                width={80}
                radius={5}
                color="#c74cf0"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    }
    return children;
};

export default LockRoute;