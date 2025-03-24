import React, { useState, memo } from "react";

const Header = () => {
  console.log("header");
  return <div>Header{1000}</div>;
};

export default memo(Header);
