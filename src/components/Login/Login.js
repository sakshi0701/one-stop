import React from 'react'
import { FaUserCircle, FaLock } from 'react-icons/fa'
import './login.css'

const Login = () => {
    return (
        <div className="login-div">
            <div className="logo">One Stop.</div>
            <div className="subtitle">Here dreams come true!</div>
            <div className="fields">
                <div className="email">
                    <FaUserCircle className="icons"/>
                    <input type="email" className="user-input" placeholder="Email"/>
                </div>
                <div className="password">
                    <FaLock className="icons"/>
                    <input type="password" className="pass-input" placeholder="Password"/>
                </div>
            </div>
            <button className="signin-btn">Login</button>
            <div className="links">
                <a href="/forgot-password">Forgot Password?</a><br/>
                Do not have an accout? <a href="/signup">Sign Up!</a>
            </div>
        </div>
    )
}

export default Login
