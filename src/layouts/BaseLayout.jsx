import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import BannerImage from '../components/Navbar/BannerImage';
import { useLocation, useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Header from '../components/Header';
const BaseLayout = () => {
    const location = useLocation()
    const homepath = location.pathname === '/'
    const products = useLoaderData();
    return (
        <div className='lg:w-11/12 lg:mx-auto'>
            <Navbar />
            <Outlet />
            {
                homepath ? <BannerImage /> : ""
            }
            {
                homepath ? <Header /> : ""
            }
            {
                homepath ?
                    <div className='flex gap-x-3 mt-4'>
                        <Cards />
                        <Card />
                    </div> : ""
            }
            <Footer />
            
        </div>
    );
};

export default BaseLayout;