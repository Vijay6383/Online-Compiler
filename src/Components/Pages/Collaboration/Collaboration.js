import React from 'react';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Collaboration = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-24 pt-12 pb-6 px-6 lg:pb-0'>
                <div>
                    <div className='flex justify-start items-center text-gray-500 text-sm font-semibold '>
                        <BsFillCaretLeftFill></BsFillCaretLeftFill>
                        <Link className=" text-gray-300 hover:text-black" to='/profile'>Back to Code Tikki</Link>
                    </div>
                    <h2 className='text-3xl font-semibold text-gray-700 mb-6'>Collaboration</h2>
                </div>
                <input type="text" placeholder="Search" className="px-3 py-2 hover:border-orange-500 hover:placeholder-orange-500 mb-6 w-full max-w-xs border rounded-md border-gray-300" />
            </div>
<<<<<<< HEAD
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
=======
            <div className='flex flex-col lg:flex-row justify-around items-center gap-4 p-6 mx-6 mb-6'>
                <div className='w-full border-2 rounded-lg rounded-t-none'>
                    <h2 className='bg-orange-400 p-3 text-white font-bold text-center'>Business Partnership</h2>
                    <h3 className='p-6 pb-4 pt-8 text-xl font-semibold text-gray-900 tracking-wide'>Content</h3>
                    <p className="p-6 pt-0 pb-8 text-gray-700 text-sm text-left tracking-wide">Dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='flex justify-center gap-2 mb-6 text-xs font-medium'>
                        <Link className='text-gray-500 shadow-md border-2 px-2 py-1'>Read More</Link>
                        <Link className='bg-orange-400 shadow-md text-white px-2 py-1'>Get in Touch</Link>
                    </div>
                </div>
                <div className='w-full border-2 rounded-lg rounded-t-none'>
                    <h2 className='bg-orange-400 p-3 text-white font-bold text-center'>Business Partnership</h2>
                    <h3 className="p-6 pb-4 pt-8 text-xl font-semibold text-gray-900 tracking-wide">Content</h3>
                    <p className="p-6 pt-0 pb-8 text-gray-700 text-sm text-left tracking-wide">Dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='flex justify-center gap-2 mb-6 text-xs font-medium'>
                        <Link className='text-gray-500 shadow-md border-2 px-2 py-1'>Read More</Link>
                        <Link className='bg-orange-400 shadow-md text-white px-2 py-1'>Get in Touch</Link>
                    </div>
                </div>
                <div className='w-full border-2 rounded-lg rounded-t-none'>
                    <h2 className='bg-orange-400 p-3 text-white font-bold text-center'>Business Partnership</h2>
                    <h3 className="p-6 pb-4 pt-8 text-xl font-semibold text-gray-900 tracking-wide">Content</h3>
                    <p className="p-6 pt-0 pb-8 text-gray-700 text-sm text-left tracking-wide">Dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='flex justify-center gap-2 mb-6 text-xs font-medium'>
                        <Link className='text-gray-500 shadow-md border-2 px-2 py-1 rounded-xl'>Read More</Link>
                        <Link className='bg-orange-400 shadow-md text-white px-2 py-1'>Get in Touch</Link>
                    </div>
                </div>
            </div>
            <div className='text-center text-gray-700 mb-6'>
                <h3 className='uppercase text-xl'>get in touch with us</h3>
                <h3 className='text-sm mb-4'>Tagline</h3>
                <Link className='bg-orange-400 text-white px-2 py-1'>Contact Us</Link>
>>>>>>> 347968d07271ae59c8657915a357bf46019daeab
            </div>
        </>
    );
};

export default Collaboration;