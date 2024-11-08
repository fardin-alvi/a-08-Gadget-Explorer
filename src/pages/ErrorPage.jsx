import React from 'react';
import { MdErrorOutline } from "react-icons/md";
const ErrorPage = () => {
    return (
        <div className='flex flex-col gap-y-5 justify-center items-center mx-auto'>
            <MdErrorOutline className='text-8xl' />
            <h1 className='text-center font-bold text-5xl'>404 Not Found</h1>
        </div>
    );
};

export default ErrorPage;