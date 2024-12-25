import React from 'react';

const OwnerDetails = ({ formData = {}, handleInputChange = () => {} }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Owner Details</h3>
      <input
        type="text"
        placeholder="Owner Full Name"
        value={formData.ownerName || ''}
        onChange={(e) => handleInputChange('ownerName', e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <input
        type="email"
        placeholder="Owner Email Address"
        value={formData.ownerEmail || ''}
        onChange={(e) => handleInputChange('ownerEmail', e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        placeholder="Owner Mobile Number"
        value={formData.ownerMobile || ''}
        onChange={(e) => handleInputChange('ownerMobile', e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password || ''}
        onChange={(e) => handleInputChange('password', e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default OwnerDetails;
