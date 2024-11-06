import { useEffect, useState } from "react";
import Gadgets from "./Gadgets";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
    // const data = useLoaderData()
    // const { category } = useParams()
    // const [ iteam , setiteam] = useState([])
    const [gadgets, setgadgets] = useState([])
    // useEffect(() => {
    //     const filtercatagory = [...data].filter(gadget => gadget.category === category)
    //     setiteam(filtercatagory)
    // },[])
    useEffect(() => {
        fetch('./Gadgets.json')
            .then(res => res.json())
            .then(data => setgadgets(data) )
    }, [])
    return (
        <div className="w-[80%] mx-auto grid grid-cols-3 gap-3">
            {
                gadgets.map(gadget => <Gadgets gadget={gadget}></Gadgets>)
            }
    
        </div>
        
    );
};

export default Card;