import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULpYuPcas5DFbICFFgawoEEdeOPuUm9lI2g&s"></img>
      <Outlet />
    </div>
  );
};

export default Product;
