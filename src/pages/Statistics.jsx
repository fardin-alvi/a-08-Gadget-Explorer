import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import BannerText from '../components/bannerText';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';
import { ComposedChart,Bar,Area,Scatter, XAxis, YAxis, Tooltip, Legend,ResponsiveContainer} from "recharts";
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    const product = useLoaderData()
    const [mapdata, setmapdata] = useState([])
    useEffect(() => {
        const rearrange = product.map(item => ({
            name: item.product_title,
            price: item.price,
            rating: item.rating
        }))
        setmapdata(rearrange)
    }, [product])
    console.log(mapdata);
    return (
        <div>
            <Helmet>
                <title>Statistics</title>
            </Helmet>
            <header className='w-11/12 mx-auto'>
                <Navbar/>
            </header>
            <div className="min-h-[300px] mt-3 lg:min-h-[280px] bg-purple-700 relative">
                <BannerText title={'Statistics'} subtitle={'The price of innovation is best understood when paired with the name that defines it , clear comparison: the story of gadgets unfolds where names meet their value !'} />
            </div>
            <p className='text-2xl font-semibold my-4 md:ml-10'>Statistics</p>
            <ResponsiveContainer className='mt-10' width="100%" height={400}>
                <ComposedChart data={mapdata} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <XAxis dataKey="name" angle={-45}  textAnchor="end" interval={0} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="price" barSize={20} fill="#413ea0" />
                    <Scatter dataKey="rating" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
            <footer className='mt-4 mb-1'>
                <Footer/>
            </footer>
        </div>
    );
};

export default Statistics;