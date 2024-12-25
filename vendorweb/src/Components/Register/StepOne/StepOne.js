import React, { useState } from 'react';
import RestaurantDetails from './RestaurantDetails';

import OwnerDetails from './OwnerDetails';
import StepTwo from './StepTwo';

const StepOne = () => {
  const [activeTab, setActiveTab] = useState('restaurant');
  const [formData, setFormData] = useState({
    restaurantName: '',
    address: '',
    location: '',
    ownerName: '',
    ownerEmail: '',
    ownerMobile: '',
    openingHours: '',
    closingHours: '',
    password: '',
    paymentUrl: '',
    restaurantImage: null,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateFields = () => {
    const requiredFields = {
      restaurant: ['restaurantName', 'address', 'location'],

      owner: ['ownerName', 'ownerEmail', 'ownerMobile', 'password'], // Updated ownerPhone to ownerMobile
      stepTwo: ['openingHours', 'closingHours', 'paymentUrl'],
    };
  
    const emptyFields = requiredFields[activeTab].filter(
      (field) => !formData[field] || formData[field].trim() === ''
    );
  
    if (emptyFields.length > 0) {
      alert(`Please fill in all fields: ${emptyFields.join(', ')}`);
      return false;
    }
    return true;
  };
  

  const handleNext = () => {
    if (validateFields()) {
      const tabOrder = ['restaurant', 'owner', 'stepTwo'];
      const currentIndex = tabOrder.indexOf(activeTab);
      if (currentIndex < tabOrder.length - 1) {
        setActiveTab(tabOrder[currentIndex + 1]);
      }
    }
  };

  const handleSubmit = async () => {
    console.log('Form Data Before Submission:', formData);
    if (validateFields()) {
      // Map formData to the backend expected structure
      const payload = {
        restaurantname: formData.restaurantName,
        address: formData.address,
        location: formData.location,
        phone_no: formData.ownerMobile, // Match 'ownerMobile' to 'phone_no'
        owner: formData.ownerName, // Match 'ownerName' to 'owner'
        password: formData.password,
        no_of_cook: 5, // Example default value, update based on user input if needed
        rating: 4, // Example default value, update based on user input if needed
        image_url: formData.restaurantImage, // Assuming image URL is a string or you handle upload separately
        payment_url: formData.paymentUrl,
        ownerEmail: formData.ownerEmail,
        openingHours: formData.openingHours,
        closingHours: formData.closingHours,
      };
  
      try {
        const response = await fetch('http://localhost:5000/VRegistration/vendorinformation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
  
        if (response.ok) {
          alert('Restaurant registered successfully!');
          setFormData({
            restaurantName: '',
            address: '',
            location: '',
            ownerName: '',
            ownerEmail: '',
            ownerMobile: '',
            openingHours: '',
            closingHours: '',
            password: '',
            paymentUrl: '',
            restaurantImage: null,
          });
          setActiveTab('restaurant');
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message || 'Unable to register restaurant'}`);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An unexpected error occurred. Please try again.');
      }
    }
  };
  
  const renderTab = () => {
    switch (activeTab) {
      case 'restaurant':
        return <RestaurantDetails formData={formData} onChange={handleChange} />;
     
      case 'owner':
        // Corrected this line to match `OwnerDetails` expected prop
        return <OwnerDetails formData={formData} handleInputChange={handleChange} />;
      case 'stepTwo':
        return <StepTwo formData={formData} onChange={handleChange} />;
      default:
        return <RestaurantDetails formData={formData} onChange={handleChange} />;
    }
  };
  

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Restaurant Registration</h2>
      <div className="flex space-x-4 border-b mb-4">
        {['restaurant', 'contact', 'owner', 'stepTwo'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? 'border-b-2 border-green-500 text-green-500'
                : 'text-gray-500'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
          </button>
        ))}
      </div>
      {renderTab()}
      <div className="flex justify-end mt-4">
        {activeTab !== 'stepTwo' && (
          <button
            onClick={handleNext}
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        )}
        {activeTab === 'stepTwo' && (
          <button
            onClick={handleSubmit}
            className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default StepOne;
