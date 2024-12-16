// src/components/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime); // Time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return <span className="font-semibold text-xl">{formatTime(timeLeft)}</span>;
};

export default Timer;
