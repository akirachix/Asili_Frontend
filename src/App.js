// import logo from './logo.svg';
import "./App.css";
import SignUp from "./Signup/signup";
import Login from "./Login/login";
import User from "./Home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Homepage/homepage";
<<<<<<< HEAD
import { useMediaQuery } from 'react-responsive'
import Test from "./test";
import { Dropdown } from "react-bootstrap";
=======
import Footer from "./Footer/Footer";

>>>>>>> 43b41721de52728a390eb040d5554d3cf448b59b


function App() {
  return (
    <div className="App">
      
      <Router>
      

        <Routes>
          <Route exact path="/" element={<Navbar/>} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/explore" element={<User />} />




        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
