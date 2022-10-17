import './signup.css'
import axios from "axios";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const navigate = useNavigate();

    const submitting=( event )=>{
        event.preventDefault()
        const user = {first_name,last_name,password,email}
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify(
    user
),
  redirect: 'follow'
};
fetch("http://127.0.0.1:8000/user/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }
const refreshPage = ()=>{
     window.location.reload();
  }
  const navigateHome = () => {
    navigate("/Login");
  };
    return (
        <div className="body">
            <h2>Sign Up to Continue</h2>
            <form onSubmit={submitting}>
                <label>
                     <div className="names">
                     <div className="firstName">
                        <input className="FirstNameInput"
                            type="text"
                            placeholder="First Name"
                            value={first_name}
                            onChange = {(e)=> {
                                setFirstName (e.target.value)
                            } }
                        ></input></div>
                     <div className="lastName">
                        <input className="LastNameInput"
                            type="text"
                            placeholder="Last Name"
                            value={last_name}
                            required
                            onChange = {(e)=> {
                                setLastName (e.target.value)
                            } }
                        ></input></div>
                     </div>
                         <div className="email">
                        <input className="container"
                            type="text"
                            placeholder="Enter email"
                            value={email}
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
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }
                            }
                        ></input><br></br></div>
                        <div className="confirm_password">
                        <h5> </h5>
                        <input className="container"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }
                            }
                        ></input><br></br></div>
                </label>
                <button className="button" type='submit' onClick={navigateHome} >SignUp</button>
            </form>
            <p className="account">Don't have an account?
            <a href="/Login"><span> Login </span> </a> </p>
            </div>
    )
};
export default SignUp;