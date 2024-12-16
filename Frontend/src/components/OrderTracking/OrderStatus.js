import React, { useState, useEffect, useCallback } from "react";
import { FaBox, FaCheckCircle, FaTruck, FaHome } from "react-icons/fa"; // Icons for steps

const OrderStatus = ({ onStepChange }) => {
  const [currentStep, setCurrentStep] = useState(1); // Track current step
  const [timeLeft, setTimeLeft] = useState(30); // Time-to-Live for each step (in seconds)

  const steps = [
    { id: 1, name: "Order Placed", icon: <FaBox /> },
    { id: 2, name: "Accepted", icon: <FaCheckCircle /> },
    { id: 3, name: "Prepared", icon: <FaTruck /> },
    { id: 4, name: "Picked", icon: <FaHome /> },
  ];

  // Memoized handleStepChange to prevent re-creation on every render
  const handleStepChange = useCallback(() => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
      setTimeLeft(30); // Reset TTL for the next step
    }
  }, [currentStep, steps.length]);

  // Notify parent component of the step change
  useEffect(() => {
    onStepChange(currentStep);
  }, [currentStep, onStepChange]);

  // Handle the time countdown
  useEffect(() => {
    if (timeLeft > 0 && currentStep < steps.length) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && currentStep < steps.length) {
      handleStepChange(); // Automatically move to the next step
    }
  }, [timeLeft, currentStep, steps.length, handleStepChange]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mx-4">
      <div className="text-center text-lg font-semibold text-gray-800 mb-4">
        {currentStep < steps.length
          ? `Your order is in progress`
          : `Order Picked By ${localStorage.getItem("name") || "Delivery Partner"}`}
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-between">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex-1 h-1 ${
                index < currentStep ? "bg-green-500" : "bg-gray-300"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>
        <div className="flex justify-between relative z-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex  items-center justify-center ${
                currentStep >= step.id ? "text-green-500" : "text-gray-400"
              }`}
            >
              <div
                className={`flex items-center justify-center p-2 w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300"
                }`}
              >
                {step.icon}
              </div>
              <div className="mt-12 text-xs">{step.name}</div>
            </div>
          ))}
        </div>
      </div>

      {currentStep < steps.length && (
        <div className="mt-4 text-center text-sm text-gray-500">
          Time remaining for this step: <span className="font-bold">{timeLeft} seconds</span>
        </div>
      )}

      <div className="mt-4 text-center">
        {currentStep < steps.length ? (
          <button
            onClick={handleStepChange}
            className="px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            Next Step
          </button>
        ) : (
          <div className="text-green-500 font-bold">
            The journey is complete! Enjoy your meal 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderStatus;
