import React, { useState } from "react";

const Child = ({ handleData }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    handleData(name);
  };
  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>data transfer</button>
    </div>
  );
};

export default Child;
