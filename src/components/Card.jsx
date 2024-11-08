import { useEffect, useState } from "react";
import Gadgets from "./Gadgets";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [gadgets, setgadgets] = useState([])
    const homepath = location.pathname === '/'
    useEffect(() => {
        const filtercategroy = [...data].filter(iteam => iteam.category === category)
        setgadgets(filtercategroy)
    },[category,data])
    return (
        <div className="w-[80%] mx-auto grid grid-cols-3 gap-3">
            {
                homepath ? data.map(gadget => <Gadgets gadget={gadget}></Gadgets>) : gadgets.map(gadget => <Gadgets gadget={gadget}></Gadgets>)  
            }
    
        </div>
        
    );
};

export default Card;