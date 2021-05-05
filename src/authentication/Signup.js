import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"

import { FaUserCircle, FaLock } from 'react-icons/fa'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="center">
        <div className="auth-div m-4 p-2">
          <div className="logo">One Stop.</div>
          <div className="subtitle">Here dreams come true!</div>
          <div className="title">Sign Up</div>
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
            <Form.Group id="password-confirm" className="password">
              <FaLock className="icons" />
              <input type="password" className="pass-input" placeholder="Confirm Password" ref={passwordConfirmRef} required />
            </Form.Group>

            <button disabled={loading} className="btns" type="submit">
              Sign Up
            </button>
          </Form>
          <div className="links">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </>
  )
}
