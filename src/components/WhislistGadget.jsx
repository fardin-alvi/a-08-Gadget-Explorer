import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";

const WhislisGadget = ({ gadget }) => {
    const { product_image, product_title, description, price } = gadget
    return (
        <div className='flex items-center justify-between gap-x-6 bg-white border-1 rounded-xl p-2'>
            <div className='flex items-center gap-x-6 p-2'>
                <div className='w-[190px] p-3 bg-base-200 rounded-xl'>
                    <img src={product_image} className='rounded-xl object-cover' alt="" />
                </div>
                <div className='flex flex-col items-start gap-y-2'>
                    <h1 className='font-semibold text-2xl'>{product_title}</h1>
                    <p className='text-gray-500 text-lg'>{description}</p>
                    <p className='font-semibold text-xl'>price: ${price}</p>
                    <button className='border-2 font-semibold bg-purple-500 py-1 px-3 text-white rounded-2xl'>Add to Cart</button>
                </div>
            </div>
            <div className='border-1 p-5 rounded-full text-red-500'>
                <TiDeleteOutline className='text-4xl' />
            </div>
        </div>
    );
};

export default WhislisGadget;