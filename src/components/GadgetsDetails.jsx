import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import BannerText from './bannerText';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addTocartList, addStoreWishlist } from '../Utilities/AddtoCart';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import { Helmet } from 'react-helmet-async';

const GadgetsDetails = () => {
    const [wishlist, setwishlist] = useState(false)
    const { product_id } = useParams()
    const loader = useLoaderData()
    const gadgets = loader.find(gadget => gadget?.product_id == product_id)
    const { product_title, product_image, category, price, description, Specification, availability, rating } = gadgets;

    const handleCart = (id) => {
        addTocartList(id)
    }
    const handlewish = (id) =>{
        addStoreWishlist(id)
        setwishlist(true)
        showToastwhis()
    }
    const showToast = () => {
        toast.success('Iteam added to Cart', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    const showToastwhis = () => {
        toast.success('Iteam added to Whistlist', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    } 
    return (
        <div>
            <Helmet>
                <title>{category} | {product_id}</title>
            </Helmet>
            <header className='w-11/12 mx-auto'>
                <Navbar/>
            </header>
            <div className="min-h-[300px] min-w-full  lg:min-h-[300px] bg-purple-700 rounded-bl-xl rounded-br-xl">
                <BannerText title={'Product Details'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} />
            </div>
            <div className="hero bg-white border-2 border-gray-100 w-9/12 mx-auto rounded-xl min-h-[450px] relative -top-16 p-4 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='bg-base-200 rounded-xl p-5'>
                        <img
                            src={product_image}
                            className="max-w-[300px] rounded-lg shadow-3xl" />
                    </div>
                    <div className='text-left ml-4'>
                        <h1 className='text-2xl font-bold'>{product_title}</h1>
                        <p className='my-2 font-semibold text-lg'>Price: ${price}</p>
                        <button className='my-1  bg-green-200 text-green-500 text-sm px-3 rounded-3xl'>{availability}</button>
                        <p className="my-2 text-gray-500 ">{description}</p>
                        <p className='font-semibold'>Specification</p>
                        <div className='my-2 text-gray-500'>
                            {
                                Specification.map(specifica => <li className='list-decimal' >{specifica}</li>)
                            }
                        </div>
                        <p className='font-semibold'>Rating</p>
                        <div className='flex items-center'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <CiStar />
                            <button className='mx-3 bottom-1 bg-base-200 rounded-3xl px-2'>{rating}</button>
                        </div>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            transition : Bounce
                        />
                        <div className='mt-1 flex gap-x-2 items-center'>
                            <button onClick={() => { handleCart(product_id); showToast(); }} className='px-3 py-1 flex items-center gap-x-1 text-white text-sm font-semibold bg-purple-500 rounded-2xl'>Add To Card<AiOutlineShoppingCart className='text-lg' /></button>
                            {
                                wishlist ? <FaRegHeart className='text-3xl border border-gray-300 rounded-full p-2 disabled:'/> : <FaRegHeart onClick={() => handlewish(product_id)} className='text-3xl border border-gray-300 rounded-full p-2 cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <Footer/>
            </div>
        </div>
    );
};

export default GadgetsDetails;