import React from 'react';

const RestaurantDetails = ({ formData, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Restaurant Details</h3>
      <p className="text-sm text-gray-500">Name, address, and location pin.</p>
      
      <input
        type="text"
        name="restaurantName"
        value={formData.restaurantName}
        placeholder="Restaurant Name"
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
      />
      
      <input
        type="text"
        name="address"
        value={formData.address}
        placeholder="Restaurant Address"
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
      />
      
      <input
        type="text"
        name="location"
        value={formData.location}
        placeholder="Location Pin"
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
};

export default RestaurantDetails;
