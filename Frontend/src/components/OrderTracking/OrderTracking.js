import React, { useState } from "react";
import MapSection from "./MapSection";
import OrderStatus from "./OrderStatus";
import OrderDetails from "./OrderDetails";
import OrderStatusTab from "./OrderStatusTab";

const OrderTracking = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow-md p-10 text-center font-semibold text-gray-800">
        Order Tracking
      </header>

      <main className="flex-grow overflow-y-auto p-6 space-y-6">
        <MapSection />
        <OrderStatusTab currentStep={currentStep} />
        <OrderStatus onStepChange={setCurrentStep} />
        <OrderDetails />
      </main>

      <footer className="bg-white shadow-md p-4 text-center text-gray-500 text-sm">
        &copy; 2024 Your Company Name. All Rights Reserved.
      </footer>
    </div>
  );
};

export default OrderTracking;
