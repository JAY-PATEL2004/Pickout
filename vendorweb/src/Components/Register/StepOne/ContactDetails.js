import React from 'react';

const ContactDetails = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Contact Number</h3>
      <input
        type="text"
        placeholder="Contact Number"
        value={formData.contactNumber}
        onChange={(e) => handleInputChange('contactNumber', e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default ContactDetails;
