import React from "react";
import ai from "../images/ai.jpg";
import dress from "../images/dress.png";
import jacket from "../images/jacket.png";
import tshirt from "../images/tshirt.png";
import trouser from "../images/trouser.png";
import fashion from "../images/fashion.png";
import { Link, useNavigate } from "react-router-dom";


import "./homepage.css";

const Navbar = () => {

  const navigate = useNavigate();
  
  const navigateUser = () => {
    navigate("/explore");
  };
  const navigateSignup = () =>{
    navigate("/SignUp");
  }
  return (
    <div className="nav">
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
          <input type="text" placeholder="Search" />
          <button className="btnRegiste" onClick={navigateSignup}>
            <a>Register</a>
          </button>
        </div>
      </nav>
      <div className="landing-page">
        <div className="intro">
          <h1>Asili wear</h1>
          <p>
            Asili Wear the leading cloth brand which brings you high
            quality products at affordable prices.<br></br>Visit our website
            today and get the best design for you!
          </p>
          <button className="btnRegister" onClick={navigateUser}>
            <a>Explore</a>
          </button>
        </div>
        <div className="image">
          <img src={fashion} />
        </div>
      </div>

      <div className="top-categories">
        <h1>Top Categories</h1>
        <p className="parag-one">
          Asili Active Wear the leading cloth brand which brings you high
          quality products at affordable prices
        </p>
        < p className="parag-two">
          Choose your perfect cloth, checkout how you amazing you look
          in them, sharew with a designer and get the job done.
          You are happy we are happy.
          {" "}
        </p>
      </div>
      <div className="cloth-categories">
        <img></img>
      </div>
      <div className="cloth-categories">
        <div className="clothes">
          <img src={dress} />
          <p className="cloth-name">
            {" "}
            Dress
          </p>
        </div>
        <div className="clothes">
          <img src={jacket} />
          <p className="cloth-name">
            {" "}
            Jacket
          </p>
        </div>
        <div className="clothes">
          <img src={trouser} />
          <p className="cloth-name">
            {" "}
            Trousers
          </p>
        </div>
        <div className="clothes">
          <img src={tshirt} />
          <p className="cloth-name">
            {" "}
            T-shirts
          </p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
