import React, { lazy, Suspense, useState } from "react";

import Home from "./components/Home";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Mobile from "./components/Mobile";
import Navbar from "./components/Navbar";
import User from "./components/User";
import ProtectedRoute from "./components/ProtectedRoute";
import UserContext from "./context/UserContext";

const App = () => {
  const isAuthenticated = false;

  const [color, setColor] = useState("red");

  //
  return (
    <>
      <UserContext.Provider value={{ color, setColor }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/product" element={<Product />}>
              <Route path="/product/user" element={<User />} />
            </Route>
            <Route path="/login" element={<Login />} />

            <Route path="/Home" element={<Home />} />

            <Route path="/" element={<ProtectedRoute />}>
              <Route path={"/mobile"} element={<Mobile />} />
              <Route path="/cat" element={<h1 className="text-7xl">hiii</h1>} />
            </Route>

            <Route path="*" element={<h1>Page not found 404 </h1>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};

export default App;
