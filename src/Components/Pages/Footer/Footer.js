import React from 'react';
// import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi"

const Footer = () => {
    return (
       <footer className="footer footer-center p-10 bg-orange-400 text-white rounded font-bold">
           
            <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-col lg:flex-row'>
                    <p className='mb-5 text-2xl uppercase'>Connect with me</p>
                    <div className="grid grid-flow-col gap-1" style={{width: '80px'}}>
                        {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='hover:text-orange-600'>
                            <FaFacebook></FaFacebook>
                        </a> */}
                        {/* <a href="tel:555-666-7777" target="_blank" rel="noopener noreferrer" className='hover:text-orange-600' style={{width: '30px'}}>
                            <FaWhatsapp></FaWhatsapp>
                        </a> */}
                        {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='hover:text-orange-600'>
                            <FaTwitter></FaTwitter>
                        </a> */}
                        <a href="https://www.linkedin.com/in/vijay-moses-avm/" target="_blank" rel="noopener noreferrer" className='hover:text-orange-600' style={{paddingLeft : '20px', paddingTop : '2px'}}>
                            <FaLinkedin style={{width: '30px', height: '30px'}}></FaLinkedin>
                        </a>
                        {/* <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='hover:text-orange-600'>
                            <FaInstagram></FaInstagram>
                        </a> */}
                    </div>
                </div>
                <div className="divider lg:divider-horizontal border-l-4"></div>
                <div className='flex items-center justify-center'>
                    <HiOutlineMail></HiOutlineMail>
                    <a href="mailto:mosesbeard6383@gmail.com"><p className='pl-2'>mosesbeard6383@gmail.com</p></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;