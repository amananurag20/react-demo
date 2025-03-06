import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(1000);
  const [data, setData] = useState([]);

  const apiCall = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setData(json.slice(0, 10));
  };
  useEffect(() => {
    apiCall();
  }, []);
  console.log(data);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "space-around",
      }}
    >
      {data.map((item) => (
        <div
          style={{
            width: "300px",
            background: "cyan",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>{item.title}</h2>
          <img src={item.image} alt="dasdsa" style={{ width: "200px" }}></img>
          <h3>Price rs {item.price}</h3>
          <button
            style={{
              padding: "20px",
              background: "red",
              fontWeight: "bold",
              color: "white",
              borderRadius: "5px",
            }}
            onClick={() => alert("Item added to cart")}
          >
            Add to Cart
          </button>
        </div>
      ))}
      <button onClick={() => setCount(count + 1000)}>Increase</button>
    </div>
  );
};

export default App;
