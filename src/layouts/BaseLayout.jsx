import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BaseLayout = () => {
    return (
        <div className='lg:w-11/12 lg:mx-auto'>
            <Navbar />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default BaseLayout;