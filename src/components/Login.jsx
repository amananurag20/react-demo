import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { color, setColor } = useContext(UserContext);

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

      {color}

      <input type="text" onChange={(e) => setColor(e.target.value)}></input>
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
