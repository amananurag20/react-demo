import { useState } from "react";

const App = () => {
  let [count, setCount] = useState({ data: 1000 });

  console.log("hiiii");

  const handleClick = (result) => {
    if (result == "increase") {
      count.data = count.data + 1000;
      setCount(count);
      console.log(count);
    } else {
      count.data = count.data - 1000;
      setCount(count);
    }
  };

  return (
    <div>
      <h1>{count.data}</h1>

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
