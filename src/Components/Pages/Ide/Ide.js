import React from 'react';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { FaCog, FaCompressArrowsAlt, FaFileDownload, FaSyncAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Ide = () => {
    return (
        <>
            <div className='lg:px-24 pt-12 px-6'>
                <div className='flex justify-start items-center text-gray-500 text-sm font-semibold underline'>
                    <BsFillCaretLeftFill></BsFillCaretLeftFill>
                    <Link to='/problems'>Back to Code Tikki</Link>
                </div>
                <h2 className='text-3xl font-semibold text-gray-700'>IDE</h2>
                <h3 className='lg:text-3xl my-2 text-gray-700 uppercase'>What is an IDE?</h3>
                <div className='text-gray-700 lg:text-xl lg:mb-12 mb-6'>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className='border-2 mx-6 mb-6 text-gray-400 lg:px-32 lg:pt-10 px-4 pt-4'>
                <div className='flex justify-start gap-1 text-xs font-medium'>
                    <button className='text-gray-500 shadow-lg border-2 px-2 py-1'>IDE</button>
                    <button className='text-gray-500 shadow-lg border-2 px-2 py-1'>
                        <HiPlus></HiPlus>
                    </button>
                </div>
                <div className='border-2 my-2 p-1 flex justify-between items-center'>
                    {/* <button className='text-gray-500 shadow-md border-2 px-2 py-1 flex items-center'>
                        Categories
                        <FaChevronCircleDown className='mx-2'></FaChevronCircleDown>
                    </button> */}
                    <select name="" id="" className='shadow-md text-gray-500 select select-accent border-2'>
                        <option value="" >Categories</option>
                        <option value="" >Categories 1</option>
                        <option value="" >Categories 2</option>
                    </select>
                    <div className='text-gray-500 flex gap-1'>
                        <button className='border-2 '>
                            <FaFileDownload></FaFileDownload>
                        </button>
                        <button className='border-2 '>
                            <FaCompressArrowsAlt></FaCompressArrowsAlt>
                        </button>
                        <button className='border-2 '>
                            <FaCog></FaCog>
                        </button>
                    </div>
                </div>
                <div className='flex border-2'>
                    <div class="bg-gray-300">
                        <ol className='text-black text-center px-6'>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ol>
                    </div>
                    <textarea name="" id="" cols="0" rows="10" className='w-full p-4'></textarea>
                </div>
                <div class="bg-gray-200 flex justify-end">
                    <button className='border-2 border-gray-400 px-2 py-1 text-gray-500 m-1'>
                        <FaSyncAlt></FaSyncAlt>
                    </button>
                </div>
                <div className='flex justify-between items-center my-2 text-xs font-medium'>
                    <button className='text-gray-500 border-2 px-2 py-1'>Open File</button>
                    <div className='flex justify-center gap-2'>
                        <button className='text-gray-500 border-2 px-5 py-1'>Run</button>
                        <button className='bg-orange-400 text-white px-5 py-1'>Submit</button>
                    </div>
                </div>
                <p className='text-gray-500'>Custom Input</p>
                <div className='w-full border-2 mb-2'>
                    <p className='bg-gray-200 p-2 mb-24'></p>
                </div>
                <div className='w-full border-2'>
                    <p className='mb-12 p-2'>Note</p>
                </div>
            </div>
        </>
    );
};

export default Ide;