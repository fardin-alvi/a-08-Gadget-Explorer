import { Link } from "react-router-dom";
const Cards = ({ products }) => {
    return (
        <div >
            <div className="">
                <div className=" shadow-xl rounded-xl flex flex-col mt-7 gap-y-2 px-10 py-5">
                    <button className=" w-36 border-1 rounded-xl bg-base-300 p-2">All Products</button>
                    <button className=" w-36 border-1 rounded-xl bg-base-300 p-2">Laptop</button>
                    <button className=" w-36 border-1 rounded-xl bg-base-300 p-2">Phone</button>
                    <button className=" w-36 border-1 rounded-xl bg-base-300 p-2">Smart Watch</button>
                    <button className=" w-36 border-1 rounded-xl bg-base-300 p-2">TAB</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;