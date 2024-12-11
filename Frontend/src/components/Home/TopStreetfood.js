import React from "react";

const TopStreetShops = () => {
  const menus = [
    { name: "Menu 01 - $20", image: "/menu1.jpg" },
    { name: "Menu 02 - $17", image: "/menu2.jpg" },
    { name: "Menu 03 - $18", image: "/menu3.jpg" },
  ];

  return (
    <div className="px-4 py-2">
      <h2 className="text-lg font-bold mb-2">TOP STREET SHOP'S</h2>
      <div className="grid grid-cols-2 gap-4">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="bg-white text-black p-2 rounded-lg shadow-lg"
          >
            <img
              src={menu.image} // Replace with your image path
              alt={menu.name}
              className="w-full h-24 object-cover rounded-md"
            />
            <p className="text-sm mt-2">{menu.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStreetShops;
