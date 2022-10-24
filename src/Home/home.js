import React, { useEffect, useState } from "react";
import "./home.css";
<<<<<<< HEAD
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
=======
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ai from "../images/ai.jpg";
import axios from "axios";
import Select from "react-select";
// import { dblClick } from "@testing-library/user-event/dist/click";
import dbdata from "../db.json";

const User = () => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);

  const Cloths = [
    { value: "trouser", label: "Trouser", name: "type" },
    { value: "dress", label: "Dress", name: "type" },
    { value: "jackets", label: "Jackets", name: "type" },
  ];
  const Design = [
    { value: "african-print", label: "African wear", name: "categories" },
    { value: "personalised", label: "Personalised", name: "categories" },
    { value: "custom", label: "Custom", name: "categories" },
  ];
>>>>>>> 43b41721de52728a390eb040d5554d3cf448b59b

  const options = [
    { value: "African wear", label: "African wear", name: "designers" },
    { value: "Personalised", label: "Personalised", name: "designers" },
    { value: "Custom", label: "Custom", name: "designers" },
  ];

  const option = [
    { value: "African wear", label: "African wear" },
    { value: "Personalised", label: "Personalised" },
    { value: "Custom", label: "Custom" },
  ];

<<<<<<< HEAD
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
=======
  useEffect(() => {
    userData();
  }, []);

  const onFilter = (e) => {
    const filtereddata = dbdata?.cloths.filter(
      (cloth) => cloth?.["people-category"] === e?.target?.getAttribute("value")
    );
    setData(filtereddata);
  };

  const handleFilter = (e) => {
    const { value, name } = e;
    const filtereddata = dbdata?.cloths.filter((cloth) => cloth.type === value);
    setData(filtereddata);
  };

  const userData = () => {
    fetch("http://localhost:3000/cloths")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(true);
        console.log("fetched ---->", data);
      })
      .catch((e) => console.log(e));
  };

  const navigate = useNavigate();

  const navigateSignup = () => {
    navigate("/SignUp");
  };

  if (!loading) {
    return <div> loading...</div>;
  }

  const handleChange = (e) => {
    const value = e.target.value;
    axios
      .get("http://127.0.0.1:8000/cloth?category=${value}", {
        query: { category: value },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <nav>
        <div className="nav-list">
          <div className="asili-logo">
            <img src={ai} />
          </div>
          <div className="people-category">
            <a name="people-category" value="men" onClick={onFilter}>
              Men
            </a>
            <a name="people-category" value="women" onClick={onFilter}>
              Women
            </a>
            <a name="people-category" value="kids" onClick={onFilter}>
              Kids
            </a>
          </div>
>>>>>>> 43b41721de52728a390eb040d5554d3cf448b59b
        </div>
        <div className="nav-search">
          <input onChange={handleChange} type="text" placeholder="Search" />
          <button className="btnRegiste" onClick={navigateSignup}>
            <a>SignUp</a>
          </button>
        </div>
      </nav>
      <div className="main-category">
        <Select options={Cloths} name="type" onChange={handleFilter} />
        <Select options={Design} name="categories" onChange={handleFilter} />
        <Select options={options} name="designers" onChange={handleFilter} />
        <Select option={options} />
      </div>

      <Grid container>
        {data.map((data) => (
          <Grid className="" item xs={3} key={data.id}>
            <img style={{ width: "300px", height: "400px" }} src={data.image} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default User;
