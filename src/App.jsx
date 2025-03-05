import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(1000);
  const [data, setdata] = useState(5000);
  console.log("hi");

  useEffect(() => {
    console.log("use effect");
  }, [count, data]);
  return (
    <>
      <h1>
        hi app.jsx {count} {data}
      </h1>
      {console.log("after return")}
      <button onClick={() => setCount(count + 1000)}>Increase count</button>
      <button onClick={() => setdata(data + 1000)}>Increase data</button>
    </>
  );
};

export default App;
