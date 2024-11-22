import React from 'react';
import Banner from '../components/Banner';
import { Outlet } from 'react-router-dom';
import Catagorybutton from '../components/Catagorybutton';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='bg-white'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <nav className='mt-5 w-11/12 mx-auto'>
                <div className='bg-purple-700 rounded-t-xl'>
                    <Navbar />
                </div>
                <Banner />
                <p className='text-2xl font-semibold text-center pb-10 '>Explore Cutting-Edge Gadgets</p>
            </nav>
            <main className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12'>
                <aside className='col-span-3'>
                    <Catagorybutton />
                </aside>
                <section className='col-span-9'>
                    <Outlet />
                </section>
            </main>
            <footer className='my-3'>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;