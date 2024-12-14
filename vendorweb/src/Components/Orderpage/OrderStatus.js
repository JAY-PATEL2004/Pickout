// src/components/OrderStatus.js
import React from 'react';

const OrderStatus = ({ timeLeft }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
          🍽️
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">Preparing</h2>
          <span className="text-sm text-gray-500">Accepted</span>
        </div>
      </div>

      <div className="text-center">
        <div className="text-xl font-semibold">{formatTime(timeLeft)}</div>
        <span className="text-sm text-gray-500">Timer</span>
      </div>
    </div>
  );
};

export default OrderStatus;
