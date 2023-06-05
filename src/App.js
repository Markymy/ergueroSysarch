import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './Component/navbar';
import Home from './Pages/HomePage';
import Login from './Pages/LoginPage';
import Register from './Pages/RegisterPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <div>
          <Link to="/register">Go to Register</Link>
          <br />
          <Link to="/login">Go to Login</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
