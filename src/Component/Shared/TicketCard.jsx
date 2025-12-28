import React from 'react'
import { Link } from 'react-router'

const TicketCard = ({ ticket }) => {
  const {
    image,
    title,
    price,
    quantity,
    category,
    perks,
    status,
    _id
  } = ticket

  const statusStyle =
    status === 'approved'
      ? 'bg-green-100 text-green-700'
      : status === 'pending'
      ? 'bg-red-100 text-red-700'
      : 'bg-gray-200 text-gray-700'

  return (
    <div
      className="
        w-full max-w-sm
        bg-white
        border border-gray-200
        rounded-2xl
        shadow-sm hover:shadow-md
        transition
        overflow-hidden
        flex flex-col
      "
    >
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover block"
        />

        {/* Status Badge */}
        <span
          className={`
            absolute top-3 left-3
            px-3 py-1 rounded-full
            text-xs font-medium capitalize
            ${statusStyle}
          `}
        >
          {status}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
          {title}
        </h2>

        {/* Meta */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
            {category}
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
            Qty: {quantity}
          </span>
        </div>

        {/* Perks */}
        {perks?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {perks.map((perk, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
              >
                {perk}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <p className="text-xl font-semibold text-green-600">
          ৳ {price}
          <span className="text-sm font-normal text-gray-500"> / ticket</span>
        </p>

        {/* Actions */}
        <div className="pt-2 flex gap-3">
          <Link
            to={`/update/${_id}`}
            className="
              flex-1 text-center
              px-4 py-2.5 rounded-xl
              bg-blue-600 text-white
              text-sm font-medium
              hover:bg-blue-700
              transition
            "
          >
            Update
          </Link>

          <button
            className="
              flex-1
              px-4 py-2.5 rounded-xl
              bg-red-100 text-red-600
              text-sm font-medium
              hover:bg-red-200
              transition
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
