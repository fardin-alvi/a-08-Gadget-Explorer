import { useEffect, useState } from "react";
import Gadgets from "./Gadgets";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FilterCard = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [gadgets, setgadget] = useState([])
    useEffect(() => {
        const filterData = data.filter(item => item.category == category);
        if (filterData.length > 0) {
            setgadget(filterData)
        }
        else {
            setgadget(data)
        }
    },[category])
    return (
        <div className="mx-auto grid mt-5 grid-cols-1 md:grid-cols-3 gap-3">
            {
                gadgets.map(gadget => <Gadgets gadget={gadget}></Gadgets>)
            }
        </div>

    );
};

export default FilterCard;