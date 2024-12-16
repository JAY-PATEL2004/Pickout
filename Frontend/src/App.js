import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/Home/About/About";
import LoginPage from "./components/Home/login/LoginPage";
import SignupPage from "./components/Home/login/SignupPage";
import ShopPage from "./components/shop/ShopPage";
import TopStreetShops from "./components/Home/TopStreetfood";
import CartPage from "./components/cart/cartpage"; // Corrected import for CartPage
import Sidebar from "./components/Home/Slidebar/Sidebar";
import  Ordertraking from "./components/OrderTracking/OrderTracking"
const App = () => {
  return (
    <Router>
      {/* Use Layout for consistent styling across pages */}
      <Layout>
        <Routes>
          {/* Define all application routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/topstreetshops" element={<TopStreetShops />} />
          <Route path="/cart" element={<CartPage />} /> {/* Corrected route */}
          <Route path ="/sidebar" element={<Sidebar/>}/>
          <Route path ="/SignupPage" element={<SignupPage/>}/>
          <Route path="/Ordertaracking" element={<Ordertraking/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
