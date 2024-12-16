import React from "react";
import Searchicon from "./images/Searchicon.png";
import usericon from "./images/usericon.png";
import Homeicon from "./images/homeicon.png";
import carticon from "./images/carticon.png";
import { Link } from "react-router-dom";

const FooterNavigation = () => {
  const navItems = [
    { icon: <img src={Searchicon} alt="Search" className="w-6 h-6" />, label: "Search" },
    { icon: <Link to="/">
      <img src={Homeicon} alt="Home Icon" className="h-6 w-6" />
    </Link>, label: "Home" },
   { icon: <Link to="/cart">
    <img src={carticon} alt="Cart Icon" className="h-6 w-6" />
  </Link>, label: "Cart" },
    { icon:  <Link to="/sidebar">
      <img src={usericon} alt="user Icon" className="h-6 w-6" />
    </Link>, label: "User" },
  ];

  return (
    <footer className="bg-green-600 py-2 mt-auto flex justify-around items-center">
      {navItems.map((nav, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="mb-1">{nav.icon}</div> {/* Display the icon */}
          <span className="text-sm text-white">{nav.label}</span> {/* Display the label */}
        </div>
      ))}
    </footer>
  );
};
export default FooterNavigation;
