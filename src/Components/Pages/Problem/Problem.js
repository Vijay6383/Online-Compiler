import React from 'react';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Problem = () => {
    return (
        <>
            <div className='lg:px-24 pt-12 px-6 pb-6 lg:pb-0'>
                <div className='flex justify-start items-center text-gray-500 text-sm font-semibold underline'>
                    <BsFillCaretLeftFill></BsFillCaretLeftFill>
                    <Link to='/'>Back to Code Tikki</Link>
                </div>
                <h2 className='text-3xl font-semibold mb-3 text-gray-700'>Problems</h2>
                <div className='flex justify-start gap-2 mb-2 text-xs font-medium '>
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
            <div className='mx-6 mb-6'>
                <div class="flex flex-col lg:flex-row border-2 text-gray-600">
                    <div class="border-r-2 m-1 px-4 pt-4">
                        <input type="text" placeholder="Search" className="px-3 py-2 w-full border rounded-lg border-gray-300" />
                        <div className="flex gap-5 text-xs mb-4">
                            <p className='border-b-2'>Recommended</p>
                            <p>Custom</p>
                        </div>
                        <select name="" id="" className='w-full shadow-md text-gray-500 select select-accent '>
                            <option value="" >Levels</option>
                            <option value="" >Levels 1</option>
                            <option value="" >Levels 2</option>
                        </select>
                        <p className='border-b-2 lg:w-20 text-xs mb-4 mt-2'>About Levels</p>
                        <h4>Topics</h4>
                        <p className='text-xs mb-4'>Popular Topics</p>
                        <ul className='text-xs'>
                            <li><Link to=''>Topic 1</Link></li>
                            <li><Link to=''>Topic 2</Link></li>
                            <li><Link to=''>Topic 3</Link></li>
                            <li><Link to=''>Topic 4</Link></li>
                            <li><Link to=''>Topic 5</Link></li>
                        </ul>
                    </div>
                    <div class="grow p-6">
                        <div className='flex items-baseline mb-4'>
                            <p className='text-xl pr-2'>Level</p>
                            <p className='border-b-2 lg:w-28 border-gray-500'></p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Problem;