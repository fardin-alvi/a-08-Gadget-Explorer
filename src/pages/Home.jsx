import React from 'react';
import Banner from '../components/Banner';
import { Outlet, useLocation } from 'react-router-dom';
import Cards from '../components/Cards';
import Card from '../components/Card';
import BannerImage from '../components/Navbar/BannerImage';
import FilterCard from '../components/Filtercard';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='mb-10'>
                <h1 className='text-center font-bold text-3xl'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className='flex gap-x-2'>
                <Cards/>
                <Card />
            </div>

        </div>
    );
};

export default Home;