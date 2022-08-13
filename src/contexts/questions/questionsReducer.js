import { GET_QUESTIONS, SUBMIT_ANSWER, NEXT_CLICKED, LOADING } from "../../utils/constants/actionTypes"

const questionsReducer = (state, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return { ...state, currentQuestion: 0, questions: action.payload, loading: false, answers: [], result: "" }
  case SUBMIT_ANSWER:
    return { ...state, currentQuestion: 0, loading: false, answers: [], result: action.payload }
  case LOADING:
    return { ...state, loading: true }
  case NEXT_CLICKED:
    return { ...state, currentQuestion: state.currentQuestion++, answers: [...state.answers, action.payload] }
  default:
    return state
  }
}

export default questionsReducer
