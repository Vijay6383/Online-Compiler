import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Navbar = () => {

    const menuItem = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/problems'>PROBLEMS</Link></li>
        <li><Link to='/ide'>IDE</Link></li>
        <li><Link to='/competition'>COMPETITION</Link></li>
        <li><Link to='/discussion'>DISCUSSION</Link></li>
        <li><Link to='/profile'>USER PROFILE</Link></li>
        <li><Link to='/collaboration'>COLLABORATION</Link></li>
    </>

    return (
        <div className="navbar shadow-md text-black text-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <img src={logo} alt="" className='w-12' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/login'>LOGIN</Link></li>
                    <li><Link to='/signup'>SIGNUP</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;