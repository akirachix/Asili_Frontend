import logo from './logo.svg';
import './App.css';
import SignUp from './Signup/signup';
import Login from './Login/login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from './Homepage/homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<SignUp />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/SignUp' element={<SignUp />} />
          <Route exact path='/Home' element={<User />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
