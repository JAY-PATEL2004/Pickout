// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPage from './Components/Orderpage/OrderPage';
import Homepage from "./Components/Home/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/orderpage" element={<OrderPage />} />
      </Routes>
    </Router>
  );
};

export default App;
