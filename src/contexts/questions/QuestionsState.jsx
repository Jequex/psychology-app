import React, { useReducer } from "react"
import PropTypes from "prop-types"
import { GET_QUESTIONS, SUBMIT_ANSWER, NEXT_CLICKED, LOADING } from "../../utils/constants/actionTypes"
import QuestionsContext from "./questionsContext"
import questionsReducer from "./questionsReducer"
import axios from "axios"
import urls from "../../utils/constants/urls"

const QuestionsState = ({ children }) => {
  const initialState = {
    questions: [],
    answers: [],
    loading: false,
    result: "",
    currentQuestion: 0
  }
  const [state, dispatch] = useReducer(questionsReducer, initialState)

  const setLoader = () => {
    dispatch({ type: LOADING })
  }

  const nextClicked = (answer) => {
    dispatch({ type: NEXT_CLICKED, payload: answer })
  }

  const getQuestions = async () => {
    // make network call to get questions
    const data = await axios.get(urls.GET_QUESTIONS_URL)
    dispatch({ type: GET_QUESTIONS, payload: data.data })
  }
  const submitAnswer = async () => {
    // make network call to submit answers
    const data = await axios.post(urls.SUBMIT_ANSWERS_URL, { answers: state.answers })
    dispatch({ type: SUBMIT_ANSWER, payload: data.data })
  }

  return (
    <QuestionsContext.Provider value={{
      questions: state.questions,
      loading: state.loading,
      currentQuestion: state.currentQuestion,
      result: state.result,
      getQuestions,
      submitAnswer,
      nextClicked,
      setLoader
    }}>
      { children }
    </QuestionsContext.Provider>
  )
}

QuestionsState.propTypes = {
  children: PropTypes.node.isRequired
}

export default QuestionsState
