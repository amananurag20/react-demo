import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { data, Link } from "react-router-dom";
import Header from "./Header";
import UserContext from "../context/UserContext";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const [count, setCount] = useState(1000);

  let data = 1000; //5000
  console.log(data);
  const inputRef = useRef(); //{current:undefined}

  const { color, setColor } = useContext(UserContext);

  const { theme, setTheme } = useContext(ThemeContext);

  const dataRef = useRef(1000); // {current:1000}
  console.log(inputRef);

  function handleFocus() {
    inputRef.current.focus();
  }

  function handleSubmit() {
    console.log(inputRef.current.value);
  }

  function handleRef() {
    dataRef.current = dataRef.current + 1000;
    console.log(dataRef);
  }

  function handleData() {
    data = data + 1000;
    console.log(data);
  }

  return (
    <div>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/040/707/474/small_2x/ai-generated-beautiful-home-exterior-in-evening-with-glowing-interior-lights-and-landscaping-photo.jpg" />

      <h1 className="text-5xl font-bold">{count}</h1>

      {color}

      <input
        ref={inputRef}
        type="text"
        placeholder="enter your name"
        id="userName"
      ></input>
      {console.log(inputRef)}

      <button className="bg-amber-500 px-4 py-2" onClick={handleFocus}>
        Focus on input
      </button>
      <button className="bg-gray-500 px-4 py-2" onClick={handleSubmit}>
        submit
      </button>
      <button
        className="bg-red-600 p-4 text-2xl text-white"
        onClick={() => setCount(count + 1000)}
      >
        Increase counter
      </button>

      <button className="px-4 py-2 bg-cyan-400" onClick={handleRef}>
        increase ref by 1000
      </button>
      {/* <Header data={sum} /> */}
      {theme}

      <button onClick={handleData}>Increase data by 1000</button>
    </div>
  );
};

export default Home;
