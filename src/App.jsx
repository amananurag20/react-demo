import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import Product from "./components/Product/Product";
const App = () => {
  const [count, setCount] = useState(1000); //[1000,fxn]

  const handleClick = () => {
    setCount(count + 1000);
  };

  return (
    <div>
      <h1>value of count is {count}</h1>
      <button onClick={handleClick}>increase count</button>
    </div>
  );
};

export default App;
