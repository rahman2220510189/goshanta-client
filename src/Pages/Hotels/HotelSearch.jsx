import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HotelSearch = () => {
 const navigate = useNavigate();
  const [query, setQuery] = useState("Dhaka");
  const [hotels, setHotels] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 6;

  useEffect(() => {
    if (query.trim()) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/hotels/search?query=${encodeURIComponent(query)}`
          );
          if (response.status === 200) {
            const suggestionSet = new Set();
            response.data.forEach((hotel) => {
              suggestionSet.add(hotel.name);
              suggestionSet.add(hotel.location.area);
              suggestionSet.add(hotel.location.district);
              suggestionSet.add(hotel.location.division);
            });
            setSuggestions(
              [...suggestionSet]
                .filter((s) =>
                  s.toLowerCase().includes(query.toLowerCase())
                )
                .slice(0, 5)
            );
          }
        } catch (err) {
          console.error("Error fetching suggestions:", err);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    try {
      setError("");
      setSuggestions([])
      const response = await axios.get(
        `http://localhost:5000/api/hotels/search?query=${encodeURIComponent(query)}`
      );
      if (response.status === 200) {
        setHotels(response.data);
        setCurrentPage(1);
      } else {
        setError(response.data.message);
        setHotels([]);
      }
    } catch (err) {
      console.error("Error fetching hotels:", err);
      setError("Server error");
      setHotels([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    handleSearch();
  };

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);
  const totalPages = Math.ceil(hotels.length / hotelsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-6">
   
      <div className="relative max-w-2xl mx-auto mb-10 mt-16">
        <div className="flex items-center rounded-full border-2 border-blue-400 shadow-md overflow-hidden focus-within:ring-2 ring-blue-300">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="🔍 Search by hotel, area, district or division"
            className="w-full px-5 py-3 text-gray-800 focus:outline-none bg-white"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 transition"
          >
            <FaSearchLocation size={20} />
          </button>
        </div>

        {suggestions.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-200 rounded-lg mt-2 shadow-lg z-20">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

    
      {error && <p className="text-center text-red-500 mb-4">{error}</p>}


      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {currentHotels.map((hotel) => (
          <div
            key={hotel._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden   hover:shadow-2xl transition-transform duration-500  hover:scale-105"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-blue-700">{hotel.name}</h2>
              <p className="flex items-center gap-1 text-sm text-gray-500">
                <MdLocationOn className="text-red-400" />
                {hotel.location.area}, {hotel.location.district}, {hotel.location.division}
              </p>
              <p className="text-yellow-500 font-medium">⭐ {hotel.reviews} rating</p>
              <div className="text-sm">
                <p className="font-semibold">Single: {hotel.room_types[0]?.price} BDT</p>
                <p className="font-semibold">Double: {hotel.room_types[1]?.price} BDT</p>
              </div>
              <div className="text-sm text-gray-600">
                Amenities: {hotel.room_types[0]?.amenities?.join(", ") || "-"}
              </div>
              <p className="text-sm text-gray-600">📞 {hotel.contact}</p>
              <button
                onClick={() => navigate(`/book/${hotel._id}`)}
                className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

     
      {hotels.length > 0 && (
        <div className="flex justify-center mt-10 gap-2 flex-wrap">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => paginate(page)}
              className={`px-4 py-2 rounded transition font-medium ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default HotelSearch;