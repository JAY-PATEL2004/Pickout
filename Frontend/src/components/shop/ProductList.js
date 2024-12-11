import React from "react";
import ProductCard from "./ProductCard";
import burger from "../Home/images/Burger.png";
const ProductList = () => {
  const products = [
    {
      name: "Classic Burger",
      description: "Delicious beef burger",
      price: "5.99",
      image: burger,  // Ensure these image paths are correct
    },
    {
      name: "Beef Cheese Burger",
      description: "Juicy burger with cheese",
      price: "6.99",
      image: burger,
    },
    {
      name: "Bacon BBQ Burger",
      description: "Smoky BBQ burger",
      price: "7.99",
      image: burger,
    },
    {
      name: "Double Stack Burger",
      description: "Double the meat, double the fun",
      price: "8.99",
      image: burger,
    },
  ];

  return (
    <div className="p-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
