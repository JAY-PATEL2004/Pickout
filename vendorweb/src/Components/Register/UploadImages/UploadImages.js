import React, { useState } from 'react';
import RestaurantImages from './RestaurantImages';
import MenuCard from './MenuRegistration/MenuRegistration.js';
import OwnerImage from './ownerImage.js';

const UploadImages = () => {
  const [activeTab, setActiveTab] = useState('restaurant');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'restaurant':
        return <RestaurantImages />;
      case 'menu':
        return <MenuCard />;
      case 'owner':
        return <OwnerImage />;
      default:
        return <RestaurantImages />;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg  overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-md bg-white text-Black text-center py-2">
        <h2 className="text-xl font-bold">Upload Images</h2>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-between bg-white-100 border-b border-white-300  rounded-lg text-sm md:text-base">
        <button
          onClick={() => setActiveTab('restaurant')}
          className={`flex-1  rounded-lg py-2 text-center ${
            activeTab === 'restaurant'
              ? 'bg-green-300 text-Black'
              : 'text-black hover:bg-gray-200'
          }`}
        >
          📸 Restaurant
        </button>
        <button
          onClick={() => setActiveTab('menu')}
          className={`flex-1 rounded-lg py-2 text-center ${
            activeTab === 'menu'
              ? 'bg-green-300 text-Black'
              : 'text-black hover:bg-gray-200'
          }`}
        >
          📑 Menu
        </button>
        <button
          onClick={() => setActiveTab('owner')}
          className={`flex-1  rounded-lg py-2 text-center ${
            activeTab === 'owner'
              ? 'bg-green-300 text-black'
              : 'text-Black hover:bg-gray-200'
          }`}
        >
          🧑 Owner
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white-50 min-h-[300px] overflow-y-auto">
        {renderTabContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 py-3 flex justify-between px-4">
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-400">
          Back
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600">
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadImages;
