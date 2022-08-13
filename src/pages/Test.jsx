import React, { useEffect, useContext } from "react"
import Loader from "../components/Loader"
import FormComponent from "../components/FormComponent"

import QuestionsContext from "../contexts/questions/questionsContext"

const Test = () => {
  const questionsContext = useContext(QuestionsContext)
  const { getQuestions, setLoader, loading, questions, currentQuestion } = questionsContext

  useEffect(() => {
    setLoader()
    getQuestions()
  }, [])

  return (
    <div>
      {loading
        ? (
          <div>
            <Loader />
          </div>
        )
        : (
          <>
            <FormComponent oneQuestion={questions[currentQuestion]} />
          </>
        )}
    </div>
  )
}

export default Test
