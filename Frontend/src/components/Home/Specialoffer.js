import React from "react";

const SpecialOffer = () => {
  return (
    <div className="px-4 py-2">
      <div className="bg-white rounded-lg p-3 shadow-lg text-black">
        <h2 className="text-lg font-bold">TODAY'S SPECIAL OFFER</h2>
        <p>Free Delivery Order!</p>
        <img
          src="/special-offer.jpg" // Replace with your image path
          alt="Special Offer"
          className="w-full h-24 object-cover rounded-lg mt-2"
        />
      </div>
    </div>
  );
};

export default SpecialOffer;
