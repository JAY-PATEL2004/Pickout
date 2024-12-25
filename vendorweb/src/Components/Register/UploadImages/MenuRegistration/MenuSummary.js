import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const MenuSummary = ({ onEdit, onDone }) => {
  const { state } = useLocation(); // Extract state from location
  const menuItems = state?.menuItems || {}; // Access the menuItems passed through state
  const [isEditing, setIsEditing] = useState(false);
  if (isEditing) {
    console.log("Editing...");
  }
  const handleEditClick = () => {
    setIsEditing(true);
    if (onEdit) onEdit();
  };

  const handleDoneClick = () => {
    setIsEditing(false);
    if (onDone) onDone();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
 
      <div className="bg-green-600 text-white text-center py-3 rounded-md shadow-md mb-6">
        <h1 className="text-2xl font-bold">MENU CARD</h1>
      </div>

   
      {Object.keys(menuItems).length > 0 ? (
        Object.entries(menuItems).map(([dish, details]) => (
          <div key={dish} className="mb-4">
            {/* Category Title */}
            <h2 className="text-gray-400 font-bold mb-2">{details.category || 'Uncategorized'}</h2>

            {/* Dish Item */}
            <div className="flex items-start justify-between bg-white p-3 rounded-md shadow-md">
              {/* Dish Image */}
              <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 mr-4">
                <img
                  src={details.image || 'https://via.placeholder.com/64'}
                  alt={dish}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Dish Details */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800">{dish}</h3>
                <p className="text-sm text-gray-500 mb-2">{details.description || 'No description available'}</p>

                {/* Variants Section */}
                {details.variants?.length > 0 && (
                  <div className="text-sm text-gray-600">
                    {details.variants.map((variant, index) => (
                      <div key={index}>
                        <span className="font-medium">{variant.name}:</span> ₹{variant.price || 'N/A'}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No dishes added.</p>
      )}

      {/* Edit and Done Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={handleEditClick}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={handleDoneClick}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default MenuSummary;
