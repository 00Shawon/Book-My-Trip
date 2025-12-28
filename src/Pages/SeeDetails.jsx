import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LoadingSpinner from '../Component/Shared/LoadingSpinner';

const SeeDetails = () => {
  const { id } = useParams();
  const [countdown, setCountdown] = useState(null);

  const { data: ticketDetails = {}, isLoading } = useQuery({
    queryKey: ['ticketDetails', id],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/tickets/${id}`
      );
      return result.data;
    },
  });

  const {
    title,
    image,
    from,
    to,
    category,
    price,
    quantity,
    totalQuantity,
    perks,
    date,
    time,
    vendor,
  } = ticketDetails;

  useEffect(() => {
    if (!date || !time) return;

    const target = new Date(`${date}T${time}:00`).getTime();

    const timer = setInterval(() => {
      const diff = target - Date.now();

      if (diff <= 0) {
        setCountdown('Expired');
        clearInterval(timer);
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [date, time]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 shadow-lg">

      {/* Image Card */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-[360px] object-cover"
        />

        {/* Category */}
        <span className="absolute top-4  border-3 border-white  object-cover left-4 bg-primary text-white text-sm px-4 py-1.5 rounded-full">
          {category}
        </span>

        {/* Vendor */}
        <div className="absolute top-74 right-4  flex items-center gap-2 bg-gradient-to-r  from-primary/20 to-sky-700 px-3 py-1.5 rounded-full shadow">
          <img
            src={vendor?.image}
            alt={vendor?.name}
            className="w-10 h-10 rounded-full border-4 border-white  object-cover"
          />
          <span className="text-sm font-medium text-white">
            {vendor?.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 mt-10">

        {/* Left */}
        <div className="lg:col-span-2 space-y-8">
<div className='flex items-center justify-between'>
       {/* Title & Route */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              {title}
            </h1>
            <p className="text-lg text-gray-700">
              {from} <span className="mx-2">→</span> {to}
            </p>
          </div>
           {/* Perks */}
          <div>
            <p className="font-medium text-gray-900 mb-3">Perks</p>
            <div className="flex flex-wrap gap-3">
              {perks?.map((perk, index) => (
                <span
                  key={index}
                  className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm"
                >
                  {perk}
                </span>
              ))}
            </div>
          </div>
</div>
       

          {/* Countdown */}
          <div className="bg-gradient-to-r border-1 border-primary/30 object-cover from-primary/75 to-sky-700 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-white font-medium text-primary mb-4">
              Time Left Before Departure
            </p>

            {countdown === 'Expired' ? (
              <p className="text-red-500 font-semibold">
                This ticket has expired
              </p>
            ) : (
              <div className="flex gap-4">
                {['days', 'hours', 'minutes', 'seconds'].map((unit, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-white rounded-xl shadow text-center py-4"
                  >
                    <p className="text-2xl font-semibold text-gray-900">
                      {countdown?.[unit] ?? '--'}
                    </p>
                    <p className="text-xs uppercase text-gray-500 mt-1">
                      {unit}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-5 border-1 border-primary/30 object-cover">
              <p className="text-xs uppercase text-gray-400">Departure Date</p>
              <p className="font-medium">{date}</p>
            </div>
            <div className="bg-white rounded-xl shadow p-5 border-1 border-primary/30 object-cover">
              <p className="text-xs uppercase text-gray-400">Departure Time</p>
              <p className="font-medium">{time}</p>
            </div>
          </div>

         
        </div>

        {/* Right */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 h-fit border border-primary/30">

          <div>
            <p className="text-xs uppercase text-gray-400">Price per ticket</p>
            <p className="text-4xl font-semibold text-primary">
              ${price}
            </p>
          </div>

          <div className="flex justify-between text-sm">
            <div>
              <p className="text-gray-500">Available</p>
              <p className="font-medium">{quantity}</p>
            </div>
            <div>
              <p className="text-gray-500">Total</p>
              <p className="font-medium">{totalQuantity}</p>
            </div>
          </div>

          <button className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-xl font-medium transition">
            Proceed to Booking
          </button>

          <p className="text-xs text-center text-gray-500">
            Secure booking • Verified vendor
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
