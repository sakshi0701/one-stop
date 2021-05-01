import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { FaUserCircle } from 'react-icons/fa'
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="center">
        <div className="auth-div">
          <div className="logo">One Stop.</div>
          <div className="subtitle">Here dreams come true!</div>
          <h2 className="title">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit} className="fields">
            <Form.Group id="email" className="email">
              <FaUserCircle className="icons" />
              <input type="email" ref={emailRef} required className="user-input" placeholder="Email" />
            </Form.Group>
            <button disabled={loading} className="btns" type="submit">
              Reset Password
            </button>
          </Form>
          <div className="links">
            <Link to="/login">Login</Link><br />
                Do not have an accout? <Link to="/signup">Sign Up!</Link>
          </div>
        </div>
      </div>
    </>
  )
}