
import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./store/cartSlice";


const App = () => {
  const isAuthenticated = false;

  const [color, setColor] = useState("red");


  const cartItems = useSelector((store) => store.cart.items);
  console.log({ cartItems });
  const dispatch = useDispatch();

  useEffect(() => {
    const apiCall = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setData(json);
      setFilterData(json);
    };
    apiCall();
  }, []);


             

  function handleClick(item) {
    dispatch(addItem(item));
  }
  return (
    <div className="app">
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="Search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button onClick={handleSearch}>Search</button>
        </form>
        Cart {cartItems.length}
      </div>
      <div className="products-container">
        {filterData.map((item) => (
          <div className="product-card" key={item.id}>
            <h2 className="product-title">{item.title}</h2>
            <img className="product-image" src={item.image} alt={item.title} />
            <h3 className="product-price">₹{item.price}</h3>
            <button
              className="add-to-cart-button"
              onClick={() => handleClick(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button
        className="increase-button"
        onClick={() => setCount(count + 1000)}
      >
        Increase
      </button>
    </div>

  );
};

export default App;
