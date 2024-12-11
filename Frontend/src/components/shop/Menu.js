import React from "react";

const Menu = () => {
  const menuItems = ["Burgers", "Snacks", "Drinks", "Packages"];

  return (
    <div className="flex justify-center gap-4 mt-6">
        <h2 className="text-green-500 text-2xl font-bold mb-4">Menue</h2>
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Menu;
