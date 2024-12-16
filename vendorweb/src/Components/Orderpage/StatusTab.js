// src/components/StatusTab.js
import React from 'react';

const StatusTab = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
      <div className="flex justify-around text-gray-800">
        <button className="font-semibold hover:border-b-4 hover:border-green-500 transition">
          New Orders
        </button>
        <button className="font-semibold hover:border-b-4 hover:border-green-500 transition">
          Processing
        </button>
        <button className="font-semibold hover:border-b-4 hover:border-green-500 transition">
          Delivered
        </button>
      </div>
    </div>
  );
};

export default StatusTab;
