import React from 'react';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Discussion = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-24 pt-12 pb-6 px-6 lg:pb-0'>
                <div>
                    <div className='flex justify-start items-center text-gray-500 text-sm font-semibold underline'>
                        <BsFillCaretLeftFill></BsFillCaretLeftFill>
                        <Link to='/competition'>Back to Code Tikki</Link>
                    </div>
                    <h2 className='text-3xl font-semibold mb-3 text-gray-700'>Discussions</h2>
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
            <div className='border-2 p-6 mx-6 mb-6 text-gray-400'>
                <div className='uppercase text-sm flex justify-between mb-2'>
                    <p>topics</p>
                    <p>views</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col lg:flex-row justify-between items-center border-2 p-2'>
                        <div className='text-xs'>
                            <h3>Heading</h3>
                            <h4>SubHeading</h4>
                            <p>Content</p>
                        </div>
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://placeimg.com/192/192/people" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center border-2 p-2'>
                        <div className='text-xs'>
                            <h3>Heading</h3>
                            <h4>SubHeading</h4>
                            <p>Content</p>
                        </div>
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://placeimg.com/192/192/people" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center border-2 p-2'>
                        <div className='text-xs'>
                            <h3>Heading</h3>
                            <h4>SubHeading</h4>
                            <p>Content</p>
                        </div>
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://placeimg.com/192/192/people" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center border-2 p-2'>
                        <div className='text-xs'>
                            <h3>Heading</h3>
                            <h4>SubHeading</h4>
                            <p>Content</p>
                        </div>
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://placeimg.com/192/192/people" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center border-2 p-2'>
                        <div className='text-xs'>
                            <h3>Heading</h3>
                            <h4>SubHeading</h4>
                            <p>Content</p>
                        </div>
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="https://placeimg.com/192/192/people" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Discussion;