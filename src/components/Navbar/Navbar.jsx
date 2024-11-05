import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa"; 
import './Navbar.css'
const Navbar = () => {
    const navLocation = useLocation()
    const link = <>
        <NavLink className={navLocation.pathname === '/' ? 'font-bold' : ''} to="/">Home</NavLink>
        <NavLink className={navLocation.pathname === '/statistics' ? 'font-bold' : ''} to="/statistics">Statistics</NavLink>
        <NavLink className={navLocation.pathname === '/dashboard' ? 'font-bold' : ''} to="/dashboard">Dashboard</NavLink>
    </>
    const location = useLocation()
    const homepath = location.pathname === '/'
    return (
        <div className={homepath ? 'navbar bg-purple-700 text-white lg:px-10 rounded-tr-xl rounded-tl-xl' : 'navbar bg-base'}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className="font-bold text-xl lg:text-2xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden text-lg font-medium gap-x-4  lg:flex">
                {link}
            </div>
            <div className="navbar-end space-x-3 ">
                <div className='rounded-full border border-gray-400 text-black bg-white p-2'>
                    <TiShoppingCart/>
                </div>
                <div className='rounded-full border border-gray-400 text-black bg-white p-2'>
                    <FaRegHeart/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;