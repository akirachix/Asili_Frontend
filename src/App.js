// import logo from './logo.svg';
import "./App.css";
import SignUp from "./Signup/signup";
import Login from "./Login/login";
import User from "./Home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Homepage/homepage";
import Footer from "./Footer/Footer";



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
