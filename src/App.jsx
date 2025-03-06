import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(1000);
  const [data, setData] = useState([]);

  const apiCall = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setData(json);
  };
  useEffect(() => {
    apiCall();
  }, []);
  console.log(data);

  return (
    <div>
      <h1>count- {count}</h1>
      {data[0]?.price}
      <button onClick={() => setCount(count + 1000)}>Increase</button>
    </div>
  );
};

export default App;
