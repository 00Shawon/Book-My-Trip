// ======================
// External Libraries
// ======================
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";

// ======================
// Custom Hooks & Utils
// ======================
import useAuth from "../../hooks/useAuth";
import { destinations } from "../../Utilities/Destinations";
import { imageUpload } from "../../Utilities";

// ======================
// UI Components
// ======================
import LoadingSpinner from "./LoadingSpinner";
import ErrorPage from "./ErrorPage";

const AddTicketForm = () => {
  // ======================
  // Authenticated User
  // ======================
  const { user } = useAuth();

  // ======================
  // React Hook Form Setup
  // ======================
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // ======================
  // React Query Mutation
  // Responsible ONLY for backend request
  // ======================
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (payload) => {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/tickets`,
        payload
      );
      return res.data;
    },
    onSuccess: () => {
      toast.success("Ticket added successfully and pending for approval");
      reset();
    },
    onError: (error) => {
      toast.error("Failed to add ticket");
      console.error(error);
    },
  });

  // ======================
  // Form Submit Handler
  // ======================
  const onSubmit = async (data) => {
    try {
      // Destructure form data
      const {
        title,
        from,
        to,
        category,
        price,
        quantity,
        date,
        time,
        perks,
        image,
      } = data;

      // ----------------------
      // 1. Upload image
      // ----------------------
      const imageFile = image[0];
      const imageUrl = await imageUpload(imageFile);

      // ----------------------
      // 2. Prepare ticket object
      // ----------------------
      const ticket = {
        title,
        email:user?.email,
        from,
        to,
        category,
        price: Number(price),
        quantity: Number(quantity),
        totalQuantity: Number(quantity),
        date,
        time,
        perks,
        image: imageUrl,
        vendor: {
          image: user?.photoURL,
          name: user?.displayName,
          email: user?.email,
        },
        status: "pending",
        isVisible: true,
        isAdvertised: false,
        createdAt: new Date(),
      };

      // ----------------------
      // 3. Send data to backend
      // ----------------------
      await mutateAsync(ticket);
      console.log("Ticket submitted:", ticket);

    } catch (error) {
      console.error("Ticket submission failed:", error);
    }
  };

  // ======================
  // Loading State
  // ======================
  if (isPending) {
    return <LoadingSpinner />;
  }

  // ======================
  // Static Data
  // ======================
  const perksList = ["AC", "WiFi", "Breakfast", "Water", "TV"];

  // ======================
  // JSX
  // ======================

  return (
    <div className="w-full  flex justify-center items-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-8 rounded-lg bg-white shadow"
      >

        {/* Ticket title */}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Ticket title</label>
          <input
            className="w-full border p-3 rounded"
            {...register("title", { required: "Title is required" })}
            placeholder="Dhaka to Cox’s Bazar"
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* From & To */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* From */}
          <fieldset className="fieldset">
  <legend className="fieldset-legend">From</legend>
  <select defaultValue="Pick a destination" 
  className="select"  {...register("from", {
              required: "Destination type is required",
            })}>
    <option disabled={true}>Pick a Destination</option>
    {destinations.map((destination) => (
      <option key={destination}>{destination}</option>
    ))}
  </select>

</fieldset>

          {/* To */}
               <fieldset className="fieldset">
  <legend className="fieldset-legend">To</legend>
  <select defaultValue="Pick a destination" className="select" 
  {...register("to", {
              required: "Destination type is required",
            })}>
    <option disabled={true}>Pick a Destination</option>
    {destinations.map((destination) => (
      <option key={destination}>{destination}</option>
    ))}
  </select>

</fieldset>
        </div>

        {/* Transport Type */}
        <div className="mt-4">
          <label className="block mb-1 text-gray-700">Transport type</label>
          <select
            className="w-full border p-3 rounded"
            {...register("category", {
              required: "Transport type is required",
            })}
          >
            <option value="Bus">Bus</option>
            <option value="Train">Train</option>
            <option value="Ship">Ship</option>
            <option value="Air">Air</option>
          </select>
        </div>

        {/* Price & Quantity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-1 text-gray-700">Price (per unit)</label>
            <input
              type="number"
              className="w-full border p-3 rounded"
              {...register("price", { required: "Price is required" })}
              placeholder="1500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Ticket quantity</label>
            <input
              type="number"
              className="w-full border p-3 rounded"
              {...register("quantity", { required: "Quantity is required" })}
              placeholder="1"
            />
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-1 text-gray-700">Departure date</label>
            <input
              type="date"
              className="w-full border p-3 rounded"
              {...register("date", { required: "Date is required" })}
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Departure time</label>
            <input
              type="time"
              className="w-full border p-3 rounded"
              {...register("time", { required: "Time is required" })}
            />
          </div>
        </div>

        {/* Perks (Checkboxes) */}
        <div className="mt-4">
          <p className="mb-2 text-gray-700 font-medium">Perks</p>
          <div className="flex gap-4 flex-wrap">
            {perksList.map((perk) => (
              <label key={perk} className="flex gap-2 items-center">
                <input type="checkbox" value={perk} {...register("perks")} />
                {perk}
              </label>
            ))}
          </div>
        </div>

        {/* Image Upload */}
        <div className="mt-4">
          <label className="block mb-1 text-gray-700">Upload image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border p-3 rounded"
            {...register("image", { required: "Image is required" })}
          />
        </div>

        {/* Vendor name & email (readonly) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-1 text-gray-700">Vendor name</label>
            <input
              className="w-full border p-3 rounded bg-gray-200 cursor-not-allowed"
              readOnly
              {...register("vendorName")}
              value="Shawon Hasan"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Vendor email</label>
            <input
              className="w-full border p-3 rounded bg-gray-200 cursor-not-allowed"
              readOnly
              {...register("vendorEmail")}
              value="shawon@example.com"
            />
          </div>
        </div>

        {/* Submit button */}
       <button
  type="submit"
  disabled={isPending}
  className="w-full mt-6 py-3 bg-primary text-white font-medium rounded shadow flex justify-center items-center"
>
  {isPending ? (
    <TbFidgetSpinner className="animate-spin text-xl" />
  ) : (
    "Add Ticket"
  )}
</button>

      </form>
    </div>
  );
};

export default AddTicketForm;
