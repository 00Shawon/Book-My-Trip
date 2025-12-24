import React from 'react';
import Logo from '../assets/Logo2.png';
import { Link, Outlet } from 'react-router';
import image from '../assets/login2.gif'

const AuthLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Link to='/' className='font-bold flex items-center gap-2 text-3xl '><img className='max-w-16' src={Logo} alt="" />Book<span className='text-secondary'>My</span>Trip</Link>
            <div className='w-11/12 mx-auto'>
           <div className='flex flex-col-reverse md:flex-row justify-center items-center min-h-[80vh]'>
             <div>
                     <Outlet ></Outlet>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
           </div>
            </div>
        </div>
    );
};

export default AuthLayout;