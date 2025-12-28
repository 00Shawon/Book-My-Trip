import React from 'react';
import { Link } from 'react-router';

const AllTicketsCard = ({ ticket }) => {
  const {
    image,
    title,
    from,
    to,
    category,
    price,
    quantity,
    perks,
    date,
    time,
    vendor,
  } = ticket;

  return (
    <div className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">

      {/* Image Section */}
      <div className="relative h-56 w-full">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Transport Type Badge */}
        <span className="absolute top-4 left-4 bg-black/80 text-white text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </span>

        {/* Vendor Overlay */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
          <img
            src={vendor?.image}
            alt={vendor?.name}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-xs font-medium text-gray-900">
            {vendor?.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 space-y-4 flex-grow">
        <div className='flex items-center justify-between'>
             <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {title}
        </h3>
          <div className="text-sm text-gray-700">
          <span className="font-medium">{from}</span>
          <span className="mx-1 text-gray-500">→</span>
          <span className="font-medium">{to}</span>
        </div>
        </div>

        {/* Title */}
       

        {/* Route */}
      

        {/* Departure */}
        <div className="flex justify-between text-sm text-gray-600">
          <span><strong>Date:</strong> {date}</span>
          <span><strong>Time:</strong> {time}</span>
        </div>

        {/* Price & Quantity */}
        <div className="flex justify-between items-center text-sm">
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-gray-500 text-xs">Price (per unit)</p>
            <p className="font-semibold text-gray-900">${price}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-gray-500 text-xs">Ticket Quantity</p>
            <p className="font-semibold text-gray-900">{quantity}</p>
          </div> 
          {/* <div className=''>
                 <p className="text-xs text-gray-500 mb-2">Perks</p>
          <div className="flex flex-wrap gap-2">
            {perks?.map((perk, index) => (
              <span
                key={index}
                className="text-xs bg-orange-200  text-gray-700 px-3 py-1 rounded-full"
              >
                {perk}
              </span>
            ))}
          </div> 
            </div> */}
        </div>

   
        <div className='flex justify-between items-end'>
           
         <Link to={`/see-details/${ticket._id}`} className="w-full text-center px-6 mt-4 bg-primary text-white py-3 rounded-xl  font-medium hover:bg-gray-900 transition">
          See Details
        </Link>
        </div>
       

      </div>
    </div>
  );
};

export default AllTicketsCard;
