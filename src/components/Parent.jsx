import React from "react";
import Child from "./Child";
import { useState } from "react";

const Parent = () => {
  const [info, setInfo] = useState("");
  const handleData = (data) => {
    setInfo(data);
  };
  return (
    <div>
      Parent {info} child-
      <Child handleData={handleData} />
    </div>
  );
};

export default Parent;
