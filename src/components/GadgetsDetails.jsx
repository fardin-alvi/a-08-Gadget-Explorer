import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

const GadgetsDetails = () => {
    const { product_id } = useParams()
    const loader = useLoaderData()
    const gadgets = loader.find(gadget => gadget?.product_id == product_id)
    const { product_title, product_image, category, price, description, Specification, availability, rating } = gadgets;
    return (
        <div className="hero bg-white border-2 border-gray-100 w-9/12 mx-auto rounded-xl min-h-[450px]">
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
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar />
                        <CiStar />
                        <button className='mx-3 bottom-1 bg-base-200 rounded-3xl px-2'>{rating}</button>
                    </div>
                    <div className='mt-1 flex gap-x-2 items-center'>
                        <button className='px-3 py-1 text-white text-sm font-medium bg-purple-500 rounded-2xl'>Add To Card</button>
                        <FaRegHeart className='text-3xl border border-gray-300 rounded-full p-2'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetsDetails;