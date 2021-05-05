import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { FaUserCircle, FaLock } from 'react-icons/fa'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Main from "../components/Front/Main/Main"
import Services from "../components/Front/Services/Services"
import Reviews from "../components/Front/Reviews/Reviews"
import './authstyles.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="front-center">
        <Main />
        <Services />
        <Reviews />
        <div className="center m-4 p-1">
        <div className="auth-div m-0 p-2">
          <div className="logo">One Stop.</div>
          <div className="subtitle">Here dreams come true!</div>
          <div className="title">Login</div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="fields">
            <Form.Group id="email" className="email">
              <FaUserCircle className="icons" />
              <input type="email" ref={emailRef} required className="user-input" placeholder="Email" />
            </Form.Group>
            <Form.Group id="password" className="password">
              <FaLock className="icons" />
              <input type="password" className="pass-input" placeholder="Password" ref={passwordRef} required />
            </Form.Group>
            <button disabled={loading} className="btns" type="submit">
              Log In
            </button>
          </Form>
          <div className="links">
            <Link to="/forgot-password">Forgot Password?</Link><br />
                Do not have an accout? <Link to="/signup">Sign Up!</Link>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}