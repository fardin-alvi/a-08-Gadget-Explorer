import { useEffect, useState } from "react";
import Gadgets from "./Gadgets";
import { useLoaderData, useParams } from "react-router-dom";

const FilterCard = () => {
    const data = useLoaderData()
    const { category } = useParams()
    // const [ iteam , setiteam] = useState([])
    const [gadgets, setgadgets] = useState([])
    useEffect(() => {
        const filtercategroy = [...data].filter(iteam => iteam.category === category)
        setgadgets(filtercategroy)
    }, [category, data])
    return (
        <div className="w-[80%] mx-auto grid grid-cols-3 gap-3">
            {
                gadgets.map(gadget => <Gadgets gadget={gadget}></Gadgets>)
            }

        </div>

    );
};

export default FilterCard;