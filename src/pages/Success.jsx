import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuestionsContext from "../contexts/questions/questionsContext"

const Success = () => {
  const questionsContext = useContext(QuestionsContext)
  const { submitAnswer, result, setLoader, loading } = questionsContext
  const navigate = useNavigate()

  useEffect(() => {
    setLoader()
    submitAnswer()
  }, [])

  const backToHome = () => {
    navigate("/")
  }

  return (
    <main className="main">
      {loading ? (<div>Loading...</div>) : (<div>Test concluded....<br />{result}</div>)}
      <button className="btn btn-primary"onClick={backToHome}>Back to Home</button>
    </main>
  )
}

export default Success
