import React from "react";
import ShopRatings from "./ShopRatings";
import ShopImage from "./ShopImage";
import MostSoldProducts from "./MostSoldProducts";
import Menu from "./Menu";
import ProductList from "./ProductList";

const MiddleSection = () => {
  return (
    <div className="p-4">
      <ShopRatings />
      <ShopImage />
      <Menu />
      <ProductList />
      <MostSoldProducts />
    </div>
  );
};

export default MiddleSection;
