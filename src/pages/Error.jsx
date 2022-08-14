import React from "react"
import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()

  return (
    <div className="main">
      Error
      <button type="button" className="btn btn-primary" onClick={() => navigate("/")}>Back to Home</button>
    </div>
  )
}

export default Error
