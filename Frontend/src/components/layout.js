import React from "react";
import Header from "./Home/LogoHeader"; // Replace with your actual header component
import Footer from "./Home/FooterNavigation"; // Replace with your actual footer component

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
