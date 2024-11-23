import React from 'react';

const DealsCard = ({ gadget }) => {
    const { product_title, product_image, Specification, price } = gadget

    let off = '';
    let discount = price


    if (price >= 700 && price <= 900) {
        off = '40% OFF';
        discount = price - (price * 0.4).toFixed(2);
    } else if (price >= 900 && price <= 1200) {
        off = '25% OFF';
        discount = price - (price * 0.25).toFixed(2)
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>{Specification}</p>
                <p>Price: <span className='line-through'>{price}$</span>  <span>{discount}$</span></p>
            </div>
            <figure className='relative'>
                {discount && (
                    <div className="absolute top-2 left-8 bg-green-600 text-white text-sm font-bold px-2 py-1 rounded">
                        {off}
                    </div>
                )}
                <img
                    src={product_image}
                    alt="Gadget" />
            </figure>
        </div>
    );
};

export default DealsCard;