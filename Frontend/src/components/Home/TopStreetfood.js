import React from "react";
import { useNavigate } from "react-router-dom";

const TopStreetShops = () => {
  const menus = [
    { name: "Menu 01 - $20", image: "/menu1.jpg", description: "A delicious combination of street food with flavors from around the world." },
    { name: "Menu 02 - $17", image: "/menu2.jpg", description: "Street food favorites, including burgers, fries, and shakes." },
    { name: "Menu 03 - $18", image: "/menu3.jpg", description: "A savory blend of local spices and grilled meats." },
  ];

  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    navigate("/shop", { state: menu });
  };

  return (
    <div className="px-4 py-2">
      <h2 className="text-lg font-bold mb-2">TOP STREET SHOP'S</h2>
      <div className="grid grid-cols-2 gap-4">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="bg-white text-black p-2 rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleMenuClick(menu)}
          >
            <img
              src={menu.image}
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
