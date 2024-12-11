import React from "react";
import image from "../Home/images/orders.png"; // Ensure path is correct
import ShopRating from "./ShopRatings";
import { FaMapMarkerAlt } from "react-icons/fa"; // Import location icon

const ShopImage = () => {
  return (
    <div className="mb-10"> {/* Overall container with margin at the bottom */}
      {/* Shop Name and Location - Positioned above the image */}
      <div className="bg-green-600 text-white px-10 py-3 rounded-lg shadow-lg mb-4 opacity-90">
        <h1 className="font-bold text-2xl">Welcome to Shop</h1>
        <h2 className="font-semibold text-xl">Shop Name: The Burger Haven</h2>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-red-500" />
          <span>Location: 123 Main Street, City, Country</span>
        </div>
      </div>

      {/* Shop Banner Image */}
      <div className="relative ">
        <img
          src={image}
          alt="Shop Banner"
          className="w-50 h-48 object-cover rounded-md shadow-lg"
        />
        
        {/* Overlay Shop Rating - Positioned in top-right corner */}
        <div className="absolute top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg opacity-80">
          <ShopRating />
        </div>
      </div>
    </div>
  );
};

export default ShopImage;
