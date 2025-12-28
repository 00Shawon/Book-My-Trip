import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import LoadingSpinner from '../../../Component/Shared/LoadingSpinner';
import toast from 'react-hot-toast';

const AdvertiseTickets = () => {
      const {data: tickets = [], isLoading, refetch} = useQuery({
        queryKey: ['all-approved-tickets'],
        queryFn: async () => {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/approved-tickets`)
            return result.data;
        }
    })
    console.log(tickets)
    if(isLoading) return <LoadingSpinner/>

// handle AdvertiseTickets 

const handleAdvertise = async (ticket) => {
  try {
     await axios.patch(
      `${import.meta.env.VITE_API_URL}/advertise-tickets/${ticket._id}`,
      { isAdvertised: !ticket.isAdvertised }
    );

    refetch();

    toast.success(
      `Ticket ${ticket.isAdvertised ? 'removed from' : 'added to'} advertise successfully`
    );
  } catch (error) {
    toast.error(
      error?.response?.data?.message || 'Something went wrong'
    );
  }
};


      return (
        <div>
            Manage Tickets page
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          No
        </th>
        <th>Vendor</th>
        <th>Title</th>
        <th>Category</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    
     {
        tickets.map((ticket, index) =>  <tr key={index}>
        <th>
          <label>
           {index + 1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={ticket.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{ticket.vendor.name}</div>
              <div className="text-sm opacity-50">{ticket.totalQuantity}</div>
            </div>
          </div>
        </td>
        <td>
         {ticket.title}
          <br />
          <span className="badge badge-ghost badge-sm">Departure: {ticket.date}</span>
        </td>
        <td>{ticket.category}</td>
        <th>
          <button className={`btn btn-ghost btn-xs ${ticket.status==='approved' ? 'bg-green-200 text-green-700' : ticket.status==='rejected' ? 'bg-red-200 text-red-700' : 'bg-gray-200 text-gray-700'}`}>{ticket.status} </button>
        </th>
        <th className=''>
          <button onClick={()=> handleAdvertise(ticket)} className={`btn btn-ghost btn-xs ${ticket.isAdvertised ? 'bg-red-500' : 'bg-green-500'} mr-1.5`}> {`${ticket.isAdvertised ? 'Not Advertised' : 'Advertised'}`} </button>
         
        </th>
      </tr>)
     }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AdvertiseTickets;