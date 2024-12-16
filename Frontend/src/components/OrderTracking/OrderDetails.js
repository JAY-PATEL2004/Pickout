import React from "react";

const OrderDetails = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-4 mx-4">
      <h3 className="text-green-600 font-bold text-lg text-center">Order Detail</h3>

      <div className="mt-4">
        <p className="text-gray-500 text-sm">
          <span className="font-semibold text-gray-600">Your order from:</span>{" "}
          Bake Shop
        </p>
        <p className="text-gray-500 text-sm">
          <span className="font-semibold text-gray-600">Your order no:</span>{" "}
          CI8ZU-432
        </p>
        <p className="text-gray-500 text-sm">
          <span className="font-semibold text-gray-600">Delivery Address:</span>{" "}
          Pakistan PK Islamabad Islamabad E-8 P28H+95P Islamabad Capital
          Territory
        </p>
      </div>

      <div className="border-t border-gray-300 mt-4 pt-4">
        <div className="flex justify-between text-sm">
          <p className="text-gray-700 font-semibold">1x Red Velvet</p>
          <p className="text-gray-700 font-semibold">$189</p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-4 pt-4 text-sm text-gray-600">
        <div className="flex justify-between">
          <p>SubTotal</p>
          <p>$189.00</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Tip</p>
          <p>$104.47</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Tax Charges</p>
          <p>$1044.75</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Delivery Charges</p>
          <p>$3990.00</p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-4 pt-4">
        <div className="flex justify-between text-lg font-bold text-gray-800">
          <p>Total</p>
          <p>$5328.22</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
