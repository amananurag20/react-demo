import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { color, setColor } = useContext(UserContext);
  return (
    <div className="p-4 bg-red-600 flex justify-between text-white">
      <h1 className="font-bold">React Routing</h1>
      {color}

      <div className="flex gap-4 font-semibold">
        <Link to={"/Home"}>Home</Link>
        <Link to={"/product"}>Product</Link>
        <Link to={"/mobile"}>Mobile</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
