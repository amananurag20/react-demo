import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (email === "abc@gmail.com" && password === "12345") {
      navigate("/mobile");
      return;
    }

    alert("password or email in correct");
  };
  return (
    <div>
      <img src="https://codeconvey.com/wp-content/uploads/2019/05/Login-Page-with-Anime-Background.jpg"></img>

      <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <button className="p-4 bg-yellow-300" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
