import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from './authentication/PrivateRoute';
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa'
import Login from './authentication/Login';
import Dashboard from './components/Dashboard';
import UpdateProfile from './authentication/UpdateProfile';
import Signup from './authentication/Signup';
import ForgotPassword from './authentication/ForgotPassword';

import './App.css';

function App() {
  return (
    <div className="bg">
      <div className="title">
        <h1>One Stop.</h1>
      </div>
      <div className="App">

        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>

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

        {/* <Main />
        <Services />
        <Reviews />
        <Login />
      </div>
      <div className="footer">
        <FaFacebook className="follow-icon" />
        <FaWhatsapp className="follow-icon" />
        <FaTwitter className="follow-icon" />
        <FaInstagram className="follow-icon" />
      </div> */}