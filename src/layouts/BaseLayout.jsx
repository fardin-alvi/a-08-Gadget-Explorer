import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { useLocation, useLoaderData } from 'react-router-dom';
const BaseLayout = () => {
    const location = useLocation()
    const homepath = location.pathname === '/'
    const products = useLoaderData();
    return (
        <div className='lg:w-11/12 lg:mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default BaseLayout;