// src/components/OrderButtons.js
import React, { useState } from 'react';

const OrderButtons = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAcceptClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col space-y-4">
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
        Accept & Print
      </button>
      <button
        onClick={handleAcceptClick}
        className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
      >
        Accept
      </button>
      <button className="bg-gray-500 text-black py-2 px-4 rounded-lg hover:bg-red-700 transition">
        Reject
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="by-green-300 text-lg font-bold mb-4">Set Time for Preparation</h2>
            <div className="grid grid-cols-3 gap-4">
              {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((time) => (
                <button
                  key={time}
                  className="py-2 px-4 border rounded-lg hover:bg-gray-200 transition"
                >
                  {time} mins
                </button>
              ))}
            </div>
            <button
              onClick={handleClosePopup}
              className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
            >
              Set & Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderButtons;