import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Beach = () =>  {
  const [packages, setPackages] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/best')
            .then(res => {
             
            setPackages(res.data);   
        })
          
            .catch(err => console.error('Package load error', err))

    }, [])
    return (
        <div className=" bg-[#001f3f]">
        <div className=" max-w-6xl mt-16 mx-auto p-6">
            <h2 className="text-3xl font-bold text-yellow-50 mb-8 text-center">Beach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                 
               {Array.isArray(packages) && packages.map((pkg, i) => (
  <div key={i} className="bg-yellow-50 rounded-lg shadow hover:shadow-xl transition-transform duration-500 overflow-hidden hover:scale-105">
    <img src={pkg.image_url} alt={pkg.package_name} className="w-full h-72 object-cover shadow-lg  " />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-1">{pkg.package_name}</h3>
      <p className="text-gray-500 text-sm">{pkg.location.city}, {pkg.location.country}</p>
      <p className="mt-2 text-sm text-gray-700">{pkg.description}</p>
      <p className="font-semibold text-orange-600 mt-2">Price: ${pkg.price_usd}</p>
          <div className="mt-auto pt-4">
      <Link
        to="/booking"
        className="block w-full text-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        {pkg.book_button_text}
      </Link>
    </div>
    </div>
  </div>

))}
                  
        </div>        

            </div>

        </div>
    );
};

export default Beach;