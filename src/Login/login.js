import React, { useState } from "react";
import './login.css'
// import Prop from './Props';
// import Render from "./Render";
const Login= () => {
    const [email, setEmail] = useState("");
    console.log(email);
    const [password, setPassword] = useState("");
    console.log(password);
    const handleSubmit = () => {
        const data = {
            email: email,
            password: password,
        };
        console.log(JSON.stringify(data));
    }
    return (
        <div className="body">
            <h1>Welcome Back</h1>
            <h2>Login to Continue</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <div className="email">
                        <input className="container"
                            type="text"
                            placeholder="Enter email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }
                            }
                        ></input></div>
                    <div className="password">
                        <h5> </h5>
                        <input className="container"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }
                            }
                        ></input><br></br></div>
                    <div className="check">
                        <input type="checkbox"></input>
                        <p>Keep me logged in</p> <span>Forgot password?</span></div>
                </label>
                  <button className="button">Login</button>
            </form>
            <p className="account">Don't have an account?
            <a href="/User"> <span> Home </span> </a> </p>
            </div>
    )
};
export default Login;