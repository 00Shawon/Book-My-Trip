import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import LoadingSpinner from '../../../Component/Shared/LoadingSpinner';
import TicketCard from '../../../Component/Shared/TicketCard';
import useAuth from '../../../hooks/useAuth';
const MyAddedTickets = () => {
const {user} = useAuth()
    const {data:tickets=[], isPending} = useQuery({
        queryKey:['tickets', user?.email],
        queryFn: async()=>{
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/my-tickets/${user?.email}`)
            return result.data;
        }
    })
    console.log(tickets);
    if(isPending) return <LoadingSpinner/>
    return (
        <div className='max-w-11/12 mx-auto'>
             
     {
      tickets && tickets.length > 0 ? (
         <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-8'>
        {
          tickets.map(ticket => <TicketCard key={ticket._id} ticket={ticket}></TicketCard>)
        }
     
      </div>
      ) : null
     }
   
        </div>
    );
};

export default MyAddedTickets;