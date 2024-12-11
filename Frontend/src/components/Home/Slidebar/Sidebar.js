import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ closeSidebar }) => {
  // Placeholder image URL - replace this with dynamic data when integrating backend
  const profilePhotoUrl = "https://via.placeholder.com/100"; // Replace with actual profile image URL
  const customerName = "John Doe"; // Replace with actual customer name dynamically

  return (
    <div className="fixed top-0 left-0 h-full bg-white shadow-md w-72 z-50">
      {/* Close Button */}
      <button
        className="text-xl p-2 absolute top-4 left-4"
        onClick={closeSidebar}
      >
        &times;
      </button>

      {/* Profile Section */}
      <div className="p-6 mt-12 flex flex-col items-center">
        <img
          src={profilePhotoUrl}
          alt="Customer Profile"
          className="w-20 h-20 rounded-full border-2 border-green-600"
        />
        <h3 className="text-lg font-semibold mt-4">{customerName}</h3>
      </div>

      {/* Sidebar Navigation */}
      <div className="p-6">
        <h2 className="text-lg font-bold mb-4">Navigation</h2>
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="text-green-600 hover:text-green-800"
              onClick={closeSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/wallet"
              className="text-green-600 hover:text-green-800"
              onClick={closeSidebar}
            >
              My Wallet
            </Link>
          </li>
          <li>
            <Link
              to="/order-history"
              className="text-green-600 hover:text-green-800"
              onClick={closeSidebar}
            >
              Order History
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-green-600 hover:text-green-800"
              onClick={closeSidebar}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-green-600 hover:text-green-800"
              onClick={closeSidebar}
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-green-600 hover:text-green-800"
              onClick={closeSidebar}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
