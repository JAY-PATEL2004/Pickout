import React, { useState } from "react";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity); // State to manage the quantity

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const totalPrice = item.price * quantity;

  return (
    <div className="cart-item flex items-center justify-between bg-green-100 p-4 rounded-lg mb-4 shadow-lg relative">
      {/* Cross Button for Deleting the Product */}
      <button
        className="absolute top-0 right-2 text-xl text-red-500"
        onClick={() => alert("Remove Item")}
      >
        &times;
      </button>

      {/* Quantity Section */}
      <div className="flex flex-col items-center justify-start absolute top-16 right-1 z-10">
        {/* Quantity Buttons */}
        <div className="flex items-center space-x-1">
          <button
            onClick={decreaseQuantity}
            className="bg-green-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-3xl focus:outline-none"
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="bg-green-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-3xl focus:outline-none"
          >
            +
          </button>
        </div>
      </div>

      {/* Product Image and Name Section */}
      <div className="flex items-center ">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-md mr-4"
        />
        <span className="font-semibold text-lg">{item.name}</span>
      </div>

      {/* Price Section */}
      <div className="flex flex-col items-end ml-auto">
        <span className="text-green-700 font-bold mb-10">₹{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartItem;
