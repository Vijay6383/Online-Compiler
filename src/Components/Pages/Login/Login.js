import React from 'react';
import loginImg from '../../../assets/login.png'
import footerImg from '../../../assets/footer.png'
import fbImage from '../../../assets/fb.png'
import googleImg from '../../../assets/google.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row items-center justify-center min-h-screen lg:pb-32 lg:pl-32'>
                <div>
                    <form>
                        <div className='mb-5'>
                            <h1 className="text-2xl lg:text-3xl font-medium text-warning italic">Welcome To Code Tikki!</h1>
                            <p className='text-gray-500 font-semibold'>Create your code tikki account</p>
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="E-mail" name='email' className='border-b-2 p-3'
                            />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="password" name='password' className='border-b-2 p-3'
                            />
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className="flex items-center mt-4">
                                <input type="checkbox" className="checkbox checkbox-warning p-3"
                                />
                                <span className='pl-2 text-sm text-gray-500'>Remember me?</span>
                            </div>
                            <span className='pl-2 text-sm text-gray-500 mt-3 underline'>Forgot Password?</span>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-warning text-white' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-gray-500 py-3'> --- or sign in with --- </p>
                    <div className='flex item-center justify-start'>
                        <img src={fbImage} alt="" className='w-14' />
                        <img src={googleImg} alt="" className='w-9' />
                    </div>

                    <p className="text-sm text-gray-500 my-2">Don't have an account?
                        <Link to='/signup' className="underline">Sign up</Link>
                    </p>
                </div>
                <div className="text-center lg:text-left">
                    <img className='w-full' src={loginImg} alt="" />
                </div>
            </div>
            <img src={footerImg} alt="" className='absolute bottom-0 hidden lg:flex' />
        </>
    );
};

export default Login;