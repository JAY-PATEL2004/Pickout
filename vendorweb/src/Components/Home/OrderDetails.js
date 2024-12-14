import React, { useState, useEffect } from 'react';

const OrderDetails = () => {
  const [timeLeft, setTimeLeft] = useState(120); // Time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="bg-white mx-6 my-4 p-6 rounded-lg shadow-lg">
      <h2 className="font-bold text-xl mb-4">Order Details</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Order Id:</span>
          <span className="font-semibold">CI8ZU-432</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Order Amount:</span>
          <span className="font-semibold">S$328.22</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Payment Method:</span>
          <span className="font-semibold">COD</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Time:</span>
          <span className="font-semibold">Mar 14, 2024 3:30 PM</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Timer:</span>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-lg">{formatTime(timeLeft)}</span>
            <span className="px-4 py-1 bg-gray-200 rounded-full text-sm">Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
