import React from "react";
import ShopImage from "./ShopImage";
import MostSoldProducts from "./MostSoldProducts";
import Menu from "./Menu";
import ProductList from "./ProductList";

const ShopPage = () => {
  return (
    <div>
      <header className=" p-10">
        <h1 className="text-black text-2xl font-bold">Welcome to Our Shop</h1>
      </header>
      {/* Add space below the header */}
      <ShopImage />
      <Menu />
      <MostSoldProducts />
      <ProductList />
    </div>
  );
};

export default ShopPage;
