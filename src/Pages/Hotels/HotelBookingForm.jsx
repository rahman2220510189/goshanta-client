import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
const HotelBookingForm = () => {
    const {hotelId} = useParams();
    const [hotel, setHotel] = useState(null);
    const {register, handleSubmit, reset} = useForm();

    useEffect(() => {
    axios.get(`http://localhost:5000/api/hotels/${hotelId}`).then((res) => {
      setHotel(res.data);
    });
  }, [hotelId]);

  const onSubmit = async (data) => {
   console.log('Booking Info:', data);
    alert('Booking submitted');
    reset();
    try {
      const bookingDetails = {
        ...data,
        hotelId,
        hotelName: hotel.name,
        submittedAt: new Date().toISOString(),
      };
      const response = await axios.post("http://localhost:5000/api/bookings", bookingDetails);
      if (response.data.success) {
        alert("Booking Confirmed!");
      } else {
        alert(" Booking Failed!");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      alert(" Something went wrong!");
    }
  };
   
     if (!hotel) return <p className="text-center mt-10">Loading...</p>;
    return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-16">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Booking: {hotel.name}
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover rounded-lg" />
        <div className="space-y-2 text-gray-700">
          <p><strong>Location:</strong> {hotel.location.area}, {hotel.location.district}, {hotel.location.division}</p>
          <p><strong>Contact:</strong> {hotel.contact}</p>
          <p><strong>Rating:</strong> {hotel.reviews} ⭐</p>
          <p><strong>Single Room:</strong> {hotel.room_types[0]?.price} BDT</p>
          <p><strong>Double Room:</strong> {hotel.room_types[1]?.price} BDT</p>
          <p><strong>Amenities:</strong> {hotel.room_types[0]?.amenities?.join(", ")}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input {...register("fullName")} placeholder="Full Name" className="border px-4 py-2 rounded" />
        <input {...register("email")} type="email" placeholder="Email" className="border px-4 py-2 rounded" />
        <input {...register("phone")} placeholder="Phone Number" className="border px-4 py-2 rounded" />
        <input {...register("checkIn")} type="date" placeholder="Check-in Date" className="border px-4 py-2 rounded" />
        <input {...register("checkOut")} type="date" placeholder="Check-out Date" className="border px-4 py-2 rounded" />
        <select {...register("roomType")} className="border px-4 py-2 rounded">
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
        </select>
        <textarea {...register("specialRequests")} placeholder="Special Requests (optional)" className="border px-4 py-2 rounded col-span-1 md:col-span-2" />

        <button type="submit" className="bg-blue-500 text-white py-2 rounded col-span-1 md:col-span-2 hover:bg-blue-600">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};



export default HotelBookingForm;