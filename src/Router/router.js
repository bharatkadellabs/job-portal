import React, { useEffect, useState } from 'react';
import { Routes as Switch, Route, useNavigate } from 'react-router-dom';
import RegisterUser from '../component/RegisterUser';
import LoginPage from '../component/loginUser';
import CollegeRegister from '../component/CollegeRegister';
import Dashboard from '../component/dashboard';
import Home from '../component/home'
import LoginCollege from '../component/loginCollege';
import MainHome from '../component/mainHome';
import RequireAuth from '../component/RequireAuth';
import HirePage from '../component/hirePage';
export const Router = () => {
    return (
        <>
            <Switch>
                {/* <Route path='/home' element={<MainHome />}></Route> */}
                {/* public Route */}
                <Route path='/login-college' element={<LoginCollege />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/college-register' element={<CollegeRegister />} />
                <Route path='/home' element={<HirePage />} />
                {/* private route */}
                <Route element={<RequireAuth />}>
                    <Route path='/' element={<Dashboard loggedIn />} >
                        <Route path='/' element={<Home loggedIn />} />
                        <Route path='/register-form' element={<RegisterUser loggedIn />} />
                        <Route path='/register-form/:id' element={<RegisterUser loggedIn />} />
                    </Route>
                </Route>
                {/* <Route path='/register-form' exact element={<RegisterUser />} /> */}
            </Switch>
        </>
    )
}
