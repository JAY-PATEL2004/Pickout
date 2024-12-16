import React, { useState } from "react";
import CartItem from "./Cartitem";
import Summary from "./Cartsummary";
import burger from "../Home/images/Burger.png"

const CartPage = () => {
  // Sample items in the cart
  const [cartItems] = useState([
    { id: 1, name: "Classic Burger", price: 100, image: burger },
    { id: 2, name: "Beef Cheese Burger", price: 100, image: burger },
    { id: 3, name: "Bacon BBQ Burger", price: 100, image: burger },
    { id: 4, name: "Double Stack Burger", price: 100, image: burger },
  ]);

  return (
    <div className="cart-page p-4 pt-16 bg-gray-100 min-h-screen">
      {/* Add padding-top (pt-16) to prevent overlap with fixed header */}
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {/* Cart Items */}
      <div className="cart-items mb-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Summary Section */}
      <Summary items={cartItems} />
    </div>
  );
};

export default CartPage;
