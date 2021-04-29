import React, { useState } from "react"
import { Container, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center mt-5">
        <Card style={{ width: "80%" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/update-profile" className="btns">
              Update Profile
            </Link>
            <button type="button" variant="link" onClick={handleLogout} className="btns mt-2">
              Log Out
            </button>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}