import React from 'react';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Competition = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-24 pt-12 pb-6 px-6 lg:pb-0'>
                <div>
                    <div className='flex justify-start items-center text-gray-500 text-sm font-semibold underline'>
                        <BsFillCaretLeftFill></BsFillCaretLeftFill>
                        <Link to='/ide'>Back to Code Tikki</Link>
                    </div>
                    <h2 className='text-3xl font-semibold mb-3 text-gray-700'>Competition</h2>
                    <div className='flex lg:justify-center gap-2 mb-2 text-xs font-medium'>
                        <select name="" id="" className='shadow-md text-gray-500 select select-accent border-2'>
                            <option value="" >Categories</option>
                            <option value="" >Categories 1</option>
                            <option value="" >Categories 2</option>
                        </select>
                        <select name="" id="" className='shadow-md text-gray-500 select select-accent border-2'>
                            <option value="" >Latest</option>
                            <option value="" >Latest 1</option>
                            <option value="" >Latest 2</option>
                        </select>
                    </div>
                </div>
                <input type="text" placeholder="Search" className="px-3 py-2 w-full max-w-xs border rounded-md border-gray-300" />
            </div>
            <div className='border-2 p-6 mx-6 mb-6'>
                <h2 className='text-3xl font-semibold text-gray-700'>Upcoming Contests</h2>
                <div className='flex flex-col lg:flex-row justify-around items-center gap-4 border-x border-b-2 p-6 m-6'>
                    <div className="w-full border-2">
                        <div className="p-6 text-gray-600">
                            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">Event <br /> Name</h2>
                            <p className='font-semibold lg:text-base text-sm'>description</p>
                            <p className='text-xs border-b-2 pt-10 font-semibold lg:w-24'>Read More</p>
                        </div>
                    </div>
                    <div className="w-full border-2">
                        <div className="p-6 text-gray-600">
                            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">Event <br /> Name</h2>
                            <p className='font-semibold lg:text-base text-sm'>description</p>
                            <p className='text-xs border-b-2 pt-10 font-semibold lg:w-24'>Read More</p>
                        </div>
                    </div>
                    <div className="w-full border-2">
                        <div className="p-6 text-gray-600">
                            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">Event <br /> Name</h2>
                            <p className='font-semibold lg:text-base text-sm'>description</p>
                            <p className='text-xs border-b-2 pt-10 font-semibold lg:w-24'>Read More</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-2 p-6 mx-6 mb-6'>
                <h2 className='text-3xl font-semibold text-gray-700'>Recent Contests</h2>
                <div className='flex flex-col lg:flex-row justify-around items-center gap-4 border-x border-b-2 p-6 m-6'>
                    <div className="w-full border-2">
                        <div className="p-6 text-gray-600">
                            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">Event <br /> Name</h2>
                            <p className='font-semibold'>description</p>
                            <p className='text-xs border-b-2 pt-10 font-semibold lg:w-24'>Read More</p>
                        </div>
                    </div>
                    <div className="w-full border-2">
                        <div className="p-6 text-gray-600">
                            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">Event <br /> Name</h2>
                            <p className='font-semibold'>description</p>
                            <p className='text-xs border-b-2 pt-10 font-semibold lg:w-24'>Read More</p>
                        </div>
                    </div>
                    <div className="w-full border-2">
                        <div className="p-6 text-gray-600">
                            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">Event <br /> Name</h2>
                            <p className='font-semibold'>description</p>
                            <p className='text-xs border-b-2 pt-10 font-semibold lg:w-24'>Read More</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-2 p-6 mx-6 mb-6'>
                <h2 className='text-3xl font-semibold text-gray-700'>All Contests</h2>
                <div className='flex flex-col lg:flex-row justify-around items-center gap-4 border-x border-b-2 p-6 m-6'>
                    <div className="w-full border-2">
                        <div className="p-6 text-gray-600">
                            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">Event <br /> Name</h2>
                            <p className='font-semibold lg:text-base text-sm'>description</p>
                            <p className='text-xs border-b-2 pt-10 font-semibold lg:w-24'>Read More</p>
                        </div>
                    </div>
                    <div className="w-full border-2">
                        <div className="p-6 text-gray-600">
                            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">Event <br /> Name</h2>
                            <p className='font-semibold lg:text-base text-sm'>description</p>
                            <p className='text-xs border-b-2 pt-10 font-semibold lg:w-24'>Read More</p>
                        </div>
                    </div>
                    <div className="w-full border-2">
                        <div className="p-6 text-gray-600">
                            <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">Event <br /> Name</h2>
                            <p className='font-semibold lg:text-base text-sm'>description</p>
                            <p className='text-xs border-b-2 pt-10 font-semibold lg:w-24'>Read More</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Competition;