import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("new");

  return (
    <div className="flex justify-around bg-white py-4 px-1 shadow-md rounded-t-lg">
      <button
        className={`text-lg font-bold text-black pb-1 rounded-tl-lg ${activeTab === "new" ? 'border-b-4 border-green-500' : 'hover:border-b-4 hover:border-green-500'}`}
        onClick={() => setActiveTab("new")}
      >
        New Orders
      </button>
      <button
        className={`text-lg font-bold text-black pb-1 ${activeTab === "processing" ? 'border-b-4 border-green-500' : 'hover:border-b-4 hover:border-green-500'}`}
        onClick={() => setActiveTab("processing")}
      >
        Processing
      </button>
      <button
        className={`text-lg font-bold text-black pb-1 rounded-tr-lg ${activeTab === "delivered" ? 'border-b-4 border-green-500' : 'hover:border-b-4 hover:border-green-500'}`}
        onClick={() => setActiveTab("delivered")}
      >
        Picked
      </button>
    </div>
  );
};

export default TabComponent;
