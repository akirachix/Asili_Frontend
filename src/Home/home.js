import React, { useEffect, useState } from "react";
import "./home.css";
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
