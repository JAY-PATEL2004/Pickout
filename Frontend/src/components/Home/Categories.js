import React from "react";
import burgerIcon from "./images/Burger.png"; // Replace with your image path
import sandwichIcon from "./images/Sandwich.png"; // Replace with your image path
import vadapavIcon from "./images/vada-pav.png"; // Replace with your image path
import dosaIcon from "./images/dosa.png"; // Replace with your image path
import Paratha from "./images/paratha.png"; // Replace with your image path
import jalebi from "./images/jalebi.png";
import chole from "./images/chole-bhature.png";
const Categories = () => {
  const categories = [
    { name: "All", logo: "" }, // Placeholder for "All" category (no logo)
    { name: "Burger", logo: burgerIcon }, // Use the Burger image
    { name: "Sandwich", logo: sandwichIcon }, // Use the Sandwich image
    { name: "Vada Pav", logo: vadapavIcon }, // Use the Vada Pav image
    { name: "Dosa", logo: dosaIcon }, // Use the Dosa image
    { name: "Jalebi", logo: jalebi }, // Placeholder for Jalebi (no logo)
    { name: "Chole Bhature", logo: chole }, // Placeholder for Chole Bhature (no logo)
    { name: "Paratha", logo: Paratha}, // Placeholder for Paratha (no logo)
  ];

  return (
    <div className="px-4 py-2">
      {/* Horizontal scrollable container */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-green-600 text-sm font-semibold text-white min-w-max"
          >
            {/* If the category has a logo, display it */}
            {category.logo && (
              <img
                src={category.logo}
                alt={category.name}
                className="h-5 w-5"
              />
            )}
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
