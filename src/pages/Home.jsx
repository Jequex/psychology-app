import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import "../css/homepage.css"

const Home = () => {
  const navigate = useNavigate()

  return (
    <main className="main">
      <h1>Welcome to the Psychology App</h1>
      <div>
        <Button onClick={() => navigate("/test")}>Start</Button>
      </div>
    </main>
  )
}

export default Home
