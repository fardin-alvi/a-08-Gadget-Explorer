import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import BannerText from '../components/bannerText';
import { Link, useLoaderData } from 'react-router-dom';
import DealsCard from '../components/DealsCard';
import Footer from '../components/Footer';

const DealsOffers = () => {
    const data = useLoaderData()
    const [filterdata, setfilterdata] = useState([])
    useEffect(() => {
        const fildata = data.filter(product => product.price > 700 && product.price<1200)
        setfilterdata(fildata)
    }, [])
    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <Navbar/>
            </header>
            <div className="min-h-[180px] text-center mt-3 lg:min-h-[280px] bg-purple-700 relative">
                <BannerText title={'Exclusive Deals & Offers'} subtitle={"Unlock the best deals and exclusive offers only at GadgetHaven. Don't miss out on incredible discounts that bring you the latest gadgets at unbeatable prices!"} /> <br />
                <Link to='/dashboard' className="border text-purple-500 bg-white py-2 px-4 rounded-full font-semibold">Shop Now</Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-y-2 gap-x-3 mt-10'>
                {
                    filterdata.map(gadget=><DealsCard gadget={gadget}></DealsCard>)
                }
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default DealsOffers;