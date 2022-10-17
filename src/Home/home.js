import React, { useEffect, useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const User = () => {
    const [users, setUser] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        userData();
    }, [])
    const userData = () => {
        fetch('http://127.0.0.1:8000/cloth/')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setLoading(true)
                console.log("fetched ---->", data)
            })
            .catch(e => console.log(e))
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
            {users.map((user) => (
                <div className="fetched">
                    <Card style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Text>
                                <img style = {{width:"200px", height: "200px"}} src={user.image} alt="img" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>


            ))}
        </div>
    );
};
export default User;