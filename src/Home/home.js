import React, { useEffect, useState } from "react";
import "./home.css";
import ai from "../images/ai.jpg";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from "react-bootstrap";
import Grid from '@mui/material/Grid';
import axios from 'axios';



const User = () => {
    const [users, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const { click, setClick } = useState(false);
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const handleSearch = (event) => {
        
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
            return data.image.search(value) != -1;
        });
        setFilteredData(result);
        
    }
   
    useEffect(() => {
        axios('http://127.0.0.1:8000/api/cloth/')
            .then(response => {
                console.log(response.data)
                setAllData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, [])
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
                        <img src={ai} />
                    </div>
                    <div className="people-category">
                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">Kids</a>
                    </div>
                </div>
                <div className="nav-search">
                    <div className="search-bar" style={{ margin: '0 auto', marginTop: '10%' }}>
                        <input type="text" onChange={(event) => handleSearch(event)} /></div>
                    <button className="btnRegiste" onClick={navigateSignup}><a>Register</a></button>
                </div>

            </nav>
       

            <div style={{ padding: 10 }}>
                {filteredData.map((value, index) => {
                    return (
                        <Grid container className="new">
                            {filteredData.map((value) => (
                                <Grid className="" item xs={4} key={value?.id} >
                                    <img style={{ width: "300px", height: "300px" }} src={value.image} />
                                </Grid>
                            ))}
                            {filteredData.map((value, index) => {
                            })}
                        </Grid>
                    )
                })}
            </div>
        </div>
    );
};
export default User;