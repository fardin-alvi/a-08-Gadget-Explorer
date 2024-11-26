import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Gadgets = ({ gadget }) => {
    const { product_id, product_title, product_image, price,category } = gadget;
    return (
        <div className="card bg-base-100 shadow-xl">
            <Helmet>
                <title>Home | {category}</title>
            </Helmet>
            <figure className="px-6 pt-6">
                <img
                    src={product_image}
                    alt="product"
                    className="rounded-xl h-[280px] w-[380px] object-cover" />
            </figure>
            <div className="card-body text-left">
                <h2 className='font-semibold text-xl'>{product_title}</h2>
                <p className='text-gray-500'>Price: {price}$</p>
                <div className="card-actions">
                    <Link to={`/gadgets/${product_id}`} className="border-2 border-purple-200 rounded-2xl py-1 px-3 text-purple-500">View details</Link>
                </div>
            </div>
        </div>
    );
};

export default Gadgets;

