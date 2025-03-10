import { useState } from "react";
import "./App.css";

const App = () => {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [input, setInput] = useState({
    name: "",
    password: "",
    email: "",
    mobile: "",
    address: "",
    DOB: "",
  });

  const [passwordType, setPasswordType] = useState("password");

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  console.log("code challa");
  console.log("input", input);

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
            value={input.name}
            name="name"
          ></input>
          <h1>{name}</h1>
        </div>

        <div>
          <p>Password</p>
          <input
            type={passwordType}
            placeholder="enter your password"
            onChange={handleChange}
            value={input.password}
            name="password"
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
