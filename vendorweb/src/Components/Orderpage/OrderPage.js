// src/components/OrderPage.js
import React, { useState, useEffect } from 'react';
import OrderStatus from './OrderStatus';
import OrderButtons from './OrderButtons';
import OrderDetails from './Orderdetails';
import StatusTab from './StatusTab';

const OrderPage = () => {
  const [timeLeft, setTimeLeft] = useState(120); // Time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white h-screen flex flex-col">
      <StatusTab />

      <div className="flex-grow p-6 space-y-6">
        <OrderStatus timeLeft={timeLeft} />
        <OrderButtons />
        <OrderDetails />
      </div>
    </div>
  );
};

export default OrderPage;
