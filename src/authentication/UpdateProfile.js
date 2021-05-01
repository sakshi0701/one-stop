import React, { useRef, useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { FaUserCircle, FaLock } from 'react-icons/fa'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
    <div className="center">
      <div className="auth-div">
        <div className="logo">One Stop.</div>
        <div className="subtitle">Here dreams come true!</div>
        <div className="title">Update Profile</div>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} className="fields">
          <div className="form-labels">Email:</div>
          <Form.Group id="email" className="email">
            <FaUserCircle className="icons" />
            <input
              type="email"
              ref={emailRef}
              required
              defaultValue={currentUser.email}
              className="user-input"
              placeholder="Email"
            />
          </Form.Group>
          <div className="form-labels">Password:</div>
          <Form.Group id="password" className="password">
            <FaLock className="icons" />
            <input
              type="password"
              ref={passwordRef}
              className="pass-input"
              placeholder="Leave blank to keep the same"
            />
          </Form.Group>
          <div className="form-labels">Confirm Password:</div>
          <Form.Group id="password-confirm" className="password">
            <FaLock className="icons" />
            <input
              type="password"
              ref={passwordConfirmRef}
              className="pass-input"
              placeholder="Leave blank to keep the same"
            />
          </Form.Group>
          <button disabled={loading} className="btns" type="submit">
            Update
            </button>
        </Form>
        <div className="links">
          <Link to="/">Cancel</Link>
        </div>
      </div>
      </div>
    </>
  )
}