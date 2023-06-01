// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import FavPage from './pages/Favorite/FavPage'
import Signup from './pages/signup';
import ForgotPassword from './pages/forgotpassword';

export default function App() {
    return (
       
        <> 
           
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="Home" index element={<Home />}/>
                    <Route path="FavPage" element={<FavPage />} />
                    <Route path="Signup" element={<Signup />} />
                    <Route path="ForgotPassword" element={<ForgotPassword />} />
                </Routes>
            </BrowserRouter >
        </>
    );
}