import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Cards = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('Gadgets.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    const uniqueCategories = [...new Set(products?.map(product => product.category))];
    return (
        <div >
            <div className=" shadow-xl rounded-xl flex flex-col mt-7 gap-y-2 px-10 py-5">
                {
                    uniqueCategories?.map(category => <NavLink to={`/category/${category}`} className=" w-36 border-1 rounded-xl bg-base-300 p-2">{category}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Cards;