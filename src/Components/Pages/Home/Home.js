import React from 'react';
import hero from '../../../assets/Hero.png'
import footerImg from '../../../assets/footer.png'
import topImg from '../../../assets/top.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='relative min-h-screen'>
                <img src={topImg} alt="" className='absolute right-0 hidden lg:flex' />
                <div className="flex flex-col lg:flex-row-reverse justify-between items-stretch text-gray-700 lg:mx-40 lg:mt-0 mt-12">
                    <img src={hero} className="lg:w-2/4 rounded-lg lg:pt-24" alt='' />
                    <div className='p-6 lg:pt-12'>
                        <h1 className="lg:text-3xl font-bold text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                        <p className="pt-6 pb-12">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet.</p>
                        <Link to=''>
                            <button className="btn btn-outline btn-warning">Learn More</button>
                        </Link>
                    </div>
                </div>
                <img src={footerImg} alt="" className='absolute left-0 bottom-14 hidden lg:flex' />
            </div>
            <div className='border-2 p-6 mx-6 mb-6'>
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
                <h2 className='text-3xl font-semibold text-gray-700 uppercase'>Recent Winners</h2>
                <div className='flex flex-col lg:flex-row justify-around items-center gap-4 border-x border-b-2 p-6 m-6'>
                    <div className="w-full border-2">
                        <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
                            <div>
                                <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">Name</h2>
                                <p className='font-semibold pt-2 lg:text-base text-sm'>description</p>
                            </div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-2">
                        <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
                            <div>
                                <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">Name</h2>
                                <p className='font-semibold pt-2 lg:text-base text-sm'>description</p>
                            </div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-2">
                        <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
                            <div>
                                <h2 className="font-bold border-b-2 pb-2 uppercase text-xl lg:w-24">Name</h2>
                                <p className='font-semibold pt-2 lg:text-base text-sm'>description</p>
                            </div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-2 p-6 mx-6 mb-6'>
                <h2 className='text-3xl font-semibold text-gray-700 uppercase'>Sponsors</h2>
                <div className='flex flex-col lg:flex-row justify-around items-center gap-12 p-6 m-6'>
                    <div className="w-full border-2 py-12"></div>
                    <div className="w-full border-2 py-12"></div>
                    <div className="w-full border-2 py-12"></div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-12 p-6 m-6'>
                    <div className="w-full lg:w-96 border-2 py-12"></div>
                    <div className="w-full lg:w-96 border-2 py-12"></div>
                </div>
            </div>
            <div className='border-2 p-6 mx-6 mb-6'>
                <h2 className='text-3xl font-semibold text-gray-700 uppercase'>Volunteer</h2>
                <div className='flex flex-col lg:flex-row justify-around items-center gap-4 border-2 py-6 px-12 m-6'>
                    <div>
                        <div className="w-full border-2">
                            <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between"></div>
                        </div>
                        <p className='text-sm text-gray-500 lg:px-8 py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia </p>
                    </div>
                    <div>
                        <div className="w-full border-2">
                            <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between"></div>
                        </div>
                        <p className='text-sm text-gray-500 lg:px-8 py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia </p>
                    </div>
                    <div>
                        <div className="w-full border-2">
                            <div className="px-6 pt-6 pb-32 text-gray-600 flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between"></div>
                        </div>
                        <p className='text-sm text-gray-500 lg:px-8 py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eius expedita eaque ut officia </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;