import React, { useState } from "react";
import Sidebar from "./Slidebar/Sidebar"; // Ensure Sidebar component is correctly implemented
import Locatioicon from "./images/location icon.png"; // Location icon
import notificationicon from "./images/notification2.png"; // Notification icon
import carticon from "./images/carticon.png"; // Cart icon
import Searchicon from "./images/Searchicon.png"; // Search icon
import { Link } from "react-router-dom";

const LogoHeader = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false); // Fixed notification state

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleNotificationClick = () => {
    setNotificationOpen(!isNotificationOpen); // Toggle notification dropdown
  };

  return (
    <>
      {/* Header Component */}
      <header className="bg-green-500 text-black px-4 py-2 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="flex items-center justify-between">
          {/* Left Section - Sidebar Toggle and Location */}
          <div className="flex items-center space-x-3">
            {/* Hamburger Button */}
            <button
              className="text-2xl text-black focus:outline-none"
              onClick={toggleSidebar}
            >
              &#9776; {/* Hamburger icon */}
            </button>

            {/* Location */}
            <div className="flex items-center space-x-2">
              <img src={Locatioicon} alt="Location Icon" className="h-5 w-5" />
              <div>
                <p className="text-sm font-semibold">PN Swimming Pool, Sh...</p>
                <span className="text-xs">Current Location</span>
              </div>
            </div>
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <div className="relative">
              <button
                className="focus:outline-none"
                onClick={handleNotificationClick}
              >
                <img
                  src={notificationicon}
                  alt="Notification Icon"
                  className="h-6 w-6"
                />
              </button>
              {/* Notification Dropdown */}
              {isNotificationOpen && (
                <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md p-2 w-48">
                  <p className="text-sm text-black">No new notifications</p>
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <button className="relative">
              <Link to="/cart">
                <img src={carticon} alt="Cart Icon" className="h-6 w-6" />
              </Link>
              {/* Cart Item Count */}
              <span className="absolute top-0 right-0 bg-black text-xs text-white rounded-full px-1">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-2 relative">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="w-full px-10 py-2 rounded-full text-black text-sm focus:outline-none"
          />
          <img
            src={Searchicon}
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
      </header>

      {/* Sidebar Component */}
      {isSidebarVisible && <Sidebar closeSidebar={toggleSidebar} />}
    </>
  );
};

export default LogoHeader;
