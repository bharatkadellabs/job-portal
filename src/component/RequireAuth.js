import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
const RequireAuth = () => { // const location = useLocation();
    // const userRole = location.state;
    const collegeID = JSON.parse(sessionStorage.getItem('collegeID'))

    console.log("userRole");



    return (

        <>
            {collegeID
                ? <Outlet /> :

                <Navigate to="/login-college" state={{ message: "Sorry, it's not allowed to go beyond this point!", status: "404" }} />
            }
        </>);

}

export default RequireAuth;