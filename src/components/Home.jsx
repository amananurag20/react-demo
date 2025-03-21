import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [position, setPosition] = useState({});
  useEffect(() => {
    let handleMove = (e) => {
      console.log(e);
      let xPosition = e.clientX;
      let yPosition = e.clientY;
      setPosition({ x: xPosition, y: yPosition });
      console.log("Mouse moved");
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      console.log("useEffect return");
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/040/707/474/small_2x/ai-generated-beautiful-home-exterior-in-evening-with-glowing-interior-lights-and-landscaping-photo.jpg" />

      <h1 className="text-5xl font-bold">
        {position.x}/{position.y}
      </h1>
    </div>
  );
};

export default Home;
