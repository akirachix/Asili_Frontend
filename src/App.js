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
          <Route exact path='/User' element={<User />} />
          <Route exact path='/button' element={<User />} />
          <Route exact path='/home' element={<homepage/>} />




        </Routes>
      </Router>

    </div>
  );
}

export default App;
