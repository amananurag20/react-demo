import { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  function handleChange(e) {
    setName(e.target.value);
    console.log(name);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  console.log("code challa");

  function handlePasswordView() {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  return (
    <>
      <div className="container">
        <div>
          <p>Enter your name</p>
          <input
            type="text"
            placeholder="enter your name"
            onChange={handleChange}
            value={name}
          ></input>
          <h1>{name}</h1>
          <button onClick={() => setName("you are fool")}>Click here</button>
        </div>

        <div>
          <p>Password</p>
          <input
            type={passwordType}
            placeholder="enter your password"
            onChange={handlePassword}
          ></input>
          <button onClick={handlePasswordView}>
            {passwordType === "password" ? "view password" : "hide password"}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
