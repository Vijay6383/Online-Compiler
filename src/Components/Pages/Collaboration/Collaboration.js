import React from 'react';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Collaboration.css';

const Collaboration = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:px-24 pt-6 pb-6 px-6 lg:pb-0'>
                <div className=''>
                    <div className='flex justify-start items-center text-gray-500 text-sm font-semibold underline'>
                        <BsFillCaretLeftFill></BsFillCaretLeftFill>
                        <Link to='/profile' className='text-#707070'>Back to Code Tikki</Link>
                    </div>
                    <h2 className="text-3xl font-semibold text-gray-700 uppercase mb-6 mt-0 title-heading">Collaboration</h2>
                </div>
                <div className='flex border-2 w-2/5 mb-6 rounded-3xl'>
                    <i className="fa fa-search icon p-4"></i>
                    <input type="text" className="text-gray-900 text-sm rounded-lg block w-full p-2 mr-4" required></input>
                </div>
            </div>
            <div className="flex h-52 shadow-md drop-shadow-md flex-col lg:flex-row justify-around items-center border-2 p-6 mx-6 mb-32 around-position">
                <div className="card absolute left-24 top-12 w-96 bg-base-100 shadow-md border rounded-none">
                    <h2 className='bg-orange-400 p-3 text-white text-22px text-center'>Business Partnership</h2>
                    <p className='p-6'>Content</p>
                    <div className="card-body h-56 relative">
                        <div className="absolute bottom-6 card-actions justify-center mx-9">
                            <Link className='text-gray-500 shadow-md px-4 py-2'>Read More</Link>
                            <Link className='bg-orange-400 shadow-md text-white px-4 py-2'>Get in Touch</Link>
                        </div>
                    </div>
                </div>
                <div className="card absolute top-12 w-96 bg-base-100 shadow-md border rounded-none alignment-around2">
                    <h2 className='bg-orange-400 p-3 text-white text-22px text-center'>Problem Settler</h2>
                    <p className='p-6 text-#686464'>Content</p>
                    <div className="card-body h-56 relative">
                        <div className="absolute bottom-6 card-actions justify-center mx-9">
                            <Link className='text-gray-500 shadow-md px-4 py-2'>Read More</Link>
                            <Link className='bg-orange-400 shadow-md text-white px-4 py-2'>Get in Touch</Link>
                        </div>
                    </div>
                </div>
                <div className="card absolute right-24 top-12 w-96 bg-base-100 shadow-md border rounded-none alignment-around3">
                    <h2 className='bg-orange-400 p-3 text-white text-22px text-center'>Work With Us</h2>
                    <p className='p-6'>Content</p>
                    <div className="card-body h-56 relative">
                        <div className="absolute bottom-6 card-actions justify-center mx-9">
                            <Link className='text-gray-500 shadow-md px-4 py-2'>Read More</Link>
                            <Link className='bg-orange-400 shadow-md text-white px-4 py-2'>Get in Touch</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center text-gray-700 mt-64 fonts_type alignment-around4'>
                <h3 className='uppercase text-[31px]'>get in touch with us</h3>
                <h3 className='text-lg text-#393636 mt-1 mb-4'>Tagline.</h3>
                <div className='mb-24'>
                    <Link className='bg-orange-400 text-white px-8 py-3 text-22px'>Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Collaboration;