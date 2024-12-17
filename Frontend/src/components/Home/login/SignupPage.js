import React, { useState } from "react";
import companyLogo from "../images/orders.png"; // Update the path to your logo
import axios from 'axios';
import { useNavigate } from 'react-router';

const SignupPage = () => {
  // State to manage password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone_no: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const navigate= useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password!==formData.confirmPassword) {
      setErrorMessage("Passwords didn't match");
      return;
    }

    // Combine domains into a single string (optional)
    // const combinedDomains = domains.filter(Boolean).join(', ');

    // const submissionData = { ...formData};

    console.log(formData);

    try {
      const response = await axios.post('http://localhost:5000/auth/register', {
        name: formData.name,  // Make sure the 'id' is defined here
        email: formData.email,
        phone_no: formData.phone_no,
        password: formData.password,
        address: formData.address
      });

      // console.log(response);  // Handle the API response       // Return or set the data as needed
      console.log(response.data.id);  // Handle the API response       // Return or set the data as needed
      alert('Registration succesfull\nRegistration id : '+response.data.id);
      navigate('/login');
    } catch (error) {
      alert('Error registering :', error);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        {/* Header Section */}
        <div className="bg-green-500 px-6 py-10 flex items-center justify-between">
          {/* <button className="text-white text-2xl font-bold">←</button> */}
          <h1 className="text-white text-2xl font-bold">CREATE YOUR ACCOUNT</h1>
          {/* <button className="text-white text-2xl font-bold">☰</button> */}
        </div>

        {/* Logo Section */}
        <div className="flex justify-center my-4">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-50 h-50 object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="px-6 pb-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="block p-3 w-full border border-gray-300 rounded bg-gray-50 placeholder-gray-400"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="block p-3 w-full border border-gray-300 rounded bg-gray-50 placeholder-gray-400"
              onChange={handleInputChange}
              value={formData.name}
              required
            />
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Phone no."
              name="phone_no"
              className="block p-3 w-full border border-gray-300 rounded bg-gray-50 placeholder-gray-400"
              onChange={handleInputChange}
              value={formData.phone_no}
              required
            />
            <input
              type="text"
              placeholder="Permanent Address"
              name="address"
              className="block p-3 w-full border border-gray-300 rounded bg-gray-50 placeholder-gray-400"
              onChange={handleInputChange}
              value={formData.address}
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="block p-3 w-full border border-gray-300 rounded bg-gray-50 placeholder-gray-400"
                onChange={handleInputChange}
                value={formData.password}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "👁️" : "🙈"}
              </button>
            </div>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Repeat Password"
                name="confirmPassword"
                className="block p-3 w-full border border-gray-300 rounded bg-gray-50 placeholder-gray-400"
                onChange={handleInputChange}
                value={formData.confirmPassword}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                onClick={toggleConfirmPasswordVisibility}
              >
                {confirmPasswordVisible ? "👁️" : "🙈"}
              </button>
            </div>
            <button type="submit" className="bg-green-500 text-white p-3 w-full rounded font-semibold hover:bg-green-600">
              Create Account
            </button>
          </form>
          {errorMessage && <p className="text-red-500 mt-3">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
