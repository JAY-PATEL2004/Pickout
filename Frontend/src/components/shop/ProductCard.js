import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4">
      {/* Check if the image is available */}
      {product.image ? (
        <img
          src={product.image}
          alt=""  // Add an empty alt attribute for decorative images
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
      ) : (
        <div className="w-16 h-16 bg-gray-300 text-center rounded-full flex items-center justify-center mr-4">
          <span className="text-xs text-gray-600">No image</span>
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <span className="text-green-500 font-bold">${product.price}</span>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">
        Add
      </button>
    </div>
  );
};

export default ProductCard;
