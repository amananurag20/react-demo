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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("form submitted");
    let name = e.target[0].value;
    let password = e.target[1].value;
    let email = e.target[1].value;

    console.log(name, password, email);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
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
            <p>Enter your Email</p>
            <input
              type="text"
              placeholder="enter your Email"
              onChange={handleChange}
              value={input.email}
              name="email"
            ></input>
            <p>Enter your mobile no.</p>
            <input
              type="text"
              placeholder="enter your mobile no."
              onChange={handleChange}
              value={input.mobile}
              name="mobile"
            ></input>
            <p>Enter your address</p>
            <input
              type="text"
              placeholder="your address"
              onChange={handleChange}
              value={input.address}
              name="address"
            ></input>
          </div>
          <br></br>
          <button
            type="submit"
            onClick={() => {
              console.log("button submit");
            }}
          >
            submit the form
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
