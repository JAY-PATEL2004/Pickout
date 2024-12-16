import React from "react";

const OrderStatusTab = ({ currentStep }) => {
  const stepMessages = {
    1: { status: "Order Placed", message: "Waiting for restaurant to accept your order" },
    2: { status: "Accepted", message: "Restaurant has accepted your order" },
    3: { status: "Prepared", message: "Your order is being prepared" },
    4: { status: "Picked", message: "Your order has been picked up" },
  };

  const { status, message } = stepMessages[currentStep] || {
    status: "Pending",
    message: "Waiting for restaurant to accept",
  };

  return (
    <div className="bg-black text-white p-4 rounded-md shadow-lg flex items-center space-x-4">
      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-black font-semibold">
        {currentStep < 4 ? (
          <div className="animate-spin w-6 h-6 border-4 border-t-green-500 border-gray-300 rounded-full"></div>
        ) : (
          <span>{status[0].toUpperCase()}</span>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold capitalize">
          Your order is {status}
        </h3>
        <p className="text-sm font-light">{message}</p>
      </div>
    </div>
  );
};

export default OrderStatusTab;
