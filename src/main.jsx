import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./store/appStore.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import Parent from "./components/Parent.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>

  <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/data" element={<Parent />} />
      </Routes>
    </BrowserRouter>
  </Provider>

  // </StrictMode>,
);
