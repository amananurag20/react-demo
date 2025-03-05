import { useState } from "react";

const App = () => {
  let [count, setCount] = useState({
    data: 1000,
    name: "vikram",
    status: "single",
    gender: "male",
  });

  console.log("hiiii");

  const handleClick = (result) => {
    if (result == "increase") {
      // count.data = count.data + 1000; ye galat hai
      const newCount = { ...count, data: count.data + 1000 };

      setCount(newCount);
      console.log(count);
    } else {
      count.data = count.data - 1000;
      setCount(count);
    }
  };

  return (
    <div>
      <h1>{count.data}</h1>
      <h2>{count.name}</h2>
      <h2>{count.gender}</h2>

      <button
        onClick={() => {
          handleClick("increase");
        }}
      >
        increase count
      </button>
      <button
        onClick={() => {
          handleClick("decrease");
        }}
      >
        decrease count
      </button>

      {count > 5000 ? <h1> "hello dear how are you"</h1> : <p>"Go to hell"</p>}
    </div>
  );
};

export default App;
