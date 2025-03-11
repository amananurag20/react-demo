import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(1000);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setData(json);
      setFilterData(json);
    };
    apiCall();
  }, []);

  console.log(data);

  function handleSearch() {
    const filterItem = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(filterItem);
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
      </div>
      <div className="products-container">
        {filterData.map((item) => (
          <div className="product-card" key={item.id}>
            <h2 className="product-title">{item.title}</h2>
            <img className="product-image" src={item.image} alt={item.title} />
            <h3 className="product-price">₹{item.price}</h3>
            <button
              className="add-to-cart-button"
              onClick={() => alert("Item added to cart")}
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
