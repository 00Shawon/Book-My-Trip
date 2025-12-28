import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../assets/Logo2.png';
import useAuth from '../../Hooks/useAuth';
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const {user,logOut} = useAuth();
  
  console.log('navbar user', user)
const handleLogOut = () => {
  logOut()
  .then()
  .catch(err => console.log(err.code))
}

    const links= (
       <div className='flex flex-col lg:flex-row  items-center gap-6 '>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/all-tickets'>All Tickets</NavLink>
       <NavLink to='/dashboard'>Dashboard</NavLink>
       </div>
    )
    return (
        <div className=''>
            <div className="max-w-11/12 mx-auto navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
        
      </ul>
    </div>
      <Link to='/' className='font-bold flex items-center gap-2 md:text-3xl '><img className=' max-w-10 md:max-w-16' src={Logo} alt="" />Book<span className='text-secondary'>My</span>Trip</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
 {
  !user?  <div className="navbar-end">
    <Link to='/auth/login' className="md:btn md:text-white btn-primary mr-2">Login</Link>
    <Link to='/auth/register' className="md:btn btn-outline text-secondary">Register</Link>
  </div> : <div className="navbar-end">
   

<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className=" m-1">
     <img src={user.photoURL} title={`${user.displayName}`} className='w-12 rounded-full mr-2'  alt="" />
  </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={handleLogOut} className=" hover:bg-primary hover:text-white hover:font-bold">Logout<IoIosLogOut className='' size={24} /> </a></li>
    <li><Link to='/my-profile'>My Profile</Link></li>
  </ul>
</div>






  
  </div>
 }
</div> 
        </div>
       
    );
};

export default Navbar;