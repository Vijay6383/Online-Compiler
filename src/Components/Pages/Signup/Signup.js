import React from 'react';
import loginImg from '../../../assets/login.png'
import footerImg from '../../../assets/footer.png'
import { Link } from 'react-router-dom';


const Signup = () => {

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
                            <input type="name" placeholder="User Name" className='border-b-2 p-3 '
                            />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="E-mail" name='email' className='border-b-2 p-3'
                            />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="password" name='password' className='border-b-2 p-3'
                            />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Confirm password" name='password' className='border-b-2 p-3' />
                        </div>
                        <div className="flex items-center mt-4">
                            <input type="checkbox" className="checkbox checkbox-warning p-3"
                            />
                            <span className='pl-2 text-sm text-gray-500'>I agree to the terms and privacy policy</span>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-warning text-white' type="submit" value="Register" />
                        </div>
                    </form>
                    <p className="text-sm text-gray-500 my-2">Already have an account?
                        <Link to='/login' className="underline">Login</Link>
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

export default Signup;