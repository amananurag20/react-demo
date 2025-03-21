import React from "react";

import Home from "./components/Home";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Mobile from "./components/Mobile";
import Navbar from "./components/Navbar";
import User from "./components/User";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />}>
            <Route path="/product/user" element={<User />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<Mobile />} />
          <Route path="/cat" element={<h1 className="text-7xl">hiii</h1>} />
          <Route path="*" element={<h1>Page not found 404 </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
