import React from "react";
import demoimage from "../Home/images/Burger.png"
const MostSoldProducts = () => {
  const products = [
    {
      name: "Classic Burger",
      image: demoimage, // Ensure paths are correct
    },
    {
      name: "Beef Cheese Burger",
      image: demoimage,
    },
    {
      name: "Bacon BBQ Burger",
      image: demoimage,
    },
    {
      name: "Double Stack Burger",
      image: demoimage,
    },
  ];

  return (
    <div className="my-8">
      <h2 className="text-green-500 text-2xl font-bold mb-4">Most Sold Products</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 rounded-full object-cover mb-3"
            />
            <p className="text-center text-lg font-semibold">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostSoldProducts;
