import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="p-4 bg-red-600 flex justify-between text-white">
        <h1 className="font-bold">React Routing</h1>

        <div className="flex gap-4 font-semibold">
          <a href="/">Home</a>
          <a href="/product">Product</a>
          <Link to={"/mobile"}>Mobile</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
      <img src="https://codeconvey.com/wp-content/uploads/2019/05/Login-Page-with-Anime-Background.jpg"></img>
    </div>
  );
};

export default Login;
