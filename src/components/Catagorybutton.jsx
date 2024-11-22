import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Catagorybutton = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('../catagory.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div className="flex flex-col items-center">
            <div className="shadow-xl px-3 py-4 rounded-xl grid grid-cols-3 md:flex gap-2 md:flex-col mt-7 md:gap-y-2 md:px-10 md:py-5">
                {
                    products?.map(category => <NavLink key={category.category_id} to={`/category/${category.category}`} className={({ isActive }) => `text-center w-24 text-sm md:text-base md:w-36 border-1 rounded-xl bg-base-300 p-2 ${isActive ? 'bg-purple-500 text-white' : '' }`
                    }>{category.category}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Catagorybutton;