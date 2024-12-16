import React, { useState } from "react";
import companyLogo from "../images/orders.png"; // Update the path to your logo

const SignupPage = () => {
  // State to manage password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

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
          <button className="text-white text-2xl font-bold">←</button>
          <h1 className="text-white text-2xl font-bold">CREATE YOUR ACCOUNT</h1>
          <button className="text-white text-2xl font-bold">☰</button>
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
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="block p-3 w-full border border-gray-300 rounded bg-gray-50 placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="block p-3 w-full border border-gray-300 rounded bg-gray-50 placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Permanent Address"
              className="block p-3 w-full border border-gray-300 rounded bg-gray-50 placeholder-gray-400"
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="block p-3 w-full border border-gray-300 rounded bg-gray-50 placeholder-gray-400"
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
                className="block p-3 w-full border border-gray-300 rounded bg-gray-50 placeholder-gray-400"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                onClick={toggleConfirmPasswordVisibility}
              >
                {confirmPasswordVisible ? "👁️" : "🙈"}
              </button>
            </div>
            <button className="bg-green-500 text-white p-3 w-full rounded font-semibold hover:bg-green-600">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
