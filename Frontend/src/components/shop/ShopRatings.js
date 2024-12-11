import React from "react";
import { FaStarHalfAlt ,FaStar} from "react-icons/fa"; // Corrected import

const ShopRating = () => {
  return (
    <div className="flex items-center space-x-4 my-6">
      {/* Rating Dial (like the speedometer in the image) */}
      <div className="flex items-center">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-300 rounded-full"></div>
          <div
            className="absolute top-0 left-0 w-full h-full bg-green-500 rounded-full"
            style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)" }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">4.5</span>
          </div>
        </div>
      </div>

      {/* Shop Rating Stars */}
      <div className="flex space-x-1 text-yellow-400">
        <FaStar/> {/* Corrected icon */}
        <FaStar />
        <FaStar />
        <FaStar/>
        <FaStarHalfAlt /> {/* Half star */}
      </div>

      {/* Shop Banner */}
      <div className="flex-grow">
        <h2 className="font-bold text-xl text-green-600">SHOP RATING</h2>
      </div>
    </div>
  );
};

export default ShopRating;
