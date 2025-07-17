import axios from "axios";
import { useForm } from "react-hook-form";
const BlogForm = () => {
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    console.log("Booking Info:", data);

    const bookingDetails = {
      ...data,
    };

    const response = await axios.post("http://localhost:5000/api/bookings", bookingDetails);

    if (response.data.success) {
      alert("Booking Confirmed!");
      reset();
    } else {
      alert("Booking Failed!");
    }
  } catch (error) {
    console.error("Booking Error:", error);
    alert("Something went wrong!");
  }
};


  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
         Booking Place
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            {...register("name", { required: true })}
            className="w-full border p-2 rounded"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full border p-2 rounded"
            placeholder="example@mail.com"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>

        <div>
          <label className="block font-semibold">Phone Number</label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            className="w-full border p-2 rounded"
            placeholder="e.g. +8801XXXXXXXXX"
          />
          {errors.phone && <p className="text-red-500">Phone is required</p>}
        </div>

        <div>
          <label className="block font-semibold">Country</label>
          <input
            {...register("country", { required: true })}
            className="w-full border p-2 rounded"
            placeholder="Bangladesh"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Check-in Date</label>
            <input
              type="date"
              {...register("checkin", { required: true })}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Check-out Date</label>
            <input
              type="date"
              {...register("checkout", { required: true })}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Adults</label>
            <input
              type="number"
              {...register("adults", { required: true, min: 1 })}
              className="w-full border p-2 rounded"
              placeholder="1"
            />
          </div>
          <div>
            <label className="block font-semibold">Children</label>
            <input
              type="number"
              {...register("children")}
              className="w-full border p-2 rounded"
              placeholder="0"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold">Room Type</label>
          <select
            {...register("roomType", { required: true })}
            className="w-full border p-2 rounded"
          >
            <option value="">-- Select Room Type --</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Special Requests</label>
          <textarea
            {...register("message")}
            className="w-full border p-2 rounded"
            placeholder="Any special instructions or requests"
          ></textarea>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            {...register("agree", { required: true })}
            className="mr-2"
          />
          <label>I agree to the terms & conditions</label>
        </div>
        {errors.agree && <p className="text-red-500">You must agree first</p>}

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};



export default BlogForm;