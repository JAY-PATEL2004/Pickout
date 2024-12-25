// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPage from './Components/Orderpage/OrderPage';
import Homepage from "./Components/Home/HomePage";
import RegisterVendor from './Components/Register/RegisterVendor';
import MenuSummary from './Components/Register/UploadImages/MenuRegistration/MenuSummary';
import Login from './Components/login/login';
const App = () => {
  return (
    
    <Router>
      <Routes>
        
       <Route path="/" element={<Login/>} />
       <Route path='/home' element={<Homepage/>}/>
       <Route path="/Register" element={<RegisterVendor />} />
        <Route path="/orderpage" element={<OrderPage />} />
        <Route path="/MenuSummary" element={<MenuSummary/>}/>
      </Routes>
    </Router>
  );
};

export default App;
