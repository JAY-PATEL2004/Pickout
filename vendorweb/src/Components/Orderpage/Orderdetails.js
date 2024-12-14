// src/components/OrderDetails.js
import React from 'react';

const OrderDetails = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
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
      </div>
    </div>
  );
};

export default OrderDetails;
