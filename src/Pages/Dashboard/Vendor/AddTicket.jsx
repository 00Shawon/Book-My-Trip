import React from 'react';
import AddTicketForm from '../../../Component/Shared/AddTicketForm';

const AddTicket = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8">
        
        {/* Page Header */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Add New Ticket
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Fill in the details below to create a new ticket.
          </p>
        </div>

        {/* Form */}
        <AddTicketForm />

      </div>
    </div>
  );
};

export default AddTicket;
