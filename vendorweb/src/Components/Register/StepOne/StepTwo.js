import React from 'react';

const StepTwo = ({ formData, onChange }) => {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Convert file to Base64 string
        onChange('restaurantImage', reader.result); // Save Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Restaurant Type & Timings</h2>
      <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium mb-2">Type & Timings</h3>
        <p className="text-sm text-gray-500 mb-4">
          Add an image of your restaurant, provide the payment URL, and set operational hours.
        </p>

        <div className="space-y-4">
          {/* Restaurant Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Restaurant Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleFileChange}
            />
          </div>

          {/* Payment URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment URL
            </label>
            <input
              type="text"
              placeholder="Enter Payment URL"
              value={formData.paymentUrl || ''}
              onChange={(e) => onChange('paymentUrl', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Operational Hours */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Opening Hours
            </label>
            <input
              type="text"
              placeholder="Opening Hours (e.g., 9:00 AM)"
              value={formData.openingHours || ''}
              onChange={(e) => onChange('openingHours', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Closing Hours
            </label>
            <input
              type="text"
              placeholder="Closing Hours (e.g., 10:00 PM)"
              value={formData.closingHours || ''}
              onChange={(e) => onChange('closingHours', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
