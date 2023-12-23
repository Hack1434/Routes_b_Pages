
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import Login from './Login';
import MyProfile from './MyProfile';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        {<nav className="Navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/myprofile">MyProfile</Link>
          </li>
        </ul>
      </nav>}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
