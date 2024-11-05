import React from 'react';

const Gadgets = ({ gadget }) => {
    const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = gadget;
    return (
        <div class="card bg-base-100 h-80 shadow-xl">
            <figure class="object-fit">
                <img
                    src={product_image}
                    class="rounded-xl w-96 " />
            </figure>
            <div class="text-left space-y-1 mt-2">
                <h2 className='font-semibold text-xl'>{product_title}</h2>
                <p className='text-gray-500'>Price: {price}</p>
                <div>
                    <button class="border-2 border-purple-200 rounded-2xl py-1 px-3 text-purple-500">View details</button>
                </div>

            </div>
        </div>
    );
};

export default Gadgets;