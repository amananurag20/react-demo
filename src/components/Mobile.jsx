import React, { useEffect, useState } from "react";

const Mobile = () => {
  const [count, setCount] = useState(1000);

  const handleClick = () => {
    setCount(count + 1000);
  };

  useEffect(() => {
    let id = setInterval(() => {
      console.log("setInterval");
    }, 1000);

    return function () {
      console.log("return useEffect");
      clearInterval(id);
    };
  }, []);

  return (
    <div className="text-center">
      <img
        className="w-[400px]"
        src="https://5.imimg.com/data5/SELLER/Default/2023/3/296178163/GX/GL/SD/186724856/vivo-mobile-phone.jpg"
      />

      <h1 className="text-7xl font-semibold">{count}</h1>

      <button
        className="px-4 py-2 bg-amber-400 rounded-3xl font-bold"
        onClick={handleClick}
      >
        Increase button
      </button>
    </div>
  );
};

export default Mobile;
