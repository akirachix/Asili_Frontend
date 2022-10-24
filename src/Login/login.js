import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  console.log(email);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  console.log(password);
  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    console.log(JSON.stringify(data));
    console.log('hey');
    navigate("/home");
  };

  return (
    <div className="body">
      <h1>Welcome Back</h1>
      <h2>Login to Continue</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <div className="email">
            <input
              className="container"
              type="text"
              placeholder="Enter email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="password">
            <h5> </h5>
            <input
              className="container"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <br></br>
          </div>
          <div className="check">
            <input type="checkbox"></input>
            <p>Keep me logged in</p> <span>Forgot password?</span>
          </div>
        </label>
        <button className="button" type='submit'>
          Login
        </button>
      </form>
      <p className="account">Don't have an account? 
      <a href="/SignUp"> <span> SignUp </span> </a> 
      </p>


    </div>
  );
};
export default Login;
