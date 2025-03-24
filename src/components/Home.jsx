import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  const [count, setCount] = useState(1000);
  const [max, setMax] = useState(100000000);

  let item = ["orange", "shirts", "perfume", "shoes", "watch"];

  function naturalSum() {
    let sum = 0;
    for (let i = 0; i < max; i++) {
      sum = sum + i;
    }
    return sum;
  }

  let newNumber = useMemo(() => {
    console.log("hi");
    return naturalSum();
  }, [max]);
  console.log("Home run code");

  return (
    <div>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/040/707/474/small_2x/ai-generated-beautiful-home-exterior-in-evening-with-glowing-interior-lights-and-landscaping-photo.jpg" />

      <h1 className="text-5xl font-bold">
        {count} -{newNumber}
      </h1>
      <button
        className="bg-red-600 p-4 text-2xl text-white"
        onClick={() => setCount(count + 1000)}
      >
        Increase counter
      </button>
      {/* <Header data={sum} /> */}
    </div>
  );
};

export default Home;
