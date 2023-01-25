import React from 'react';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Collaboration = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-24 pt-12 pb-6 px-6 lg:pb-0'>
                <div>
                    <div className='flex justify-start items-center text-gray-500 text-sm font-semibold underline'>
                        <BsFillCaretLeftFill></BsFillCaretLeftFill>
                        <Link to='/profile'>Back to Code Tikki</Link>
                    </div>
                    <h2 className='text-3xl font-semibold mb-5 text-gray-700'>Collaboration</h2>
                </div>
                <input type="text" placeholder="Search" className="px-3 py-2 w-full max-w-xs border rounded-md border-gray-300" />
            </div>
            <div className='flex flex-col lg:flex-row justify-around items-center gap-4 border-2 p-6 mx-6 mb-6'>
                <div className='w-full border-2'>
                    <h2 className='bg-orange-400 text-white text-center'>Business Partnership</h2>
                    <p className='p-6'>Content</p>
                    <div className='flex justify-center gap-2 mb-6 text-xs font-medium'>
                        <Link className='text-gray-500 shadow-md border-2 px-2 py-1'>Read More</Link>
                        <Link className='bg-orange-400 text-white px-2 py-1'>Get in Touch</Link>
                    </div>
                </div>
                <div className='w-full border-2'>
                    <h2 className='bg-orange-400 text-white text-center'>Business Partnership</h2>
                    <p className='p-6'>Content</p>
                    <div className='flex justify-center gap-2 mb-6 text-xs font-medium'>
                        <Link className='text-gray-500 shadow-md border-2 px-2 py-1'>Read More</Link>
                        <Link className='bg-orange-400 text-white px-2 py-1'>Get in Touch</Link>
                    </div>
                </div>
                <div className='w-full border-2'>
                    <h2 className='bg-orange-400 text-white text-center'>Business Partnership</h2>
                    <p className='p-6'>Content</p>
                    <div className='flex justify-center gap-2 mb-6 text-xs font-medium'>
                        <Link className='text-gray-500 shadow-md border-2 px-2 py-1'>Read More</Link>
                        <Link className='bg-orange-400 text-white px-2 py-1'>Get in Touch</Link>
                    </div>
                </div>
            </div>
            <div className='text-center text-gray-700 mb-6'>
                <h3 className='uppercase text-xl'>get in touch with us</h3>
                <h3 className='text-sm mb-4'>Tegline</h3>
                <Link className='bg-orange-400 text-white px-2 py-1'>Contact Us</Link>
            </div>
        </>
    );
};

export default Collaboration;