import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";

const CartGadget = ({ gadget }) => {
    const { product_image, product_title, description, price } = gadget
    return (
        <div className='flex items-center justify-between gap-x-6 bg-white border-1 rounded-xl p-2'>
            <div className='flex items-center gap-x-6 p-2'>
                <div className='w-[190px] p-3 bg-base-200 rounded-xl'>
                    <img src={product_image} className='rounded-xl object-cover' alt="" />
                </div>
                <div className='flex flex-col items-start gap-y-2'>
                    <h1 className='font-semibold text-2xl'>{product_title}</h1>
                    <p className='text-gray-500 text-lg text-left'>{description}</p>
                    <p className='font-semibold text-xl'>price: ${price}</p>

                </div>
            </div>
        </div>
    );
};

export default CartGadget;