import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { TbTransactionDollar } from "react-icons/tb";
import { Armchair, DollarSign, House, Library, Megaphone, TicketPlus, Tickets, UserPen, WalletMinimal } from 'lucide-react';
import { FaUsersGear } from "react-icons/fa6";

const DashboardLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
           <div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-base-300">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div className="px-4">Navbar Title</div>
    </nav>
    {/* Page content here */}
    <div className="p-4"><Outlet/></div>
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
      {/* Sidebar content here */}
      <ul className="menu w-full grow">
        {/* List item */}
        <li>
          <Link to='/' className=" is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            {/* Home icon */}
           <House size={18} />
            <span className="is-drawer-close:hidden">Homepage</span>
          </Link>
        </li>

        {/* List item */}


        <li>
          <Link to='/dashboard' className=" is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Profile">
            {/* My profile */}
   <UserPen size={18} />
            <span className="active is-drawer-close:hidden">My Profile</span>
          </Link>
        </li>

{                                                     /* user links */                                         }

        {/* my booked tickets  */}
        <li>
          <NavLink to='/dashboard/my-booked-tickets' className=" is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Booked Tickets">
          <Tickets size={18}/>
            <span className="is-drawer-close:hidden">My Booked Tickets</span>
          </NavLink>
        </li>

{/* transaction History */}

        <li>
          <NavLink to='/dashboard/transaction-history' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Transaction History  ">
          <TbTransactionDollar size={18}/>
            <span className="is-drawer-close:hidden">Transaction History  </span>
          </NavLink>
        </li>


{/*                                      vendor links                        */}

{/* add ticket  */}
<li>
          <NavLink to='/dashboard/add-ticket' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add Ticket ">
         <TicketPlus size={18} />
            <span className="is-drawer-close:hidden">Add Ticket  </span>
          </NavLink>
 </li>

 {/* my added tickets  */}
<li>
          <NavLink to='/dashboard/my-added-tickets' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Added Tickets">
       <Library size={18} />
            <span className="is-drawer-close:hidden">My Added Tickets  </span>
          </NavLink>
 </li>

 {/* requested bookings */}
<li>
          <NavLink to='/dashboard/requested-bookings' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Requested Bookings">
      <Armchair size={18} />
            <span className="is-drawer-close:hidden">Requested Bookings  </span>
          </NavLink>
 </li>
 {/* revenue overview */}
<li>
          <NavLink to='/dashboard/revenue-overview' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Revenue Overview">
      <DollarSign size={18} />
            <span className="is-drawer-close:hidden">Revenue Overview  </span>
          </NavLink>
 </li>

{/*                                      admin links                        */}

{/* manage tickets  */}
  <li>
          <NavLink to='/dashboard/manage-tickets' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage ticket">
     <WalletMinimal size={18} />
            <span className="is-drawer-close:hidden">Manage ticket  </span>
          </NavLink>
 </li>
{/* manage users  */}
  <li>
          <NavLink to='/dashboard/manage-users' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Users">
   <FaUsersGear size={18}/>
            <span className="is-drawer-close:hidden">Manage Users </span>
          </NavLink>
 </li>
{/* Advertise Tickets  */}
  <li>
          <NavLink to='/dashboard/advertise-tickets' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Advertise Tickets">
   <Megaphone size={18} />
            <span className="is-drawer-close:hidden">Advertise Tickets </span>
          </NavLink>
 </li>





      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;