import React, { useEffect, useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from "react-bootstrap";
import Grid from '@mui/material/Grid';

const User = () => {
    const [users, setUser] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        userData();
    }, [])
    const userData = () => {
        fetch("http://127.0.0.1:8000/api/cloth/")
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setLoading(true)
                console.log("fetched ---->", data)
            })
            .catch(e => console.log(e));
    }

    const navigate = useNavigate();

    const navigateSignup = () => {
        navigate("/SignUp");
    }

    if (!loading) {
        return <div> loading...</div>
    }
    return (
        <div>
            <nav>
                <div className="nav-list">
                    <div className="asili-logo">
                        {/* <img src={ai} /> */}
                    </div>
                    <div className="people-category">
                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">Kids</a>
                    </div>
                </div>
                <div className="nav-search">
                    <input type="text" placeholder="Search" />
                    <button className="btnRegister" onClick={navigateSignup}>
                        <a>Register</a>
                    </button>
                </div>

            </nav>
           <Grid container>

            {users.map((user)=>(
                <Grid className="" item xs={4} key={user?.id} >
                    <img style = {{width:"300px", height: "300px"}} src={user.image}  />
                </Grid>
            ))}
           </Grid>
                       
        </div>
    );
};
export default User;