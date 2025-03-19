import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
      <img src="https://static.vecteezy.com/system/resources/thumbnails/040/707/474/small_2x/ai-generated-beautiful-home-exterior-in-evening-with-glowing-interior-lights-and-landscaping-photo.jpg" />
    </div>
  );
};

export default Home;
