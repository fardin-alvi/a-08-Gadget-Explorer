import React from 'react';
import Banner from '../components/Banner';
import { Outlet, useLocation } from 'react-router-dom';
import Cards from '../components/Cards';
import Card from '../components/Card';
import BannerImage from '../components/Navbar/BannerImage';

const Home = () => {
    // const location = useLocation();
    return (
        <div>
            {/* <div>
                {
                    location.pathname === '/' && <Banner />
                }
            </div> */}
            <Banner />
            <div className='flex gap-x-2'>
                <Cards/>
                <Card />
            </div>

        </div>
    );
};

export default Home;