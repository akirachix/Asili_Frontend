import React from "react";
import ai from "../images/ai.jpg";
import dress from "../images/dress.png";
import jacket from "../images/jacket.png";
import tshirt from "../images/tshirt.png";
import trouser from "../images/trouser.png";
import fashion from "../images/fashion.png";
import "./homepage.css";

const Navbar = () => {
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
          <button className="btnRegister">
            <a href="#">Register</a>
          </button>
        </div>
      </nav>
      <div className="landing-page">
        <div className="intro">
          <h1>Asili Active wear</h1>
          <p>
            Asili Active Wear the leading cloth brand which brings you high
            quality products at affordable prices.<br></br>Visit our website
            today and get the best deals!
          </p>
          <button className="btnRegister">
            <a href="#">Explore</a>
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
        <p>
          Choose your perfect cloth, checkout how you amazing you look
          in them, sharew with a designer and get the job done.
          You are happy we are happy :)
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
            <a href="#">Dress</a>
          </p>
        </div>
        <div className="clothes">
          <img src={jacket} />
          <p className="cloth-name">
            {" "}
            <a href="#">Jacket</a>
          </p>
        </div>
        <div className="clothes">
          <img src={trouser} />
          <p className="cloth-name">
            {" "}
            <a href="#">Trousers</a>
          </p>
        </div>
        <div className="clothes">
          <img src={tshirt} />
          <p className="cloth-name">
            {" "}
            <a href="#">T-shirts</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
