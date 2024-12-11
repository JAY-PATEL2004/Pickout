import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item flex items-center justify-between bg-green-100 p-2 rounded-lg mb-2">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-md mr-4"
        />
        <span className="font-semibold">{item.name}</span>
      </div>
      <div className="flex items-center">
        <span className="text-green-700 font-bold mr-4">₹{item.price}</span>
        <button className="bg-green-500 text-white px-2 py-1 rounded-md">
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
