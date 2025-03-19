import React from "react";
import { Link, useParams } from "react-router-dom";

const Mobile = () => {
  const data = useParams();
  console.log(data);

  return (
    <div>
      <img src="https://5.imimg.com/data5/SELLER/Default/2023/3/296178163/GX/GL/SD/186724856/vivo-mobile-phone.jpg" />
    </div>
  );
};

export default Mobile;
