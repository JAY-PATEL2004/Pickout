import React from "react";

const FavoriteFoods = () => {
  const foods = [
    { name: "Burger / Fries", price: "$25.00", image: "/burger.jpg" },
    { name: "Sandwiches", price: "$20.95", image: "/sandwich.jpg" },
  ];

  return (
    <div className="px-4 py-2">
      <h2 className="text-lg font-bold mb-2">Favorite Foods</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {foods.map((food, index) => (
          <div
            key={index}
            className="bg-white text-black p-2 rounded-lg shadow-lg w-40"
          >
            <img
              src={food.image} // Replace with your image path
              alt={food.name}
              className="w-full h-20 object-cover rounded-md"
            />
            <p className="text-sm mt-2">{food.name}</p>
            <p className="text-sm font-bold">{food.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteFoods;
