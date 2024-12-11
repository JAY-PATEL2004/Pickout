import React from "react";

const MostSoldProducts = () => {
  const products = [
    {
      name: "Classic Burger",
      image: "/images/classic-burger.jpg", // Ensure paths are correct
    },
    {
      name: "Beef Cheese Burger",
      image: "/images/beef-cheese-burger.jpg",
    },
    {
      name: "Bacon BBQ Burger",
      image: "/images/bacon-burger.jpg",
    },
    {
      name: "Double Stack Burger",
      image: "/images/double-stack.jpg",
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
