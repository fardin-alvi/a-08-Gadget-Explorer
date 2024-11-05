import { useEffect, useState } from "react";
import Gadgets from "./Gadgets";

const Card = ({ }) => {
    const [gadgets,setgadgets] = useState([])
    useEffect(() => {
        fetch('./Gadgets.json')
            .then(res => res.json())
            .then(data => setgadgets(data) )
    },[])
    return (
        <div className="w-[80%] mx-auto grid grid-cols-3 gap-3">
            {
                gadgets.map(gadget => <Gadgets gadget={gadget}></Gadgets>)
            }
    
        </div>
        
    );
};

export default Card;