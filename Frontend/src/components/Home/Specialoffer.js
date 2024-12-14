import React, { useEffect, useState } from "react";
import axios from "axios";

const SpecialOffer = () => {
  const [offer, setOffer] = useState(null);

  // Fetch special offer details from the backend
  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await axios.get("/api/special-offer"); // Replace with your API endpoint
        setOffer(response.data);
      } catch (error) {
        console.error("Error fetching special offer:", error);
      }
    };

    fetchOffer();
  }, []);

  return (
    <div className="px-4 py-2">
      <div className="bg-white rounded-lg p-3 shadow-lg text-black">
        {offer ? (
          <>
            <h2 className="text-lg font-bold">TODAY'S SPECIAL OFFER</h2>
            <p>{offer.description}</p>
            <img
              src={offer.image_url || "/default-offer.jpg"} // Fallback image
              alt={offer.dish_name}
              className="w-full h-24 object-cover rounded-lg mt-2"
            />
            <p className="mt-2 font-medium">
              {offer.dish_name} at {offer.restaurant_name}
            </p>
          </>
        ) : (
          <p>Loading today's special offer...</p>
        )}
      </div>
    </div>
  );
};

export default SpecialOffer;
