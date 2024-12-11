import React, { useState } from "react";

const Summary = ({ items }) => {
  const [delivery, setDelivery] = useState(false);

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const deliveryCharge = 50;
  const finalPrice = delivery ? totalPrice + deliveryCharge : totalPrice;

  return (
    <div className="summary bg-green-200 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">List of Food</h2>
      <ul className="mb-4">
        {items.map((item, index) => (
          <li key={index} className="text-sm">
            {index + 1}. {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mb-2">
        <label>
          <input
            type="radio"
            checked={!delivery}
            onChange={() => setDelivery(false)}
            className="mr-2"
          />
          Takeaway
        </label>
        <span>₹{totalPrice}</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <label>
          <input
            type="radio"
            checked={delivery}
            onChange={() => setDelivery(true)}
            className="mr-2"
          />
          Delivery
        </label>
        <span>₹{finalPrice}</span>
      </div>
      <div className="flex justify-between items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Pay
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
          Add Address
        </button>
      </div>
    </div>
  );
};

export default Summary;
