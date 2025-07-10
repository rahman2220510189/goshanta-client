import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastSearchQuery, setLastSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({
    spots: [],
    divisions: [],
    countries: [],
    districts: [],
  });
  const [searching, setSearching] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (searchQuery.length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/search?q=${searchQuery}`);
        const data = res.data;
        const all = [
          ...data.spots.map(i => i.name),
          ...data.districts.map(i => i.name),
          ...data.divisions.map(i => i.division),
          ...data.countries.map(i => i.name)
        ];
        const unique = [...new Set(all)].slice(0, 5);
        setSuggestions(unique);
      } catch (err) {
        console.error("Suggestion error:", err);
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearch = async (q) => {
    const finalQuery = q || searchQuery.trim();
    if (!finalQuery) return;

    setSearching(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/search?q=${encodeURIComponent(finalQuery)}`);
      if (res.data) {
        setSearchResults({
          spots: res.data.spots || [],
          divisions: res.data.divisions || [],
          countries: res.data.countries || [],
          districts: res.data.districts || [],
        });
        setLastSearchQuery(finalQuery);
        setHistory(prev => [finalQuery, ...prev.filter(item => item !== finalQuery)].slice(0, 5));
        setSearchQuery("");
        setSuggestions([]);
      }
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setSearching(false);
    }
  };

  const onSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 font-sans relative">

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-2xl bg-white p-3 rounded-full shadow-lg flex gap-2">

        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search any place, district, division, country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={onSearchKeyDown}
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none text-base"
          />
          {suggestions.length > 0 && (
            <ul className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-2xl bg-white border border-gray-200 rounded-lg shadow max-h-60 overflow-y-auto z-50">
              {suggestions.map((s, i) => (
                <li
                  key={i}
                  onClick={() =>{
                    handleSearch(s);       
                    setSuggestions([]);
                  }}
                  
                  className="px-4 py-2 hover:bg-emerald-100 cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={() => handleSearch()}
          disabled={searching}
          className={`px-6 py-2 rounded-full text-white font-semibold text-base transition ${searching ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
            }`}
        >
          {searching ? "..." : "Send"}
        </button>
      </div>

      {lastSearchQuery && (
        <div className="mb-6 text-center mt-6 pt-6">
          <p className="text-gray-600">
            Showing results for:{" "}
            <span className="font-semibold text-emerald-600">
              {lastSearchQuery}
            </span>
          </p>
        </div>
      )}


      {history.length > 0 && (
        <div className="text-center  text-sm text-gray-500 mt-2">
          Recent:{" "}
          {history.map((item, i) => (
            <span
              key={i}
              className="cursor-pointer underline mr-2"
              onClick={() => handleSearch(item)}
            >
              {item}
            </span>
          ))}
        </div>
      )}


      <div className="pb-48">
        {["countries", "divisions", "districts", "spots"].map((type) => {
          const data = searchResults[type];
          if (!data.length) return null;

          return (
            <div key={type}>
              <h2 className="text-2xl font-semibold mb-2 capitalize mt-6">{type}</h2>
              {data.map((item, idx) => (
                <div
                  key={item._id || idx}
                  className="border border-gray-300 p-4 mb-4 rounded-md shadow-sm bg-white"
                >
                  <h3 className="text-lg font-bold">
                    {type === "countries" && item.name}
                    {type === "divisions" && item.division}
                    {type === "districts" && item.name}
                    {type === "spots" && item.name}
                  </h3>

                  {item.country && <p><b>Country:</b> {item.country}</p>}
                  {item.division && item.name && <p><b>Division:</b> {item.division}</p>}
                  {item.district && item.name && <p><b>District:</b> {item.district}</p>}
                  {item.description && <p className="mb-1">{item.description}</p>}
                  {item.travel_cost_bdt && <p><b>Travel Cost:</b> {item.travel_cost_bdt} BDT</p>}
                  {item.hotel_rent_bdt && <p><b>Hotel Rent:</b> {item.hotel_rent_bdt} BDT</p>}
                  {item.travel_tips && <p><b>Travel Tips:</b> {item.travel_tips}</p>}
                  {item.user_reviews && item.user_reviews.length > 0 && (
                    <div>
                      <b>User Reviews:</b>
                      {item.user_reviews.map((review, i) => (
                        <p key={i}>
                          <b>{review.user}</b>: {review.comment} (Rating: {review.rating}/5)
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
