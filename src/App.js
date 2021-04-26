import React from 'react';
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa'
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';

import './App.css';

function App() {
  return (
    <div className="bg">
      <div className="title">
        <h1>One Stop.</h1>
      </div>
      <div className="App">
        <Main />
        <Services />
        <Reviews />
        <Login />
      </div>
      <div className="footer">
        <FaFacebook className="follow-icon" />
        <FaWhatsapp className="follow-icon" />
        <FaTwitter className="follow-icon" />
        <FaInstagram className="follow-icon" />
      </div>
    </div>
  );
}

export default App;
