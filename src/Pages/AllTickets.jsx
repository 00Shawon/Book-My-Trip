import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from '../Component/Shared/LoadingSpinner';
import AllTicketsCard from '../Component/Shared/AllTicketsCard';



const AllTickets = () => {
    // GET all approved tickets and show here 
  const {data: allApprovedTickets = [], isLoading} = useQuery({
        queryKey: ['all-approved-tickets'],
        queryFn: async () => {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/approved-tickets`)
            return result.data;
        }
    })
    console.log(allApprovedTickets)
    if(isLoading) return <LoadingSpinner/>

    return (
       <div className='max-w-11/12 mx-auto'>
             
     {
      allApprovedTickets && allApprovedTickets.length > 0 ? (
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          allApprovedTickets.map(ticket => <AllTicketsCard key={ticket._id} ticket={ticket}></AllTicketsCard>)
        }
     
      </div>
      ) : null
     }
   
        </div>
    );
};

export default AllTickets;