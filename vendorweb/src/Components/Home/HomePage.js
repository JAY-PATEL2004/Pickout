import React from 'react';
import TabComponent from './TabComponent';
import OrderDetails from './OrderDetails';
import BottomNav from './BottomNav';
import shopimage from "../assets/imageshop.png";
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Shop Image */}
      <div
        className="h-40 bg-cover bg-center "
        style={{ backgroundImage: `url(${shopimage})` }}
      ></div>

      {/* TabComponent with white background */}
   

      {/* Green background after TabComponent */}
      <div className="bg-green-300 flex-grow">
           <TabComponent />
        <Link to="/orderpage"><OrderDetails /></Link>
      </div>

      <BottomNav />
    </div>
  );
};

export default HomePage;
