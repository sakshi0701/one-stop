import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from './authentication/PrivateRoute';
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa'
import Login from './authentication/Login';
import Dashboard from './components/Dashboard';
import UpdateProfile from './authentication/UpdateProfile';
import Signup from './authentication/Signup';
import ForgotPassword from './authentication/ForgotPassword';
import Profile from './components/Profile/Profile';
import Reminder from './components/Reminder/Reminder';
import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Chat from './components/Chat/client/components/Chat';
import Default from './components/Default/Default';
import './App.css';

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Router>
        <div className="bg" >
          <div className="title">
            <h1><Link to="/">One Stop.</Link></h1>
          </div>
          <div className="App">

            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/your-events" exact component={Reminder} />
                <PrivateRoute path="/cart" component={Cart} />
                <PrivateRoute path="/details" component={Details} />
                <PrivateRoute path="/chat" exact component={Chat} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route component={Default} />
              </Switch>
            </AuthProvider>

          </div>
          <div className="footer" >
            <FaFacebook className="follow-icon" />
            <FaWhatsapp className="follow-icon" />
            <FaTwitter className="follow-icon" />
            <FaInstagram className="follow-icon" />
          </div>
        </div >
      </Router>
    </>
  );
}

export default App;