import React, { useEffect, useState } from 'react';
import BannerText from '../components/bannerText';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoreCart, getstorewishlist } from '../Utilities/AddtoCart';
import CartGadget from '../components/CartGadget';
import WhislistGadget from '../components/WhislistGadget';
import modalimage from '../assets/Group.png'


const Dashboard = () => {

    const gadgetsdata = useLoaderData()
    const [cartlist,setCartlist]=useState([])
    const [wishlist, setwishlist] = useState([])
    const [sort, setSort] = useState("")
    const [active , setActive] = useState('cart') 
    useEffect(() => {
        const storeCart = getStoreCart()
        const cartIteam = gadgetsdata.filter(cart => storeCart.includes(cart.product_id))
        setCartlist(cartIteam)
    }, []);
    useEffect(() => {
        const storewishlist = getstorewishlist()
        const cartIteam = gadgetsdata.filter(cart => storewishlist.includes(cart.product_id))
        setwishlist(cartIteam)
    }, [])
    const handleSort = (sorttype) => {
        setSort(sorttype)
        if (sorttype === 'price') {
            const sortedlist = [...cartlist].sort((a, b) => b.price - a.price)
            setCartlist(sortedlist)
        }
        
    }
    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-10/12 mx-auto max-w-lg">
                    <img className='mx-auto' src={modalimage} alt="" />
                    <h3 className="font-bold text-lg mt-3">Payment Succesfully</h3>
                    <p className="py-2">Thanks For Puchsing</p>
                    <div className="modal-action">
                        <form method="dialog" className='mx-auto'>
                            <button className="border-1 bg-base-300 rounded-2xl py-1 px-4 w-80">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className="min-h-[300px] lg:min-h-[300px] bg-purple-700 relative rounded-bl-xl rounded-br-xl">
                <BannerText title={'Dashboad'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} />
                <div className='flex gap-x-2 justify-center items-center mt-3'>
                    <button id='cart' onClick={() => { setActive('cart')}} className='border-1 py-1 px-4 bg-white rounded-2xl'>Cart</button>
                    <button id='whislist' onClick={() => { setActive('whislist')}} className='border-1 py-1 px-4 bg-white rounded-2xl'>Wishlist</button>
                </div>
            </div>
            {
                active === 'cart' ? <div className='flex justify-between w-11/12 mx-auto mt-10'>
                    <div><h1 className='font-bold text-xl'>Cart</h1></div>
                    <div className='flex items-center gap-x-3'>
                        <h1 className="font-semibold">Total Cost: </h1>
                        <button onClick={() => handleSort('price')} className='border-1 py-1 px-3 text-purple-500 bg-base-300 rounded-2xl'>Sort By Price</button>
                        <button onClick={() => document.getElementById('my_modal_4').showModal()} className='border-1 py-1 px-3 text-purple-500 bg-base-300 rounded-2xl'>Purchase</button>
                    </div>
                </div> : <div className='my-6 w-11/12'><h1 className='font-bold text-xl text-left'>Wishlist</h1></div>
            }

            <div className='mt-5 space-y-3'>
                {
                    active === 'cart' ? cartlist.map(gadget => <CartGadget gadget={gadget} ></CartGadget>) : wishlist.map(gadget => <WhislistGadget gadget={gadget} ></WhislistGadget>)
                    
                }
            </div>
        </div>
    );
};

export default Dashboard;