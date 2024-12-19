import React, { useEffect, useState } from "react";
import image from "../Home/images/orders.png"; // Ensure path is correct
import ShopRating from "./ShopRatings";
import { FaMapMarkerAlt } from "react-icons/fa"; // Import location icon
import axios from "axios";

const ShopImage = ({restId}) => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Shop/getshopdetails", {
          rest_id: restId, // Pass the restaurant ID in the request body
        });
        setDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching shop details", err);
      }
    };

    fetchDetails();
  }, [restId]);

  if (loading) {
    return <div className="loading">Loading Details...</div>; // A loading message while data is being fetched
  }

  return (
    <div className="mb-10">
      {details.map((shop, index) => (
        <div key={index} className="mb-6">
          {/* Shop Name and Location */}
          <div className="bg-green-600 text-white px-10 py-3 rounded-lg shadow-lg mb-4 opacity-90">
            <h1 className="font-bold text-2xl">Welcome to Shop</h1>
            <h2 className="font-semibold text-xl">Shop Name: {shop.name}</h2>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Location: {shop.location}</span>
            </div>
          </div>

          {/* Shop Banner Image */}
          <div className="relative">
            <img
              src={shop.image_url || image} // Use fetched image or fallback to default
              alt="Shop Banner"
              className="w-50 h-48 object-cover rounded-md shadow-lg"
            />

            {/* Overlay Shop Rating */}
            <div className="absolute top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg opacity-80">
              <ShopRating rating={shop.rating} /> {/* Pass dynamic rating if applicable */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopImage;
